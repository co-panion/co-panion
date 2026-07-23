[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalUpdateWithoutImagesInput

# Type Alias: AnimalUpdateWithoutImagesInput

> **AnimalUpdateWithoutImagesInput** = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:25805

## Properties

### age?

> `optional` **age?**: [`IntFieldUpdateOperationsInput`](IntFieldUpdateOperationsInput.md) \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:25811

***

### animalStatus?

> `optional` **animalStatus?**: [`EnumAnimalStatusFieldUpdateOperationsInput`](EnumAnimalStatusFieldUpdateOperationsInput.md) \| [`AnimalStatus`](../../$Enums/type-aliases/AnimalStatus.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:25813

***

### breed?

> `optional` **breed?**: [`IntFieldUpdateOperationsInput`](IntFieldUpdateOperationsInput.md) \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:25808

***

### createdAt?

> `optional` **createdAt?**: [`DateTimeFieldUpdateOperationsInput`](DateTimeFieldUpdateOperationsInput.md) \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25816

***

### detail?

> `optional` **detail?**: [`AnimalDetailUpdateOneWithoutAnimalNestedInput`](AnimalDetailUpdateOneWithoutAnimalNestedInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:25819

***

### gender?

> `optional` **gender?**: [`EnumGenderFieldUpdateOperationsInput`](EnumGenderFieldUpdateOperationsInput.md) \| [`Gender`](../../$Enums/type-aliases/Gender.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:25809

***

### imgThumbnail?

> `optional` **imgThumbnail?**: [`StringFieldUpdateOperationsInput`](StringFieldUpdateOperationsInput.md) \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25815

***

### isEstimatedAge?

> `optional` **isEstimatedAge?**: [`BoolFieldUpdateOperationsInput`](BoolFieldUpdateOperationsInput.md) \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:25812

***

### isNeutered?

> `optional` **isNeutered?**: [`BoolFieldUpdateOperationsInput`](BoolFieldUpdateOperationsInput.md) \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:25810

***

### name?

> `optional` **name?**: [`StringFieldUpdateOperationsInput`](StringFieldUpdateOperationsInput.md) \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25806

***

### shelter?

> `optional` **shelter?**: [`ShelterUpdateOneRequiredWithoutAnimalsNestedInput`](ShelterUpdateOneRequiredWithoutAnimalsNestedInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:25818

***

### species?

> `optional` **species?**: [`IntFieldUpdateOperationsInput`](IntFieldUpdateOperationsInput.md) \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:25807

***

### updatedAt?

> `optional` **updatedAt?**: [`DateTimeFieldUpdateOperationsInput`](DateTimeFieldUpdateOperationsInput.md) \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25817

***

### weight?

> `optional` **weight?**: [`DecimalFieldUpdateOperationsInput`](DecimalFieldUpdateOperationsInput.md) \| [`PrismaClientKnownRequestError`](../variables/PrismaClientKnownRequestError.md) \| [`DecimalJsLike`](DecimalJsLike.md) \| `number` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:25814
