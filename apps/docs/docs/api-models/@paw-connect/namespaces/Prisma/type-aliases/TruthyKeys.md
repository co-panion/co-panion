[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / TruthyKeys

# Type Alias: TruthyKeys\<T\>

> **TruthyKeys**\<`T`\> = keyof \{ \[K in keyof T as T\[K\] extends false \| undefined \| null ? never : K\]: K \}

Defined in: libs/database/src/generated/prisma/index.d.ts:710

## Type Parameters

### T

`T`
