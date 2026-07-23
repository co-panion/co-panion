[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionAggregateArgs

# Type Alias: AdoptionAggregateArgs\<ExtArgs\>

> **AdoptionAggregateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:11573

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### \_avg?

> `optional` **\_avg?**: [`AdoptionAvgAggregateInputType`](AdoptionAvgAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:11613

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to average

***

### \_count?

> `optional` **\_count?**: `true` \| [`AdoptionCountAggregateInputType`](AdoptionCountAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:11607

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Count returned Adoptions

***

### \_max?

> `optional` **\_max?**: [`AdoptionMaxAggregateInputType`](AdoptionMaxAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:11631

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the maximum value

***

### \_min?

> `optional` **\_min?**: [`AdoptionMinAggregateInputType`](AdoptionMinAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:11625

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the minimum value

***

### \_sum?

> `optional` **\_sum?**: [`AdoptionSumAggregateInputType`](AdoptionSumAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:11619

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to sum

***

### cursor?

> `optional` **cursor?**: [`AdoptionWhereUniqueInput`](AdoptionWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:11589

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the start position

***

### orderBy?

> `optional` **orderBy?**: [`AdoptionOrderByWithRelationInput`](AdoptionOrderByWithRelationInput.md) \| [`AdoptionOrderByWithRelationInput`](AdoptionOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:11583

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Adoptions to fetch.

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:11601

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Adoptions.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:11595

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Adoptions from the position of the cursor.

***

### where?

> `optional` **where?**: [`AdoptionWhereInput`](AdoptionWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:11577

Filter which Adoption to aggregate.
