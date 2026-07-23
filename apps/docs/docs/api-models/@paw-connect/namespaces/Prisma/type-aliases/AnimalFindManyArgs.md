[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalFindManyArgs

# Type Alias: AnimalFindManyArgs\<ExtArgs\>

> **AnimalFindManyArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:6954

Animal findMany

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AnimalWhereUniqueInput`](AnimalWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:6982

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for listing Animals.

***

### distinct?

> `optional` **distinct?**: [`AnimalScalarFieldEnum`](AnimalScalarFieldEnum.md) \| [`AnimalScalarFieldEnum`](AnimalScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:7000

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of Animals.

***

### include?

> `optional` **include?**: [`AnimalInclude`](AnimalInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:6966

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AnimalOmit`](AnimalOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:6962

Omit specific fields from the Animal

***

### orderBy?

> `optional` **orderBy?**: [`AnimalOrderByWithRelationInput`](AnimalOrderByWithRelationInput.md) \| [`AnimalOrderByWithRelationInput`](AnimalOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:6976

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Animals to fetch.

***

### select?

> `optional` **select?**: [`AnimalSelect`](AnimalSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:6958

Select specific fields to fetch from the Animal

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:6994

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Animals.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:6988

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Animals from the position of the cursor.

***

### where?

> `optional` **where?**: [`AnimalWhereInput`](AnimalWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:6970

Filter, which Animals to fetch.
