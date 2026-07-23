[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserFindManyArgs

# Type Alias: UserFindManyArgs\<ExtArgs\>

> **UserFindManyArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:3445

User findMany

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`UserWhereUniqueInput`](UserWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:3473

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for listing Users.

***

### distinct?

> `optional` **distinct?**: [`UserScalarFieldEnum`](UserScalarFieldEnum.md) \| [`UserScalarFieldEnum`](UserScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:3491

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of Users.

***

### include?

> `optional` **include?**: [`UserInclude`](UserInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:3457

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`UserOmit`](UserOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:3453

Omit specific fields from the User

***

### orderBy?

> `optional` **orderBy?**: [`UserOrderByWithRelationInput`](UserOrderByWithRelationInput.md) \| [`UserOrderByWithRelationInput`](UserOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:3467

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Users to fetch.

***

### select?

> `optional` **select?**: [`UserSelect`](UserSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:3449

Select specific fields to fetch from the User

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:3485

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Users.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:3479

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Users from the position of the cursor.

***

### where?

> `optional` **where?**: [`UserWhereInput`](UserWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:3461

Filter, which Users to fetch.
