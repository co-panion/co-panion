[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserAgreementAggregateArgs

# Type Alias: UserAgreementAggregateArgs\<ExtArgs\>

> **UserAgreementAggregateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:15022

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### \_avg?

> `optional` **\_avg?**: [`UserAgreementAvgAggregateInputType`](UserAgreementAvgAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:15062

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to average

***

### \_count?

> `optional` **\_count?**: `true` \| [`UserAgreementCountAggregateInputType`](UserAgreementCountAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:15056

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Count returned UserAgreements

***

### \_max?

> `optional` **\_max?**: [`UserAgreementMaxAggregateInputType`](UserAgreementMaxAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:15080

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the maximum value

***

### \_min?

> `optional` **\_min?**: [`UserAgreementMinAggregateInputType`](UserAgreementMinAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:15074

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the minimum value

***

### \_sum?

> `optional` **\_sum?**: [`UserAgreementSumAggregateInputType`](UserAgreementSumAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:15068

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to sum

***

### cursor?

> `optional` **cursor?**: [`UserAgreementWhereUniqueInput`](UserAgreementWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:15038

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the start position

***

### orderBy?

> `optional` **orderBy?**: [`UserAgreementOrderByWithRelationInput`](UserAgreementOrderByWithRelationInput.md) \| [`UserAgreementOrderByWithRelationInput`](UserAgreementOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:15032

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of UserAgreements to fetch.

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:15050

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` UserAgreements.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:15044

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` UserAgreements from the position of the cursor.

***

### where?

> `optional` **where?**: [`UserAgreementWhereInput`](UserAgreementWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:15026

Filter which UserAgreement to aggregate.
