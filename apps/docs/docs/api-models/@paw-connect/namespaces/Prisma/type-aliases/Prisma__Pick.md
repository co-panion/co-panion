[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / Prisma\_\_Pick

# Type Alias: Prisma\_\_Pick\<T, K\>

> **Prisma\_\_Pick**\<`T`, `K`\> = `{ [P in K]: T[P] }`

Defined in: libs/database/src/generated/prisma/index.d.ts:699

From T, pick a set of properties whose keys are in the union K

## Type Parameters

### T

`T`

### K

`K` *extends* keyof `T`
