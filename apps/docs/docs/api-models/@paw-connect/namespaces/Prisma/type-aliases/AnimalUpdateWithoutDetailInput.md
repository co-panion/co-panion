[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalUpdateWithoutDetailInput

# Type Alias: AnimalUpdateWithoutDetailInput

> **AnimalUpdateWithoutDetailInput** = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:25719

## Properties

### age?

> `optional` **age?**: [`IntFieldUpdateOperationsInput`](IntFieldUpdateOperationsInput.md) \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:25725

***

### animalStatus?

> `optional` **animalStatus?**: [`EnumAnimalStatusFieldUpdateOperationsInput`](EnumAnimalStatusFieldUpdateOperationsInput.md) \| [`AnimalStatus`](../../$Enums/type-aliases/AnimalStatus.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:25727

***

### breed?

> `optional` **breed?**: [`IntFieldUpdateOperationsInput`](IntFieldUpdateOperationsInput.md) \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:25722

***

### createdAt?

> `optional` **createdAt?**: [`DateTimeFieldUpdateOperationsInput`](DateTimeFieldUpdateOperationsInput.md) \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25730

***

### gender?

> `optional` **gender?**: [`EnumGenderFieldUpdateOperationsInput`](EnumGenderFieldUpdateOperationsInput.md) \| [`Gender`](../../$Enums/type-aliases/Gender.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:25723

***

### images?

> `optional` **images?**: [`AnimalImageUpdateManyWithoutAnimalNestedInput`](AnimalImageUpdateManyWithoutAnimalNestedInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:25733

***

### imgThumbnail?

> `optional` **imgThumbnail?**: [`StringFieldUpdateOperationsInput`](StringFieldUpdateOperationsInput.md) \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25729

***

### isEstimatedAge?

> `optional` **isEstimatedAge?**: [`BoolFieldUpdateOperationsInput`](BoolFieldUpdateOperationsInput.md) \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:25726

***

### isNeutered?

> `optional` **isNeutered?**: [`BoolFieldUpdateOperationsInput`](BoolFieldUpdateOperationsInput.md) \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:25724

***

### name?

> `optional` **name?**: [`StringFieldUpdateOperationsInput`](StringFieldUpdateOperationsInput.md) \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25720

***

### shelter?

> `optional` **shelter?**: [`ShelterUpdateOneRequiredWithoutAnimalsNestedInput`](ShelterUpdateOneRequiredWithoutAnimalsNestedInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:25732

***

### species?

> `optional` **species?**: [`IntFieldUpdateOperationsInput`](IntFieldUpdateOperationsInput.md) \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:25721

***

### updatedAt?

> `optional` **updatedAt?**: [`DateTimeFieldUpdateOperationsInput`](DateTimeFieldUpdateOperationsInput.md) \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25731

***

### weight?

> `optional` **weight?**: [`DecimalFieldUpdateOperationsInput`](DecimalFieldUpdateOperationsInput.md) \| [`PrismaClientKnownRequestError`](../variables/PrismaClientKnownRequestError.md) \| [`DecimalJsLike`](DecimalJsLike.md) \| `number` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25728
