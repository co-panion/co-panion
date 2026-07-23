[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / $AdoptionPayload

# Type Alias: $AdoptionPayload\<ExtArgs\>

> **$AdoptionPayload**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:11743

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### composites

> **composites**: `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:11758

***

### name

> **name**: `"Adoption"`

Defined in: libs/database/src/generated/prisma/index.d.ts:11744

***

### objects

> **objects**: `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:11745

#### agreements

> **agreements**: [`$AdoptionAgreementPayload`]($AdoptionAgreementPayload.md)\<`ExtArgs`\>[]

#### detail

> **detail**: [`$AdoptionDetailPayload`]($AdoptionDetailPayload.md)\<`ExtArgs`\> \| `null`

#### user

> **user**: [`$UserPayload`]($UserPayload.md)\<`ExtArgs`\>

***

### scalars

> **scalars**: `$Extensions.GetPayloadResult`\<\{ `adoptionStatus`: [`AdoptionStatus`](../../$Enums/type-aliases/AdoptionStatus.md); `animalId`: `number`; `createdAt`: `Date`; `id`: `string`; `updatedAt`: `Date`; `userId`: `string`; \}, `ExtArgs`\[`"result"`\]\[`"adoption"`\]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11750
