[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserAgreementUpsertArgs

# Type Alias: UserAgreementUpsertArgs\<ExtArgs\>

> **UserAgreementUpsertArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:15958

UserAgreement upsert

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### create

> **create**: [`XOR`](XOR.md)\<[`UserAgreementCreateInput`](UserAgreementCreateInput.md), [`UserAgreementUncheckedCreateInput`](UserAgreementUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15978

In case the UserAgreement found by the `where` argument doesn't exist, create a new UserAgreement with this data.

***

### include?

> `optional` **include?**: [`UserAgreementInclude`](UserAgreementInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15970

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`UserAgreementOmit`](UserAgreementOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15966

Omit specific fields from the UserAgreement

***

### select?

> `optional` **select?**: [`UserAgreementSelect`](UserAgreementSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15962

Select specific fields to fetch from the UserAgreement

***

### update

> **update**: [`XOR`](XOR.md)\<[`UserAgreementUpdateInput`](UserAgreementUpdateInput.md), [`UserAgreementUncheckedUpdateInput`](UserAgreementUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15982

In case the UserAgreement was found with the provided `where` argument, update it with this data.

***

### where

> **where**: [`UserAgreementWhereUniqueInput`](UserAgreementWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:15974

The filter to search for the UserAgreement to update in case it exists.
