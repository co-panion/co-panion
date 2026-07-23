[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AgreementFindManyArgs

# Type Alias: AgreementFindManyArgs\<ExtArgs\>

> **AgreementFindManyArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:14711

Agreement findMany

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AgreementWhereUniqueInput`](AgreementWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:14735

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for listing Agreements.

***

### distinct?

> `optional` **distinct?**: [`AgreementScalarFieldEnum`](AgreementScalarFieldEnum.md) \| [`AgreementScalarFieldEnum`](AgreementScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:14753

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of Agreements.

***

### omit?

> `optional` **omit?**: [`AgreementOmit`](AgreementOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:14719

Omit specific fields from the Agreement

***

### orderBy?

> `optional` **orderBy?**: [`AgreementOrderByWithRelationInput`](AgreementOrderByWithRelationInput.md) \| [`AgreementOrderByWithRelationInput`](AgreementOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:14729

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Agreements to fetch.

***

### select?

> `optional` **select?**: [`AgreementSelect`](AgreementSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:14715

Select specific fields to fetch from the Agreement

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:14747

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Agreements.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:14741

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Agreements from the position of the cursor.

***

### where?

> `optional` **where?**: [`AgreementWhereInput`](AgreementWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:14723

Filter, which Agreements to fetch.
