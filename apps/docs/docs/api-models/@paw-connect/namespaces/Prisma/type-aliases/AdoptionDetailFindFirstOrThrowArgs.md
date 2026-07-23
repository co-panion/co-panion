[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionDetailFindFirstOrThrowArgs

# Type Alias: AdoptionDetailFindFirstOrThrowArgs\<ExtArgs\>

> **AdoptionDetailFindFirstOrThrowArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:13619

AdoptionDetail findFirstOrThrow

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AdoptionDetailWhereUniqueInput`](AdoptionDetailWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:13647

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for AdoptionDetails.

***

### distinct?

> `optional` **distinct?**: [`AdoptionDetailScalarFieldEnum`](AdoptionDetailScalarFieldEnum.md) \| [`AdoptionDetailScalarFieldEnum`](AdoptionDetailScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:13665

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of AdoptionDetails.

***

### include?

> `optional` **include?**: [`AdoptionDetailInclude`](AdoptionDetailInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13631

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AdoptionDetailOmit`](AdoptionDetailOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13627

Omit specific fields from the AdoptionDetail

***

### orderBy?

> `optional` **orderBy?**: [`AdoptionDetailOrderByWithRelationInput`](AdoptionDetailOrderByWithRelationInput.md) \| [`AdoptionDetailOrderByWithRelationInput`](AdoptionDetailOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:13641

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AdoptionDetails to fetch.

***

### select?

> `optional` **select?**: [`AdoptionDetailSelect`](AdoptionDetailSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13623

Select specific fields to fetch from the AdoptionDetail

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:13659

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AdoptionDetails.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:13653

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AdoptionDetails from the position of the cursor.

***

### where?

> `optional` **where?**: [`AdoptionDetailWhereInput`](AdoptionDetailWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:13635

Filter, which AdoptionDetail to fetch.
