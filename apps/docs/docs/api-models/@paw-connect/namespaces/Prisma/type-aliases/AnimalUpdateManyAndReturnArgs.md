[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalUpdateManyAndReturnArgs

# Type Alias: AnimalUpdateManyAndReturnArgs\<ExtArgs\>

> **AnimalUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:7106

Animal updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AnimalUpdateManyMutationInput`](AnimalUpdateManyMutationInput.md), [`AnimalUncheckedUpdateManyInput`](AnimalUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7118

The data used to update Animals.

***

### include?

> `optional` **include?**: [`AnimalIncludeUpdateManyAndReturn`](AnimalIncludeUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7130

Choose, which related nodes to fetch as well

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:7126

Limit how many Animals to update.

***

### omit?

> `optional` **omit?**: [`AnimalOmit`](AnimalOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7114

Omit specific fields from the Animal

***

### select?

> `optional` **select?**: [`AnimalSelectUpdateManyAndReturn`](AnimalSelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:7110

Select specific fields to fetch from the Animal

***

### where?

> `optional` **where?**: [`AnimalWhereInput`](AnimalWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:7122

Filter which Animals to update
