[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAnimalDetailAggregateType

# Type Alias: GetAnimalDetailAggregateType\<T\>

> **GetAnimalDetailAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregateAnimalDetail\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregateAnimalDetail\[P\]\> : GetScalarType\<T\[P\], AggregateAnimalDetail\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:9432

## Type Parameters

### T

`T` *extends* [`AnimalDetailAggregateArgs`](AnimalDetailAggregateArgs.md)
