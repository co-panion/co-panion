[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalBreedUpdateManyAndReturnArgs

# Type Alias: AnimalBreedUpdateManyAndReturnArgs\<ExtArgs\>

> **AnimalBreedUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:9172

AnimalBreed updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AnimalBreedUpdateManyMutationInput`](AnimalBreedUpdateManyMutationInput.md), [`AnimalBreedUncheckedUpdateManyInput`](AnimalBreedUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9184

The data used to update AnimalBreeds.

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:9192

Limit how many AnimalBreeds to update.

***

### omit?

> `optional` **omit?**: [`AnimalBreedOmit`](AnimalBreedOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:9180

Omit specific fields from the AnimalBreed

***

### select?

> `optional` **select?**: [`AnimalBreedSelectUpdateManyAndReturn`](AnimalBreedSelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:9176

Select specific fields to fetch from the AnimalBreed

***

### where?

> `optional` **where?**: [`AnimalBreedWhereInput`](AnimalBreedWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:9188

Filter which AnimalBreeds to update
