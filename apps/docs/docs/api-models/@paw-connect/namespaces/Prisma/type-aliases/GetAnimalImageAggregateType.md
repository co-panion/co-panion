[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAnimalImageAggregateType

# Type Alias: GetAnimalImageAggregateType\<T\>

> **GetAnimalImageAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregateAnimalImage\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregateAnimalImage\[P\]\> : GetScalarType\<T\[P\], AggregateAnimalImage\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:10545

## Type Parameters

### T

`T` *extends* [`AnimalImageAggregateArgs`](AnimalImageAggregateArgs.md)
