[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostImageFindFirstOrThrowArgs

# Type Alias: PetPostImageFindFirstOrThrowArgs\<ExtArgs\>

> **PetPostImageFindFirstOrThrowArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:19014

PetPostImage findFirstOrThrow

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`PetPostImageWhereUniqueInput`](PetPostImageWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:19042

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for PetPostImages.

***

### distinct?

> `optional` **distinct?**: [`PetPostImageScalarFieldEnum`](PetPostImageScalarFieldEnum.md) \| [`PetPostImageScalarFieldEnum`](PetPostImageScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:19060

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of PetPostImages.

***

### include?

> `optional` **include?**: [`PetPostImageInclude`](PetPostImageInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:19026

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`PetPostImageOmit`](PetPostImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:19022

Omit specific fields from the PetPostImage

***

### orderBy?

> `optional` **orderBy?**: [`PetPostImageOrderByWithRelationInput`](PetPostImageOrderByWithRelationInput.md) \| [`PetPostImageOrderByWithRelationInput`](PetPostImageOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:19036

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of PetPostImages to fetch.

***

### select?

> `optional` **select?**: [`PetPostImageSelect`](PetPostImageSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:19018

Select specific fields to fetch from the PetPostImage

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:19054

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` PetPostImages.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:19048

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` PetPostImages from the position of the cursor.

***

### where?

> `optional` **where?**: [`PetPostImageWhereInput`](PetPostImageWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:19030

Filter, which PetPostImage to fetch.
