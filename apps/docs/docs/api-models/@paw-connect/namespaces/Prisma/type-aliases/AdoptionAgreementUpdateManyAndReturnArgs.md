[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionAgreementUpdateManyAndReturnArgs

# Type Alias: AdoptionAgreementUpdateManyAndReturnArgs\<ExtArgs\>

> **AdoptionAgreementUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:17025

AdoptionAgreement updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AdoptionAgreementUpdateManyMutationInput`](AdoptionAgreementUpdateManyMutationInput.md), [`AdoptionAgreementUncheckedUpdateManyInput`](AdoptionAgreementUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17037

The data used to update AdoptionAgreements.

***

### include?

> `optional` **include?**: [`AdoptionAgreementIncludeUpdateManyAndReturn`](AdoptionAgreementIncludeUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:17049

Choose, which related nodes to fetch as well

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:17045

Limit how many AdoptionAgreements to update.

***

### omit?

> `optional` **omit?**: [`AdoptionAgreementOmit`](AdoptionAgreementOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:17033

Omit specific fields from the AdoptionAgreement

***

### select?

> `optional` **select?**: [`AdoptionAgreementSelectUpdateManyAndReturn`](AdoptionAgreementSelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:17029

Select specific fields to fetch from the AdoptionAgreement

***

### where?

> `optional` **where?**: [`AdoptionAgreementWhereInput`](AdoptionAgreementWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17041

Filter which AdoptionAgreements to update
