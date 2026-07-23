[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalSpeciesFindFirstOrThrowArgs

# Type Alias: AnimalSpeciesFindFirstOrThrowArgs\<ExtArgs\>

> **AnimalSpeciesFindFirstOrThrowArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:7976

AnimalSpecies findFirstOrThrow

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AnimalSpeciesWhereUniqueInput`](AnimalSpeciesWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:8000

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for AnimalSpecies.

***

### distinct?

> `optional` **distinct?**: [`AnimalSpeciesScalarFieldEnum`](AnimalSpeciesScalarFieldEnum.md) \| [`AnimalSpeciesScalarFieldEnum`](AnimalSpeciesScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:8018

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of AnimalSpecies.

***

### omit?

> `optional` **omit?**: [`AnimalSpeciesOmit`](AnimalSpeciesOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7984

Omit specific fields from the AnimalSpecies

***

### orderBy?

> `optional` **orderBy?**: [`AnimalSpeciesOrderByWithRelationInput`](AnimalSpeciesOrderByWithRelationInput.md) \| [`AnimalSpeciesOrderByWithRelationInput`](AnimalSpeciesOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:7994

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AnimalSpecies to fetch.

***

### select?

> `optional` **select?**: [`AnimalSpeciesSelect`](AnimalSpeciesSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7980

Select specific fields to fetch from the AnimalSpecies

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:8012

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AnimalSpecies.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:8006

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AnimalSpecies from the position of the cursor.

***

### where?

> `optional` **where?**: [`AnimalSpeciesWhereInput`](AnimalSpeciesWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:7988

Filter, which AnimalSpecies to fetch.
