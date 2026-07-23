[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalDetailUpsertArgs

# Type Alias: AnimalDetailUpsertArgs\<ExtArgs\>

> **AnimalDetailUpsertArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:10335

AnimalDetail upsert

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### create

> **create**: [`XOR`](XOR.md)\<[`AnimalDetailCreateInput`](AnimalDetailCreateInput.md), [`AnimalDetailUncheckedCreateInput`](AnimalDetailUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10355

In case the AnimalDetail found by the `where` argument doesn't exist, create a new AnimalDetail with this data.

***

### include?

> `optional` **include?**: [`AnimalDetailInclude`](AnimalDetailInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:10347

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AnimalDetailOmit`](AnimalDetailOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:10343

Omit specific fields from the AnimalDetail

***

### select?

> `optional` **select?**: [`AnimalDetailSelect`](AnimalDetailSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:10339

Select specific fields to fetch from the AnimalDetail

***

### update

> **update**: [`XOR`](XOR.md)\<[`AnimalDetailUpdateInput`](AnimalDetailUpdateInput.md), [`AnimalDetailUncheckedUpdateInput`](AnimalDetailUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10359

In case the AnimalDetail was found with the provided `where` argument, update it with this data.

***

### where

> **where**: [`AnimalDetailWhereUniqueInput`](AnimalDetailWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:10351

The filter to search for the AnimalDetail to update in case it exists.
