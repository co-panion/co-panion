[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / InquiryUpdateManyAndReturnArgs

# Type Alias: InquiryUpdateManyAndReturnArgs\<ExtArgs\>

> **InquiryUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:20268

Inquiry updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`InquiryUpdateManyMutationInput`](InquiryUpdateManyMutationInput.md), [`InquiryUncheckedUpdateManyInput`](InquiryUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:20280

The data used to update Inquiries.

***

### include?

> `optional` **include?**: [`InquiryIncludeUpdateManyAndReturn`](InquiryIncludeUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20292

Choose, which related nodes to fetch as well

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:20288

Limit how many Inquiries to update.

***

### omit?

> `optional` **omit?**: [`InquiryOmit`](InquiryOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20276

Omit specific fields from the Inquiry

***

### select?

> `optional` **select?**: [`InquirySelectUpdateManyAndReturn`](InquirySelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20272

Select specific fields to fetch from the Inquiry

***

### where?

> `optional` **where?**: [`InquiryWhereInput`](InquiryWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:20284

Filter which Inquiries to update
