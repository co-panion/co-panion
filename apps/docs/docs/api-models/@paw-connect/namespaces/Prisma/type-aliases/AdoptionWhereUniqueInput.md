[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionWhereUniqueInput

# Type Alias: AdoptionWhereUniqueInput

> **AdoptionWhereUniqueInput** = [`AtLeast`](AtLeast.md)\<\{ `adoptionStatus?`: [`EnumAdoptionStatusFilter`](EnumAdoptionStatusFilter.md)\<`"Adoption"`\> \| [`AdoptionStatus`](../../$Enums/type-aliases/AdoptionStatus.md); `agreements?`: [`AdoptionAgreementListRelationFilter`](AdoptionAgreementListRelationFilter.md); `AND?`: [`AdoptionWhereInput`](AdoptionWhereInput.md) \| [`AdoptionWhereInput`](AdoptionWhereInput.md)[]; `animalId?`: [`IntFilter`](IntFilter.md)\<`"Adoption"`\> \| `number`; `createdAt?`: [`DateTimeFilter`](DateTimeFilter.md)\<`"Adoption"`\> \| `Date` \| `string`; `detail?`: [`XOR`](XOR.md)\<[`AdoptionDetailNullableScalarRelationFilter`](AdoptionDetailNullableScalarRelationFilter.md), [`AdoptionDetailWhereInput`](AdoptionDetailWhereInput.md)\> \| `null`; `id?`: `string`; `NOT?`: [`AdoptionWhereInput`](AdoptionWhereInput.md) \| [`AdoptionWhereInput`](AdoptionWhereInput.md)[]; `OR?`: [`AdoptionWhereInput`](AdoptionWhereInput.md)[]; `updatedAt?`: [`DateTimeFilter`](DateTimeFilter.md)\<`"Adoption"`\> \| `Date` \| `string`; `user?`: [`XOR`](XOR.md)\<[`UserScalarRelationFilter`](UserScalarRelationFilter.md), [`UserWhereInput`](UserWhereInput.md)\>; `userId?`: [`UuidFilter`](UuidFilter.md)\<`"Adoption"`\> \| `string`; \}, `"id"`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:21417
