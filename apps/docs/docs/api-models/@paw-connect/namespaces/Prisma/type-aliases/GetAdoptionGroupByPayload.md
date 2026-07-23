[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAdoptionGroupByPayload

# Type Alias: GetAdoptionGroupByPayload\<T\>

> **GetAdoptionGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`AdoptionGroupByOutputType`](AdoptionGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof AdoptionGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], AdoptionGroupByOutputType[P]> : GetScalarType<T[P], AdoptionGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11673

## Type Parameters

### T

`T` *extends* [`AdoptionGroupByArgs`](AdoptionGroupByArgs.md)
