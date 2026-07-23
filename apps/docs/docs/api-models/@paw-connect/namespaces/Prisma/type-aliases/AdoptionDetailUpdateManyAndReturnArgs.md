[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionDetailUpdateManyAndReturnArgs

# Type Alias: AdoptionDetailUpdateManyAndReturnArgs\<ExtArgs\>

> **AdoptionDetailUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:13823

AdoptionDetail updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AdoptionDetailUpdateManyMutationInput`](AdoptionDetailUpdateManyMutationInput.md), [`AdoptionDetailUncheckedUpdateManyInput`](AdoptionDetailUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13835

The data used to update AdoptionDetails.

***

### include?

> `optional` **include?**: [`AdoptionDetailIncludeUpdateManyAndReturn`](AdoptionDetailIncludeUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13847

Choose, which related nodes to fetch as well

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:13843

Limit how many AdoptionDetails to update.

***

### omit?

> `optional` **omit?**: [`AdoptionDetailOmit`](AdoptionDetailOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13831

Omit specific fields from the AdoptionDetail

***

### select?

> `optional` **select?**: [`AdoptionDetailSelectUpdateManyAndReturn`](AdoptionDetailSelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:13827

Select specific fields to fetch from the AdoptionDetail

***

### where?

> `optional` **where?**: [`AdoptionDetailWhereInput`](AdoptionDetailWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:13839

Filter which AdoptionDetails to update
