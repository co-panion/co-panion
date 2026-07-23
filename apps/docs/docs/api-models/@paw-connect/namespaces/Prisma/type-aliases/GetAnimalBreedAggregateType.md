[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAnimalBreedAggregateType

# Type Alias: GetAnimalBreedAggregateType\<T\>

> **GetAnimalBreedAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregateAnimalBreed\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregateAnimalBreed\[P\]\> : GetScalarType\<T\[P\], AggregateAnimalBreed\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:8388

## Type Parameters

### T

`T` *extends* [`AnimalBreedAggregateArgs`](AnimalBreedAggregateArgs.md)
