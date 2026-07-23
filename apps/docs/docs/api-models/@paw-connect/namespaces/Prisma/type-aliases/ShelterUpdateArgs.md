[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterUpdateArgs

# Type Alias: ShelterUpdateArgs\<ExtArgs\>

> **ShelterUpdateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:4741

Shelter update

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`ShelterUpdateInput`](ShelterUpdateInput.md), [`ShelterUncheckedUpdateInput`](ShelterUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4757

The data needed to update a Shelter.

***

### include?

> `optional` **include?**: [`ShelterInclude`](ShelterInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4753

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`ShelterOmit`](ShelterOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4749

Omit specific fields from the Shelter

***

### select?

> `optional` **select?**: [`ShelterSelect`](ShelterSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4745

Select specific fields to fetch from the Shelter

***

### where

> **where**: [`ShelterWhereUniqueInput`](ShelterWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:4761

Choose, which Shelter to update.
