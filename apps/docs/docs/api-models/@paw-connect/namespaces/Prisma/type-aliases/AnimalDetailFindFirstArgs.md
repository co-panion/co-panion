[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalDetailFindFirstArgs

# Type Alias: AnimalDetailFindFirstArgs\<ExtArgs\>

> **AnimalDetailFindFirstArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:10049

AnimalDetail findFirst

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AnimalDetailWhereUniqueInput`](AnimalDetailWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:10077

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for AnimalDetails.

***

### distinct?

> `optional` **distinct?**: [`AnimalDetailScalarFieldEnum`](AnimalDetailScalarFieldEnum.md) \| [`AnimalDetailScalarFieldEnum`](AnimalDetailScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:10095

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of AnimalDetails.

***

### include?

> `optional` **include?**: [`AnimalDetailInclude`](AnimalDetailInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:10061

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AnimalDetailOmit`](AnimalDetailOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:10057

Omit specific fields from the AnimalDetail

***

### orderBy?

> `optional` **orderBy?**: [`AnimalDetailOrderByWithRelationInput`](AnimalDetailOrderByWithRelationInput.md) \| [`AnimalDetailOrderByWithRelationInput`](AnimalDetailOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:10071

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of AnimalDetails to fetch.

***

### select?

> `optional` **select?**: [`AnimalDetailSelect`](AnimalDetailSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:10053

Select specific fields to fetch from the AnimalDetail

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:10089

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` AnimalDetails.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:10083

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` AnimalDetails from the position of the cursor.

***

### where?

> `optional` **where?**: [`AnimalDetailWhereInput`](AnimalDetailWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:10065

Filter, which AnimalDetail to fetch.
