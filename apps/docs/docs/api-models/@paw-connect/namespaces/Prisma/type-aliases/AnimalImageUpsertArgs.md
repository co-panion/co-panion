[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalImageUpsertArgs

# Type Alias: AnimalImageUpsertArgs\<ExtArgs\>

> **AnimalImageUpsertArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:11406

AnimalImage upsert

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### create

> **create**: [`XOR`](XOR.md)\<[`AnimalImageCreateInput`](AnimalImageCreateInput.md), [`AnimalImageUncheckedCreateInput`](AnimalImageUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11426

In case the AnimalImage found by the `where` argument doesn't exist, create a new AnimalImage with this data.

***

### include?

> `optional` **include?**: [`AnimalImageInclude`](AnimalImageInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:11418

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AnimalImageOmit`](AnimalImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:11414

Omit specific fields from the AnimalImage

***

### select?

> `optional` **select?**: [`AnimalImageSelect`](AnimalImageSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:11410

Select specific fields to fetch from the AnimalImage

***

### update

> **update**: [`XOR`](XOR.md)\<[`AnimalImageUpdateInput`](AnimalImageUpdateInput.md), [`AnimalImageUncheckedUpdateInput`](AnimalImageUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11430

In case the AnimalImage was found with the provided `where` argument, update it with this data.

***

### where

> **where**: [`AnimalImageWhereUniqueInput`](AnimalImageWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:11422

The filter to search for the AnimalImage to update in case it exists.
