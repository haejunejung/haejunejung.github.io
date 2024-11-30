import { isFunction } from "es-toolkit";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useSyncExternalStore,
} from "react";

const LOCAL_STORAGE_EVENT_ID = "local-storage-event-id";

const localStorageStore = {
  subscribe: (callback: () => void) => {
    window.addEventListener(LOCAL_STORAGE_EVENT_ID, callback);
    return () => {
      window.removeEventListener(LOCAL_STORAGE_EVENT_ID, callback);
    };
  },

  getSnapshot: (key: string): string | null => {
    return window.localStorage.getItem(key);
  },

  getServerSnapshot: <T>(initialValue: T | null): string | null => {
    return initialValue === null ? null : JSON.stringify(initialValue);
  },
};

interface UseLocalStorageWithInitialValueProps<T> {
  key: string;
  initialValue: T | (() => T);
}

interface UseLocalStorageWithoutInitialValueProps {
  key: string;
}

type UseLocalStorageProps<T> =
  | UseLocalStorageWithInitialValueProps<T>
  | UseLocalStorageWithoutInitialValueProps;

type UseLocalStorageWithoutNullReturn<T> = [
  T,
  Dispatch<SetStateAction<T>>,
  () => void
];

type UseLocalStorageWithNullReturn<T> = [
  T | null,
  Dispatch<SetStateAction<T | null>>,
  () => void
];

type UseLocalStorageReturn<T> =
  | UseLocalStorageWithNullReturn<T>
  | UseLocalStorageWithoutNullReturn<T>;

export function useLocalStorage<T>(
  props: UseLocalStorageWithInitialValueProps<T>
): UseLocalStorageWithoutNullReturn<T>;

export function useLocalStorage<T>(
  props: UseLocalStorageWithoutInitialValueProps
): UseLocalStorageWithNullReturn<T>;

export function useLocalStorage<T>(
  props: UseLocalStorageProps<T>
): UseLocalStorageReturn<T> {
  const { key } = props;

  const initialValue = "initialValue" in props ? props.initialValue : undefined;

  const initialValueToUse = isFunction(initialValue)
    ? initialValue()
    : initialValue;

  const externalStoreState = useSyncExternalStore(
    localStorageStore.subscribe,
    () => localStorageStore.getSnapshot(key),
    () => localStorageStore.getServerSnapshot(initialValueToUse)
  );

  const state = useMemo<T | null>(() => {
    try {
      const valueToUse: T | null = externalStoreState
        ? JSON.parse(externalStoreState)
        : initialValueToUse;

      return valueToUse;
    } catch (err) {
      throw new Error(`Failed to fetch item in local storage, ${err}`);
    }
  }, [externalStoreState, initialValueToUse]);

  const setState = useCallback(
    (value: SetStateAction<T | null>) => {
      try {
        const prevState: T | null = externalStoreState
          ? JSON.parse(externalStoreState)
          : initialValueToUse;

        const valueToUse = isFunction(value) ? value(prevState) : prevState;
        const valueToStore = JSON.stringify(valueToUse);

        window.localStorage.setItem(key, valueToStore);
        window.dispatchEvent(new StorageEvent(LOCAL_STORAGE_EVENT_ID));
      } catch (err) {
        throw new Error(`Failed to set item in session storage, ${err}`);
      }
    },
    [externalStoreState, initialValueToUse, key]
  );

  const removeState = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      window.dispatchEvent(new StorageEvent(LOCAL_STORAGE_EVENT_ID));
    } catch (err) {
      throw new Error(`Failed to remove item in session storage, ${err}`);
    }
  }, [key]);

  return [state, setState, removeState];
}
