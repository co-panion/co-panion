[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserUpdateManyArgs

# Type Alias: UserUpdateManyArgs\<ExtArgs\>

> **UserUpdateManyArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:3575

User updateMany

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`UserUpdateManyMutationInput`](UserUpdateManyMutationInput.md), [`UserUncheckedUpdateManyInput`](UserUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:3579

The data used to update Users.

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:3587

Limit how many Users to update.

***

### where?

> `optional` **where?**: [`UserWhereInput`](UserWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:3583

Filter which Users to update
