[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / FieldPaths

# Type Alias: FieldPaths\<T, U\>

> **FieldPaths**\<`T`, `U`\> = [`IsObject`](IsObject.md)\<`T`\> *extends* [`True`](True.md) ? `U` : `T`

Defined in: libs/database/src/generated/prisma/index.d.ts:928

## Type Parameters

### T

`T`

### U

`U` = `Omit`\<`T`, `"_avg"` \| `"_sum"` \| `"_count"` \| `"_min"` \| `"_max"`\>
