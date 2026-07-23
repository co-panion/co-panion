[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / SubsetIntersection

# Type Alias: SubsetIntersection\<T, U, K\>

> **SubsetIntersection**\<`T`, `U`, `K`\> = `{ [key in keyof T]: key extends keyof U ? T[key] : never }` & `K`

Defined in: libs/database/src/generated/prisma/index.d.ts:742

Subset + Intersection

## Type Parameters

### T

`T`

### U

`U`

### K

`K`

## Desc

From `T` pick properties that exist in `U` and intersect `K`
