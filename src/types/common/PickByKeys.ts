export type PickByKeys<T, K extends (keyof T)[]> = {
	[P in K[number]]: T[P];
};
