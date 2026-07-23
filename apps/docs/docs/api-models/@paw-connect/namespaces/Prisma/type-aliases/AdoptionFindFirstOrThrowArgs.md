[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionFindFirstOrThrowArgs

# Type Alias: AdoptionFindFirstOrThrowArgs\<ExtArgs\>

> **AdoptionFindFirstOrThrowArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:12292

Adoption findFirstOrThrow

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AdoptionWhereUniqueInput`](AdoptionWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:12320

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for Adoptions.

***

### distinct?

> `optional` **distinct?**: [`AdoptionScalarFieldEnum`](AdoptionScalarFieldEnum.md) \| [`AdoptionScalarFieldEnum`](AdoptionScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:12338

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of Adoptions.

***

### include?

> `optional` **include?**: [`AdoptionInclude`](AdoptionInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:12304

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AdoptionOmit`](AdoptionOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:12300

Omit specific fields from the Adoption

***

### orderBy?

> `optional` **orderBy?**: [`AdoptionOrderByWithRelationInput`](AdoptionOrderByWithRelationInput.md) \| [`AdoptionOrderByWithRelationInput`](AdoptionOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:12314

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Adoptions to fetch.

***

### select?

> `optional` **select?**: [`AdoptionSelect`](AdoptionSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:12296

Select specific fields to fetch from the Adoption

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:12332

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Adoptions.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:12326

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Adoptions from the position of the cursor.

***

### where?

> `optional` **where?**: [`AdoptionWhereInput`](AdoptionWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:12308

Filter, which Adoption to fetch.
