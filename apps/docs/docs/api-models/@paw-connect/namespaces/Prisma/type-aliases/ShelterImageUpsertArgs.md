[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterImageUpsertArgs

# Type Alias: ShelterImageUpsertArgs\<ExtArgs\>

> **ShelterImageUpsertArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:5896

ShelterImage upsert

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### create

> **create**: [`XOR`](XOR.md)\<[`ShelterImageCreateInput`](ShelterImageCreateInput.md), [`ShelterImageUncheckedCreateInput`](ShelterImageUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5916

In case the ShelterImage found by the `where` argument doesn't exist, create a new ShelterImage with this data.

***

### include?

> `optional` **include?**: [`ShelterImageInclude`](ShelterImageInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5908

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`ShelterImageOmit`](ShelterImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5904

Omit specific fields from the ShelterImage

***

### select?

> `optional` **select?**: [`ShelterImageSelect`](ShelterImageSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5900

Select specific fields to fetch from the ShelterImage

***

### update

> **update**: [`XOR`](XOR.md)\<[`ShelterImageUpdateInput`](ShelterImageUpdateInput.md), [`ShelterImageUncheckedUpdateInput`](ShelterImageUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5920

In case the ShelterImage was found with the provided `where` argument, update it with this data.

***

### where

> **where**: [`ShelterImageWhereUniqueInput`](ShelterImageWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:5912

The filter to search for the ShelterImage to update in case it exists.
