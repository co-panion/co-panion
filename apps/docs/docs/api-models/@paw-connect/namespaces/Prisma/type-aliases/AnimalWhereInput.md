[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalWhereInput

# Type Alias: AnimalWhereInput

> **AnimalWhereInput** = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:21075

## Properties

### age?

> `optional` **age?**: [`IntFilter`](IntFilter.md)\<`"Animal"`\> \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:21086

***

### AND?

> `optional` **AND?**: `AnimalWhereInput` \| `AnimalWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:21076

***

### animalStatus?

> `optional` **animalStatus?**: [`EnumAnimalStatusFilter`](EnumAnimalStatusFilter.md)\<`"Animal"`\> \| [`AnimalStatus`](../../$Enums/type-aliases/AnimalStatus.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:21088

***

### breed?

> `optional` **breed?**: [`IntFilter`](IntFilter.md)\<`"Animal"`\> \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:21083

***

### createdAt?

> `optional` **createdAt?**: [`DateTimeFilter`](DateTimeFilter.md)\<`"Animal"`\> \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21091

***

### detail?

> `optional` **detail?**: [`XOR`](XOR.md)\<[`AnimalDetailNullableScalarRelationFilter`](AnimalDetailNullableScalarRelationFilter.md), [`AnimalDetailWhereInput`](AnimalDetailWhereInput.md)\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:21095

***

### gender?

> `optional` **gender?**: [`EnumGenderFilter`](EnumGenderFilter.md)\<`"Animal"`\> \| [`Gender`](../../$Enums/type-aliases/Gender.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:21084

***

### id?

> `optional` **id?**: [`IntFilter`](IntFilter.md)\<`"Animal"`\> \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:21079

***

### images?

> `optional` **images?**: [`AnimalImageListRelationFilter`](AnimalImageListRelationFilter.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:21094

***

### imgThumbnail?

> `optional` **imgThumbnail?**: [`StringFilter`](StringFilter.md)\<`"Animal"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21090

***

### isEstimatedAge?

> `optional` **isEstimatedAge?**: [`BoolFilter`](BoolFilter.md)\<`"Animal"`\> \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:21087

***

### isNeutered?

> `optional` **isNeutered?**: [`BoolFilter`](BoolFilter.md)\<`"Animal"`\> \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:21085

***

### name?

> `optional` **name?**: [`StringFilter`](StringFilter.md)\<`"Animal"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21081

***

### NOT?

> `optional` **NOT?**: `AnimalWhereInput` \| `AnimalWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:21078

***

### OR?

> `optional` **OR?**: `AnimalWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:21077

***

### shelter?

> `optional` **shelter?**: [`XOR`](XOR.md)\<[`ShelterScalarRelationFilter`](ShelterScalarRelationFilter.md), [`ShelterWhereInput`](ShelterWhereInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:21093

***

### shelterId?

> `optional` **shelterId?**: [`UuidFilter`](UuidFilter.md)\<`"Animal"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21080

***

### species?

> `optional` **species?**: [`IntFilter`](IntFilter.md)\<`"Animal"`\> \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:21082

***

### updatedAt?

> `optional` **updatedAt?**: [`DateTimeFilter`](DateTimeFilter.md)\<`"Animal"`\> \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21092

***

### weight?

> `optional` **weight?**: [`DecimalFilter`](DecimalFilter.md)\<`"Animal"`\> \| [`PrismaClientKnownRequestError`](../variables/PrismaClientKnownRequestError.md) \| [`DecimalJsLike`](DecimalJsLike.md) \| `number` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21089
