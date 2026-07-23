[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetUserAgreementAggregateType

# Type Alias: GetUserAgreementAggregateType\<T\>

> **GetUserAgreementAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregateUserAgreement\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregateUserAgreement\[P\]\> : GetScalarType\<T\[P\], AggregateUserAgreement\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:15083

## Type Parameters

### T

`T` *extends* [`UserAgreementAggregateArgs`](UserAgreementAggregateArgs.md)
