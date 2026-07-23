[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalBreedFindFirstOrThrowArgs

# Type Alias: AnimalBreedFindFirstOrThrowArgs\<ExtArgs\>

> **AnimalBreedFindFirstOrThrowArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:8988

AnimalBreed findFirstOrThrow

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AnimalBreedWhereUniqueInput`](AnimalBreedWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:9012

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for AnimalBreeds.

***

### distinct?

> `optional` **distinct?**: [`AnimalBreedScalarFieldEnum`](AnimalBreedScalarFieldEnum.md) \| [`AnimalBreedScalarFieldEnum`](AnimalBreedScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:9030

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of AnimalBreeds.

***

### omit?

> `optional` **omit?**: [`AnimalBreedOmit`](AnimalBreedOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:8996

Omit specific fields from the AnimalBreed

***

### orderBy?

> `optional` **orderBy?**: [`AnimalBreedOrderByWithRelationInput`](AnimalBreedOrderByWithRelationInput.md) \| [`AnimalBreedOrderByWithRelationInput`](AnimalBreedOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:9006

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AnimalBreeds to fetch.

***

### select?

> `optional` **select?**: [`AnimalBreedSelect`](AnimalBreedSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:8992

Select specific fields to fetch from the AnimalBreed

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:9024

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AnimalBreeds.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:9018

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AnimalBreeds from the position of the cursor.

***

### where?

> `optional` **where?**: [`AnimalBreedWhereInput`](AnimalBreedWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:9000

Filter, which AnimalBreed to fetch.
