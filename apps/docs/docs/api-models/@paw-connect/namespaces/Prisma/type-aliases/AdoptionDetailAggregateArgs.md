[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionDetailAggregateArgs

# Type Alias: AdoptionDetailAggregateArgs\<ExtArgs\>

> **AdoptionDetailAggregateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:12814

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### \_count?

> `optional` **\_count?**: `true` \| [`AdoptionDetailCountAggregateInputType`](AdoptionDetailCountAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:12848

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Count returned AdoptionDetails

***

### \_max?

> `optional` **\_max?**: [`AdoptionDetailMaxAggregateInputType`](AdoptionDetailMaxAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:12860

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the maximum value

***

### \_min?

> `optional` **\_min?**: [`AdoptionDetailMinAggregateInputType`](AdoptionDetailMinAggregateInputType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:12854

[Aggregation Docs](https://www.prisma.io/docs/concepts/components/prisma-client/aggregations)

Select which fields to find the minimum value

***

### cursor?

> `optional` **cursor?**: [`AdoptionDetailWhereUniqueInput`](AdoptionDetailWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:12830

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the start position

***

### orderBy?

> `optional` **orderBy?**: [`AdoptionDetailOrderByWithRelationInput`](AdoptionDetailOrderByWithRelationInput.md) \| [`AdoptionDetailOrderByWithRelationInput`](AdoptionDetailOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:12824

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AdoptionDetails to fetch.

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:12842

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AdoptionDetails.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:12836

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AdoptionDetails from the position of the cursor.

***

### where?

> `optional` **where?**: [`AdoptionDetailWhereInput`](AdoptionDetailWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:12818

Filter which AdoptionDetail to aggregate.
