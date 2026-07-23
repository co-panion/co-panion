[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / Prisma\_\_AnimalClient

# Interface: Prisma\_\_AnimalClient\<T, Null, ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6751

The delegate class that acts as a "Promise-like" for Animal.
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

Defined in: libs/database/src/generated/prisma/index.d.ts:6752

#### Overrides

`Prisma.PrismaPromise.[toStringTag]`

## Methods

### catch()

> **catch**\<`TResult`\>(`onrejected?`): `Promise`\<`T` \| `TResult`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6768

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

### detail()

> **detail**\<`T`\>(`args?`): [`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6755

#### Type Parameters

##### T

`T` *extends* [`Animal$detailArgs`](../type-aliases/Animal$detailArgs.md)\<`ExtArgs`\> = \{ \}

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`Animal$detailArgs`](../type-aliases/Animal$detailArgs.md)\<`ExtArgs`\>\>

#### Returns

[`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

***

### finally()

> **finally**(`onfinally?`): `Promise`\<`T`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6775

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

### images()

> **images**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`Null` \| `GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6754

#### Type Parameters

##### T

`T` *extends* [`Animal$imagesArgs`](../type-aliases/Animal$imagesArgs.md)\<`ExtArgs`\> = \{ \}

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`Animal$imagesArgs`](../type-aliases/Animal$imagesArgs.md)\<`ExtArgs`\>\>

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`Null` \| `GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

***

### shelter()

> **shelter**\<`T`\>(`args?`): [`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`Null` \| `GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `Null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6753

#### Type Parameters

##### T

`T` *extends* [`ShelterDefaultArgs`](../type-aliases/ShelterDefaultArgs.md)\<`ExtArgs`\> = \{ \}

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`ShelterDefaultArgs`](../type-aliases/ShelterDefaultArgs.md)\<`ExtArgs`\>\>

#### Returns

[`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`Null` \| `GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `Null`, `ExtArgs`, `GlobalOmitOptions`\>

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`\<`TResult1` \| `TResult2`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6762

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
