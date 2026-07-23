[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionWhereInput

# Type Alias: AdoptionWhereInput

> **AdoptionWhereInput** = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:21390

## Properties

### adoptionStatus?

> `optional` **adoptionStatus?**: [`EnumAdoptionStatusFilter`](EnumAdoptionStatusFilter.md)\<`"Adoption"`\> \| [`AdoptionStatus`](../../$Enums/type-aliases/AdoptionStatus.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:21397

***

### agreements?

> `optional` **agreements?**: [`AdoptionAgreementListRelationFilter`](AdoptionAgreementListRelationFilter.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:21402

***

### AND?

> `optional` **AND?**: `AdoptionWhereInput` \| `AdoptionWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:21391

***

### animalId?

> `optional` **animalId?**: [`IntFilter`](IntFilter.md)\<`"Adoption"`\> \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:21396

***

### createdAt?

> `optional` **createdAt?**: [`DateTimeFilter`](DateTimeFilter.md)\<`"Adoption"`\> \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21398

***

### detail?

> `optional` **detail?**: [`XOR`](XOR.md)\<[`AdoptionDetailNullableScalarRelationFilter`](AdoptionDetailNullableScalarRelationFilter.md), [`AdoptionDetailWhereInput`](AdoptionDetailWhereInput.md)\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:21401

***

### id?

> `optional` **id?**: [`UuidFilter`](UuidFilter.md)\<`"Adoption"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21394

***

### NOT?

> `optional` **NOT?**: `AdoptionWhereInput` \| `AdoptionWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:21393

***

### OR?

> `optional` **OR?**: `AdoptionWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:21392

***

### updatedAt?

> `optional` **updatedAt?**: [`DateTimeFilter`](DateTimeFilter.md)\<`"Adoption"`\> \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21399

***

### user?

> `optional` **user?**: [`XOR`](XOR.md)\<[`UserScalarRelationFilter`](UserScalarRelationFilter.md), [`UserWhereInput`](UserWhereInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:21400

***

### userId?

> `optional` **userId?**: [`UuidFilter`](UuidFilter.md)\<`"Adoption"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21395
