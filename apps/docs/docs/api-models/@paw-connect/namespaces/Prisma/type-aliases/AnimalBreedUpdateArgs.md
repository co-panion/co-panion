[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalBreedUpdateArgs

# Type Alias: AnimalBreedUpdateArgs\<ExtArgs\>

> **AnimalBreedUpdateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:9132

AnimalBreed update

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AnimalBreedUpdateInput`](AnimalBreedUpdateInput.md), [`AnimalBreedUncheckedUpdateInput`](AnimalBreedUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9144

The data needed to update a AnimalBreed.

***

### omit?

> `optional` **omit?**: [`AnimalBreedOmit`](AnimalBreedOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:9140

Omit specific fields from the AnimalBreed

***

### select?

> `optional` **select?**: [`AnimalBreedSelect`](AnimalBreedSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:9136

Select specific fields to fetch from the AnimalBreed

***

### where

> **where**: [`AnimalBreedWhereUniqueInput`](AnimalBreedWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:9148

Choose, which AnimalBreed to update.
