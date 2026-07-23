[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetInquiryAggregateType

# Type Alias: GetInquiryAggregateType\<T\>

> **GetInquiryAggregateType**\<`T`\> = \{ \[P in keyof T & keyof AggregateInquiry\]: P extends "\_count" \| "count" ? T\[P\] extends true ? number : GetScalarType\<T\[P\], AggregateInquiry\[P\]\> : GetScalarType\<T\[P\], AggregateInquiry\[P\]\> \}

Defined in: libs/database/src/generated/prisma/index.d.ts:19434

## Type Parameters

### T

`T` *extends* [`InquiryAggregateArgs`](InquiryAggregateArgs.md)
