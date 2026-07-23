[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAnimalAggregateType

# Type Alias: GetAnimalAggregateType\<T\>

> **GetAnimalAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregateAnimal\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregateAnimal\[P\]\> : GetScalarType\<T\[P\], AggregateAnimal\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:6188

## Type Parameters

### T

`T` *extends* [`AnimalAggregateArgs`](AnimalAggregateArgs.md)
