[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserAgreementFindFirstOrThrowArgs

# Type Alias: UserAgreementFindFirstOrThrowArgs\<ExtArgs\>

> **UserAgreementFindFirstOrThrowArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:15724

UserAgreement findFirstOrThrow

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`UserAgreementWhereUniqueInput`](UserAgreementWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:15752

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for UserAgreements.

***

### distinct?

> `optional` **distinct?**: [`UserAgreementScalarFieldEnum`](UserAgreementScalarFieldEnum.md) \| [`UserAgreementScalarFieldEnum`](UserAgreementScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:15770

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of UserAgreements.

***

### include?

> `optional` **include?**: [`UserAgreementInclude`](UserAgreementInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15736

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`UserAgreementOmit`](UserAgreementOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15732

Omit specific fields from the UserAgreement

***

### orderBy?

> `optional` **orderBy?**: [`UserAgreementOrderByWithRelationInput`](UserAgreementOrderByWithRelationInput.md) \| [`UserAgreementOrderByWithRelationInput`](UserAgreementOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:15746

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of UserAgreements to fetch.

***

### select?

> `optional` **select?**: [`UserAgreementSelect`](UserAgreementSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15728

Select specific fields to fetch from the UserAgreement

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:15764

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` UserAgreements.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:15758

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` UserAgreements from the position of the cursor.

***

### where?

> `optional` **where?**: [`UserAgreementWhereInput`](UserAgreementWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:15740

Filter, which UserAgreement to fetch.
