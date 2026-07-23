[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AtLeast

# Type Alias: AtLeast\<O, K\>

> **AtLeast**\<`O`, `K`\> = [`NoExpand`](NoExpand.md)\<`O` *extends* `unknown` ? `K` *extends* keyof `O` ? `{ [P in K]: O[P] }` & `O` : `O` \| `{ [P in keyof O as P extends K ? P : never]-?: O[P] }` & `O` : `never`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:856

## Type Parameters

### O

`O` *extends* `object`

### K

`K` *extends* `string`
