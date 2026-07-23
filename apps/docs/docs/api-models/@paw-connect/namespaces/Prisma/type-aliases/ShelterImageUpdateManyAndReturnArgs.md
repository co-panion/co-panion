[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterImageUpdateManyAndReturnArgs

# Type Alias: ShelterImageUpdateManyAndReturnArgs\<ExtArgs\>

> **ShelterImageUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:5866

ShelterImage updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`ShelterImageUpdateManyMutationInput`](ShelterImageUpdateManyMutationInput.md), [`ShelterImageUncheckedUpdateManyInput`](ShelterImageUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5878

The data used to update ShelterImages.

***

### include?

> `optional` **include?**: [`ShelterImageIncludeUpdateManyAndReturn`](ShelterImageIncludeUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5890

Choose, which related nodes to fetch as well

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:5886

Limit how many ShelterImages to update.

***

### omit?

> `optional` **omit?**: [`ShelterImageOmit`](ShelterImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5874

Omit specific fields from the ShelterImage

***

### select?

> `optional` **select?**: [`ShelterImageSelectUpdateManyAndReturn`](ShelterImageSelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5870

Select specific fields to fetch from the ShelterImage

***

### where?

> `optional` **where?**: [`ShelterImageWhereInput`](ShelterImageWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:5882

Filter which ShelterImages to update
