[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserAgreementCreateArgs

# Type Alias: UserAgreementCreateArgs\<ExtArgs\>

> **UserAgreementCreateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:15828

UserAgreement create

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`UserAgreementCreateInput`](UserAgreementCreateInput.md), [`UserAgreementUncheckedCreateInput`](UserAgreementUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15844

The data needed to create a UserAgreement.

***

### include?

> `optional` **include?**: [`UserAgreementInclude`](UserAgreementInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15840

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`UserAgreementOmit`](UserAgreementOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15836

Omit specific fields from the UserAgreement

***

### select?

> `optional` **select?**: [`UserAgreementSelect`](UserAgreementSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15832

Select specific fields to fetch from the UserAgreement
