[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalFindUniqueOrThrowArgs

# Type Alias: AnimalFindUniqueOrThrowArgs\<ExtArgs\>

> **AnimalFindUniqueOrThrowArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:6828

Animal findUniqueOrThrow

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### include?

> `optional` **include?**: [`AnimalInclude`](AnimalInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:6840

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AnimalOmit`](AnimalOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:6836

Omit specific fields from the Animal

***

### select?

> `optional` **select?**: [`AnimalSelect`](AnimalSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:6832

Select specific fields to fetch from the Animal

***

### where

> **where**: [`AnimalWhereUniqueInput`](AnimalWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:6844

Filter, which Animal to fetch.
