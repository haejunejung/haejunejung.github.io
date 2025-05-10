export function resolveCallable<Arguments extends unknown[], Return>(
	callable: (...args: Arguments) => Return,
	args?: Arguments,
): Return;

export function resolveCallable<Return>(callable: Return): Return;

export function resolveCallable<Return>(
	callable: unknown,
	args?: unknown[],
): Return {
	return typeof callable === "function" ? callable(...(args || [])) : callable;
}
