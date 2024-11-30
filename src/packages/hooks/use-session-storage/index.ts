import { isFunction } from "es-toolkit";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useSyncExternalStore,
} from "react";

const SESSION_STORAGE_EVENT_ID = "session-storage-event-id";

const sessionStorageStore = {
  subscribe: (callback: () => void) => {
    window.addEventListener(SESSION_STORAGE_EVENT_ID, callback);
    return () => {
      window.removeEventListener(SESSION_STORAGE_EVENT_ID, callback);
    };
  },

  getSnapshot: (key: string): string | null => {
    return window.sessionStorage.getItem(key);
  },

  // ?? JSON.stringify(null)은 "null"을 반환하므로 null을 명시적으로 처리가 필요하지 않나?
  getServerSnapshot: <T>(initialValue: T | null): string | null => {
    return initialValue === null ? null : JSON.stringify(initialValue);
  },
} as const;

interface UseSessionStorageWithInitialValueProps<T> {
  key: string;
  initialValue: T | (() => T);
}

interface UseSessionStorageWithoutInitialValueProps {
  key: string;
}

type UseSessionStorageProps<T> =
  | UseSessionStorageWithInitialValueProps<T>
  | UseSessionStorageWithoutInitialValueProps;

type UseSessionStorageWithNullReturn<T> = [
  T | null,
  Dispatch<SetStateAction<T | null>>,
  () => void
];

type UseSessionStorageWithoutNullReturn<T> = [
  T,
  Dispatch<SetStateAction<T>>,
  () => void
];

type UseSessionStorageReturn<T> =
  | UseSessionStorageWithNullReturn<T>
  | UseSessionStorageWithoutNullReturn<T>;

/**
 * @description Session Storage 상태를 Sync할 수 있는 Hook
 * TODO: React-Testing-Library로 Hook 테스트
 */
export function useSessionStorage<T>(
  props: UseSessionStorageWithInitialValueProps<T>
): UseSessionStorageWithoutNullReturn<T>;

export function useSessionStorage<T>(
  props: UseSessionStorageWithoutInitialValueProps
): UseSessionStorageWithNullReturn<T>;

export function useSessionStorage<T>(
  props: UseSessionStorageProps<T>
): UseSessionStorageReturn<T> {
  const { key } = props;

  const initialValue = "initialValue" in props ? props.initialValue : null;

  const initialValueToUse = isFunction(initialValue)
    ? initialValue()
    : initialValue;

  // NOTE: useSyncExternalStore는 외부 store를 구독할 수 있는 React Hook
  // https://ko.react.dev/reference/react/useSyncExternalStore
  const externalStoreState = useSyncExternalStore(
    sessionStorageStore.subscribe,
    () => sessionStorageStore.getSnapshot(key),
    () => sessionStorageStore.getServerSnapshot(initialValueToUse)
  );

  const state = useMemo<T | null>(() => {
    try {
      const valueToUse: T | null = externalStoreState
        ? JSON.parse(externalStoreState)
        : initialValueToUse;

      return valueToUse;
    } catch (err) {
      throw new Error(`Failed to fetch item in session storage, ${err}`);
    }
  }, [externalStoreState, initialValueToUse]);

  const setState = useCallback(
    (value: SetStateAction<T | null>) => {
      try {
        const prevState: T | null = externalStoreState
          ? JSON.parse(externalStoreState)
          : initialValueToUse;

        const valueToUse = isFunction(value) ? value(prevState) : value;
        const valueToStore = JSON.stringify(valueToUse);

        window.sessionStorage.setItem(key, valueToStore);
        window.dispatchEvent(new StorageEvent(SESSION_STORAGE_EVENT_ID));
      } catch (err) {
        throw new Error(`Failed to set item in session storage, ${err}`);
      }
    },
    [externalStoreState, initialValueToUse, key]
  );

  const removeState = useCallback(() => {
    try {
      window.sessionStorage.removeItem(key);
      window.dispatchEvent(new StorageEvent(SESSION_STORAGE_EVENT_ID));
    } catch (err) {
      throw new Error(`Failed to remove item in session storage, ${err}`);
    }
  }, [key]);

  return [state, setState, removeState];
}
