[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / UserAgreementDelegate

# Interface: UserAgreementDelegate\<ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15203

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Indexable

> \[`K`: `symbol`\]: `object`

## Properties

### fields

> `readonly` **fields**: [`UserAgreementFieldRefs`](UserAgreementFieldRefs.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:15575

Fields of the UserAgreement model

## Methods

### aggregate()

> **aggregate**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetUserAgreementAggregateType`](../type-aliases/GetUserAgreementAggregateType.md)\<`T`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15494

Allows you to perform aggregations operations on a UserAgreement.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`UserAgreementAggregateArgs`](../type-aliases/UserAgreementAggregateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`Subset`](../type-aliases/Subset.md)\<`T`, [`UserAgreementAggregateArgs`](../type-aliases/UserAgreementAggregateArgs.md)\>

Select which aggregations you would like to apply and on what fields.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetUserAgreementAggregateType`](../type-aliases/GetUserAgreementAggregateType.md)\<`T`\>\>

#### Example

```ts
// Ordered by age ascending
// Where email contains prisma.io
// Limited to the 10 users
const aggregations = await prisma.user.aggregate({
  _avg: {
    age: true,
  },
  where: {
    email: {
      contains: "prisma.io",
    },
  },
  orderBy: {
    age: "asc",
  },
  take: 10,
})
```

***

### count()

> **count**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof UserAgreementCountAggregateOutputType ? UserAgreementCountAggregateOutputType\[P\] : never \} : `number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15460

Count the number of UserAgreements.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`UserAgreementCountArgs`](../type-aliases/UserAgreementCountArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`UserAgreementCountArgs`](../type-aliases/UserAgreementCountArgs.md)\<`DefaultArgs`\>\>

Arguments to filter UserAgreements to count.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof UserAgreementCountAggregateOutputType ? UserAgreementCountAggregateOutputType\[P\] : never \} : `number`\>

#### Example

```ts
// Count the number of UserAgreements
const count = await prisma.userAgreement.count({
  where: {
    // ... the filter for the UserAgreements we want to count
  }
})
```

***

### create()

> **create**\<`T`\>(`args`): [`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15293

Create a UserAgreement.

#### Type Parameters

##### T

`T` *extends* [`UserAgreementCreateArgs`](../type-aliases/UserAgreementCreateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`UserAgreementCreateArgs`](../type-aliases/UserAgreementCreateArgs.md)\<`ExtArgs`\>\>

Arguments to create a UserAgreement.

#### Returns

[`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Create one UserAgreement
const UserAgreement = await prisma.userAgreement.create({
  data: {
    // ... data to create a UserAgreement
  }
})
```

***

### createMany()

> **createMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15307

Create many UserAgreements.

#### Type Parameters

##### T

`T` *extends* [`UserAgreementCreateManyArgs`](../type-aliases/UserAgreementCreateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`UserAgreementCreateManyArgs`](../type-aliases/UserAgreementCreateManyArgs.md)\<`ExtArgs`\>\>

Arguments to create many UserAgreements.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Create many UserAgreements
const userAgreement = await prisma.userAgreement.createMany({
  data: [
    // ... provide data here
  ]
})
```

***

### createManyAndReturn()

> **createManyAndReturn**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15331

Create many UserAgreements and returns the data saved in the database.

#### Type Parameters

##### T

`T` *extends* [`UserAgreementCreateManyAndReturnArgs`](../type-aliases/UserAgreementCreateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`UserAgreementCreateManyAndReturnArgs`](../type-aliases/UserAgreementCreateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to create many UserAgreements.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Create many UserAgreements
const userAgreement = await prisma.userAgreement.createManyAndReturn({
  data: [
    // ... provide data here
  ]
})

// Create many UserAgreements and only return the `id`
const userAgreementWithIdOnly = await prisma.userAgreement.createManyAndReturn({
  select: { id: true },
  data: [
    // ... provide data here
  ]
})
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined
```

***

### delete()

> **delete**\<`T`\>(`args`): [`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15345

Delete a UserAgreement.

#### Type Parameters

##### T

`T` *extends* [`UserAgreementDeleteArgs`](../type-aliases/UserAgreementDeleteArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`UserAgreementDeleteArgs`](../type-aliases/UserAgreementDeleteArgs.md)\<`ExtArgs`\>\>

Arguments to delete one UserAgreement.

#### Returns

[`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Delete one UserAgreement
const UserAgreement = await prisma.userAgreement.delete({
  where: {
    // ... filter to delete one UserAgreement
  }
})
```

***

### deleteMany()

> **deleteMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15376

Delete zero or more UserAgreements.

#### Type Parameters

##### T

`T` *extends* [`UserAgreementDeleteManyArgs`](../type-aliases/UserAgreementDeleteManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`UserAgreementDeleteManyArgs`](../type-aliases/UserAgreementDeleteManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter UserAgreements to delete.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Delete a few UserAgreements
const { count } = await prisma.userAgreement.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirst()

> **findFirst**\<`T`\>(`args?`): [`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15245

Find the first UserAgreement that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`UserAgreementFindFirstArgs`](../type-aliases/UserAgreementFindFirstArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`UserAgreementFindFirstArgs`](../type-aliases/UserAgreementFindFirstArgs.md)\<`ExtArgs`\>\>

Arguments to find a UserAgreement

#### Returns

[`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one UserAgreement
const userAgreement = await prisma.userAgreement.findFirst({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirstOrThrow()

> **findFirstOrThrow**\<`T`\>(`args?`): [`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15261

Find the first UserAgreement that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`UserAgreementFindFirstOrThrowArgs`](../type-aliases/UserAgreementFindFirstOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`UserAgreementFindFirstOrThrowArgs`](../type-aliases/UserAgreementFindFirstOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a UserAgreement

#### Returns

[`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one UserAgreement
const userAgreement = await prisma.userAgreement.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### findMany()

> **findMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15279

Find zero or more UserAgreements that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`UserAgreementFindManyArgs`](../type-aliases/UserAgreementFindManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`UserAgreementFindManyArgs`](../type-aliases/UserAgreementFindManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter and select certain fields only.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Get all UserAgreements
const userAgreements = await prisma.userAgreement.findMany()

// Get first 10 UserAgreements
const userAgreements = await prisma.userAgreement.findMany({ take: 10 })

// Only select the `id`
const userAgreementWithIdOnly = await prisma.userAgreement.findMany({ select: { id: true } })
```

***

### findUnique()

> **findUnique**\<`T`\>(`args`): [`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15216

Find zero or one UserAgreement that matches the filter.

#### Type Parameters

##### T

`T` *extends* [`UserAgreementFindUniqueArgs`](../type-aliases/UserAgreementFindUniqueArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`UserAgreementFindUniqueArgs`](../type-aliases/UserAgreementFindUniqueArgs.md)\<`ExtArgs`\>\>

Arguments to find a UserAgreement

#### Returns

[`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one UserAgreement
const userAgreement = await prisma.userAgreement.findUnique({
  where: {
    // ... provide filter here
  }
})
```

***

### findUniqueOrThrow()

> **findUniqueOrThrow**\<`T`\>(`args`): [`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15230

Find one UserAgreement that matches the filter or throw an error with `error.code='P2025'`
if no matches were found.

#### Type Parameters

##### T

`T` *extends* [`UserAgreementFindUniqueOrThrowArgs`](../type-aliases/UserAgreementFindUniqueOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`UserAgreementFindUniqueOrThrowArgs`](../type-aliases/UserAgreementFindUniqueOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a UserAgreement

#### Returns

[`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one UserAgreement
const userAgreement = await prisma.userAgreement.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### groupBy()

> **groupBy**\<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): `object` *extends* `InputErrors` ? [`GetUserAgreementGroupByPayload`](../type-aliases/GetUserAgreementGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15514

Group by UserAgreement.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`UserAgreementGroupByArgs`](../type-aliases/UserAgreementGroupByArgs.md)\<`DefaultArgs`\>

##### HasSelectOrTake

`HasSelectOrTake` *extends* `0` \| `1`

##### OrderByArg

`OrderByArg` *extends* \{ `orderBy`: [`UserAgreementOrderByWithAggregationInput`](../type-aliases/UserAgreementOrderByWithAggregationInput.md) \| [`UserAgreementOrderByWithAggregationInput`](../type-aliases/UserAgreementOrderByWithAggregationInput.md)[] \| `undefined`; \} \| \{ `orderBy?`: [`UserAgreementOrderByWithAggregationInput`](../type-aliases/UserAgreementOrderByWithAggregationInput.md) \| [`UserAgreementOrderByWithAggregationInput`](../type-aliases/UserAgreementOrderByWithAggregationInput.md)[]; \}

##### OrderFields

`OrderFields` *extends* `"id"` \| `"agreementId"` \| `"userId"` \| `"isAgreed"` \| `"agreedAt"`

##### ByFields

`ByFields` *extends* [`UserAgreementScalarFieldEnum`](../type-aliases/UserAgreementScalarFieldEnum.md)

##### ByValid

`ByValid` *extends* `0` \| `1`

##### HavingFields

`HavingFields` *extends* `string` \| `number` \| `symbol`

##### HavingValid

`HavingValid`

##### ByEmpty

`ByEmpty` *extends* `0` \| `1`

##### InputErrors

`InputErrors`

#### Parameters

##### args

\{ \[key in string \| number \| symbol\]: key extends keyof UserAgreementGroupByArgs\<DefaultArgs\> ? T\[key\] : never \} & `OrderByArg` & `InputErrors`

Group by arguments.

#### Returns

`object` *extends* `InputErrors` ? [`GetUserAgreementGroupByPayload`](../type-aliases/GetUserAgreementGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

#### Example

```ts
// Group by city, order by createdAt, get count
const result = await prisma.user.groupBy({
  by: ['city', 'createdAt'],
  orderBy: {
    createdAt: true
  },
  _count: {
    _all: true
  },
})
```

***

### update()

> **update**\<`T`\>(`args`): [`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15362

Update one UserAgreement.

#### Type Parameters

##### T

`T` *extends* [`UserAgreementUpdateArgs`](../type-aliases/UserAgreementUpdateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`UserAgreementUpdateArgs`](../type-aliases/UserAgreementUpdateArgs.md)\<`ExtArgs`\>\>

Arguments to update one UserAgreement.

#### Returns

[`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update one UserAgreement
const userAgreement = await prisma.userAgreement.update({
  where: {
    // ... provide filter here
  },
  data: {
    // ... provide data here
  }
})
```

***

### updateMany()

> **updateMany**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15395

Update zero or more UserAgreements.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`UserAgreementUpdateManyArgs`](../type-aliases/UserAgreementUpdateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`UserAgreementUpdateManyArgs`](../type-aliases/UserAgreementUpdateManyArgs.md)\<`ExtArgs`\>\>

Arguments to update one or more rows.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Update many UserAgreements
const userAgreement = await prisma.userAgreement.updateMany({
  where: {
    // ... provide filter here
  },
  data: {
    // ... provide data here
  }
})
```

***

### updateManyAndReturn()

> **updateManyAndReturn**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15425

Update zero or more UserAgreements and returns the data updated in the database.

#### Type Parameters

##### T

`T` *extends* [`UserAgreementUpdateManyAndReturnArgs`](../type-aliases/UserAgreementUpdateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`UserAgreementUpdateManyAndReturnArgs`](../type-aliases/UserAgreementUpdateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to update many UserAgreements.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Update many UserAgreements
const userAgreement = await prisma.userAgreement.updateManyAndReturn({
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})

// Update zero or more UserAgreements and only return the `id`
const userAgreementWithIdOnly = await prisma.userAgreement.updateManyAndReturn({
  select: { id: true },
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined
```

***

### upsert()

> **upsert**\<`T`\>(`args`): [`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:15444

Create or update one UserAgreement.

#### Type Parameters

##### T

`T` *extends* [`UserAgreementUpsertArgs`](../type-aliases/UserAgreementUpsertArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`UserAgreementUpsertArgs`](../type-aliases/UserAgreementUpsertArgs.md)\<`ExtArgs`\>\>

Arguments to update or create a UserAgreement.

#### Returns

[`Prisma__UserAgreementClient`](Prisma__UserAgreementClient.md)\<`GetFindResult`\<[`$UserAgreementPayload`](../type-aliases/$UserAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update or create a UserAgreement
const userAgreement = await prisma.userAgreement.upsert({
  create: {
    // ... data to create a UserAgreement
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the UserAgreement we want to update
  }
})
```
