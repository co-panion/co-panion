[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAdoptionDetailAggregateType

# Type Alias: GetAdoptionDetailAggregateType\<T\>

> **GetAdoptionDetailAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregateAdoptionDetail\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregateAdoptionDetail\[P\]\> : GetScalarType\<T\[P\], AggregateAdoptionDetail\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:12863

## Type Parameters

### T

`T` *extends* [`AdoptionDetailAggregateArgs`](AdoptionDetailAggregateArgs.md)
