import { useCallback, useEffect, useRef } from "react";

export const usePreservedCallback = <Arguments extends unknown[], Return>(
	callback: (...args: Arguments) => Return,
) => {
	const callbackRef = useRef<(...args: Arguments) => Return>(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	return useCallback((...args: Arguments) => {
		return callbackRef.current(...args);
	}, []);
};
