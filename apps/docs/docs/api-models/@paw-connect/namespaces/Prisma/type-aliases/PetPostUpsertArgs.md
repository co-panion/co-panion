[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostUpsertArgs

# Type Alias: PetPostUpsertArgs\<ExtArgs\>

> **PetPostUpsertArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:18153

PetPost upsert

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### create

> **create**: [`XOR`](XOR.md)\<[`PetPostCreateInput`](PetPostCreateInput.md), [`PetPostUncheckedCreateInput`](PetPostUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18173

In case the PetPost found by the `where` argument doesn't exist, create a new PetPost with this data.

***

### include?

> `optional` **include?**: [`PetPostInclude`](PetPostInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:18165

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`PetPostOmit`](PetPostOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:18161

Omit specific fields from the PetPost

***

### select?

> `optional` **select?**: [`PetPostSelect`](PetPostSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:18157

Select specific fields to fetch from the PetPost

***

### update

> **update**: [`XOR`](XOR.md)\<[`PetPostUpdateInput`](PetPostUpdateInput.md), [`PetPostUncheckedUpdateInput`](PetPostUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18177

In case the PetPost was found with the provided `where` argument, update it with this data.

***

### where

> **where**: [`PetPostWhereUniqueInput`](PetPostWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:18169

The filter to search for the PetPost to update in case it exists.
