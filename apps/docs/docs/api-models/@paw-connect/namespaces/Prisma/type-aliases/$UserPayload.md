[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / $UserPayload

# Type Alias: $UserPayload\<ExtArgs\>

> **$UserPayload**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:2836

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### composites

> **composites**: `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:2855

***

### name

> **name**: `"User"`

Defined in: libs/database/src/generated/prisma/index.d.ts:2837

***

### objects

> **objects**: `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:2838

#### adoptions

> **adoptions**: [`$AdoptionPayload`]($AdoptionPayload.md)\<`ExtArgs`\>[]

#### agreements

> **agreements**: [`$UserAgreementPayload`]($UserAgreementPayload.md)\<`ExtArgs`\>[]

#### inquiries

> **inquiries**: [`$InquiryPayload`]($InquiryPayload.md)\<`ExtArgs`\>[]

***

### scalars

> **scalars**: `$Extensions.GetPayloadResult`\<\{ `createdAt`: `Date`; `email`: `string`; `id`: `string`; `imgProfile`: `string`; `nickname`: `string`; `password`: `string`; `role`: [`Role`](../../$Enums/type-aliases/Role.md); `shelterId`: `string` \| `null`; `status`: [`UserStatus`](../../$Enums/type-aliases/UserStatus.md); `updatedAt`: `Date`; \}, `ExtArgs`\[`"result"`\]\[`"user"`\]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:2843
