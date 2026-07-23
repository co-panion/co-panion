[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalBreedAggregateArgs

# Type Alias: AnimalBreedAggregateArgs\<ExtArgs\>

> **AnimalBreedAggregateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:8327

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### \_avg?

> `optional` **\_avg?**: [`AnimalBreedAvgAggregateInputType`](AnimalBreedAvgAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:8367

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to average

***

### \_count?

> `optional` **\_count?**: `true` \| [`AnimalBreedCountAggregateInputType`](AnimalBreedCountAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:8361

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Count returned AnimalBreeds

***

### \_max?

> `optional` **\_max?**: [`AnimalBreedMaxAggregateInputType`](AnimalBreedMaxAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:8385

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the maximum value

***

### \_min?

> `optional` **\_min?**: [`AnimalBreedMinAggregateInputType`](AnimalBreedMinAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:8379

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the minimum value

***

### \_sum?

> `optional` **\_sum?**: [`AnimalBreedSumAggregateInputType`](AnimalBreedSumAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:8373

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to sum

***

### cursor?

> `optional` **cursor?**: [`AnimalBreedWhereUniqueInput`](AnimalBreedWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:8343

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the start position

***

### orderBy?

> `optional` **orderBy?**: [`AnimalBreedOrderByWithRelationInput`](AnimalBreedOrderByWithRelationInput.md) \| [`AnimalBreedOrderByWithRelationInput`](AnimalBreedOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:8337

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AnimalBreeds to fetch.

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:8355

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AnimalBreeds.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:8349

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AnimalBreeds from the position of the cursor.

***

### where?

> `optional` **where?**: [`AnimalBreedWhereInput`](AnimalBreedWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:8331

Filter which AnimalBreed to aggregate.
