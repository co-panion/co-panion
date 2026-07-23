[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostAggregateArgs

# Type Alias: PetPostAggregateArgs\<ExtArgs\>

> **PetPostAggregateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:17222

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### \_avg?

> `optional` **\_avg?**: [`PetPostAvgAggregateInputType`](PetPostAvgAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17262

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to average

***

### \_count?

> `optional` **\_count?**: `true` \| [`PetPostCountAggregateInputType`](PetPostCountAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17256

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Count returned PetPosts

***

### \_max?

> `optional` **\_max?**: [`PetPostMaxAggregateInputType`](PetPostMaxAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17280

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the maximum value

***

### \_min?

> `optional` **\_min?**: [`PetPostMinAggregateInputType`](PetPostMinAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17274

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the minimum value

***

### \_sum?

> `optional` **\_sum?**: [`PetPostSumAggregateInputType`](PetPostSumAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17268

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to sum

***

### cursor?

> `optional` **cursor?**: [`PetPostWhereUniqueInput`](PetPostWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17238

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the start position

***

### orderBy?

> `optional` **orderBy?**: [`PetPostOrderByWithRelationInput`](PetPostOrderByWithRelationInput.md) \| [`PetPostOrderByWithRelationInput`](PetPostOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:17232

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of PetPosts to fetch.

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:17250

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` PetPosts.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:17244

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` PetPosts from the position of the cursor.

***

### where?

> `optional` **where?**: [`PetPostWhereInput`](PetPostWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17226

Filter which PetPost to aggregate.
