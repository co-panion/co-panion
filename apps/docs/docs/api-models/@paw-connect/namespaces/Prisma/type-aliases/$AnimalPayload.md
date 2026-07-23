[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / $AnimalPayload

# Type Alias: $AnimalPayload\<ExtArgs\>

> **$AnimalPayload**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:6337

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### composites

> **composites**: `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:6360

***

### name

> **name**: `"Animal"`

Defined in: libs/database/src/generated/prisma/index.d.ts:6338

***

### objects

> **objects**: `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:6339

#### detail

> **detail**: [`$AnimalDetailPayload`]($AnimalDetailPayload.md)\<`ExtArgs`\> \| `null`

#### images

> **images**: [`$AnimalImagePayload`]($AnimalImagePayload.md)\<`ExtArgs`\>[]

#### shelter

> **shelter**: [`$ShelterPayload`]($ShelterPayload.md)\<`ExtArgs`\>

***

### scalars

> **scalars**: `$Extensions.GetPayloadResult`\<\{ `age`: `number`; `animalStatus`: [`AnimalStatus`](../../$Enums/type-aliases/AnimalStatus.md); `breed`: `number`; `createdAt`: `Date`; `gender`: [`Gender`](../../$Enums/type-aliases/Gender.md); `id`: `number`; `imgThumbnail`: `string`; `isEstimatedAge`: `boolean`; `isNeutered`: `boolean`; `name`: `string`; `shelterId`: `string`; `species`: `number`; `updatedAt`: `Date`; `weight`: [`PrismaClientKnownRequestError`](../variables/PrismaClientKnownRequestError.md); \}, `ExtArgs`\[`"result"`\]\[`"animal"`\]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6344
