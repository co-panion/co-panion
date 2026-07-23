[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterImageFindManyArgs

# Type Alias: ShelterImageFindManyArgs\<ExtArgs\>

> **ShelterImageFindManyArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:5714

ShelterImage findMany

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`ShelterImageWhereUniqueInput`](ShelterImageWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:5742

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for listing ShelterImages.

***

### distinct?

> `optional` **distinct?**: [`ShelterImageScalarFieldEnum`](ShelterImageScalarFieldEnum.md) \| [`ShelterImageScalarFieldEnum`](ShelterImageScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:5760

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of ShelterImages.

***

### include?

> `optional` **include?**: [`ShelterImageInclude`](ShelterImageInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5726

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`ShelterImageOmit`](ShelterImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5722

Omit specific fields from the ShelterImage

***

### orderBy?

> `optional` **orderBy?**: [`ShelterImageOrderByWithRelationInput`](ShelterImageOrderByWithRelationInput.md) \| [`ShelterImageOrderByWithRelationInput`](ShelterImageOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:5736

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of ShelterImages to fetch.

***

### select?

> `optional` **select?**: [`ShelterImageSelect`](ShelterImageSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5718

Select specific fields to fetch from the ShelterImage

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:5754

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` ShelterImages.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:5748

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` ShelterImages from the position of the cursor.

***

### where?

> `optional` **where?**: [`ShelterImageWhereInput`](ShelterImageWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:5730

Filter, which ShelterImages to fetch.
