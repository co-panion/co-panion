[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionDetailFindManyArgs

# Type Alias: AdoptionDetailFindManyArgs\<ExtArgs\>

> **AdoptionDetailFindManyArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:13671

AdoptionDetail findMany

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AdoptionDetailWhereUniqueInput`](AdoptionDetailWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:13699

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for listing AdoptionDetails.

***

### distinct?

> `optional` **distinct?**: [`AdoptionDetailScalarFieldEnum`](AdoptionDetailScalarFieldEnum.md) \| [`AdoptionDetailScalarFieldEnum`](AdoptionDetailScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:13717

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of AdoptionDetails.

***

### include?

> `optional` **include?**: [`AdoptionDetailInclude`](AdoptionDetailInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13683

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AdoptionDetailOmit`](AdoptionDetailOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13679

Omit specific fields from the AdoptionDetail

***

### orderBy?

> `optional` **orderBy?**: [`AdoptionDetailOrderByWithRelationInput`](AdoptionDetailOrderByWithRelationInput.md) \| [`AdoptionDetailOrderByWithRelationInput`](AdoptionDetailOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:13693

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AdoptionDetails to fetch.

***

### select?

> `optional` **select?**: [`AdoptionDetailSelect`](AdoptionDetailSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13675

Select specific fields to fetch from the AdoptionDetail

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:13711

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AdoptionDetails.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:13705

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AdoptionDetails from the position of the cursor.

***

### where?

> `optional` **where?**: [`AdoptionDetailWhereInput`](AdoptionDetailWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:13687

Filter, which AdoptionDetails to fetch.
