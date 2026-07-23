[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalSpeciesUpsertArgs

# Type Alias: AnimalSpeciesUpsertArgs\<ExtArgs\>

> **AnimalSpeciesUpsertArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:8186

AnimalSpecies upsert

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### create

> **create**: [`XOR`](XOR.md)\<[`AnimalSpeciesCreateInput`](AnimalSpeciesCreateInput.md), [`AnimalSpeciesUncheckedCreateInput`](AnimalSpeciesUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8202

In case the AnimalSpecies found by the `where` argument doesn't exist, create a new AnimalSpecies with this data.

***

### omit?

> `optional` **omit?**: [`AnimalSpeciesOmit`](AnimalSpeciesOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:8194

Omit specific fields from the AnimalSpecies

***

### select?

> `optional` **select?**: [`AnimalSpeciesSelect`](AnimalSpeciesSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:8190

Select specific fields to fetch from the AnimalSpecies

***

### update

> **update**: [`XOR`](XOR.md)\<[`AnimalSpeciesUpdateInput`](AnimalSpeciesUpdateInput.md), [`AnimalSpeciesUncheckedUpdateInput`](AnimalSpeciesUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8206

In case the AnimalSpecies was found with the provided `where` argument, update it with this data.

***

### where

> **where**: [`AnimalSpeciesWhereUniqueInput`](AnimalSpeciesWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:8198

The filter to search for the AnimalSpecies to update in case it exists.
