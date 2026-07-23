[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PatchUndefined

# Type Alias: PatchUndefined\<O, O1\>

> **PatchUndefined**\<`O`, `O1`\> = `{ [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K] }` & `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:812

## Type Parameters

### O

`O` *extends* `object`

### O1

`O1` *extends* `object`
