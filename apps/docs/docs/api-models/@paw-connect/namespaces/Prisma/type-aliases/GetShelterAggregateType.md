[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetShelterAggregateType

# Type Alias: GetShelterAggregateType\<T\>

> **GetShelterAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregateShelter\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregateShelter\[P\]\> : GetScalarType\<T\[P\], AggregateShelter\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:3913

## Type Parameters

### T

`T` *extends* [`ShelterAggregateArgs`](ShelterAggregateArgs.md)
