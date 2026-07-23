[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterUpdateManyAndReturnArgs

# Type Alias: ShelterUpdateManyAndReturnArgs\<ExtArgs\>

> **ShelterUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:4785

Shelter updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`ShelterUpdateManyMutationInput`](ShelterUpdateManyMutationInput.md), [`ShelterUncheckedUpdateManyInput`](ShelterUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4797

The data used to update Shelters.

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:4805

Limit how many Shelters to update.

***

### omit?

> `optional` **omit?**: [`ShelterOmit`](ShelterOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4793

Omit specific fields from the Shelter

***

### select?

> `optional` **select?**: [`ShelterSelectUpdateManyAndReturn`](ShelterSelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4789

Select specific fields to fetch from the Shelter

***

### where?

> `optional` **where?**: [`ShelterWhereInput`](ShelterWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:4801

Filter which Shelters to update
