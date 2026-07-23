[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterUpsertArgs

# Type Alias: ShelterUpsertArgs\<ExtArgs\>

> **ShelterUpsertArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:4811

Shelter upsert

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### create

> **create**: [`XOR`](XOR.md)\<[`ShelterCreateInput`](ShelterCreateInput.md), [`ShelterUncheckedCreateInput`](ShelterUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4831

In case the Shelter found by the `where` argument doesn't exist, create a new Shelter with this data.

***

### include?

> `optional` **include?**: [`ShelterInclude`](ShelterInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4823

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`ShelterOmit`](ShelterOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4819

Omit specific fields from the Shelter

***

### select?

> `optional` **select?**: [`ShelterSelect`](ShelterSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4815

Select specific fields to fetch from the Shelter

***

### update

> **update**: [`XOR`](XOR.md)\<[`ShelterUpdateInput`](ShelterUpdateInput.md), [`ShelterUncheckedUpdateInput`](ShelterUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4835

In case the Shelter was found with the provided `where` argument, update it with this data.

***

### where

> **where**: [`ShelterWhereUniqueInput`](ShelterWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:4827

The filter to search for the Shelter to update in case it exists.
