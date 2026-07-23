[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalDetailAggregateArgs

# Type Alias: AnimalDetailAggregateArgs\<ExtArgs\>

> **AnimalDetailAggregateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:9371

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### \_avg?

> `optional` **\_avg?**: [`AnimalDetailAvgAggregateInputType`](AnimalDetailAvgAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:9411

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to average

***

### \_count?

> `optional` **\_count?**: `true` \| [`AnimalDetailCountAggregateInputType`](AnimalDetailCountAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:9405

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Count returned AnimalDetails

***

### \_max?

> `optional` **\_max?**: [`AnimalDetailMaxAggregateInputType`](AnimalDetailMaxAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:9429

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the maximum value

***

### \_min?

> `optional` **\_min?**: [`AnimalDetailMinAggregateInputType`](AnimalDetailMinAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:9423

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the minimum value

***

### \_sum?

> `optional` **\_sum?**: [`AnimalDetailSumAggregateInputType`](AnimalDetailSumAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:9417

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to sum

***

### cursor?

> `optional` **cursor?**: [`AnimalDetailWhereUniqueInput`](AnimalDetailWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:9387

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the start position

***

### orderBy?

> `optional` **orderBy?**: [`AnimalDetailOrderByWithRelationInput`](AnimalDetailOrderByWithRelationInput.md) \| [`AnimalDetailOrderByWithRelationInput`](AnimalDetailOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:9381

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AnimalDetails to fetch.

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:9399

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AnimalDetails.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:9393

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AnimalDetails from the position of the cursor.

***

### where?

> `optional` **where?**: [`AnimalDetailWhereInput`](AnimalDetailWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:9375

Filter which AnimalDetail to aggregate.
