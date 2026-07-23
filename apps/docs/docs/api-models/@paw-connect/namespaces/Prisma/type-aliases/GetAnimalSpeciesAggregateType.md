[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAnimalSpeciesAggregateType

# Type Alias: GetAnimalSpeciesAggregateType\<T\>

> **GetAnimalSpeciesAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregateAnimalSpecies\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregateAnimalSpecies\[P\]\> : GetScalarType\<T\[P\], AggregateAnimalSpecies\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:7383

## Type Parameters

### T

`T` *extends* [`AnimalSpeciesAggregateArgs`](AnimalSpeciesAggregateArgs.md)
