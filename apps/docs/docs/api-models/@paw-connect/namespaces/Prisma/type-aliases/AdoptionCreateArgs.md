[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionCreateArgs

# Type Alias: AdoptionCreateArgs\<ExtArgs\>

> **AdoptionCreateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:12396

Adoption create

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AdoptionCreateInput`](AdoptionCreateInput.md), [`AdoptionUncheckedCreateInput`](AdoptionUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:12412

The data needed to create a Adoption.

***

### include?

> `optional` **include?**: [`AdoptionInclude`](AdoptionInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:12408

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AdoptionOmit`](AdoptionOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:12404

Omit specific fields from the Adoption

***

### select?

> `optional` **select?**: [`AdoptionSelect`](AdoptionSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:12400

Select specific fields to fetch from the Adoption
