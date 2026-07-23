[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalDetailUpdateArgs

# Type Alias: AnimalDetailUpdateArgs\<ExtArgs\>

> **AnimalDetailUpdateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:10261

AnimalDetail update

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AnimalDetailUpdateInput`](AnimalDetailUpdateInput.md), [`AnimalDetailUncheckedUpdateInput`](AnimalDetailUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10277

The data needed to update a AnimalDetail.

***

### include?

> `optional` **include?**: [`AnimalDetailInclude`](AnimalDetailInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:10273

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AnimalDetailOmit`](AnimalDetailOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:10269

Omit specific fields from the AnimalDetail

***

### select?

> `optional` **select?**: [`AnimalDetailSelect`](AnimalDetailSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:10265

Select specific fields to fetch from the AnimalDetail

***

### where

> **where**: [`AnimalDetailWhereUniqueInput`](AnimalDetailWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:10281

Choose, which AnimalDetail to update.
