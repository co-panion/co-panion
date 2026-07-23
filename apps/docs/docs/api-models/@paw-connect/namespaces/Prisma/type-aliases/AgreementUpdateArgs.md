[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AgreementUpdateArgs

# Type Alias: AgreementUpdateArgs\<ExtArgs\>

> **AgreementUpdateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:14807

Agreement update

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AgreementUpdateInput`](AgreementUpdateInput.md), [`AgreementUncheckedUpdateInput`](AgreementUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14819

The data needed to update a Agreement.

***

### omit?

> `optional` **omit?**: [`AgreementOmit`](AgreementOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:14815

Omit specific fields from the Agreement

***

### select?

> `optional` **select?**: [`AgreementSelect`](AgreementSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:14811

Select specific fields to fetch from the Agreement

***

### where

> **where**: [`AgreementWhereUniqueInput`](AgreementWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:14823

Choose, which Agreement to update.
