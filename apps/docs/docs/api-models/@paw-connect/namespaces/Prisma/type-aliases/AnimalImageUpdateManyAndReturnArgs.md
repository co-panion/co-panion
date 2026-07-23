[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalImageUpdateManyAndReturnArgs

# Type Alias: AnimalImageUpdateManyAndReturnArgs\<ExtArgs\>

> **AnimalImageUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:11376

AnimalImage updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AnimalImageUpdateManyMutationInput`](AnimalImageUpdateManyMutationInput.md), [`AnimalImageUncheckedUpdateManyInput`](AnimalImageUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11388

The data used to update AnimalImages.

***

### include?

> `optional` **include?**: [`AnimalImageIncludeUpdateManyAndReturn`](AnimalImageIncludeUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:11400

Choose, which related nodes to fetch as well

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:11396

Limit how many AnimalImages to update.

***

### omit?

> `optional` **omit?**: [`AnimalImageOmit`](AnimalImageOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:11384

Omit specific fields from the AnimalImage

***

### select?

> `optional` **select?**: [`AnimalImageSelectUpdateManyAndReturn`](AnimalImageSelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:11380

Select specific fields to fetch from the AnimalImage

***

### where?

> `optional` **where?**: [`AnimalImageWhereInput`](AnimalImageWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:11392

Filter which AnimalImages to update
