[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionCreateInput

# Type Alias: AdoptionCreateInput

> **AdoptionCreateInput** = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:22476

## Properties

### adoptionStatus

> **adoptionStatus**: [`AdoptionStatus`](../../$Enums/type-aliases/AdoptionStatus.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:22479

***

### agreements?

> `optional` **agreements?**: [`AdoptionAgreementCreateNestedManyWithoutAdoptionInput`](AdoptionAgreementCreateNestedManyWithoutAdoptionInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:22484

***

### animalId

> **animalId**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:22478

***

### createdAt?

> `optional` **createdAt?**: `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:22480

***

### detail?

> `optional` **detail?**: [`AdoptionDetailCreateNestedOneWithoutAdoptionInput`](AdoptionDetailCreateNestedOneWithoutAdoptionInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:22483

***

### id?

> `optional` **id?**: `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:22477

***

### updatedAt?

> `optional` **updatedAt?**: `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:22481

***

### user

> **user**: [`UserCreateNestedOneWithoutAdoptionsInput`](UserCreateNestedOneWithoutAdoptionsInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:22482
