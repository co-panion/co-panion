[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetPetPostImageAggregateType

# Type Alias: GetPetPostImageAggregateType\<T\>

> **GetPetPostImageAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregatePetPostImage\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregatePetPostImage\[P\]\> : GetScalarType\<T\[P\], AggregatePetPostImage\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:18387

## Type Parameters

### T

`T` *extends* [`PetPostImageAggregateArgs`](PetPostImageAggregateArgs.md)
