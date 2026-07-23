[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / InquiryFindFirstOrThrowArgs

# Type Alias: InquiryFindFirstOrThrowArgs\<ExtArgs\>

> **InquiryFindFirstOrThrowArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:20064

Inquiry findFirstOrThrow

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`InquiryWhereUniqueInput`](InquiryWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:20092

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for Inquiries.

***

### distinct?

> `optional` **distinct?**: [`InquiryScalarFieldEnum`](InquiryScalarFieldEnum.md) \| [`InquiryScalarFieldEnum`](InquiryScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:20110

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of Inquiries.

***

### include?

> `optional` **include?**: [`InquiryInclude`](InquiryInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20076

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`InquiryOmit`](InquiryOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20072

Omit specific fields from the Inquiry

***

### orderBy?

> `optional` **orderBy?**: [`InquiryOrderByWithRelationInput`](InquiryOrderByWithRelationInput.md) \| [`InquiryOrderByWithRelationInput`](InquiryOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:20086

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Inquiries to fetch.

***

### select?

> `optional` **select?**: [`InquirySelect`](InquirySelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20068

Select specific fields to fetch from the Inquiry

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:20104

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Inquiries.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:20098

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Inquiries from the position of the cursor.

***

### where?

> `optional` **where?**: [`InquiryWhereInput`](InquiryWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:20080

Filter, which Inquiry to fetch.
