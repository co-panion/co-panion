[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionAgreementUpdateArgs

# Type Alias: AdoptionAgreementUpdateArgs\<ExtArgs\>

> **AdoptionAgreementUpdateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:16981

AdoptionAgreement update

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AdoptionAgreementUpdateInput`](AdoptionAgreementUpdateInput.md), [`AdoptionAgreementUncheckedUpdateInput`](AdoptionAgreementUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16997

The data needed to update a AdoptionAgreement.

***

### include?

> `optional` **include?**: [`AdoptionAgreementInclude`](AdoptionAgreementInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:16993

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AdoptionAgreementOmit`](AdoptionAgreementOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:16989

Omit specific fields from the AdoptionAgreement

***

### select?

> `optional` **select?**: [`AdoptionAgreementSelect`](AdoptionAgreementSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:16985

Select specific fields to fetch from the AdoptionAgreement

***

### where

> **where**: [`AdoptionAgreementWhereUniqueInput`](AdoptionAgreementWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17001

Choose, which AdoptionAgreement to update.
