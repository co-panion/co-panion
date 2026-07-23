[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalDeleteArgs

# Type Alias: AnimalDeleteArgs\<ExtArgs\>

> **AnimalDeleteArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:7166

Animal delete

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### include?

> `optional` **include?**: [`AnimalInclude`](AnimalInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7178

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AnimalOmit`](AnimalOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7174

Omit specific fields from the Animal

***

### select?

> `optional` **select?**: [`AnimalSelect`](AnimalSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7170

Select specific fields to fetch from the Animal

***

### where

> **where**: [`AnimalWhereUniqueInput`](AnimalWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:7182

Filter which Animal to delete.
