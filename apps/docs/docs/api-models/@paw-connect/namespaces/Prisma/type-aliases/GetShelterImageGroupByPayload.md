[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetShelterImageGroupByPayload

# Type Alias: GetShelterImageGroupByPayload\<T\>

> **GetShelterImageGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`ShelterImageGroupByOutputType`](ShelterImageGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof ShelterImageGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], ShelterImageGroupByOutputType[P]> : GetScalarType<T[P], ShelterImageGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5071

## Type Parameters

### T

`T` *extends* [`ShelterImageGroupByArgs`](ShelterImageGroupByArgs.md)
