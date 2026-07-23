[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAdoptionAgreementGroupByPayload

# Type Alias: GetAdoptionAgreementGroupByPayload\<T\>

> **GetAdoptionAgreementGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`AdoptionAgreementGroupByOutputType`](AdoptionAgreementGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof AdoptionAgreementGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], AdoptionAgreementGroupByOutputType[P]> : GetScalarType<T[P], AdoptionAgreementGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16218

## Type Parameters

### T

`T` *extends* [`AdoptionAgreementGroupByArgs`](AdoptionAgreementGroupByArgs.md)
