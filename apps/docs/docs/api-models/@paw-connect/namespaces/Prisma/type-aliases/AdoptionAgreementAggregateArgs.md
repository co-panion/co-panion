[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionAgreementAggregateArgs

# Type Alias: AdoptionAgreementAggregateArgs\<ExtArgs\>

> **AdoptionAgreementAggregateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:16119

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### \_avg?

> `optional` **\_avg?**: [`AdoptionAgreementAvgAggregateInputType`](AdoptionAgreementAvgAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:16159

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to average

***

### \_count?

> `optional` **\_count?**: `true` \| [`AdoptionAgreementCountAggregateInputType`](AdoptionAgreementCountAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:16153

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Count returned AdoptionAgreements

***

### \_max?

> `optional` **\_max?**: [`AdoptionAgreementMaxAggregateInputType`](AdoptionAgreementMaxAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:16177

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the maximum value

***

### \_min?

> `optional` **\_min?**: [`AdoptionAgreementMinAggregateInputType`](AdoptionAgreementMinAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:16171

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the minimum value

***

### \_sum?

> `optional` **\_sum?**: [`AdoptionAgreementSumAggregateInputType`](AdoptionAgreementSumAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:16165

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to sum

***

### cursor?

> `optional` **cursor?**: [`AdoptionAgreementWhereUniqueInput`](AdoptionAgreementWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:16135

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the start position

***

### orderBy?

> `optional` **orderBy?**: [`AdoptionAgreementOrderByWithRelationInput`](AdoptionAgreementOrderByWithRelationInput.md) \| [`AdoptionAgreementOrderByWithRelationInput`](AdoptionAgreementOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:16129

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AdoptionAgreements to fetch.

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:16147

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AdoptionAgreements.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:16141

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AdoptionAgreements from the position of the cursor.

***

### where?

> `optional` **where?**: [`AdoptionAgreementWhereInput`](AdoptionAgreementWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:16123

Filter which AdoptionAgreement to aggregate.
