[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / Subset

# Type Alias: Subset\<T, U\>

> **Subset**\<`T`, `U`\> = `{ [key in keyof T]: key extends keyof U ? T[key] : never }`

Defined in: libs/database/src/generated/prisma/index.d.ts:720

Subset

## Type Parameters

### T

`T`

### U

`U`

## Desc

From `T` pick properties that exist in `U`. Simple version of Intersection
