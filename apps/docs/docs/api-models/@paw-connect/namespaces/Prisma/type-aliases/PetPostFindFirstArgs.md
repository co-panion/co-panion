[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostFindFirstArgs

# Type Alias: PetPostFindFirstArgs\<ExtArgs\>

> **PetPostFindFirstArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:17875

PetPost findFirst

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`PetPostWhereUniqueInput`](PetPostWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17903

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for PetPosts.

***

### distinct?

> `optional` **distinct?**: [`PetPostScalarFieldEnum`](PetPostScalarFieldEnum.md) \| [`PetPostScalarFieldEnum`](PetPostScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:17921

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of PetPosts.

***

### include?

> `optional` **include?**: [`PetPostInclude`](PetPostInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:17887

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`PetPostOmit`](PetPostOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:17883

Omit specific fields from the PetPost

***

### orderBy?

> `optional` **orderBy?**: [`PetPostOrderByWithRelationInput`](PetPostOrderByWithRelationInput.md) \| [`PetPostOrderByWithRelationInput`](PetPostOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:17897

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of PetPosts to fetch.

***

### select?

> `optional` **select?**: [`PetPostSelect`](PetPostSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:17879

Select specific fields to fetch from the PetPost

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:17915

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` PetPosts.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:17909

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` PetPosts from the position of the cursor.

***

### where?

> `optional` **where?**: [`PetPostWhereInput`](PetPostWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17891

Filter, which PetPost to fetch.
