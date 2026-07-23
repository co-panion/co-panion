[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / InquiryFindManyArgs

# Type Alias: InquiryFindManyArgs\<ExtArgs\>

> **InquiryFindManyArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:20116

Inquiry findMany

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`InquiryWhereUniqueInput`](InquiryWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:20144

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for listing Inquiries.

***

### distinct?

> `optional` **distinct?**: [`InquiryScalarFieldEnum`](InquiryScalarFieldEnum.md) \| [`InquiryScalarFieldEnum`](InquiryScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:20162

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of Inquiries.

***

### include?

> `optional` **include?**: [`InquiryInclude`](InquiryInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20128

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`InquiryOmit`](InquiryOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20124

Omit specific fields from the Inquiry

***

### orderBy?

> `optional` **orderBy?**: [`InquiryOrderByWithRelationInput`](InquiryOrderByWithRelationInput.md) \| [`InquiryOrderByWithRelationInput`](InquiryOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:20138

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Inquiries to fetch.

***

### select?

> `optional` **select?**: [`InquirySelect`](InquirySelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20120

Select specific fields to fetch from the Inquiry

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:20156

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Inquiries.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:20150

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Inquiries from the position of the cursor.

***

### where?

> `optional` **where?**: [`InquiryWhereInput`](InquiryWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:20132

Filter, which Inquiries to fetch.
