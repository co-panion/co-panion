[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetPetPostAggregateType

# Type Alias: GetPetPostAggregateType\<T\>

> **GetPetPostAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregatePetPost\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregatePetPost\[P\]\> : GetScalarType\<T\[P\], AggregatePetPost\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:17283

## Type Parameters

### T

`T` *extends* [`PetPostAggregateArgs`](PetPostAggregateArgs.md)
