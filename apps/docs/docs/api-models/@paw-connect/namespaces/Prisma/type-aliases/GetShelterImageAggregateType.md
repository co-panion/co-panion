[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetShelterImageAggregateType

# Type Alias: GetShelterImageAggregateType\<T\>

> **GetShelterImageAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregateShelterImage\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregateShelterImage\[P\]\> : GetScalarType\<T\[P\], AggregateShelterImage\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:5039

## Type Parameters

### T

`T` *extends* [`ShelterImageAggregateArgs`](ShelterImageAggregateArgs.md)
