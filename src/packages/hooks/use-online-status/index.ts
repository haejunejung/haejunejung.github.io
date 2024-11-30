import { useSyncExternalStore } from "react";

const onlineStore = {
  subscribe: (callback: () => void) => {
    window.addEventListener("online", callback);
    window.addEventListener("offline", callback);
    return () => {
      window.removeEventListener("online", callback);
      window.removeEventListener("offline", callback);
    };
  },
  getSnapshot: () => {
    return window.navigator.onLine;
  },
  getServerSnapshot: () => {
    return true;
  },
};

/**
 * @description online 상태를 확인할 수 있는 Hook
 */
export const useOnlineStatus = () => {
  const isOnline = useSyncExternalStore(
    onlineStore.subscribe,
    () => onlineStore.getSnapshot(),
    () => onlineStore.getServerSnapshot()
  );

  return isOnline;
};
