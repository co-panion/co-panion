[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserAgreementWhereInput

# Type Alias: UserAgreementWhereInput

> **UserAgreementWhereInput** = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:21642

## Properties

### agreedAt?

> `optional` **agreedAt?**: [`DateTimeFilter`](DateTimeFilter.md)\<`"UserAgreement"`\> \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21650

***

### agreementId?

> `optional` **agreementId?**: [`IntFilter`](IntFilter.md)\<`"UserAgreement"`\> \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:21647

***

### AND?

> `optional` **AND?**: `UserAgreementWhereInput` \| `UserAgreementWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:21643

***

### id?

> `optional` **id?**: [`UuidFilter`](UuidFilter.md)\<`"UserAgreement"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21646

***

### isAgreed?

> `optional` **isAgreed?**: [`BoolFilter`](BoolFilter.md)\<`"UserAgreement"`\> \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:21649

***

### NOT?

> `optional` **NOT?**: `UserAgreementWhereInput` \| `UserAgreementWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:21645

***

### OR?

> `optional` **OR?**: `UserAgreementWhereInput`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:21644

***

### user?

> `optional` **user?**: [`XOR`](XOR.md)\<[`UserScalarRelationFilter`](UserScalarRelationFilter.md), [`UserWhereInput`](UserWhereInput.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:21651

***

### userId?

> `optional` **userId?**: [`UuidFilter`](UuidFilter.md)\<`"UserAgreement"`\> \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:21648
