[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAnimalGroupByPayload

# Type Alias: GetAnimalGroupByPayload\<T\>

> **GetAnimalGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`AnimalGroupByOutputType`](AnimalGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof AnimalGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], AnimalGroupByOutputType[P]> : GetScalarType<T[P], AnimalGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6235

## Type Parameters

### T

`T` *extends* [`AnimalGroupByArgs`](AnimalGroupByArgs.md)
