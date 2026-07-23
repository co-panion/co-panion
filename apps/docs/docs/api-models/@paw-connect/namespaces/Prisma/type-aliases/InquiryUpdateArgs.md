[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / InquiryUpdateArgs

# Type Alias: InquiryUpdateArgs\<ExtArgs\>

> **InquiryUpdateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:20224

Inquiry update

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`InquiryUpdateInput`](InquiryUpdateInput.md), [`InquiryUncheckedUpdateInput`](InquiryUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:20240

The data needed to update a Inquiry.

***

### include?

> `optional` **include?**: [`InquiryInclude`](InquiryInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20236

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`InquiryOmit`](InquiryOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20232

Omit specific fields from the Inquiry

***

### select?

> `optional` **select?**: [`InquirySelect`](InquirySelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20228

Select specific fields to fetch from the Inquiry

***

### where

> **where**: [`InquiryWhereUniqueInput`](InquiryWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:20244

Choose, which Inquiry to update.
