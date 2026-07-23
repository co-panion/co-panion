[**@co-panion/database**](../README.md)

***

[@co-panion/database](../README.md) / PrismaClient

# Class: PrismaClient\<ClientOptions, U, ExtArgs\>

Defined in: libs/database/src/generated/prisma/index.d.ts:275

##  Prisma Client ʲˢ

Type-safe database client for TypeScript & Node.js

## Example

```
const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
})
// Fetch zero or more Users
const users = await prisma.user.findMany()
```

Read more in our [docs](https://pris.ly/d/client).

## Type Parameters

### ClientOptions

`ClientOptions` *extends* [`PrismaClientOptions`](../@co-panion/namespaces/Prisma/interfaces/PrismaClientOptions.md) = [`PrismaClientOptions`](../@co-panion/namespaces/Prisma/interfaces/PrismaClientOptions.md)

### U

`U` = `"log"` *extends* keyof `ClientOptions` ? `ClientOptions`\[`"log"`\] *extends* ([`LogLevel`](../@co-panion/namespaces/Prisma/type-aliases/LogLevel.md) \| [`LogDefinition`](../@co-panion/namespaces/Prisma/type-aliases/LogDefinition.md))[] ? [`GetEvents`](../@co-panion/namespaces/Prisma/type-aliases/GetEvents.md)\<`ClientOptions`\[`"log"`\]\> : `never` : `never`

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Indexable

> \[`K`: `symbol`\]: `object`

## Constructors

### Constructor

> **new PrismaClient**\<`ClientOptions`, `U`, `ExtArgs`\>(`optionsArg?`): `PrismaClient`\<`ClientOptions`, `U`, `ExtArgs`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:299

##  Prisma Client ʲˢ

Type-safe database client for TypeScript & Node.js

#### Parameters

##### optionsArg?

[`Subset`](../@co-panion/namespaces/Prisma/type-aliases/Subset.md)\<`ClientOptions`, [`PrismaClientOptions`](../@co-panion/namespaces/Prisma/interfaces/PrismaClientOptions.md)\>

#### Returns

`PrismaClient`\<`ClientOptions`, `U`, `ExtArgs`\>

#### Example

```
const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
})
// Fetch zero or more Users
const users = await prisma.user.findMany()
```

Read more in our [docs](https://pris.ly/d/client).

## Properties

### $extends

> **$extends**: `ExtendsHook`\<`"extends"`, [`TypeMapCb`](../@co-panion/namespaces/Prisma/interfaces/TypeMapCb.md)\<`ClientOptions`\>, `ExtArgs`, [`TypeMap`](../@co-panion/namespaces/Prisma/type-aliases/TypeMap.md)\<`InternalArgs` & `ExtArgs`, `ClientOptions` *extends* `object` ? `OmitOptions` : `object`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:376

## Accessors

### adoption

#### Get Signature

> **get** **adoption**(): [`AdoptionDelegate`](../@co-panion/namespaces/Prisma/interfaces/AdoptionDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:468

`prisma.adoption`: Exposes CRUD operations for the **Adoption** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more Adoptions
 * const adoptions = await prisma.adoption.findMany()
 * ```

##### Returns

[`AdoptionDelegate`](../@co-panion/namespaces/Prisma/interfaces/AdoptionDelegate.md)\<`ExtArgs`, `ClientOptions`\>

***

### adoptionAgreement

#### Get Signature

> **get** **adoptionAgreement**(): [`AdoptionAgreementDelegate`](../@co-panion/namespaces/Prisma/interfaces/AdoptionAgreementDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:508

`prisma.adoptionAgreement`: Exposes CRUD operations for the **AdoptionAgreement** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more AdoptionAgreements
 * const adoptionAgreements = await prisma.adoptionAgreement.findMany()
 * ```

##### Returns

[`AdoptionAgreementDelegate`](../@co-panion/namespaces/Prisma/interfaces/AdoptionAgreementDelegate.md)\<`ExtArgs`, `ClientOptions`\>

***

### adoptionDetail

#### Get Signature

> **get** **adoptionDetail**(): [`AdoptionDetailDelegate`](../@co-panion/namespaces/Prisma/interfaces/AdoptionDetailDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:478

`prisma.adoptionDetail`: Exposes CRUD operations for the **AdoptionDetail** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more AdoptionDetails
 * const adoptionDetails = await prisma.adoptionDetail.findMany()
 * ```

##### Returns

[`AdoptionDetailDelegate`](../@co-panion/namespaces/Prisma/interfaces/AdoptionDetailDelegate.md)\<`ExtArgs`, `ClientOptions`\>

***

### agreement

#### Get Signature

> **get** **agreement**(): [`AgreementDelegate`](../@co-panion/namespaces/Prisma/interfaces/AgreementDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:488

`prisma.agreement`: Exposes CRUD operations for the **Agreement** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more Agreements
 * const agreements = await prisma.agreement.findMany()
 * ```

##### Returns

[`AgreementDelegate`](../@co-panion/namespaces/Prisma/interfaces/AgreementDelegate.md)\<`ExtArgs`, `ClientOptions`\>

***

### animal

#### Get Signature

> **get** **animal**(): [`AnimalDelegate`](../@co-panion/namespaces/Prisma/interfaces/AnimalDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:418

`prisma.animal`: Exposes CRUD operations for the **Animal** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more Animals
 * const animals = await prisma.animal.findMany()
 * ```

##### Returns

[`AnimalDelegate`](../@co-panion/namespaces/Prisma/interfaces/AnimalDelegate.md)\<`ExtArgs`, `ClientOptions`\>

***

### animalBreed

#### Get Signature

> **get** **animalBreed**(): [`AnimalBreedDelegate`](../@co-panion/namespaces/Prisma/interfaces/AnimalBreedDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:438

`prisma.animalBreed`: Exposes CRUD operations for the **AnimalBreed** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more AnimalBreeds
 * const animalBreeds = await prisma.animalBreed.findMany()
 * ```

##### Returns

[`AnimalBreedDelegate`](../@co-panion/namespaces/Prisma/interfaces/AnimalBreedDelegate.md)\<`ExtArgs`, `ClientOptions`\>

***

### animalDetail

#### Get Signature

> **get** **animalDetail**(): [`AnimalDetailDelegate`](../@co-panion/namespaces/Prisma/interfaces/AnimalDetailDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:448

`prisma.animalDetail`: Exposes CRUD operations for the **AnimalDetail** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more AnimalDetails
 * const animalDetails = await prisma.animalDetail.findMany()
 * ```

##### Returns

[`AnimalDetailDelegate`](../@co-panion/namespaces/Prisma/interfaces/AnimalDetailDelegate.md)\<`ExtArgs`, `ClientOptions`\>

***

### animalImage

#### Get Signature

> **get** **animalImage**(): [`AnimalImageDelegate`](../@co-panion/namespaces/Prisma/interfaces/AnimalImageDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:458

`prisma.animalImage`: Exposes CRUD operations for the **AnimalImage** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more AnimalImages
 * const animalImages = await prisma.animalImage.findMany()
 * ```

##### Returns

[`AnimalImageDelegate`](../@co-panion/namespaces/Prisma/interfaces/AnimalImageDelegate.md)\<`ExtArgs`, `ClientOptions`\>

***

### animalSpecies

#### Get Signature

> **get** **animalSpecies**(): [`AnimalSpeciesDelegate`](../@co-panion/namespaces/Prisma/interfaces/AnimalSpeciesDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:428

`prisma.animalSpecies`: Exposes CRUD operations for the **AnimalSpecies** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more AnimalSpecies
 * const animalSpecies = await prisma.animalSpecies.findMany()
 * ```

##### Returns

[`AnimalSpeciesDelegate`](../@co-panion/namespaces/Prisma/interfaces/AnimalSpeciesDelegate.md)\<`ExtArgs`, `ClientOptions`\>

***

### inquiry

#### Get Signature

> **get** **inquiry**(): [`InquiryDelegate`](../@co-panion/namespaces/Prisma/interfaces/InquiryDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:538

`prisma.inquiry`: Exposes CRUD operations for the **Inquiry** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more Inquiries
 * const inquiries = await prisma.inquiry.findMany()
 * ```

##### Returns

[`InquiryDelegate`](../@co-panion/namespaces/Prisma/interfaces/InquiryDelegate.md)\<`ExtArgs`, `ClientOptions`\>

***

### petPost

#### Get Signature

> **get** **petPost**(): [`PetPostDelegate`](../@co-panion/namespaces/Prisma/interfaces/PetPostDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:518

`prisma.petPost`: Exposes CRUD operations for the **PetPost** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more PetPosts
 * const petPosts = await prisma.petPost.findMany()
 * ```

##### Returns

[`PetPostDelegate`](../@co-panion/namespaces/Prisma/interfaces/PetPostDelegate.md)\<`ExtArgs`, `ClientOptions`\>

***

### petPostImage

#### Get Signature

> **get** **petPostImage**(): [`PetPostImageDelegate`](../@co-panion/namespaces/Prisma/interfaces/PetPostImageDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:528

`prisma.petPostImage`: Exposes CRUD operations for the **PetPostImage** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more PetPostImages
 * const petPostImages = await prisma.petPostImage.findMany()
 * ```

##### Returns

[`PetPostImageDelegate`](../@co-panion/namespaces/Prisma/interfaces/PetPostImageDelegate.md)\<`ExtArgs`, `ClientOptions`\>

***

### shelter

#### Get Signature

> **get** **shelter**(): [`ShelterDelegate`](../@co-panion/namespaces/Prisma/interfaces/ShelterDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:398

`prisma.shelter`: Exposes CRUD operations for the **Shelter** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more Shelters
 * const shelters = await prisma.shelter.findMany()
 * ```

##### Returns

[`ShelterDelegate`](../@co-panion/namespaces/Prisma/interfaces/ShelterDelegate.md)\<`ExtArgs`, `ClientOptions`\>

***

### shelterImage

#### Get Signature

> **get** **shelterImage**(): [`ShelterImageDelegate`](../@co-panion/namespaces/Prisma/interfaces/ShelterImageDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:408

`prisma.shelterImage`: Exposes CRUD operations for the **ShelterImage** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more ShelterImages
 * const shelterImages = await prisma.shelterImage.findMany()
 * ```

##### Returns

[`ShelterImageDelegate`](../@co-panion/namespaces/Prisma/interfaces/ShelterImageDelegate.md)\<`ExtArgs`, `ClientOptions`\>

***

### user

#### Get Signature

> **get** **user**(): [`UserDelegate`](../@co-panion/namespaces/Prisma/interfaces/UserDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:388

`prisma.user`: Exposes CRUD operations for the **User** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```

##### Returns

[`UserDelegate`](../@co-panion/namespaces/Prisma/interfaces/UserDelegate.md)\<`ExtArgs`, `ClientOptions`\>

***

### userAgreement

#### Get Signature

> **get** **userAgreement**(): [`UserAgreementDelegate`](../@co-panion/namespaces/Prisma/interfaces/UserAgreementDelegate.md)\<`ExtArgs`, `ClientOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:498

`prisma.userAgreement`: Exposes CRUD operations for the **UserAgreement** model.
 * Example usage:
 * ```ts
 * // Fetch zero or more UserAgreements
 * const userAgreements = await prisma.userAgreement.findMany()
 * ```

##### Returns

[`UserAgreementDelegate`](../@co-panion/namespaces/Prisma/interfaces/UserAgreementDelegate.md)\<`ExtArgs`, `ClientOptions`\>

## Methods

### $connect()

> **$connect**(): `Promise`\<`void`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:305

Connect with the database

#### Returns

`Promise`\<`void`\>

***

### $disconnect()

> **$disconnect**(): `Promise`\<`void`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:310

Disconnect from the database

#### Returns

`Promise`\<`void`\>

***

### $executeRaw()

> **$executeRaw**\<`T`\>(`query`, ...`values`): [`PrismaPromise`](../@co-panion/namespaces/Prisma/type-aliases/PrismaPromise.md)\<`number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:321

Executes a prepared raw query and returns the number of affected rows.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### query

`any`

##### values

...`any`[]

#### Returns

[`PrismaPromise`](../@co-panion/namespaces/Prisma/type-aliases/PrismaPromise.md)\<`number`\>

#### Example

```
const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
```

Read more in our [docs](https://pris.ly/d/raw-queries).

***

### $executeRawUnsafe()

> **$executeRawUnsafe**\<`T`\>(`query`, ...`values`): [`PrismaPromise`](../@co-panion/namespaces/Prisma/type-aliases/PrismaPromise.md)\<`number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:333

Executes a raw query and returns the number of affected rows.
Susceptible to SQL injections, see documentation.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### query

`string`

##### values

...`any`[]

#### Returns

[`PrismaPromise`](../@co-panion/namespaces/Prisma/type-aliases/PrismaPromise.md)\<`number`\>

#### Example

```
const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
```

Read more in our [docs](https://pris.ly/d/raw-queries).

***

### $on()

> **$on**\<`V`\>(`eventType`, `callback`): `PrismaClient`

Defined in: libs/database/src/generated/prisma/index.d.ts:300

#### Type Parameters

##### V

`V`

#### Parameters

##### eventType

`V`

##### callback

(`event`) => `void`

#### Returns

`PrismaClient`

***

### $queryRaw()

> **$queryRaw**\<`T`\>(`query`, ...`values`): [`PrismaPromise`](../@co-panion/namespaces/Prisma/type-aliases/PrismaPromise.md)\<`T`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:344

Performs a prepared raw query and returns the `SELECT` data.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### query

`any`

##### values

...`any`[]

#### Returns

[`PrismaPromise`](../@co-panion/namespaces/Prisma/type-aliases/PrismaPromise.md)\<`T`\>

#### Example

```
const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
```

Read more in our [docs](https://pris.ly/d/raw-queries).

***

### $queryRawUnsafe()

> **$queryRawUnsafe**\<`T`\>(`query`, ...`values`): [`PrismaPromise`](../@co-panion/namespaces/Prisma/type-aliases/PrismaPromise.md)\<`T`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:356

Performs a raw query and returns the `SELECT` data.
Susceptible to SQL injections, see documentation.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### query

`string`

##### values

...`any`[]

#### Returns

[`PrismaPromise`](../@co-panion/namespaces/Prisma/type-aliases/PrismaPromise.md)\<`T`\>

#### Example

```
const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
```

Read more in our [docs](https://pris.ly/d/raw-queries).

***

### $transaction()

#### Call Signature

> **$transaction**\<`P`\>(`arg`, `options?`): `Promise`\<`UnwrapTuple`\<`P`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:372

Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.

##### Type Parameters

###### P

`P` *extends* [`PrismaPromise`](../@co-panion/namespaces/Prisma/type-aliases/PrismaPromise.md)\<`any`\>[]

##### Parameters

###### arg

\[`...P[]`\]

###### options?

###### isolationLevel?

[`TransactionIsolationLevel`](../@co-panion/namespaces/Prisma/type-aliases/TransactionIsolationLevel.md)

###### maxWait?

`number`

###### timeout?

`number`

##### Returns

`Promise`\<`UnwrapTuple`\<`P`\>\>

##### Example

```
const [george, bob, alice] = await prisma.$transaction([
  prisma.user.create({ data: { name: 'George' } }),
  prisma.user.create({ data: { name: 'Bob' } }),
  prisma.user.create({ data: { name: 'Alice' } }),
])
```

Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).

#### Call Signature

> **$transaction**\<`R`\>(`fn`, `options?`): `Promise`\<`R`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:374

Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.

##### Type Parameters

###### R

`R`

##### Parameters

###### fn

(`prisma`) => `Promise`\<`R`\>

###### options?

###### isolationLevel?

[`TransactionIsolationLevel`](../@co-panion/namespaces/Prisma/type-aliases/TransactionIsolationLevel.md)

###### maxWait?

`number`

###### timeout?

`number`

##### Returns

`Promise`\<`R`\>

##### Example

```
const [george, bob, alice] = await prisma.$transaction([
  prisma.user.create({ data: { name: 'George' } }),
  prisma.user.create({ data: { name: 'Bob' } }),
  prisma.user.create({ data: { name: 'Alice' } }),
])
```

Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
