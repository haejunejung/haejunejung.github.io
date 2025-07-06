import { isNil } from "./isNil";

export const arrayify = <T>(maybeArray: T | Array<T>): Array<T> => {
    if (Array.isArray(maybeArray)) return maybeArray;
    if (isNil(maybeArray)) return [];
    return [maybeArray];
}