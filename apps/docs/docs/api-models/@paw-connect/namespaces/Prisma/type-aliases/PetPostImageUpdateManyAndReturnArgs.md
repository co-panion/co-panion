[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostImageUpdateManyAndReturnArgs

# Type Alias: PetPostImageUpdateManyAndReturnArgs\<ExtArgs\>

> **PetPostImageUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:19218

PetPostImage updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`PetPostImageUpdateManyMutationInput`](PetPostImageUpdateManyMutationInput.md), [`PetPostImageUncheckedUpdateManyInput`](PetPostImageUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19230

The data used to update PetPostImages.

***

### include?

> `optional` **include?**: [`PetPostImageIncludeUpdateManyAndReturn`](PetPostImageIncludeUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:19242

Choose, which related nodes to fetch as well

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:19238

Limit how many PetPostImages to update.

***

### omit?

> `optional` **omit?**: [`PetPostImageOmit`](PetPostImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:19226

Omit specific fields from the PetPostImage

***

### select?

> `optional` **select?**: [`PetPostImageSelectUpdateManyAndReturn`](PetPostImageSelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:19222

Select specific fields to fetch from the PetPostImage

***

### where?

> `optional` **where?**: [`PetPostImageWhereInput`](PetPostImageWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:19234

Filter which PetPostImages to update
