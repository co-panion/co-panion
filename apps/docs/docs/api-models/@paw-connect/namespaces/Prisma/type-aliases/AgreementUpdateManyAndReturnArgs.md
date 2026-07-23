[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AgreementUpdateManyAndReturnArgs

# Type Alias: AgreementUpdateManyAndReturnArgs\<ExtArgs\>

> **AgreementUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:14847

Agreement updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AgreementUpdateManyMutationInput`](AgreementUpdateManyMutationInput.md), [`AgreementUncheckedUpdateManyInput`](AgreementUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14859

The data used to update Agreements.

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:14867

Limit how many Agreements to update.

***

### omit?

> `optional` **omit?**: [`AgreementOmit`](AgreementOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:14855

Omit specific fields from the Agreement

***

### select?

> `optional` **select?**: [`AgreementSelectUpdateManyAndReturn`](AgreementSelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:14851

Select specific fields to fetch from the Agreement

***

### where?

> `optional` **where?**: [`AgreementWhereInput`](AgreementWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:14863

Filter which Agreements to update
