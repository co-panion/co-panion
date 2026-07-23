[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalBreedFindManyArgs

# Type Alias: AnimalBreedFindManyArgs\<ExtArgs\>

> **AnimalBreedFindManyArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:9036

AnimalBreed findMany

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AnimalBreedWhereUniqueInput`](AnimalBreedWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:9060

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for listing AnimalBreeds.

***

### distinct?

> `optional` **distinct?**: [`AnimalBreedScalarFieldEnum`](AnimalBreedScalarFieldEnum.md) \| [`AnimalBreedScalarFieldEnum`](AnimalBreedScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:9078

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of AnimalBreeds.

***

### omit?

> `optional` **omit?**: [`AnimalBreedOmit`](AnimalBreedOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:9044

Omit specific fields from the AnimalBreed

***

### orderBy?

> `optional` **orderBy?**: [`AnimalBreedOrderByWithRelationInput`](AnimalBreedOrderByWithRelationInput.md) \| [`AnimalBreedOrderByWithRelationInput`](AnimalBreedOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:9054

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AnimalBreeds to fetch.

***

### select?

> `optional` **select?**: [`AnimalBreedSelect`](AnimalBreedSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:9040

Select specific fields to fetch from the AnimalBreed

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:9072

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AnimalBreeds.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:9066

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AnimalBreeds from the position of the cursor.

***

### where?

> `optional` **where?**: [`AnimalBreedWhereInput`](AnimalBreedWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:9048

Filter, which AnimalBreeds to fetch.
