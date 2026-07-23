[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalSpeciesFindFirstArgs

# Type Alias: AnimalSpeciesFindFirstArgs\<ExtArgs\>

> **AnimalSpeciesFindFirstArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:7928

AnimalSpecies findFirst

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AnimalSpeciesWhereUniqueInput`](AnimalSpeciesWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:7952

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for AnimalSpecies.

***

### distinct?

> `optional` **distinct?**: [`AnimalSpeciesScalarFieldEnum`](AnimalSpeciesScalarFieldEnum.md) \| [`AnimalSpeciesScalarFieldEnum`](AnimalSpeciesScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:7970

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of AnimalSpecies.

***

### omit?

> `optional` **omit?**: [`AnimalSpeciesOmit`](AnimalSpeciesOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7936

Omit specific fields from the AnimalSpecies

***

### orderBy?

> `optional` **orderBy?**: [`AnimalSpeciesOrderByWithRelationInput`](AnimalSpeciesOrderByWithRelationInput.md) \| [`AnimalSpeciesOrderByWithRelationInput`](AnimalSpeciesOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:7946

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AnimalSpecies to fetch.

***

### select?

> `optional` **select?**: [`AnimalSpeciesSelect`](AnimalSpeciesSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7932

Select specific fields to fetch from the AnimalSpecies

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:7964

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AnimalSpecies.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:7958

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AnimalSpecies from the position of the cursor.

***

### where?

> `optional` **where?**: [`AnimalSpeciesWhereInput`](AnimalSpeciesWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:7940

Filter, which AnimalSpecies to fetch.
