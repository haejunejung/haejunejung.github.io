import { useSyncExternalStore } from "react";

/**
 * @description 네트워크 연결 상태를 확인할 수 있는 훅입니다.
 * @return {boolean} 네트워크가 연결되어 있다면 `true`, 연결되어 있지 않다면 `false`를 반환합니다. SSR 환경에서는 `true`를 반환합니다.
 */
export function useNetworkStatus(): boolean {
	const isOnline = useSyncExternalStore(
		subscribe,
		() => getSnapshot(),
		() => getServerSnapshot(),
	);

	return isOnline;
}

const subscribe = (callback: () => void) => {
	window.addEventListener("online", callback);
	window.addEventListener("offline", callback);

	return () => {
		window.removeEventListener("online", callback);
		window.removeEventListener("offline", callback);
	};
};

const getSnapshot = () => {
	return window.navigator.onLine;
};

const getServerSnapshot = () => {
	return true;
};
