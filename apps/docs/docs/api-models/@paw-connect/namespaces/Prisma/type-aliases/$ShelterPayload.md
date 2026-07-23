[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / $ShelterPayload

# Type Alias: $ShelterPayload\<ExtArgs\>

> **$ShelterPayload**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:4030

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### composites

> **composites**: `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:4048

***

### name

> **name**: `"Shelter"`

Defined in: libs/database/src/generated/prisma/index.d.ts:4031

***

### objects

> **objects**: `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:4032

#### animals

> **animals**: [`$AnimalPayload`]($AnimalPayload.md)\<`ExtArgs`\>[]

#### images

> **images**: [`$ShelterImagePayload`]($ShelterImagePayload.md)\<`ExtArgs`\>[]

***

### scalars

> **scalars**: `$Extensions.GetPayloadResult`\<\{ `address`: `string`; `addressDetail`: `string` \| `null`; `createdAt`: `Date`; `description`: `string`; `id`: `string`; `imgBanner`: `string`; `name`: `string`; `operatingHours`: `string`; `phone`: `string`; `updatedAt`: `Date`; \}, `ExtArgs`\[`"result"`\]\[`"shelter"`\]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4036
