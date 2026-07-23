[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionUpdateArgs

# Type Alias: AdoptionUpdateArgs\<ExtArgs\>

> **AdoptionUpdateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:12452

Adoption update

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AdoptionUpdateInput`](AdoptionUpdateInput.md), [`AdoptionUncheckedUpdateInput`](AdoptionUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:12468

The data needed to update a Adoption.

***

### include?

> `optional` **include?**: [`AdoptionInclude`](AdoptionInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:12464

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AdoptionOmit`](AdoptionOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:12460

Omit specific fields from the Adoption

***

### select?

> `optional` **select?**: [`AdoptionSelect`](AdoptionSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:12456

Select specific fields to fetch from the Adoption

***

### where

> **where**: [`AdoptionWhereUniqueInput`](AdoptionWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:12472

Choose, which Adoption to update.
