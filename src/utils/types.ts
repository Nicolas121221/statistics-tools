type Brand<T, U extends string> = T & { _brand: U };

export type IdBrand = Brand<string, "id">;
