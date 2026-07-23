[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserWhereUniqueInput

# Type Alias: UserWhereUniqueInput

> **UserWhereUniqueInput** = [`AtLeast`](AtLeast.md)\<\{ `adoptions?`: [`AdoptionListRelationFilter`](AdoptionListRelationFilter.md); `agreements?`: [`UserAgreementListRelationFilter`](UserAgreementListRelationFilter.md); `AND?`: [`UserWhereInput`](UserWhereInput.md) \| [`UserWhereInput`](UserWhereInput.md)[]; `createdAt?`: [`DateTimeFilter`](DateTimeFilter.md)\<`"User"`\> \| `Date` \| `string`; `email?`: `string`; `id?`: `string`; `imgProfile?`: [`StringFilter`](StringFilter.md)\<`"User"`\> \| `string`; `inquiries?`: [`InquiryListRelationFilter`](InquiryListRelationFilter.md); `nickname?`: [`StringFilter`](StringFilter.md)\<`"User"`\> \| `string`; `NOT?`: [`UserWhereInput`](UserWhereInput.md) \| [`UserWhereInput`](UserWhereInput.md)[]; `OR?`: [`UserWhereInput`](UserWhereInput.md)[]; `password?`: [`StringFilter`](StringFilter.md)\<`"User"`\> \| `string`; `role?`: [`EnumRoleFilter`](EnumRoleFilter.md)\<`"User"`\> \| [`Role`](../../$Enums/type-aliases/Role.md); `shelterId?`: [`UuidNullableFilter`](UuidNullableFilter.md)\<`"User"`\> \| `string` \| `null`; `status?`: [`EnumUserStatusFilter`](EnumUserStatusFilter.md)\<`"User"`\> \| [`UserStatus`](../../$Enums/type-aliases/UserStatus.md); `updatedAt?`: [`DateTimeFilter`](DateTimeFilter.md)\<`"User"`\> \| `Date` \| `string`; \}, `"id"` \| `"email"`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:20896
