[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionAgreementUpsertArgs

# Type Alias: AdoptionAgreementUpsertArgs\<ExtArgs\>

> **AdoptionAgreementUpsertArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:17055

AdoptionAgreement upsert

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### create

> **create**: [`XOR`](XOR.md)\<[`AdoptionAgreementCreateInput`](AdoptionAgreementCreateInput.md), [`AdoptionAgreementUncheckedCreateInput`](AdoptionAgreementUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17075

In case the AdoptionAgreement found by the `where` argument doesn't exist, create a new AdoptionAgreement with this data.

***

### include?

> `optional` **include?**: [`AdoptionAgreementInclude`](AdoptionAgreementInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:17067

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AdoptionAgreementOmit`](AdoptionAgreementOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:17063

Omit specific fields from the AdoptionAgreement

***

### select?

> `optional` **select?**: [`AdoptionAgreementSelect`](AdoptionAgreementSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:17059

Select specific fields to fetch from the AdoptionAgreement

***

### update

> **update**: [`XOR`](XOR.md)\<[`AdoptionAgreementUpdateInput`](AdoptionAgreementUpdateInput.md), [`AdoptionAgreementUncheckedUpdateInput`](AdoptionAgreementUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17079

In case the AdoptionAgreement was found with the provided `where` argument, update it with this data.

***

### where

> **where**: [`AdoptionAgreementWhereUniqueInput`](AdoptionAgreementWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17071

The filter to search for the AdoptionAgreement to update in case it exists.
