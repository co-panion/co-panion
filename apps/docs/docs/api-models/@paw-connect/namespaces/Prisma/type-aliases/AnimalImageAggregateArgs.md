[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalImageAggregateArgs

# Type Alias: AnimalImageAggregateArgs\<ExtArgs\>

> **AnimalImageAggregateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:10484

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### \_avg?

> `optional` **\_avg?**: [`AnimalImageAvgAggregateInputType`](AnimalImageAvgAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:10524

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to average

***

### \_count?

> `optional` **\_count?**: `true` \| [`AnimalImageCountAggregateInputType`](AnimalImageCountAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:10518

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Count returned AnimalImages

***

### \_max?

> `optional` **\_max?**: [`AnimalImageMaxAggregateInputType`](AnimalImageMaxAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:10542

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the maximum value

***

### \_min?

> `optional` **\_min?**: [`AnimalImageMinAggregateInputType`](AnimalImageMinAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:10536

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the minimum value

***

### \_sum?

> `optional` **\_sum?**: [`AnimalImageSumAggregateInputType`](AnimalImageSumAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:10530

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to sum

***

### cursor?

> `optional` **cursor?**: [`AnimalImageWhereUniqueInput`](AnimalImageWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:10500

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the start position

***

### orderBy?

> `optional` **orderBy?**: [`AnimalImageOrderByWithRelationInput`](AnimalImageOrderByWithRelationInput.md) \| [`AnimalImageOrderByWithRelationInput`](AnimalImageOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:10494

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AnimalImages to fetch.

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:10512

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AnimalImages.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:10506

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AnimalImages from the position of the cursor.

***

### where?

> `optional` **where?**: [`AnimalImageWhereInput`](AnimalImageWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:10488

Filter which AnimalImage to aggregate.
