[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionDetailFindFirstArgs

# Type Alias: AdoptionDetailFindFirstArgs\<ExtArgs\>

> **AdoptionDetailFindFirstArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:13567

AdoptionDetail findFirst

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AdoptionDetailWhereUniqueInput`](AdoptionDetailWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:13595

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for AdoptionDetails.

***

### distinct?

> `optional` **distinct?**: [`AdoptionDetailScalarFieldEnum`](AdoptionDetailScalarFieldEnum.md) \| [`AdoptionDetailScalarFieldEnum`](AdoptionDetailScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:13613

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of AdoptionDetails.

***

### include?

> `optional` **include?**: [`AdoptionDetailInclude`](AdoptionDetailInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13579

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AdoptionDetailOmit`](AdoptionDetailOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13575

Omit specific fields from the AdoptionDetail

***

### orderBy?

> `optional` **orderBy?**: [`AdoptionDetailOrderByWithRelationInput`](AdoptionDetailOrderByWithRelationInput.md) \| [`AdoptionDetailOrderByWithRelationInput`](AdoptionDetailOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:13589

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AdoptionDetails to fetch.

***

### select?

> `optional` **select?**: [`AdoptionDetailSelect`](AdoptionDetailSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13571

Select specific fields to fetch from the AdoptionDetail

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:13607

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AdoptionDetails.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:13601

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AdoptionDetails from the position of the cursor.

***

### where?

> `optional` **where?**: [`AdoptionDetailWhereInput`](AdoptionDetailWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:13583

Filter, which AdoptionDetail to fetch.
