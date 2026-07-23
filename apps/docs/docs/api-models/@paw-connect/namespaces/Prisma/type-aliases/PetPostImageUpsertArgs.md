[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostImageUpsertArgs

# Type Alias: PetPostImageUpsertArgs\<ExtArgs\>

> **PetPostImageUpsertArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:19248

PetPostImage upsert

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### create

> **create**: [`XOR`](XOR.md)\<[`PetPostImageCreateInput`](PetPostImageCreateInput.md), [`PetPostImageUncheckedCreateInput`](PetPostImageUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19268

In case the PetPostImage found by the `where` argument doesn't exist, create a new PetPostImage with this data.

***

### include?

> `optional` **include?**: [`PetPostImageInclude`](PetPostImageInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:19260

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`PetPostImageOmit`](PetPostImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:19256

Omit specific fields from the PetPostImage

***

### select?

> `optional` **select?**: [`PetPostImageSelect`](PetPostImageSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:19252

Select specific fields to fetch from the PetPostImage

***

### update

> **update**: [`XOR`](XOR.md)\<[`PetPostImageUpdateInput`](PetPostImageUpdateInput.md), [`PetPostImageUncheckedUpdateInput`](PetPostImageUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19272

In case the PetPostImage was found with the provided `where` argument, update it with this data.

***

### where

> **where**: [`PetPostImageWhereUniqueInput`](PetPostImageWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:19264

The filter to search for the PetPostImage to update in case it exists.
