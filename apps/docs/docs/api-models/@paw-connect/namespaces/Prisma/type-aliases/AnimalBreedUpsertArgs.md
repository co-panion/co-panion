[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalBreedUpsertArgs

# Type Alias: AnimalBreedUpsertArgs\<ExtArgs\>

> **AnimalBreedUpsertArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:9198

AnimalBreed upsert

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### create

> **create**: [`XOR`](XOR.md)\<[`AnimalBreedCreateInput`](AnimalBreedCreateInput.md), [`AnimalBreedUncheckedCreateInput`](AnimalBreedUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9214

In case the AnimalBreed found by the `where` argument doesn't exist, create a new AnimalBreed with this data.

***

### omit?

> `optional` **omit?**: [`AnimalBreedOmit`](AnimalBreedOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:9206

Omit specific fields from the AnimalBreed

***

### select?

> `optional` **select?**: [`AnimalBreedSelect`](AnimalBreedSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:9202

Select specific fields to fetch from the AnimalBreed

***

### update

> **update**: [`XOR`](XOR.md)\<[`AnimalBreedUpdateInput`](AnimalBreedUpdateInput.md), [`AnimalBreedUncheckedUpdateInput`](AnimalBreedUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9218

In case the AnimalBreed was found with the provided `where` argument, update it with this data.

***

### where

> **where**: [`AnimalBreedWhereUniqueInput`](AnimalBreedWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:9210

The filter to search for the AnimalBreed to update in case it exists.
