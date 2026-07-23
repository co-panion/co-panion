[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / InquiryUpsertArgs

# Type Alias: InquiryUpsertArgs\<ExtArgs\>

> **InquiryUpsertArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:20298

Inquiry upsert

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### create

> **create**: [`XOR`](XOR.md)\<[`InquiryCreateInput`](InquiryCreateInput.md), [`InquiryUncheckedCreateInput`](InquiryUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:20318

In case the Inquiry found by the `where` argument doesn't exist, create a new Inquiry with this data.

***

### include?

> `optional` **include?**: [`InquiryInclude`](InquiryInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20310

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`InquiryOmit`](InquiryOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20306

Omit specific fields from the Inquiry

***

### select?

> `optional` **select?**: [`InquirySelect`](InquirySelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20302

Select specific fields to fetch from the Inquiry

***

### update

> **update**: [`XOR`](XOR.md)\<[`InquiryUpdateInput`](InquiryUpdateInput.md), [`InquiryUncheckedUpdateInput`](InquiryUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:20322

In case the Inquiry was found with the provided `where` argument, update it with this data.

***

### where

> **where**: [`InquiryWhereUniqueInput`](InquiryWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:20314

The filter to search for the Inquiry to update in case it exists.
