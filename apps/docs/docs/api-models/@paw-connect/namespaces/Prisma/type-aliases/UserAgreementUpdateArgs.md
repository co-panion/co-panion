[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserAgreementUpdateArgs

# Type Alias: UserAgreementUpdateArgs\<ExtArgs\>

> **UserAgreementUpdateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:15884

UserAgreement update

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`UserAgreementUpdateInput`](UserAgreementUpdateInput.md), [`UserAgreementUncheckedUpdateInput`](UserAgreementUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15900

The data needed to update a UserAgreement.

***

### include?

> `optional` **include?**: [`UserAgreementInclude`](UserAgreementInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15896

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`UserAgreementOmit`](UserAgreementOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15892

Omit specific fields from the UserAgreement

***

### select?

> `optional` **select?**: [`UserAgreementSelect`](UserAgreementSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15888

Select specific fields to fetch from the UserAgreement

***

### where

> **where**: [`UserAgreementWhereUniqueInput`](UserAgreementWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:15904

Choose, which UserAgreement to update.
