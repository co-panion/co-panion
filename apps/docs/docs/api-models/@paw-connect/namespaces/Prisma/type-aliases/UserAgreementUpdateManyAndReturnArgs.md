[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserAgreementUpdateManyAndReturnArgs

# Type Alias: UserAgreementUpdateManyAndReturnArgs\<ExtArgs\>

> **UserAgreementUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:15928

UserAgreement updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`UserAgreementUpdateManyMutationInput`](UserAgreementUpdateManyMutationInput.md), [`UserAgreementUncheckedUpdateManyInput`](UserAgreementUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15940

The data used to update UserAgreements.

***

### include?

> `optional` **include?**: [`UserAgreementIncludeUpdateManyAndReturn`](UserAgreementIncludeUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15952

Choose, which related nodes to fetch as well

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:15948

Limit how many UserAgreements to update.

***

### omit?

> `optional` **omit?**: [`UserAgreementOmit`](UserAgreementOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15936

Omit specific fields from the UserAgreement

***

### select?

> `optional` **select?**: [`UserAgreementSelectUpdateManyAndReturn`](UserAgreementSelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15932

Select specific fields to fetch from the UserAgreement

***

### where?

> `optional` **where?**: [`UserAgreementWhereInput`](UserAgreementWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:15944

Filter which UserAgreements to update
