[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAnimalSpeciesGroupByPayload

# Type Alias: GetAnimalSpeciesGroupByPayload\<T\>

> **GetAnimalSpeciesGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`AnimalSpeciesGroupByOutputType`](AnimalSpeciesGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof AnimalSpeciesGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], AnimalSpeciesGroupByOutputType[P]> : GetScalarType<T[P], AnimalSpeciesGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7418

## Type Parameters

### T

`T` *extends* [`AnimalSpeciesGroupByArgs`](AnimalSpeciesGroupByArgs.md)
