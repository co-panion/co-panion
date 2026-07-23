[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AgreementUpsertArgs

# Type Alias: AgreementUpsertArgs\<ExtArgs\>

> **AgreementUpsertArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:14873

Agreement upsert

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### create

> **create**: [`XOR`](XOR.md)\<[`AgreementCreateInput`](AgreementCreateInput.md), [`AgreementUncheckedCreateInput`](AgreementUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14889

In case the Agreement found by the `where` argument doesn't exist, create a new Agreement with this data.

***

### omit?

> `optional` **omit?**: [`AgreementOmit`](AgreementOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:14881

Omit specific fields from the Agreement

***

### select?

> `optional` **select?**: [`AgreementSelect`](AgreementSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:14877

Select specific fields to fetch from the Agreement

***

### update

> **update**: [`XOR`](XOR.md)\<[`AgreementUpdateInput`](AgreementUpdateInput.md), [`AgreementUncheckedUpdateInput`](AgreementUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14893

In case the Agreement was found with the provided `where` argument, update it with this data.

***

### where

> **where**: [`AgreementWhereUniqueInput`](AgreementWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:14885

The filter to search for the Agreement to update in case it exists.
