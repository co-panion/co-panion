[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalSpeciesUpdateArgs

# Type Alias: AnimalSpeciesUpdateArgs\<ExtArgs\>

> **AnimalSpeciesUpdateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:8120

AnimalSpecies update

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AnimalSpeciesUpdateInput`](AnimalSpeciesUpdateInput.md), [`AnimalSpeciesUncheckedUpdateInput`](AnimalSpeciesUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8132

The data needed to update a AnimalSpecies.

***

### omit?

> `optional` **omit?**: [`AnimalSpeciesOmit`](AnimalSpeciesOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:8128

Omit specific fields from the AnimalSpecies

***

### select?

> `optional` **select?**: [`AnimalSpeciesSelect`](AnimalSpeciesSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:8124

Select specific fields to fetch from the AnimalSpecies

***

### where

> **where**: [`AnimalSpeciesWhereUniqueInput`](AnimalSpeciesWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:8136

Choose, which AnimalSpecies to update.
