[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAdoptionAggregateType

# Type Alias: GetAdoptionAggregateType\<T\>

> **GetAdoptionAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregateAdoption\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregateAdoption\[P\]\> : GetScalarType\<T\[P\], AggregateAdoption\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:11634

## Type Parameters

### T

`T` *extends* [`AdoptionAggregateArgs`](AdoptionAggregateArgs.md)
