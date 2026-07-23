[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionDetailWhereInput

# Type Alias: AdoptionDetailWhereInput

> **AdoptionDetailWhereInput** = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:21458

## Properties

### address?

> `optional` **address?**: [`StringFilter`](StringFilter.md)\<`"AdoptionDetail"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21467

***

### addressDetail?

> `optional` **addressDetail?**: [`StringNullableFilter`](StringNullableFilter.md)\<`"AdoptionDetail"`\> \| `string` \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:21468

***

### adoption?

> `optional` **adoption?**: [`XOR`](XOR.md)\<[`AdoptionScalarRelationFilter`](AdoptionScalarRelationFilter.md), [`AdoptionWhereInput`](AdoptionWhereInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:21484

***

### adoptionId?

> `optional` **adoptionId?**: [`UuidFilter`](UuidFilter.md)\<`"AdoptionDetail"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21463

***

### AND?

> `optional` **AND?**: `AdoptionDetailWhereInput` \| `AdoptionDetailWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:21459

***

### canProvideExercise?

> `optional` **canProvideExercise?**: [`BoolFilter`](BoolFilter.md)\<`"AdoptionDetail"`\> \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:21480

***

### canProvideMedical?

> `optional` **canProvideMedical?**: [`BoolFilter`](BoolFilter.md)\<`"AdoptionDetail"`\> \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:21479

***

### canVaccinate?

> `optional` **canVaccinate?**: [`BoolFilter`](BoolFilter.md)\<`"AdoptionDetail"`\> \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:21478

***

### childrenAgeGroup?

> `optional` **childrenAgeGroup?**: [`EnumChildrenAgeGroupFilter`](EnumChildrenAgeGroupFilter.md)\<`"AdoptionDetail"`\> \| [`ChildrenAgeGroup`](../../$Enums/type-aliases/ChildrenAgeGroup.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:21475

***

### email?

> `optional` **email?**: [`StringFilter`](StringFilter.md)\<`"AdoptionDetail"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21465

***

### familySize?

> `optional` **familySize?**: [`EnumFamilySizeFilter`](EnumFamilySizeFilter.md)\<`"AdoptionDetail"`\> \| [`FamilySize`](../../$Enums/type-aliases/FamilySize.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:21474

***

### id?

> `optional` **id?**: [`UuidFilter`](UuidFilter.md)\<`"AdoptionDetail"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21462

***

### isFamilyConsented?

> `optional` **isFamilyConsented?**: [`BoolFilter`](BoolFilter.md)\<`"AdoptionDetail"`\> \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:21476

***

### isLifelongCommit?

> `optional` **isLifelongCommit?**: [`BoolFilter`](BoolFilter.md)\<`"AdoptionDetail"`\> \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:21481

***

### NOT?

> `optional` **NOT?**: `AdoptionDetailWhereInput` \| `AdoptionDetailWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:21461

***

### note?

> `optional` **note?**: [`StringFilter`](StringFilter.md)\<`"AdoptionDetail"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21482

***

### OR?

> `optional` **OR?**: `AdoptionDetailWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:21460

***

### petDescription?

> `optional` **petDescription?**: [`StringNullableFilter`](StringNullableFilter.md)\<`"AdoptionDetail"`\> \| `string` \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:21470

***

### petExperience?

> `optional` **petExperience?**: [`EnumPetExperienceFilter`](EnumPetExperienceFilter.md)\<`"AdoptionDetail"`\> \| [`PetExperience`](../../$Enums/type-aliases/PetExperience.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:21469

***

### petExperiencePeriod?

> `optional` **petExperiencePeriod?**: [`EnumPetExperiencePeriodNullableFilter`](EnumPetExperiencePeriodNullableFilter.md)\<`"AdoptionDetail"`\> \| [`PetExperiencePeriod`](../../$Enums/type-aliases/PetExperiencePeriod.md) \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:21471

***

### petPolicy?

> `optional` **petPolicy?**: [`EnumPetPolicyFilter`](EnumPetPolicyFilter.md)\<`"AdoptionDetail"`\> \| [`PetPolicy`](../../$Enums/type-aliases/PetPolicy.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:21473

***

### phone?

> `optional` **phone?**: [`StringFilter`](StringFilter.md)\<`"AdoptionDetail"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21466

***

### purpose?

> `optional` **purpose?**: [`StringFilter`](StringFilter.md)\<`"AdoptionDetail"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21477

***

### residenceType?

> `optional` **residenceType?**: [`EnumResidenceTypeFilter`](EnumResidenceTypeFilter.md)\<`"AdoptionDetail"`\> \| [`ResidenceType`](../../$Enums/type-aliases/ResidenceType.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:21472

***

### updatedAt?

> `optional` **updatedAt?**: [`DateTimeFilter`](DateTimeFilter.md)\<`"AdoptionDetail"`\> \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21483

***

### userName?

> `optional` **userName?**: [`StringFilter`](StringFilter.md)\<`"AdoptionDetail"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21464
