[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalUpdateInput

# Type Alias: AnimalUpdateInput

> **AnimalUpdateInput** = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:22195

## Properties

### age?

> `optional` **age?**: [`IntFieldUpdateOperationsInput`](IntFieldUpdateOperationsInput.md) \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:22201

***

### animalStatus?

> `optional` **animalStatus?**: [`EnumAnimalStatusFieldUpdateOperationsInput`](EnumAnimalStatusFieldUpdateOperationsInput.md) \| [`AnimalStatus`](../../$Enums/type-aliases/AnimalStatus.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:22203

***

### breed?

> `optional` **breed?**: [`IntFieldUpdateOperationsInput`](IntFieldUpdateOperationsInput.md) \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:22198

***

### createdAt?

> `optional` **createdAt?**: [`DateTimeFieldUpdateOperationsInput`](DateTimeFieldUpdateOperationsInput.md) \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:22206

***

### detail?

> `optional` **detail?**: [`AnimalDetailUpdateOneWithoutAnimalNestedInput`](AnimalDetailUpdateOneWithoutAnimalNestedInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:22210

***

### gender?

> `optional` **gender?**: [`EnumGenderFieldUpdateOperationsInput`](EnumGenderFieldUpdateOperationsInput.md) \| [`Gender`](../../$Enums/type-aliases/Gender.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:22199

***

### images?

> `optional` **images?**: [`AnimalImageUpdateManyWithoutAnimalNestedInput`](AnimalImageUpdateManyWithoutAnimalNestedInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:22209

***

### imgThumbnail?

> `optional` **imgThumbnail?**: [`StringFieldUpdateOperationsInput`](StringFieldUpdateOperationsInput.md) \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:22205

***

### isEstimatedAge?

> `optional` **isEstimatedAge?**: [`BoolFieldUpdateOperationsInput`](BoolFieldUpdateOperationsInput.md) \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:22202

***

### isNeutered?

> `optional` **isNeutered?**: [`BoolFieldUpdateOperationsInput`](BoolFieldUpdateOperationsInput.md) \| `boolean`

Defined in: libs/database/src/generated/prisma/index.d.ts:22200

***

### name?

> `optional` **name?**: [`StringFieldUpdateOperationsInput`](StringFieldUpdateOperationsInput.md) \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:22196

***

### shelter?

> `optional` **shelter?**: [`ShelterUpdateOneRequiredWithoutAnimalsNestedInput`](ShelterUpdateOneRequiredWithoutAnimalsNestedInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:22208

***

### species?

> `optional` **species?**: [`IntFieldUpdateOperationsInput`](IntFieldUpdateOperationsInput.md) \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:22197

***

### updatedAt?

> `optional` **updatedAt?**: [`DateTimeFieldUpdateOperationsInput`](DateTimeFieldUpdateOperationsInput.md) \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:22207

***

### weight?

> `optional` **weight?**: [`DecimalFieldUpdateOperationsInput`](DecimalFieldUpdateOperationsInput.md) \| [`PrismaClientKnownRequestError`](../variables/PrismaClientKnownRequestError.md) \| [`DecimalJsLike`](DecimalJsLike.md) \| `number` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:22204
