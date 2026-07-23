[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalFindFirstArgs

# Type Alias: AnimalFindFirstArgs\<ExtArgs\>

> **AnimalFindFirstArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:6850

Animal findFirst

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AnimalWhereUniqueInput`](AnimalWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:6878

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for Animals.

***

### distinct?

> `optional` **distinct?**: [`AnimalScalarFieldEnum`](AnimalScalarFieldEnum.md) \| [`AnimalScalarFieldEnum`](AnimalScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:6896

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of Animals.

***

### include?

> `optional` **include?**: [`AnimalInclude`](AnimalInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:6862

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AnimalOmit`](AnimalOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:6858

Omit specific fields from the Animal

***

### orderBy?

> `optional` **orderBy?**: [`AnimalOrderByWithRelationInput`](AnimalOrderByWithRelationInput.md) \| [`AnimalOrderByWithRelationInput`](AnimalOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:6872

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Animals to fetch.

***

### select?

> `optional` **select?**: [`AnimalSelect`](AnimalSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:6854

Select specific fields to fetch from the Animal

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:6890

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Animals.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:6884

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Animals from the position of the cursor.

***

### where?

> `optional` **where?**: [`AnimalWhereInput`](AnimalWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:6866

Filter, which Animal to fetch.
