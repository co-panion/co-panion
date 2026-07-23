[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserAgreementFindManyArgs

# Type Alias: UserAgreementFindManyArgs\<ExtArgs\>

> **UserAgreementFindManyArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:15776

UserAgreement findMany

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`UserAgreementWhereUniqueInput`](UserAgreementWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:15804

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for listing UserAgreements.

***

### distinct?

> `optional` **distinct?**: [`UserAgreementScalarFieldEnum`](UserAgreementScalarFieldEnum.md) \| [`UserAgreementScalarFieldEnum`](UserAgreementScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:15822

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of UserAgreements.

***

### include?

> `optional` **include?**: [`UserAgreementInclude`](UserAgreementInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15788

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`UserAgreementOmit`](UserAgreementOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15784

Omit specific fields from the UserAgreement

***

### orderBy?

> `optional` **orderBy?**: [`UserAgreementOrderByWithRelationInput`](UserAgreementOrderByWithRelationInput.md) \| [`UserAgreementOrderByWithRelationInput`](UserAgreementOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:15798

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of UserAgreements to fetch.

***

### select?

> `optional` **select?**: [`UserAgreementSelect`](UserAgreementSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:15780

Select specific fields to fetch from the UserAgreement

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:15816

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` UserAgreements.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:15810

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` UserAgreements from the position of the cursor.

***

### where?

> `optional` **where?**: [`UserAgreementWhereInput`](UserAgreementWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:15792

Filter, which UserAgreements to fetch.
