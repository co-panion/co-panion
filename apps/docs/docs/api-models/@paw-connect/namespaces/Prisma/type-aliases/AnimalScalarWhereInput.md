[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalScalarWhereInput

# Type Alias: AnimalScalarWhereInput

> **AnimalScalarWhereInput** = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:25399

## Properties

### age?

> `optional` **age?**: [`IntFilter`](IntFilter.md)\<`"Animal"`\> \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:25410

***

### AND?

> `optional` **AND?**: `AnimalScalarWhereInput` \| `AnimalScalarWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:25400

***

### animalStatus?

> `optional` **animalStatus?**: [`EnumAnimalStatusFilter`](EnumAnimalStatusFilter.md)\<`"Animal"`\> \| [`AnimalStatus`](../../$Enums/type-aliases/AnimalStatus.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:25412

***

### breed?

> `optional` **breed?**: [`IntFilter`](IntFilter.md)\<`"Animal"`\> \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:25407

***

### createdAt?

> `optional` **createdAt?**: [`DateTimeFilter`](DateTimeFilter.md)\<`"Animal"`\> \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25415

***

### gender?

> `optional` **gender?**: [`EnumGenderFilter`](EnumGenderFilter.md)\<`"Animal"`\> \| [`Gender`](../../$Enums/type-aliases/Gender.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:25408

***

### id?

> `optional` **id?**: [`IntFilter`](IntFilter.md)\<`"Animal"`\> \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:25403

***

### imgThumbnail?

> `optional` **imgThumbnail?**: [`StringFilter`](StringFilter.md)\<`"Animal"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25414

***

### isEstimatedAge?

> `optional` **isEstimatedAge?**: [`BoolFilter`](BoolFilter.md)\<`"Animal"`\> \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:25411

***

### isNeutered?

> `optional` **isNeutered?**: [`BoolFilter`](BoolFilter.md)\<`"Animal"`\> \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:25409

***

### name?

> `optional` **name?**: [`StringFilter`](StringFilter.md)\<`"Animal"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25405

***

### NOT?

> `optional` **NOT?**: `AnimalScalarWhereInput` \| `AnimalScalarWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:25402

***

### OR?

> `optional` **OR?**: `AnimalScalarWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:25401

***

### shelterId?

> `optional` **shelterId?**: [`UuidFilter`](UuidFilter.md)\<`"Animal"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25404

***

### species?

> `optional` **species?**: [`IntFilter`](IntFilter.md)\<`"Animal"`\> \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:25406

***

### updatedAt?

> `optional` **updatedAt?**: [`DateTimeFilter`](DateTimeFilter.md)\<`"Animal"`\> \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25416

***

### weight?

> `optional` **weight?**: [`DecimalFilter`](DecimalFilter.md)\<`"Animal"`\> \| [`PrismaClientKnownRequestError`](../variables/PrismaClientKnownRequestError.md) \| [`DecimalJsLike`](DecimalJsLike.md) \| `number` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25413
