[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetUserGroupByPayload

# Type Alias: GetUserGroupByPayload\<T\>

> **GetUserGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`UserGroupByOutputType`](UserGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof UserGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], UserGroupByOutputType[P]> : GetScalarType<T[P], UserGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:2756

## Type Parameters

### T

`T` *extends* [`UserGroupByArgs`](UserGroupByArgs.md)
