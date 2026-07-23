[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / $AdoptionDetailPayload

# Type Alias: $AdoptionDetailPayload\<ExtArgs\>

> **$AdoptionDetailPayload**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:13042

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### composites

> **composites**: `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:13071

***

### name

> **name**: `"AdoptionDetail"`

Defined in: libs/database/src/generated/prisma/index.d.ts:13043

***

### objects

> **objects**: `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:13044

#### adoption

> **adoption**: [`$AdoptionPayload`]($AdoptionPayload.md)\<`ExtArgs`\>

***

### scalars

> **scalars**: `$Extensions.GetPayloadResult`\<\{ `address`: `string`; `addressDetail`: `string` \| `null`; `adoptionId`: `string`; `canProvideExercise`: `boolean`; `canProvideMedical`: `boolean`; `canVaccinate`: `boolean`; `childrenAgeGroup`: [`ChildrenAgeGroup`](../../$Enums/type-aliases/ChildrenAgeGroup.md); `email`: `string`; `familySize`: [`FamilySize`](../../$Enums/type-aliases/FamilySize.md); `id`: `string`; `isFamilyConsented`: `boolean`; `isLifelongCommit`: `boolean`; `note`: `string`; `petDescription`: `string` \| `null`; `petExperience`: [`PetExperience`](../../$Enums/type-aliases/PetExperience.md); `petExperiencePeriod`: [`PetExperiencePeriod`](../../$Enums/type-aliases/PetExperiencePeriod.md) \| `null`; `petPolicy`: [`PetPolicy`](../../$Enums/type-aliases/PetPolicy.md); `phone`: `string`; `purpose`: `string`; `residenceType`: [`ResidenceType`](../../$Enums/type-aliases/ResidenceType.md); `updatedAt`: `Date`; `userName`: `string`; \}, `ExtArgs`\[`"result"`\]\[`"adoptionDetail"`\]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13047
