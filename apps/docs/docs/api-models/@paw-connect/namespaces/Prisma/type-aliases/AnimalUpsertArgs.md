[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalUpsertArgs

# Type Alias: AnimalUpsertArgs\<ExtArgs\>

> **AnimalUpsertArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:7136

Animal upsert

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### create

> **create**: [`XOR`](XOR.md)\<[`AnimalCreateInput`](AnimalCreateInput.md), [`AnimalUncheckedCreateInput`](AnimalUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7156

In case the Animal found by the `where` argument doesn't exist, create a new Animal with this data.

***

### include?

> `optional` **include?**: [`AnimalInclude`](AnimalInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7148

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AnimalOmit`](AnimalOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7144

Omit specific fields from the Animal

***

### select?

> `optional` **select?**: [`AnimalSelect`](AnimalSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7140

Select specific fields to fetch from the Animal

***

### update

> **update**: [`XOR`](XOR.md)\<[`AnimalUpdateInput`](AnimalUpdateInput.md), [`AnimalUncheckedUpdateInput`](AnimalUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7160

In case the Animal was found with the provided `where` argument, update it with this data.

***

### where

> **where**: [`AnimalWhereUniqueInput`](AnimalWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:7152

The filter to search for the Animal to update in case it exists.
