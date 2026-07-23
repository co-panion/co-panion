[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAnimalBreedGroupByPayload

# Type Alias: GetAnimalBreedGroupByPayload\<T\>

> **GetAnimalBreedGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`AnimalBreedGroupByOutputType`](AnimalBreedGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof AnimalBreedGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], AnimalBreedGroupByOutputType[P]> : GetScalarType<T[P], AnimalBreedGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8424

## Type Parameters

### T

`T` *extends* [`AnimalBreedGroupByArgs`](AnimalBreedGroupByArgs.md)
