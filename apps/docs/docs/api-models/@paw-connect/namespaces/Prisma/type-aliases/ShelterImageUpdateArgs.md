[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterImageUpdateArgs

# Type Alias: ShelterImageUpdateArgs\<ExtArgs\>

> **ShelterImageUpdateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:5822

ShelterImage update

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`ShelterImageUpdateInput`](ShelterImageUpdateInput.md), [`ShelterImageUncheckedUpdateInput`](ShelterImageUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5838

The data needed to update a ShelterImage.

***

### include?

> `optional` **include?**: [`ShelterImageInclude`](ShelterImageInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5834

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`ShelterImageOmit`](ShelterImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5830

Omit specific fields from the ShelterImage

***

### select?

> `optional` **select?**: [`ShelterImageSelect`](ShelterImageSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5826

Select specific fields to fetch from the ShelterImage

***

### where

> **where**: [`ShelterImageWhereUniqueInput`](ShelterImageWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:5842

Choose, which ShelterImage to update.
