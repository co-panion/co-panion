[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAgreementAggregateType

# Type Alias: GetAgreementAggregateType\<T\>

> **GetAgreementAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregateAgreement\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregateAgreement\[P\]\> : GetScalarType\<T\[P\], AggregateAgreement\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:14063

## Type Parameters

### T

`T` *extends* [`AgreementAggregateArgs`](AgreementAggregateArgs.md)
