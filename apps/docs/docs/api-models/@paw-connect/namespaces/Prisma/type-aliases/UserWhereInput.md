[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserWhereInput

# Type Alias: UserWhereInput

> **UserWhereInput** = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:20861

Deep Input Types

## Properties

### adoptions?

> `optional` **adoptions?**: [`AdoptionListRelationFilter`](AdoptionListRelationFilter.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:20876

***

### agreements?

> `optional` **agreements?**: [`UserAgreementListRelationFilter`](UserAgreementListRelationFilter.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:20875

***

### AND?

> `optional` **AND?**: `UserWhereInput` \| `UserWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:20862

***

### createdAt?

> `optional` **createdAt?**: [`DateTimeFilter`](DateTimeFilter.md)\<`"User"`\> \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:20873

***

### email?

> `optional` **email?**: [`StringFilter`](StringFilter.md)\<`"User"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:20867

***

### id?

> `optional` **id?**: [`UuidFilter`](UuidFilter.md)\<`"User"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:20865

***

### imgProfile?

> `optional` **imgProfile?**: [`StringFilter`](StringFilter.md)\<`"User"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:20871

***

### inquiries?

> `optional` **inquiries?**: [`InquiryListRelationFilter`](InquiryListRelationFilter.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:20877

***

### nickname?

> `optional` **nickname?**: [`StringFilter`](StringFilter.md)\<`"User"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:20869

***

### NOT?

> `optional` **NOT?**: `UserWhereInput` \| `UserWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:20864

***

### OR?

> `optional` **OR?**: `UserWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:20863

***

### password?

> `optional` **password?**: [`StringFilter`](StringFilter.md)\<`"User"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:20868

***

### role?

> `optional` **role?**: [`EnumRoleFilter`](EnumRoleFilter.md)\<`"User"`\> \| [`Role`](../../$Enums/type-aliases/Role.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:20870

***

### shelterId?

> `optional` **shelterId?**: [`UuidNullableFilter`](UuidNullableFilter.md)\<`"User"`\> \| `string` \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:20866

***

### status?

> `optional` **status?**: [`EnumUserStatusFilter`](EnumUserStatusFilter.md)\<`"User"`\> \| [`UserStatus`](../../$Enums/type-aliases/UserStatus.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:20872

***

### updatedAt?

> `optional` **updatedAt?**: [`DateTimeFilter`](DateTimeFilter.md)\<`"User"`\> \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:20874
