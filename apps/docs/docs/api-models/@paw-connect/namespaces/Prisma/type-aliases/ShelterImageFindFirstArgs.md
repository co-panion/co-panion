[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterImageFindFirstArgs

# Type Alias: ShelterImageFindFirstArgs\<ExtArgs\>

> **ShelterImageFindFirstArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:5610

ShelterImage findFirst

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`ShelterImageWhereUniqueInput`](ShelterImageWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:5638

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for ShelterImages.

***

### distinct?

> `optional` **distinct?**: [`ShelterImageScalarFieldEnum`](ShelterImageScalarFieldEnum.md) \| [`ShelterImageScalarFieldEnum`](ShelterImageScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:5656

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of ShelterImages.

***

### include?

> `optional` **include?**: [`ShelterImageInclude`](ShelterImageInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5622

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`ShelterImageOmit`](ShelterImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5618

Omit specific fields from the ShelterImage

***

### orderBy?

> `optional` **orderBy?**: [`ShelterImageOrderByWithRelationInput`](ShelterImageOrderByWithRelationInput.md) \| [`ShelterImageOrderByWithRelationInput`](ShelterImageOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:5632

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of ShelterImages to fetch.

***

### select?

> `optional` **select?**: [`ShelterImageSelect`](ShelterImageSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5614

Select specific fields to fetch from the ShelterImage

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:5650

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` ShelterImages.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:5644

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` ShelterImages from the position of the cursor.

***

### where?

> `optional` **where?**: [`ShelterImageWhereInput`](ShelterImageWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:5626

Filter, which ShelterImage to fetch.
