[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalSpeciesAggregateArgs

# Type Alias: AnimalSpeciesAggregateArgs\<ExtArgs\>

> **AnimalSpeciesAggregateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:7322

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### \_avg?

> `optional` **\_avg?**: [`AnimalSpeciesAvgAggregateInputType`](AnimalSpeciesAvgAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:7362

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to average

***

### \_count?

> `optional` **\_count?**: `true` \| [`AnimalSpeciesCountAggregateInputType`](AnimalSpeciesCountAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:7356

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Count returned AnimalSpecies

***

### \_max?

> `optional` **\_max?**: [`AnimalSpeciesMaxAggregateInputType`](AnimalSpeciesMaxAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:7380

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the maximum value

***

### \_min?

> `optional` **\_min?**: [`AnimalSpeciesMinAggregateInputType`](AnimalSpeciesMinAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:7374

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the minimum value

***

### \_sum?

> `optional` **\_sum?**: [`AnimalSpeciesSumAggregateInputType`](AnimalSpeciesSumAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:7368

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to sum

***

### cursor?

> `optional` **cursor?**: [`AnimalSpeciesWhereUniqueInput`](AnimalSpeciesWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:7338

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the start position

***

### orderBy?

> `optional` **orderBy?**: [`AnimalSpeciesOrderByWithRelationInput`](AnimalSpeciesOrderByWithRelationInput.md) \| [`AnimalSpeciesOrderByWithRelationInput`](AnimalSpeciesOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:7332

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AnimalSpecies to fetch.

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:7350

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AnimalSpecies.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:7344

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AnimalSpecies from the position of the cursor.

***

### where?

> `optional` **where?**: [`AnimalSpeciesWhereInput`](AnimalSpeciesWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:7326

Filter which AnimalSpecies to aggregate.
