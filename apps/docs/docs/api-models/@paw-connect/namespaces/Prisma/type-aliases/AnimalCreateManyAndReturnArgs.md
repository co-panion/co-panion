[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalCreateManyAndReturnArgs

# Type Alias: AnimalCreateManyAndReturnArgs\<ExtArgs\>

> **AnimalCreateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:7039

Animal createManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`AnimalCreateManyInput`](AnimalCreateManyInput.md) \| [`AnimalCreateManyInput`](AnimalCreateManyInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:7051

The data used to create many Animals.

***

### include?

> `optional` **include?**: [`AnimalIncludeCreateManyAndReturn`](AnimalIncludeCreateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7056

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AnimalOmit`](AnimalOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7047

Omit specific fields from the Animal

***

### select?

> `optional` **select?**: [`AnimalSelectCreateManyAndReturn`](AnimalSelectCreateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7043

Select specific fields to fetch from the Animal

***

### skipDuplicates?

> `optional` **skipDuplicates?**: `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:7052
