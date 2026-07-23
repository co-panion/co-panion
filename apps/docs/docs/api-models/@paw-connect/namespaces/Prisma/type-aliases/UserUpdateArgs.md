[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserUpdateArgs

# Type Alias: UserUpdateArgs\<ExtArgs\>

> **UserUpdateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:3549

User update

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`UserUpdateInput`](UserUpdateInput.md), [`UserUncheckedUpdateInput`](UserUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:3565

The data needed to update a User.

***

### include?

> `optional` **include?**: [`UserInclude`](UserInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:3561

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`UserOmit`](UserOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:3557

Omit specific fields from the User

***

### select?

> `optional` **select?**: [`UserSelect`](UserSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:3553

Select specific fields to fetch from the User

***

### where

> **where**: [`UserWhereUniqueInput`](UserWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:3569

Choose, which User to update.
