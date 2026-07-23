[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / InquiryCreateArgs

# Type Alias: InquiryCreateArgs\<ExtArgs\>

> **InquiryCreateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:20168

Inquiry create

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`InquiryCreateInput`](InquiryCreateInput.md), [`InquiryUncheckedCreateInput`](InquiryUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:20184

The data needed to create a Inquiry.

***

### include?

> `optional` **include?**: [`InquiryInclude`](InquiryInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20180

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`InquiryOmit`](InquiryOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20176

Omit specific fields from the Inquiry

***

### select?

> `optional` **select?**: [`InquirySelect`](InquirySelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20172

Select specific fields to fetch from the Inquiry
