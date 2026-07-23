[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetUserAggregateType

# Type Alias: GetUserAggregateType\<T\>

> **GetUserAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregateUser\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregateUser\[P\]\> : GetScalarType\<T\[P\], AggregateUser\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:2717

## Type Parameters

### T

`T` *extends* [`UserAggregateArgs`](UserAggregateArgs.md)
