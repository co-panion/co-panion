[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterAggregateArgs

# Type Alias: ShelterAggregateArgs\<ExtArgs\>

> **ShelterAggregateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:3864

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### \_count?

> `optional` **\_count?**: `true` \| [`ShelterCountAggregateInputType`](ShelterCountAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:3898

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Count returned Shelters

***

### \_max?

> `optional` **\_max?**: [`ShelterMaxAggregateInputType`](ShelterMaxAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:3910

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the maximum value

***

### \_min?

> `optional` **\_min?**: [`ShelterMinAggregateInputType`](ShelterMinAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:3904

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the minimum value

***

### cursor?

> `optional` **cursor?**: [`ShelterWhereUniqueInput`](ShelterWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:3880

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the start position

***

### orderBy?

> `optional` **orderBy?**: [`ShelterOrderByWithRelationInput`](ShelterOrderByWithRelationInput.md) \| [`ShelterOrderByWithRelationInput`](ShelterOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:3874

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Shelters to fetch.

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:3892

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Shelters.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:3886

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Shelters from the position of the cursor.

***

### where?

> `optional` **where?**: [`ShelterWhereInput`](ShelterWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:3868

Filter which Shelter to aggregate.
