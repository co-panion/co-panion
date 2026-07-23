[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostImageAggregateArgs

# Type Alias: PetPostImageAggregateArgs\<ExtArgs\>

> **PetPostImageAggregateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:18326

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### \_avg?

> `optional` **\_avg?**: [`PetPostImageAvgAggregateInputType`](PetPostImageAvgAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:18366

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to average

***

### \_count?

> `optional` **\_count?**: `true` \| [`PetPostImageCountAggregateInputType`](PetPostImageCountAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:18360

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Count returned PetPostImages

***

### \_max?

> `optional` **\_max?**: [`PetPostImageMaxAggregateInputType`](PetPostImageMaxAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:18384

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the maximum value

***

### \_min?

> `optional` **\_min?**: [`PetPostImageMinAggregateInputType`](PetPostImageMinAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:18378

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the minimum value

***

### \_sum?

> `optional` **\_sum?**: [`PetPostImageSumAggregateInputType`](PetPostImageSumAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:18372

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to sum

***

### cursor?

> `optional` **cursor?**: [`PetPostImageWhereUniqueInput`](PetPostImageWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:18342

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the start position

***

### orderBy?

> `optional` **orderBy?**: [`PetPostImageOrderByWithRelationInput`](PetPostImageOrderByWithRelationInput.md) \| [`PetPostImageOrderByWithRelationInput`](PetPostImageOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:18336

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of PetPostImages to fetch.

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:18354

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` PetPostImages.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:18348

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` PetPostImages from the position of the cursor.

***

### where?

> `optional` **where?**: [`PetPostImageWhereInput`](PetPostImageWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:18330

Filter which PetPostImage to aggregate.
