[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetShelterGroupByPayload

# Type Alias: GetShelterGroupByPayload\<T\>

> **GetShelterGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`ShelterGroupByOutputType`](ShelterGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof ShelterGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], ShelterGroupByOutputType[P]> : GetScalarType<T[P], ShelterGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:3952

## Type Parameters

### T

`T` *extends* [`ShelterGroupByArgs`](ShelterGroupByArgs.md)
