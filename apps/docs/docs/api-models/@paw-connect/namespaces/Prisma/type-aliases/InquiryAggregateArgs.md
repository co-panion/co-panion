[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / InquiryAggregateArgs

# Type Alias: InquiryAggregateArgs\<ExtArgs\>

> **InquiryAggregateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:19385

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### \_count?

> `optional` **\_count?**: `true` \| [`InquiryCountAggregateInputType`](InquiryCountAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:19419

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Count returned Inquiries

***

### \_max?

> `optional` **\_max?**: [`InquiryMaxAggregateInputType`](InquiryMaxAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:19431

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the maximum value

***

### \_min?

> `optional` **\_min?**: [`InquiryMinAggregateInputType`](InquiryMinAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:19425

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the minimum value

***

### cursor?

> `optional` **cursor?**: [`InquiryWhereUniqueInput`](InquiryWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:19401

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the start position

***

### orderBy?

> `optional` **orderBy?**: [`InquiryOrderByWithRelationInput`](InquiryOrderByWithRelationInput.md) \| [`InquiryOrderByWithRelationInput`](InquiryOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:19395

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Inquiries to fetch.

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:19413

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Inquiries.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:19407

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Inquiries from the position of the cursor.

***

### where?

> `optional` **where?**: [`InquiryWhereInput`](InquiryWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:19389

Filter which Inquiry to aggregate.
