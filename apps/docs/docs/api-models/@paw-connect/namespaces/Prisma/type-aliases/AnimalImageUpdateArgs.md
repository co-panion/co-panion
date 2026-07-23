[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalImageUpdateArgs

# Type Alias: AnimalImageUpdateArgs\<ExtArgs\>

> **AnimalImageUpdateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:11332

AnimalImage update

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AnimalImageUpdateInput`](AnimalImageUpdateInput.md), [`AnimalImageUncheckedUpdateInput`](AnimalImageUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11348

The data needed to update a AnimalImage.

***

### include?

> `optional` **include?**: [`AnimalImageInclude`](AnimalImageInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:11344

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AnimalImageOmit`](AnimalImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:11340

Omit specific fields from the AnimalImage

***

### select?

> `optional` **select?**: [`AnimalImageSelect`](AnimalImageSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:11336

Select specific fields to fetch from the AnimalImage

***

### where

> **where**: [`AnimalImageWhereUniqueInput`](AnimalImageWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:11352

Choose, which AnimalImage to update.
