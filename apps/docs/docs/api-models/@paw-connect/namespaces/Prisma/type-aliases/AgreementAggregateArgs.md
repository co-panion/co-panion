[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AgreementAggregateArgs

# Type Alias: AgreementAggregateArgs\<ExtArgs\>

> **AgreementAggregateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:14002

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### \_avg?

> `optional` **\_avg?**: [`AgreementAvgAggregateInputType`](AgreementAvgAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:14042

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to average

***

### \_count?

> `optional` **\_count?**: `true` \| [`AgreementCountAggregateInputType`](AgreementCountAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:14036

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Count returned Agreements

***

### \_max?

> `optional` **\_max?**: [`AgreementMaxAggregateInputType`](AgreementMaxAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:14060

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the maximum value

***

### \_min?

> `optional` **\_min?**: [`AgreementMinAggregateInputType`](AgreementMinAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:14054

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the minimum value

***

### \_sum?

> `optional` **\_sum?**: [`AgreementSumAggregateInputType`](AgreementSumAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:14048

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to sum

***

### cursor?

> `optional` **cursor?**: [`AgreementWhereUniqueInput`](AgreementWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:14018

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the start position

***

### orderBy?

> `optional` **orderBy?**: [`AgreementOrderByWithRelationInput`](AgreementOrderByWithRelationInput.md) \| [`AgreementOrderByWithRelationInput`](AgreementOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:14012

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Agreements to fetch.

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:14030

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Agreements.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:14024

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Agreements from the position of the cursor.

***

### where?

> `optional` **where?**: [`AgreementWhereInput`](AgreementWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:14006

Filter which Agreement to aggregate.
