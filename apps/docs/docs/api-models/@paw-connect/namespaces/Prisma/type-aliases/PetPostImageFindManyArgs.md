[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostImageFindManyArgs

# Type Alias: PetPostImageFindManyArgs\<ExtArgs\>

> **PetPostImageFindManyArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:19066

PetPostImage findMany

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`PetPostImageWhereUniqueInput`](PetPostImageWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:19094

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for listing PetPostImages.

***

### distinct?

> `optional` **distinct?**: [`PetPostImageScalarFieldEnum`](PetPostImageScalarFieldEnum.md) \| [`PetPostImageScalarFieldEnum`](PetPostImageScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:19112

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of PetPostImages.

***

### include?

> `optional` **include?**: [`PetPostImageInclude`](PetPostImageInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:19078

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`PetPostImageOmit`](PetPostImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:19074

Omit specific fields from the PetPostImage

***

### orderBy?

> `optional` **orderBy?**: [`PetPostImageOrderByWithRelationInput`](PetPostImageOrderByWithRelationInput.md) \| [`PetPostImageOrderByWithRelationInput`](PetPostImageOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:19088

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of PetPostImages to fetch.

***

### select?

> `optional` **select?**: [`PetPostImageSelect`](PetPostImageSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:19070

Select specific fields to fetch from the PetPostImage

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:19106

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` PetPostImages.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:19100

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` PetPostImages from the position of the cursor.

***

### where?

> `optional` **where?**: [`PetPostImageWhereInput`](PetPostImageWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:19082

Filter, which PetPostImages to fetch.
