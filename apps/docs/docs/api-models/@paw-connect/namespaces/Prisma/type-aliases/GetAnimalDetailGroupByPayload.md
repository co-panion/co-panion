[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAnimalDetailGroupByPayload

# Type Alias: GetAnimalDetailGroupByPayload\<T\>

> **GetAnimalDetailGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`AnimalDetailGroupByOutputType`](AnimalDetailGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof AnimalDetailGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], AnimalDetailGroupByOutputType[P]> : GetScalarType<T[P], AnimalDetailGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9474

## Type Parameters

### T

`T` *extends* [`AnimalDetailGroupByArgs`](AnimalDetailGroupByArgs.md)
