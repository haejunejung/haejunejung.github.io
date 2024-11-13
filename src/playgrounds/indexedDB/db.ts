type PickOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type Config = {
  store_name: string;
  pk: string;
  indexes: PickOptional<
    Pick<IDBIndex, "name" | "keyPath" | "unique">,
    "unique"
  >[];
};

class DatabaseService {
  private static instance: DatabaseService | undefined;
  private db: IDBDatabase | undefined;
  private constructor() {}

  // Singleton
  public static getInstance() {
    if (!this.instance) {
      this.instance = new DatabaseService();
    }

    return this.instance;
  }

  // 데이터베이스를 연다.
  public async openDB(db_name: string, version: number, configs: Config[]) {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(db_name, version);

      // 데이터베이스를 여는게 실패한 경우, reject
      request.onerror = (e) => {
        const target = e.target as IDBOpenDBRequest;
        reject(target.error);
      };

      // 데이터베이스를 여는게 성공한 경우, db에 결과값 저장
      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      // 데이터베이스를 업데이트해야 하는 경우
      // 1. 처음으로 데이터베이스를 여는 경우
      // 2. 버전이 달라진 경우
      request.onupgradeneeded = (e) => {
        const target = e.target as IDBOpenDBRequest;
        this.db = target.result;

        // db에 객체 저장소들(configs)을 넣는다.
        configs.forEach(({ store_name, pk, indexes }) => {
          if (!this.db!.objectStoreNames.contains(store_name)) {
            const objStore = this.db!.createObjectStore(store_name, {
              keyPath: pk,
              autoIncrement: true,
            });

            indexes.forEach((index) => {
              objStore.createIndex(index.name, index.keyPath, {
                unique: index.unique ?? false,
              });
            });
          }
        });
      };
    });
  }

  // 객체 저장소를 불러오는 method
  private getObjectStore(store_name: string, mode: IDBTransactionMode) {
    if (!this.db) {
      throw new Error("indexedDB not initalized");
    }
    const transaction = this.db.transaction(store_name, mode);
    const objStore = transaction.objectStore(store_name);
    return objStore;
  }

  // CRUD의 결과값을 내보내는 method
  private handleRequest<T>(request: IDBRequest<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  public async get<T>(store_name: string, key: string | number) {
    const objStore = this.getObjectStore(store_name, "readonly");
    const request = objStore.get(key);
    return this.handleRequest<T>(request);
  }

  public async add<T>(store_name: string, item: T) {
    const objStore = this.getObjectStore(store_name, "readwrite");
    const request = objStore.add(item);
    return this.handleRequest<IDBValidKey>(request);
  }

  public async del(store_name: string, key: string | number) {
    const objStore = this.getObjectStore(store_name, "readwrite");
    const request = objStore.delete(key);
    return this.handleRequest(request);
  }

  public async put<T>(store_name: string, item: T) {
    const objStore = this.getObjectStore(store_name, "readwrite");
    const request = objStore.put(item);
    return this.handleRequest<IDBValidKey>(request);
  }
}

const dbService = Object.freeze(DatabaseService.getInstance());
export default dbService;
