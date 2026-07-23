[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostImageUpdateArgs

# Type Alias: PetPostImageUpdateArgs\<ExtArgs\>

> **PetPostImageUpdateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:19174

PetPostImage update

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`PetPostImageUpdateInput`](PetPostImageUpdateInput.md), [`PetPostImageUncheckedUpdateInput`](PetPostImageUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19190

The data needed to update a PetPostImage.

***

### include?

> `optional` **include?**: [`PetPostImageInclude`](PetPostImageInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:19186

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`PetPostImageOmit`](PetPostImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:19182

Omit specific fields from the PetPostImage

***

### select?

> `optional` **select?**: [`PetPostImageSelect`](PetPostImageSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:19178

Select specific fields to fetch from the PetPostImage

***

### where

> **where**: [`PetPostImageWhereUniqueInput`](PetPostImageWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:19194

Choose, which PetPostImage to update.
