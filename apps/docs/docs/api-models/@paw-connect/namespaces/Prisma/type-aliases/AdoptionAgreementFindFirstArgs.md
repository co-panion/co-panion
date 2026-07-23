[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionAgreementFindFirstArgs

# Type Alias: AdoptionAgreementFindFirstArgs\<ExtArgs\>

> **AdoptionAgreementFindFirstArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:16769

AdoptionAgreement findFirst

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AdoptionAgreementWhereUniqueInput`](AdoptionAgreementWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:16797

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for AdoptionAgreements.

***

### distinct?

> `optional` **distinct?**: [`AdoptionAgreementScalarFieldEnum`](AdoptionAgreementScalarFieldEnum.md) \| [`AdoptionAgreementScalarFieldEnum`](AdoptionAgreementScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:16815

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of AdoptionAgreements.

***

### include?

> `optional` **include?**: [`AdoptionAgreementInclude`](AdoptionAgreementInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:16781

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AdoptionAgreementOmit`](AdoptionAgreementOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:16777

Omit specific fields from the AdoptionAgreement

***

### orderBy?

> `optional` **orderBy?**: [`AdoptionAgreementOrderByWithRelationInput`](AdoptionAgreementOrderByWithRelationInput.md) \| [`AdoptionAgreementOrderByWithRelationInput`](AdoptionAgreementOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:16791

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AdoptionAgreements to fetch.

***

### select?

> `optional` **select?**: [`AdoptionAgreementSelect`](AdoptionAgreementSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:16773

Select specific fields to fetch from the AdoptionAgreement

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:16809

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AdoptionAgreements.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:16803

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AdoptionAgreements from the position of the cursor.

***

### where?

> `optional` **where?**: [`AdoptionAgreementWhereInput`](AdoptionAgreementWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:16785

Filter, which AdoptionAgreement to fetch.
