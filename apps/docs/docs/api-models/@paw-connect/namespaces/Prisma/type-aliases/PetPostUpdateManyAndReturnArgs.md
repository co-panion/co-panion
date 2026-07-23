[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostUpdateManyAndReturnArgs

# Type Alias: PetPostUpdateManyAndReturnArgs\<ExtArgs\>

> **PetPostUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:18127

PetPost updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`PetPostUpdateManyMutationInput`](PetPostUpdateManyMutationInput.md), [`PetPostUncheckedUpdateManyInput`](PetPostUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18139

The data used to update PetPosts.

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:18147

Limit how many PetPosts to update.

***

### omit?

> `optional` **omit?**: [`PetPostOmit`](PetPostOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:18135

Omit specific fields from the PetPost

***

### select?

> `optional` **select?**: [`PetPostSelectUpdateManyAndReturn`](PetPostSelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:18131

Select specific fields to fetch from the PetPost

***

### where?

> `optional` **where?**: [`PetPostWhereInput`](PetPostWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:18143

Filter which PetPosts to update
