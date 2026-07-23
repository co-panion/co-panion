[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalImageCreateArgs

# Type Alias: AnimalImageCreateArgs\<ExtArgs\>

> **AnimalImageCreateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:11276

AnimalImage create

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AnimalImageCreateInput`](AnimalImageCreateInput.md), [`AnimalImageUncheckedCreateInput`](AnimalImageUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11292

The data needed to create a AnimalImage.

***

### include?

> `optional` **include?**: [`AnimalImageInclude`](AnimalImageInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:11288

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AnimalImageOmit`](AnimalImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:11284

Omit specific fields from the AnimalImage

***

### select?

> `optional` **select?**: [`AnimalImageSelect`](AnimalImageSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:11280

Select specific fields to fetch from the AnimalImage
