[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetAgreementGroupByPayload

# Type Alias: GetAgreementGroupByPayload\<T\>

> **GetAgreementGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`AgreementGroupByOutputType`](AgreementGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof AgreementGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], AgreementGroupByOutputType[P]> : GetScalarType<T[P], AgreementGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14099

## Type Parameters

### T

`T` *extends* [`AgreementGroupByArgs`](AgreementGroupByArgs.md)
