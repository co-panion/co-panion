[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostUpdateArgs

# Type Alias: PetPostUpdateArgs\<ExtArgs\>

> **PetPostUpdateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:18083

PetPost update

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`PetPostUpdateInput`](PetPostUpdateInput.md), [`PetPostUncheckedUpdateInput`](PetPostUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18099

The data needed to update a PetPost.

***

### include?

> `optional` **include?**: [`PetPostInclude`](PetPostInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:18095

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`PetPostOmit`](PetPostOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:18091

Omit specific fields from the PetPost

***

### select?

> `optional` **select?**: [`PetPostSelect`](PetPostSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:18087

Select specific fields to fetch from the PetPost

***

### where

> **where**: [`PetPostWhereUniqueInput`](PetPostWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:18103

Choose, which PetPost to update.
