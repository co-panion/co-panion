[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetPetPostImageGroupByPayload

# Type Alias: GetPetPostImageGroupByPayload\<T\>

> **GetPetPostImageGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`PetPostImageGroupByOutputType`](PetPostImageGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof PetPostImageGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], PetPostImageGroupByOutputType[P]> : GetScalarType<T[P], PetPostImageGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18423

## Type Parameters

### T

`T` *extends* [`PetPostImageGroupByArgs`](PetPostImageGroupByArgs.md)
