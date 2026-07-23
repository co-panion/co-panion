[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PickEnumerable

# Type Alias: PickEnumerable\<T, K\>

> **PickEnumerable**\<`T`, `K`\> = [`Prisma__Pick`](Prisma__Pick.md)\<`T`, [`MaybeTupleToUnion`](MaybeTupleToUnion.md)\<`K`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:959

Like `Pick`, but additionally can also accept an array of keys

## Type Parameters

### T

`T`

### K

`K` *extends* [`Enumerable`](Enumerable.md)\<keyof `T`\> \| keyof `T`
