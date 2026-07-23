[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalSpeciesFindManyArgs

# Type Alias: AnimalSpeciesFindManyArgs\<ExtArgs\>

> **AnimalSpeciesFindManyArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:8024

AnimalSpecies findMany

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AnimalSpeciesWhereUniqueInput`](AnimalSpeciesWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:8048

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for listing AnimalSpecies.

***

### distinct?

> `optional` **distinct?**: [`AnimalSpeciesScalarFieldEnum`](AnimalSpeciesScalarFieldEnum.md) \| [`AnimalSpeciesScalarFieldEnum`](AnimalSpeciesScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:8066

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of AnimalSpecies.

***

### omit?

> `optional` **omit?**: [`AnimalSpeciesOmit`](AnimalSpeciesOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:8032

Omit specific fields from the AnimalSpecies

***

### orderBy?

> `optional` **orderBy?**: [`AnimalSpeciesOrderByWithRelationInput`](AnimalSpeciesOrderByWithRelationInput.md) \| [`AnimalSpeciesOrderByWithRelationInput`](AnimalSpeciesOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:8042

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AnimalSpecies to fetch.

***

### select?

> `optional` **select?**: [`AnimalSpeciesSelect`](AnimalSpeciesSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:8028

Select specific fields to fetch from the AnimalSpecies

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:8060

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AnimalSpecies.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:8054

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AnimalSpecies from the position of the cursor.

***

### where?

> `optional` **where?**: [`AnimalSpeciesWhereInput`](AnimalSpeciesWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:8036

Filter, which AnimalSpecies to fetch.
