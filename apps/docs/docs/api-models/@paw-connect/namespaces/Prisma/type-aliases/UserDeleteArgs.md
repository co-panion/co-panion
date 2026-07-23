[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserDeleteArgs

# Type Alias: UserDeleteArgs\<ExtArgs\>

> **UserDeleteArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:3649

User delete

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### include?

> `optional` **include?**: [`UserInclude`](UserInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:3661

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`UserOmit`](UserOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:3657

Omit specific fields from the User

***

### select?

> `optional` **select?**: [`UserSelect`](UserSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:3653

Select specific fields to fetch from the User

***

### where

> **where**: [`UserWhereUniqueInput`](UserWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:3665

Filter which User to delete.
