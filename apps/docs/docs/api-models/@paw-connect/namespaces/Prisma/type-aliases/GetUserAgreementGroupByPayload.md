[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetUserAgreementGroupByPayload

# Type Alias: GetUserAgreementGroupByPayload\<T\>

> **GetUserAgreementGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`UserAgreementGroupByOutputType`](UserAgreementGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof UserAgreementGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], UserAgreementGroupByOutputType[P]> : GetScalarType<T[P], UserAgreementGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15121

## Type Parameters

### T

`T` *extends* [`UserAgreementGroupByArgs`](UserAgreementGroupByArgs.md)
