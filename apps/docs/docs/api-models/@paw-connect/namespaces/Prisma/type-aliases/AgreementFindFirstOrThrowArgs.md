[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AgreementFindFirstOrThrowArgs

# Type Alias: AgreementFindFirstOrThrowArgs\<ExtArgs\>

> **AgreementFindFirstOrThrowArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:14663

Agreement findFirstOrThrow

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AgreementWhereUniqueInput`](AgreementWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:14687

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for Agreements.

***

### distinct?

> `optional` **distinct?**: [`AgreementScalarFieldEnum`](AgreementScalarFieldEnum.md) \| [`AgreementScalarFieldEnum`](AgreementScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:14705

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of Agreements.

***

### omit?

> `optional` **omit?**: [`AgreementOmit`](AgreementOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:14671

Omit specific fields from the Agreement

***

### orderBy?

> `optional` **orderBy?**: [`AgreementOrderByWithRelationInput`](AgreementOrderByWithRelationInput.md) \| [`AgreementOrderByWithRelationInput`](AgreementOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:14681

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Agreements to fetch.

***

### select?

> `optional` **select?**: [`AgreementSelect`](AgreementSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:14667

Select specific fields to fetch from the Agreement

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:14699

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Agreements.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:14693

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Agreements from the position of the cursor.

***

### where?

> `optional` **where?**: [`AgreementWhereInput`](AgreementWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:14675

Filter, which Agreement to fetch.
