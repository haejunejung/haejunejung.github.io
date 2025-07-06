export type RemoveSpaces<T extends string> = T extends `${infer F} ${infer L}`
	? `${F}${RemoveSpaces<L>}`
	: T;
