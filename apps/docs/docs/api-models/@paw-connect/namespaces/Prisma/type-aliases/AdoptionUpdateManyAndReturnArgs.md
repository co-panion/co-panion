[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionUpdateManyAndReturnArgs

# Type Alias: AdoptionUpdateManyAndReturnArgs\<ExtArgs\>

> **AdoptionUpdateManyAndReturnArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:12496

Adoption updateManyAndReturn

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### data

> **data**: [`XOR`](XOR.md)\<[`AdoptionUpdateManyMutationInput`](AdoptionUpdateManyMutationInput.md), [`AdoptionUncheckedUpdateManyInput`](AdoptionUncheckedUpdateManyInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:12508

The data used to update Adoptions.

***

### include?

> `optional` **include?**: [`AdoptionIncludeUpdateManyAndReturn`](AdoptionIncludeUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:12520

Choose, which related nodes to fetch as well

***

### limit?

> `optional` **limit?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:12516

Limit how many Adoptions to update.

***

### omit?

> `optional` **omit?**: [`AdoptionOmit`](AdoptionOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:12504

Omit specific fields from the Adoption

***

### select?

> `optional` **select?**: [`AdoptionSelectUpdateManyAndReturn`](AdoptionSelectUpdateManyAndReturn.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:12500

Select specific fields to fetch from the Adoption

***

### where?

> `optional` **where?**: [`AdoptionWhereInput`](AdoptionWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:12512

Filter which Adoptions to update
