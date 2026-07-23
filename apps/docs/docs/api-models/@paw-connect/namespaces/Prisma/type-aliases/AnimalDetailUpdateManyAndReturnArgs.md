[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalDetailUpdateManyAndReturnArgs

# Type Alias: AnimalDetailUpdateManyAndReturnArgs\<ExtArgs\>

> **AnimalDetailUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:10305

AnimalDetail updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AnimalDetailUpdateManyMutationInput`](AnimalDetailUpdateManyMutationInput.md), [`AnimalDetailUncheckedUpdateManyInput`](AnimalDetailUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10317

The data used to update AnimalDetails.

***

### include?

> `optional` **include?**: [`AnimalDetailIncludeUpdateManyAndReturn`](AnimalDetailIncludeUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:10329

Choose, which related nodes to fetch as well

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:10325

Limit how many AnimalDetails to update.

***

### omit?

> `optional` **omit?**: [`AnimalDetailOmit`](AnimalDetailOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:10313

Omit specific fields from the AnimalDetail

***

### select?

> `optional` **select?**: [`AnimalDetailSelectUpdateManyAndReturn`](AnimalDetailSelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:10309

Select specific fields to fetch from the AnimalDetail

***

### where?

> `optional` **where?**: [`AnimalDetailWhereInput`](AnimalDetailWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:10321

Filter which AnimalDetails to update
