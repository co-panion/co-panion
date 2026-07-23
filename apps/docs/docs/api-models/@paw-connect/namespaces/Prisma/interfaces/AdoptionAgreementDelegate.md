[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionAgreementDelegate

# Interface: AdoptionAgreementDelegate\<ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16300

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Indexable

> \[`K`: `symbol`\]: `object`

## Properties

### fields

> `readonly` **fields**: [`AdoptionAgreementFieldRefs`](AdoptionAgreementFieldRefs.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:16672

Fields of the AdoptionAgreement model

## Methods

### aggregate()

> **aggregate**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAdoptionAgreementAggregateType`](../type-aliases/GetAdoptionAgreementAggregateType.md)\<`T`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16591

Allows you to perform aggregations operations on a AdoptionAgreement.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementAggregateArgs`](../type-aliases/AdoptionAgreementAggregateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AdoptionAgreementAggregateArgs`](../type-aliases/AdoptionAgreementAggregateArgs.md)\>

Select which aggregations you would like to apply and on what fields.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAdoptionAgreementAggregateType`](../type-aliases/GetAdoptionAgreementAggregateType.md)\<`T`\>\>

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

> **count**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AdoptionAgreementCountAggregateOutputType ? AdoptionAgreementCountAggregateOutputType\[P\] : never \} : `number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16557

Count the number of AdoptionAgreements.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementCountArgs`](../type-aliases/AdoptionAgreementCountArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AdoptionAgreementCountArgs`](../type-aliases/AdoptionAgreementCountArgs.md)\<`DefaultArgs`\>\>

Arguments to filter AdoptionAgreements to count.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AdoptionAgreementCountAggregateOutputType ? AdoptionAgreementCountAggregateOutputType\[P\] : never \} : `number`\>

#### Example

```ts
// Count the number of AdoptionAgreements
const count = await prisma.adoptionAgreement.count({
  where: {
    // ... the filter for the AdoptionAgreements we want to count
  }
})
```

***

### create()

> **create**\<`T`\>(`args`): [`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16390

Create a AdoptionAgreement.

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementCreateArgs`](../type-aliases/AdoptionAgreementCreateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionAgreementCreateArgs`](../type-aliases/AdoptionAgreementCreateArgs.md)\<`ExtArgs`\>\>

Arguments to create a AdoptionAgreement.

#### Returns

[`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Create one AdoptionAgreement
const AdoptionAgreement = await prisma.adoptionAgreement.create({
  data: {
    // ... data to create a AdoptionAgreement
  }
})
```

***

### createMany()

> **createMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16404

Create many AdoptionAgreements.

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementCreateManyArgs`](../type-aliases/AdoptionAgreementCreateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionAgreementCreateManyArgs`](../type-aliases/AdoptionAgreementCreateManyArgs.md)\<`ExtArgs`\>\>

Arguments to create many AdoptionAgreements.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Create many AdoptionAgreements
const adoptionAgreement = await prisma.adoptionAgreement.createMany({
  data: [
    // ... provide data here
  ]
})
```

***

### createManyAndReturn()

> **createManyAndReturn**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16428

Create many AdoptionAgreements and returns the data saved in the database.

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementCreateManyAndReturnArgs`](../type-aliases/AdoptionAgreementCreateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionAgreementCreateManyAndReturnArgs`](../type-aliases/AdoptionAgreementCreateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to create many AdoptionAgreements.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Create many AdoptionAgreements
const adoptionAgreement = await prisma.adoptionAgreement.createManyAndReturn({
  data: [
    // ... provide data here
  ]
})

// Create many AdoptionAgreements and only return the `id`
const adoptionAgreementWithIdOnly = await prisma.adoptionAgreement.createManyAndReturn({
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

> **delete**\<`T`\>(`args`): [`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16442

Delete a AdoptionAgreement.

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementDeleteArgs`](../type-aliases/AdoptionAgreementDeleteArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionAgreementDeleteArgs`](../type-aliases/AdoptionAgreementDeleteArgs.md)\<`ExtArgs`\>\>

Arguments to delete one AdoptionAgreement.

#### Returns

[`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Delete one AdoptionAgreement
const AdoptionAgreement = await prisma.adoptionAgreement.delete({
  where: {
    // ... filter to delete one AdoptionAgreement
  }
})
```

***

### deleteMany()

> **deleteMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16473

Delete zero or more AdoptionAgreements.

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementDeleteManyArgs`](../type-aliases/AdoptionAgreementDeleteManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionAgreementDeleteManyArgs`](../type-aliases/AdoptionAgreementDeleteManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter AdoptionAgreements to delete.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Delete a few AdoptionAgreements
const { count } = await prisma.adoptionAgreement.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirst()

> **findFirst**\<`T`\>(`args?`): [`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16342

Find the first AdoptionAgreement that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementFindFirstArgs`](../type-aliases/AdoptionAgreementFindFirstArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionAgreementFindFirstArgs`](../type-aliases/AdoptionAgreementFindFirstArgs.md)\<`ExtArgs`\>\>

Arguments to find a AdoptionAgreement

#### Returns

[`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AdoptionAgreement
const adoptionAgreement = await prisma.adoptionAgreement.findFirst({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirstOrThrow()

> **findFirstOrThrow**\<`T`\>(`args?`): [`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16358

Find the first AdoptionAgreement that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementFindFirstOrThrowArgs`](../type-aliases/AdoptionAgreementFindFirstOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionAgreementFindFirstOrThrowArgs`](../type-aliases/AdoptionAgreementFindFirstOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a AdoptionAgreement

#### Returns

[`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AdoptionAgreement
const adoptionAgreement = await prisma.adoptionAgreement.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### findMany()

> **findMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16376

Find zero or more AdoptionAgreements that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementFindManyArgs`](../type-aliases/AdoptionAgreementFindManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionAgreementFindManyArgs`](../type-aliases/AdoptionAgreementFindManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter and select certain fields only.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Get all AdoptionAgreements
const adoptionAgreements = await prisma.adoptionAgreement.findMany()

// Get first 10 AdoptionAgreements
const adoptionAgreements = await prisma.adoptionAgreement.findMany({ take: 10 })

// Only select the `id`
const adoptionAgreementWithIdOnly = await prisma.adoptionAgreement.findMany({ select: { id: true } })
```

***

### findUnique()

> **findUnique**\<`T`\>(`args`): [`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16313

Find zero or one AdoptionAgreement that matches the filter.

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementFindUniqueArgs`](../type-aliases/AdoptionAgreementFindUniqueArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionAgreementFindUniqueArgs`](../type-aliases/AdoptionAgreementFindUniqueArgs.md)\<`ExtArgs`\>\>

Arguments to find a AdoptionAgreement

#### Returns

[`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AdoptionAgreement
const adoptionAgreement = await prisma.adoptionAgreement.findUnique({
  where: {
    // ... provide filter here
  }
})
```

***

### findUniqueOrThrow()

> **findUniqueOrThrow**\<`T`\>(`args`): [`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16327

Find one AdoptionAgreement that matches the filter or throw an error with `error.code='P2025'`
if no matches were found.

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementFindUniqueOrThrowArgs`](../type-aliases/AdoptionAgreementFindUniqueOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionAgreementFindUniqueOrThrowArgs`](../type-aliases/AdoptionAgreementFindUniqueOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a AdoptionAgreement

#### Returns

[`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AdoptionAgreement
const adoptionAgreement = await prisma.adoptionAgreement.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### groupBy()

> **groupBy**\<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): `object` *extends* `InputErrors` ? [`GetAdoptionAgreementGroupByPayload`](../type-aliases/GetAdoptionAgreementGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16611

Group by AdoptionAgreement.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementGroupByArgs`](../type-aliases/AdoptionAgreementGroupByArgs.md)\<`DefaultArgs`\>

##### HasSelectOrTake

`HasSelectOrTake` *extends* `0` \| `1`

##### OrderByArg

`OrderByArg` *extends* \{ `orderBy`: [`AdoptionAgreementOrderByWithAggregationInput`](../type-aliases/AdoptionAgreementOrderByWithAggregationInput.md) \| [`AdoptionAgreementOrderByWithAggregationInput`](../type-aliases/AdoptionAgreementOrderByWithAggregationInput.md)[] \| `undefined`; \} \| \{ `orderBy?`: [`AdoptionAgreementOrderByWithAggregationInput`](../type-aliases/AdoptionAgreementOrderByWithAggregationInput.md) \| [`AdoptionAgreementOrderByWithAggregationInput`](../type-aliases/AdoptionAgreementOrderByWithAggregationInput.md)[]; \}

##### OrderFields

`OrderFields` *extends* `"id"` \| `"agreementId"` \| `"isAgreed"` \| `"agreedAt"` \| `"adoptionId"`

##### ByFields

`ByFields` *extends* [`AdoptionAgreementScalarFieldEnum`](../type-aliases/AdoptionAgreementScalarFieldEnum.md)

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

\{ \[key in string \| number \| symbol\]: key extends keyof AdoptionAgreementGroupByArgs\<DefaultArgs\> ? T\[key\] : never \} & `OrderByArg` & `InputErrors`

Group by arguments.

#### Returns

`object` *extends* `InputErrors` ? [`GetAdoptionAgreementGroupByPayload`](../type-aliases/GetAdoptionAgreementGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

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

> **update**\<`T`\>(`args`): [`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16459

Update one AdoptionAgreement.

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementUpdateArgs`](../type-aliases/AdoptionAgreementUpdateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionAgreementUpdateArgs`](../type-aliases/AdoptionAgreementUpdateArgs.md)\<`ExtArgs`\>\>

Arguments to update one AdoptionAgreement.

#### Returns

[`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update one AdoptionAgreement
const adoptionAgreement = await prisma.adoptionAgreement.update({
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

Defined in: libs/database/src/generated/prisma/index.d.ts:16492

Update zero or more AdoptionAgreements.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementUpdateManyArgs`](../type-aliases/AdoptionAgreementUpdateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionAgreementUpdateManyArgs`](../type-aliases/AdoptionAgreementUpdateManyArgs.md)\<`ExtArgs`\>\>

Arguments to update one or more rows.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Update many AdoptionAgreements
const adoptionAgreement = await prisma.adoptionAgreement.updateMany({
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

> **updateManyAndReturn**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16522

Update zero or more AdoptionAgreements and returns the data updated in the database.

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementUpdateManyAndReturnArgs`](../type-aliases/AdoptionAgreementUpdateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionAgreementUpdateManyAndReturnArgs`](../type-aliases/AdoptionAgreementUpdateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to update many AdoptionAgreements.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Update many AdoptionAgreements
const adoptionAgreement = await prisma.adoptionAgreement.updateManyAndReturn({
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})

// Update zero or more AdoptionAgreements and only return the `id`
const adoptionAgreementWithIdOnly = await prisma.adoptionAgreement.updateManyAndReturn({
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

> **upsert**\<`T`\>(`args`): [`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:16541

Create or update one AdoptionAgreement.

#### Type Parameters

##### T

`T` *extends* [`AdoptionAgreementUpsertArgs`](../type-aliases/AdoptionAgreementUpsertArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionAgreementUpsertArgs`](../type-aliases/AdoptionAgreementUpsertArgs.md)\<`ExtArgs`\>\>

Arguments to update or create a AdoptionAgreement.

#### Returns

[`Prisma__AdoptionAgreementClient`](Prisma__AdoptionAgreementClient.md)\<`GetFindResult`\<[`$AdoptionAgreementPayload`](../type-aliases/$AdoptionAgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update or create a AdoptionAgreement
const adoptionAgreement = await prisma.adoptionAgreement.upsert({
  create: {
    // ... data to create a AdoptionAgreement
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the AdoptionAgreement we want to update
  }
})
```
