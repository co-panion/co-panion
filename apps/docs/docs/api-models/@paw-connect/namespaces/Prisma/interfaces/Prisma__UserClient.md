[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / Prisma\_\_UserClient

# Interface: Prisma\_\_UserClient\<T, Null, ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:3246

The delegate class that acts as a "Promise-like" for User.
Why is this prefixed with `Prisma__`?
Because we want to prevent naming conflicts as mentioned in
https://github.com/prisma/prisma-client-js/issues/707

## Extends

- [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T`\>

## Type Parameters

### T

`T`

### Null

`Null` = `never`

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `"PrismaPromise"`

Defined in: libs/database/src/generated/prisma/index.d.ts:3247

#### Overrides

`Prisma.PrismaPromise.[toStringTag]`

## Methods

### adoptions()

> **adoptions**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`Null` \| `GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:3249

#### Type Parameters

##### T

`T` *extends* [`User$adoptionsArgs`](../type-aliases/User$adoptionsArgs.md)\<`ExtArgs`\> = \{ \}

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`User$adoptionsArgs`](../type-aliases/User$adoptionsArgs.md)\<`ExtArgs`\>\>

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`Null` \| `GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

***

### agreements()

> **agreements**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`Null` \| `GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:3248

#### Type Parameters

##### T

`T` *extends* [`User$agreementsArgs`](../type-aliases/User$agreementsArgs.md)\<`ExtArgs`\> = \{ \}

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`User$agreementsArgs`](../type-aliases/User$agreementsArgs.md)\<`ExtArgs`\>\>

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`Null` \| `GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

***

### catch()

> **catch**\<`TResult`\>(`onrejected?`): `Promise`\<`T` \| `TResult`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:3263

Attaches a callback for only the rejection of the Promise.

#### Type Parameters

##### TResult

`TResult` = `never`

#### Parameters

##### onrejected?

((`reason`) => `TResult` \| `PromiseLike`\<`TResult`\>) \| `null`

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`T` \| `TResult`\>

A Promise for the completion of the callback.

#### Overrides

`Prisma.PrismaPromise.catch`

***

### finally()

> **finally**(`onfinally?`): `Promise`\<`T`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:3270

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

##### onfinally?

(() => `void`) \| `null`

The callback to execute when the Promise is settled (fulfilled or rejected).

#### Returns

`Promise`\<`T`\>

A Promise for the completion of the callback.

#### Overrides

`Prisma.PrismaPromise.finally`

***

### inquiries()

> **inquiries**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`Null` \| `GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:3250

#### Type Parameters

##### T

`T` *extends* [`User$inquiriesArgs`](../type-aliases/User$inquiriesArgs.md)\<`ExtArgs`\> = \{ \}

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`User$inquiriesArgs`](../type-aliases/User$inquiriesArgs.md)\<`ExtArgs`\>\>

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`Null` \| `GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`\<`TResult1` \| `TResult2`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:3257

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

##### TResult1

`TResult1` = `T`

##### TResult2

`TResult2` = `never`

#### Parameters

##### onfulfilled?

((`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\>) \| `null`

The callback to execute when the Promise is resolved.

##### onrejected?

((`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\>) \| `null`

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Overrides

`Prisma.PrismaPromise.then`
