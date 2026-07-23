[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionUpdateInput

# Type Alias: AdoptionUpdateInput

> **AdoptionUpdateInput** = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:22498

## Properties

### adoptionStatus?

> `optional` **adoptionStatus?**: [`EnumAdoptionStatusFieldUpdateOperationsInput`](EnumAdoptionStatusFieldUpdateOperationsInput.md) \| [`AdoptionStatus`](../../$Enums/type-aliases/AdoptionStatus.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:22501

***

### agreements?

> `optional` **agreements?**: [`AdoptionAgreementUpdateManyWithoutAdoptionNestedInput`](AdoptionAgreementUpdateManyWithoutAdoptionNestedInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:22506

***

### animalId?

> `optional` **animalId?**: [`IntFieldUpdateOperationsInput`](IntFieldUpdateOperationsInput.md) \| `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:22500

***

### createdAt?

> `optional` **createdAt?**: [`DateTimeFieldUpdateOperationsInput`](DateTimeFieldUpdateOperationsInput.md) \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:22502

***

### detail?

> `optional` **detail?**: [`AdoptionDetailUpdateOneWithoutAdoptionNestedInput`](AdoptionDetailUpdateOneWithoutAdoptionNestedInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:22505

***

### id?

> `optional` **id?**: [`StringFieldUpdateOperationsInput`](StringFieldUpdateOperationsInput.md) \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:22499

***

### updatedAt?

> `optional` **updatedAt?**: [`DateTimeFieldUpdateOperationsInput`](DateTimeFieldUpdateOperationsInput.md) \| `Date` \| `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:22503

***

### user?

> `optional` **user?**: [`UserUpdateOneRequiredWithoutAdoptionsNestedInput`](UserUpdateOneRequiredWithoutAdoptionsNestedInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:22504
