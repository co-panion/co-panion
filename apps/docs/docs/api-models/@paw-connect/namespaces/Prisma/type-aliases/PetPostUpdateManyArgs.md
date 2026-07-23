[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostUpdateManyArgs

# Type Alias: PetPostUpdateManyArgs\<ExtArgs\>

> **PetPostUpdateManyArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:18109

PetPost updateMany

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`PetPostUpdateManyMutationInput`](PetPostUpdateManyMutationInput.md), [`PetPostUncheckedUpdateManyInput`](PetPostUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18113

The data used to update PetPosts.

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:18121

Limit how many PetPosts to update.

***

### where?

> `optional` **where?**: [`PetPostWhereInput`](PetPostWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:18117

Filter which PetPosts to update
