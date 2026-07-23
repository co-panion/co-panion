[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterImageCreateArgs

# Type Alias: ShelterImageCreateArgs\<ExtArgs\>

> **ShelterImageCreateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:5766

ShelterImage create

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`ShelterImageCreateInput`](ShelterImageCreateInput.md), [`ShelterImageUncheckedCreateInput`](ShelterImageUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5782

The data needed to create a ShelterImage.

***

### include?

> `optional` **include?**: [`ShelterImageInclude`](ShelterImageInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5778

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`ShelterImageOmit`](ShelterImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5774

Omit specific fields from the ShelterImage

***

### select?

> `optional` **select?**: [`ShelterImageSelect`](ShelterImageSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:5770

Select specific fields to fetch from the ShelterImage
