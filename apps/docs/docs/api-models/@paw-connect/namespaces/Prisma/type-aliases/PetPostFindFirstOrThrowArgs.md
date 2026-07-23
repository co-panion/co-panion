[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostFindFirstOrThrowArgs

# Type Alias: PetPostFindFirstOrThrowArgs\<ExtArgs\>

> **PetPostFindFirstOrThrowArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:17927

PetPost findFirstOrThrow

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`PetPostWhereUniqueInput`](PetPostWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17955

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for PetPosts.

***

### distinct?

> `optional` **distinct?**: [`PetPostScalarFieldEnum`](PetPostScalarFieldEnum.md) \| [`PetPostScalarFieldEnum`](PetPostScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:17973

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of PetPosts.

***

### include?

> `optional` **include?**: [`PetPostInclude`](PetPostInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:17939

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`PetPostOmit`](PetPostOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:17935

Omit specific fields from the PetPost

***

### orderBy?

> `optional` **orderBy?**: [`PetPostOrderByWithRelationInput`](PetPostOrderByWithRelationInput.md) \| [`PetPostOrderByWithRelationInput`](PetPostOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:17949

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of PetPosts to fetch.

***

### select?

> `optional` **select?**: [`PetPostSelect`](PetPostSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:17931

Select specific fields to fetch from the PetPost

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:17967

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` PetPosts.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:17961

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` PetPosts from the position of the cursor.

***

### where?

> `optional` **where?**: [`PetPostWhereInput`](PetPostWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17943

Filter, which PetPost to fetch.
