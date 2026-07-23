[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAnimalImageGroupByPayload

# Type Alias: GetAnimalImageGroupByPayload\<T\>

> **GetAnimalImageGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`AnimalImageGroupByOutputType`](AnimalImageGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof AnimalImageGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], AnimalImageGroupByOutputType[P]> : GetScalarType<T[P], AnimalImageGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10581

## Type Parameters

### T

`T` *extends* [`AnimalImageGroupByArgs`](AnimalImageGroupByArgs.md)
