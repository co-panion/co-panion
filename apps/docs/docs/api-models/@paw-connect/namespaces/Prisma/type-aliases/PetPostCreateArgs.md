[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostCreateArgs

# Type Alias: PetPostCreateArgs\<ExtArgs\>

> **PetPostCreateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:18031

PetPost create

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`PetPostCreateInput`](PetPostCreateInput.md), [`PetPostUncheckedCreateInput`](PetPostUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18047

The data needed to create a PetPost.

***

### include?

> `optional` **include?**: [`PetPostInclude`](PetPostInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:18043

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`PetPostOmit`](PetPostOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:18039

Omit specific fields from the PetPost

***

### select?

> `optional` **select?**: [`PetPostSelect`](PetPostSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:18035

Select specific fields to fetch from the PetPost
