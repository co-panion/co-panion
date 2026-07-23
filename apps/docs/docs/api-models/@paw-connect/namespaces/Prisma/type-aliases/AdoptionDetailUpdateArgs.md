[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionDetailUpdateArgs

# Type Alias: AdoptionDetailUpdateArgs\<ExtArgs\>

> **AdoptionDetailUpdateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:13779

AdoptionDetail update

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AdoptionDetailUpdateInput`](AdoptionDetailUpdateInput.md), [`AdoptionDetailUncheckedUpdateInput`](AdoptionDetailUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13795

The data needed to update a AdoptionDetail.

***

### include?

> `optional` **include?**: [`AdoptionDetailInclude`](AdoptionDetailInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13791

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AdoptionDetailOmit`](AdoptionDetailOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13787

Omit specific fields from the AdoptionDetail

***

### select?

> `optional` **select?**: [`AdoptionDetailSelect`](AdoptionDetailSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13783

Select specific fields to fetch from the AdoptionDetail

***

### where

> **where**: [`AdoptionDetailWhereUniqueInput`](AdoptionDetailWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:13799

Choose, which AdoptionDetail to update.
