[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalImageFindFirstArgs

# Type Alias: AnimalImageFindFirstArgs\<ExtArgs\>

> **AnimalImageFindFirstArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:11120

AnimalImage findFirst

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AnimalImageWhereUniqueInput`](AnimalImageWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:11148

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for AnimalImages.

***

### distinct?

> `optional` **distinct?**: [`AnimalImageScalarFieldEnum`](AnimalImageScalarFieldEnum.md) \| [`AnimalImageScalarFieldEnum`](AnimalImageScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:11166

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of AnimalImages.

***

### include?

> `optional` **include?**: [`AnimalImageInclude`](AnimalImageInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:11132

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AnimalImageOmit`](AnimalImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:11128

Omit specific fields from the AnimalImage

***

### orderBy?

> `optional` **orderBy?**: [`AnimalImageOrderByWithRelationInput`](AnimalImageOrderByWithRelationInput.md) \| [`AnimalImageOrderByWithRelationInput`](AnimalImageOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:11142

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AnimalImages to fetch.

***

### select?

> `optional` **select?**: [`AnimalImageSelect`](AnimalImageSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:11124

Select specific fields to fetch from the AnimalImage

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:11160

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AnimalImages.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:11154

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AnimalImages from the position of the cursor.

***

### where?

> `optional` **where?**: [`AnimalImageWhereInput`](AnimalImageWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:11136

Filter, which AnimalImage to fetch.
