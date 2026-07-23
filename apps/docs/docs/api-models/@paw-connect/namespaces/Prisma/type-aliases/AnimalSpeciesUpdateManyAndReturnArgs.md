[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalSpeciesUpdateManyAndReturnArgs

# Type Alias: AnimalSpeciesUpdateManyAndReturnArgs\<ExtArgs\>

> **AnimalSpeciesUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:8160

AnimalSpecies updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AnimalSpeciesUpdateManyMutationInput`](AnimalSpeciesUpdateManyMutationInput.md), [`AnimalSpeciesUncheckedUpdateManyInput`](AnimalSpeciesUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8172

The data used to update AnimalSpecies.

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:8180

Limit how many AnimalSpecies to update.

***

### omit?

> `optional` **omit?**: [`AnimalSpeciesOmit`](AnimalSpeciesOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:8168

Omit specific fields from the AnimalSpecies

***

### select?

> `optional` **select?**: [`AnimalSpeciesSelectUpdateManyAndReturn`](AnimalSpeciesSelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:8164

Select specific fields to fetch from the AnimalSpecies

***

### where?

> `optional` **where?**: [`AnimalSpeciesWhereInput`](AnimalSpeciesWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:8176

Filter which AnimalSpecies to update
