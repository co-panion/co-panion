[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterCreateArgs

# Type Alias: ShelterCreateArgs\<ExtArgs\>

> **ShelterCreateArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:4689

Shelter create

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`ShelterCreateInput`](ShelterCreateInput.md), [`ShelterUncheckedCreateInput`](ShelterUncheckedCreateInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4705

The data needed to create a Shelter.

***

### include?

> `optional` **include?**: [`ShelterInclude`](ShelterInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4701

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`ShelterOmit`](ShelterOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4697

Omit specific fields from the Shelter

***

### select?

> `optional` **select?**: [`ShelterSelect`](ShelterSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4693

Select specific fields to fetch from the Shelter
