[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalAggregateArgs

# Type Alias: AnimalAggregateArgs\<ExtArgs\>

> **AnimalAggregateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:6127

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### \_avg?

> `optional` **\_avg?**: [`AnimalAvgAggregateInputType`](AnimalAvgAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:6167

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to average

***

### \_count?

> `optional` **\_count?**: `true` \| [`AnimalCountAggregateInputType`](AnimalCountAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:6161

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Count returned Animals

***

### \_max?

> `optional` **\_max?**: [`AnimalMaxAggregateInputType`](AnimalMaxAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:6185

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the maximum value

***

### \_min?

> `optional` **\_min?**: [`AnimalMinAggregateInputType`](AnimalMinAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:6179

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the minimum value

***

### \_sum?

> `optional` **\_sum?**: [`AnimalSumAggregateInputType`](AnimalSumAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:6173

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to sum

***

### cursor?

> `optional` **cursor?**: [`AnimalWhereUniqueInput`](AnimalWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:6143

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the start position

***

### orderBy?

> `optional` **orderBy?**: [`AnimalOrderByWithRelationInput`](AnimalOrderByWithRelationInput.md) \| [`AnimalOrderByWithRelationInput`](AnimalOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:6137

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Animals to fetch.

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:6155

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Animals.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:6149

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Animals from the position of the cursor.

***

### where?

> `optional` **where?**: [`AnimalWhereInput`](AnimalWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:6131

Filter which Animal to aggregate.
