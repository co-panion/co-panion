[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserUpdateManyAndReturnArgs

# Type Alias: UserUpdateManyAndReturnArgs\<ExtArgs\>

> **UserUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:3593

User updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`UserUpdateManyMutationInput`](UserUpdateManyMutationInput.md), [`UserUncheckedUpdateManyInput`](UserUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:3605

The data used to update Users.

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:3613

Limit how many Users to update.

***

### omit?

> `optional` **omit?**: [`UserOmit`](UserOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:3601

Omit specific fields from the User

***

### select?

> `optional` **select?**: [`UserSelectUpdateManyAndReturn`](UserSelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:3597

Select specific fields to fetch from the User

***

### where?

> `optional` **where?**: [`UserWhereInput`](UserWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:3609

Filter which Users to update
