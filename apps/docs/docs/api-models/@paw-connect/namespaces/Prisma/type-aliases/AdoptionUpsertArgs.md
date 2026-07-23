[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionUpsertArgs

# Type Alias: AdoptionUpsertArgs\<ExtArgs\>

> **AdoptionUpsertArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:12526

Adoption upsert

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### create

> **create**: [`XOR`](XOR.md)\<[`AdoptionCreateInput`](AdoptionCreateInput.md), [`AdoptionUncheckedCreateInput`](AdoptionUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:12546

In case the Adoption found by the `where` argument doesn't exist, create a new Adoption with this data.

***

### include?

> `optional` **include?**: [`AdoptionInclude`](AdoptionInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:12538

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AdoptionOmit`](AdoptionOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:12534

Omit specific fields from the Adoption

***

### select?

> `optional` **select?**: [`AdoptionSelect`](AdoptionSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:12530

Select specific fields to fetch from the Adoption

***

### update

> **update**: [`XOR`](XOR.md)\<[`AdoptionUpdateInput`](AdoptionUpdateInput.md), [`AdoptionUncheckedUpdateInput`](AdoptionUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:12550

In case the Adoption was found with the provided `where` argument, update it with this data.

***

### where

> **where**: [`AdoptionWhereUniqueInput`](AdoptionWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:12542

The filter to search for the Adoption to update in case it exists.
