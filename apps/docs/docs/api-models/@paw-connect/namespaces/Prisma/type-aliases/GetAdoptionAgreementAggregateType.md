[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAdoptionAgreementAggregateType

# Type Alias: GetAdoptionAgreementAggregateType\<T\>

> **GetAdoptionAgreementAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregateAdoptionAgreement\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregateAdoptionAgreement\[P\]\> : GetScalarType\<T\[P\], AggregateAdoptionAgreement\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:16180

## Type Parameters

### T

`T` *extends* [`AdoptionAgreementAggregateArgs`](AdoptionAgreementAggregateArgs.md)
