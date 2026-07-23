[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostFindManyArgs

# Type Alias: PetPostFindManyArgs\<ExtArgs\>

> **PetPostFindManyArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:17979

PetPost findMany

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`PetPostWhereUniqueInput`](PetPostWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:18007

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for listing PetPosts.

***

### distinct?

> `optional` **distinct?**: [`PetPostScalarFieldEnum`](PetPostScalarFieldEnum.md) \| [`PetPostScalarFieldEnum`](PetPostScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:18025

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of PetPosts.

***

### include?

> `optional` **include?**: [`PetPostInclude`](PetPostInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:17991

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`PetPostOmit`](PetPostOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:17987

Omit specific fields from the PetPost

***

### orderBy?

> `optional` **orderBy?**: [`PetPostOrderByWithRelationInput`](PetPostOrderByWithRelationInput.md) \| [`PetPostOrderByWithRelationInput`](PetPostOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:18001

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of PetPosts to fetch.

***

### select?

> `optional` **select?**: [`PetPostSelect`](PetPostSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:17983

Select specific fields to fetch from the PetPost

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:18019

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` PetPosts.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:18013

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` PetPosts from the position of the cursor.

***

### where?

> `optional` **where?**: [`PetPostWhereInput`](PetPostWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17995

Filter, which PetPosts to fetch.
