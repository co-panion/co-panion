[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetPetPostGroupByPayload

# Type Alias: GetPetPostGroupByPayload\<T\>

> **GetPetPostGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`PetPostGroupByOutputType`](PetPostGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof PetPostGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], PetPostGroupByOutputType[P]> : GetScalarType<T[P], PetPostGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17322

## Type Parameters

### T

`T` *extends* [`PetPostGroupByArgs`](PetPostGroupByArgs.md)
