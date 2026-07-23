[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionDetailUpsertArgs

# Type Alias: AdoptionDetailUpsertArgs\<ExtArgs\>

> **AdoptionDetailUpsertArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:13853

AdoptionDetail upsert

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### create

> **create**: [`XOR`](XOR.md)\<[`AdoptionDetailCreateInput`](AdoptionDetailCreateInput.md), [`AdoptionDetailUncheckedCreateInput`](AdoptionDetailUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13873

In case the AdoptionDetail found by the `where` argument doesn't exist, create a new AdoptionDetail with this data.

***

### include?

> `optional` **include?**: [`AdoptionDetailInclude`](AdoptionDetailInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13865

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AdoptionDetailOmit`](AdoptionDetailOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13861

Omit specific fields from the AdoptionDetail

***

### select?

> `optional` **select?**: [`AdoptionDetailSelect`](AdoptionDetailSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13857

Select specific fields to fetch from the AdoptionDetail

***

### update

> **update**: [`XOR`](XOR.md)\<[`AdoptionDetailUpdateInput`](AdoptionDetailUpdateInput.md), [`AdoptionDetailUncheckedUpdateInput`](AdoptionDetailUncheckedUpdateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13877

In case the AdoptionDetail was found with the provided `where` argument, update it with this data.

***

### where

> **where**: [`AdoptionDetailWhereUniqueInput`](AdoptionDetailWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:13869

The filter to search for the AdoptionDetail to update in case it exists.
