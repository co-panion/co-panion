[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAdoptionDetailGroupByPayload

# Type Alias: GetAdoptionDetailGroupByPayload\<T\>

> **GetAdoptionDetailGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`AdoptionDetailGroupByOutputType`](AdoptionDetailGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof AdoptionDetailGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], AdoptionDetailGroupByOutputType[P]> : GetScalarType<T[P], AdoptionDetailGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:12914

## Type Parameters

### T

`T` *extends* [`AdoptionDetailGroupByArgs`](AdoptionDetailGroupByArgs.md)
