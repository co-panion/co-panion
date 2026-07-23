[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionDetailDelegate

# Interface: AdoptionDetailDelegate\<ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13081

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Indexable

> \[`K`: `symbol`\]: `object`

## Properties

### fields

> `readonly` **fields**: [`AdoptionDetailFieldRefs`](AdoptionDetailFieldRefs.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:13453

Fields of the AdoptionDetail model

## Methods

### aggregate()

> **aggregate**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAdoptionDetailAggregateType`](../type-aliases/GetAdoptionDetailAggregateType.md)\<`T`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13372

Allows you to perform aggregations operations on a AdoptionDetail.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailAggregateArgs`](../type-aliases/AdoptionDetailAggregateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AdoptionDetailAggregateArgs`](../type-aliases/AdoptionDetailAggregateArgs.md)\>

Select which aggregations you would like to apply and on what fields.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAdoptionDetailAggregateType`](../type-aliases/GetAdoptionDetailAggregateType.md)\<`T`\>\>

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

> **count**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AdoptionDetailCountAggregateOutputType ? AdoptionDetailCountAggregateOutputType\[P\] : never \} : `number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13338

Count the number of AdoptionDetails.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailCountArgs`](../type-aliases/AdoptionDetailCountArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AdoptionDetailCountArgs`](../type-aliases/AdoptionDetailCountArgs.md)\<`DefaultArgs`\>\>

Arguments to filter AdoptionDetails to count.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AdoptionDetailCountAggregateOutputType ? AdoptionDetailCountAggregateOutputType\[P\] : never \} : `number`\>

#### Example

```ts
// Count the number of AdoptionDetails
const count = await prisma.adoptionDetail.count({
  where: {
    // ... the filter for the AdoptionDetails we want to count
  }
})
```

***

### create()

> **create**\<`T`\>(`args`): [`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13171

Create a AdoptionDetail.

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailCreateArgs`](../type-aliases/AdoptionDetailCreateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDetailCreateArgs`](../type-aliases/AdoptionDetailCreateArgs.md)\<`ExtArgs`\>\>

Arguments to create a AdoptionDetail.

#### Returns

[`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Create one AdoptionDetail
const AdoptionDetail = await prisma.adoptionDetail.create({
  data: {
    // ... data to create a AdoptionDetail
  }
})
```

***

### createMany()

> **createMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13185

Create many AdoptionDetails.

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailCreateManyArgs`](../type-aliases/AdoptionDetailCreateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDetailCreateManyArgs`](../type-aliases/AdoptionDetailCreateManyArgs.md)\<`ExtArgs`\>\>

Arguments to create many AdoptionDetails.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Create many AdoptionDetails
const adoptionDetail = await prisma.adoptionDetail.createMany({
  data: [
    // ... provide data here
  ]
})
```

***

### createManyAndReturn()

> **createManyAndReturn**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13209

Create many AdoptionDetails and returns the data saved in the database.

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailCreateManyAndReturnArgs`](../type-aliases/AdoptionDetailCreateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDetailCreateManyAndReturnArgs`](../type-aliases/AdoptionDetailCreateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to create many AdoptionDetails.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Create many AdoptionDetails
const adoptionDetail = await prisma.adoptionDetail.createManyAndReturn({
  data: [
    // ... provide data here
  ]
})

// Create many AdoptionDetails and only return the `id`
const adoptionDetailWithIdOnly = await prisma.adoptionDetail.createManyAndReturn({
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

> **delete**\<`T`\>(`args`): [`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13223

Delete a AdoptionDetail.

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailDeleteArgs`](../type-aliases/AdoptionDetailDeleteArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDetailDeleteArgs`](../type-aliases/AdoptionDetailDeleteArgs.md)\<`ExtArgs`\>\>

Arguments to delete one AdoptionDetail.

#### Returns

[`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Delete one AdoptionDetail
const AdoptionDetail = await prisma.adoptionDetail.delete({
  where: {
    // ... filter to delete one AdoptionDetail
  }
})
```

***

### deleteMany()

> **deleteMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13254

Delete zero or more AdoptionDetails.

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailDeleteManyArgs`](../type-aliases/AdoptionDetailDeleteManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDetailDeleteManyArgs`](../type-aliases/AdoptionDetailDeleteManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter AdoptionDetails to delete.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Delete a few AdoptionDetails
const { count } = await prisma.adoptionDetail.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirst()

> **findFirst**\<`T`\>(`args?`): [`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13123

Find the first AdoptionDetail that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailFindFirstArgs`](../type-aliases/AdoptionDetailFindFirstArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDetailFindFirstArgs`](../type-aliases/AdoptionDetailFindFirstArgs.md)\<`ExtArgs`\>\>

Arguments to find a AdoptionDetail

#### Returns

[`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AdoptionDetail
const adoptionDetail = await prisma.adoptionDetail.findFirst({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirstOrThrow()

> **findFirstOrThrow**\<`T`\>(`args?`): [`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13139

Find the first AdoptionDetail that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailFindFirstOrThrowArgs`](../type-aliases/AdoptionDetailFindFirstOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDetailFindFirstOrThrowArgs`](../type-aliases/AdoptionDetailFindFirstOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a AdoptionDetail

#### Returns

[`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AdoptionDetail
const adoptionDetail = await prisma.adoptionDetail.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### findMany()

> **findMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13157

Find zero or more AdoptionDetails that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailFindManyArgs`](../type-aliases/AdoptionDetailFindManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDetailFindManyArgs`](../type-aliases/AdoptionDetailFindManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter and select certain fields only.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Get all AdoptionDetails
const adoptionDetails = await prisma.adoptionDetail.findMany()

// Get first 10 AdoptionDetails
const adoptionDetails = await prisma.adoptionDetail.findMany({ take: 10 })

// Only select the `id`
const adoptionDetailWithIdOnly = await prisma.adoptionDetail.findMany({ select: { id: true } })
```

***

### findUnique()

> **findUnique**\<`T`\>(`args`): [`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13094

Find zero or one AdoptionDetail that matches the filter.

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailFindUniqueArgs`](../type-aliases/AdoptionDetailFindUniqueArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDetailFindUniqueArgs`](../type-aliases/AdoptionDetailFindUniqueArgs.md)\<`ExtArgs`\>\>

Arguments to find a AdoptionDetail

#### Returns

[`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AdoptionDetail
const adoptionDetail = await prisma.adoptionDetail.findUnique({
  where: {
    // ... provide filter here
  }
})
```

***

### findUniqueOrThrow()

> **findUniqueOrThrow**\<`T`\>(`args`): [`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13108

Find one AdoptionDetail that matches the filter or throw an error with `error.code='P2025'`
if no matches were found.

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailFindUniqueOrThrowArgs`](../type-aliases/AdoptionDetailFindUniqueOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDetailFindUniqueOrThrowArgs`](../type-aliases/AdoptionDetailFindUniqueOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a AdoptionDetail

#### Returns

[`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AdoptionDetail
const adoptionDetail = await prisma.adoptionDetail.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### groupBy()

> **groupBy**\<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): `object` *extends* `InputErrors` ? [`GetAdoptionDetailGroupByPayload`](../type-aliases/GetAdoptionDetailGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13392

Group by AdoptionDetail.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailGroupByArgs`](../type-aliases/AdoptionDetailGroupByArgs.md)\<`DefaultArgs`\>

##### HasSelectOrTake

`HasSelectOrTake` *extends* `0` \| `1`

##### OrderByArg

`OrderByArg` *extends* \{ `orderBy`: [`AdoptionDetailOrderByWithAggregationInput`](../type-aliases/AdoptionDetailOrderByWithAggregationInput.md) \| [`AdoptionDetailOrderByWithAggregationInput`](../type-aliases/AdoptionDetailOrderByWithAggregationInput.md)[] \| `undefined`; \} \| \{ `orderBy?`: [`AdoptionDetailOrderByWithAggregationInput`](../type-aliases/AdoptionDetailOrderByWithAggregationInput.md) \| [`AdoptionDetailOrderByWithAggregationInput`](../type-aliases/AdoptionDetailOrderByWithAggregationInput.md)[]; \}

##### OrderFields

`OrderFields` *extends* `"id"` \| `"email"` \| `"updatedAt"` \| `"address"` \| `"addressDetail"` \| `"phone"` \| `"adoptionId"` \| `"userName"` \| `"petExperience"` \| `"petDescription"` \| `"petExperiencePeriod"` \| `"residenceType"` \| `"petPolicy"` \| `"familySize"` \| `"childrenAgeGroup"` \| `"isFamilyConsented"` \| `"purpose"` \| `"canVaccinate"` \| `"canProvideMedical"` \| `"canProvideExercise"` \| `"isLifelongCommit"` \| `"note"`

##### ByFields

`ByFields` *extends* [`AdoptionDetailScalarFieldEnum`](../type-aliases/AdoptionDetailScalarFieldEnum.md)

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

\{ \[key in string \| number \| symbol\]: key extends keyof AdoptionDetailGroupByArgs\<DefaultArgs\> ? T\[key\] : never \} & `OrderByArg` & `InputErrors`

Group by arguments.

#### Returns

`object` *extends* `InputErrors` ? [`GetAdoptionDetailGroupByPayload`](../type-aliases/GetAdoptionDetailGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

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

> **update**\<`T`\>(`args`): [`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13240

Update one AdoptionDetail.

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailUpdateArgs`](../type-aliases/AdoptionDetailUpdateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDetailUpdateArgs`](../type-aliases/AdoptionDetailUpdateArgs.md)\<`ExtArgs`\>\>

Arguments to update one AdoptionDetail.

#### Returns

[`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update one AdoptionDetail
const adoptionDetail = await prisma.adoptionDetail.update({
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

Defined in: libs/database/src/generated/prisma/index.d.ts:13273

Update zero or more AdoptionDetails.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailUpdateManyArgs`](../type-aliases/AdoptionDetailUpdateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDetailUpdateManyArgs`](../type-aliases/AdoptionDetailUpdateManyArgs.md)\<`ExtArgs`\>\>

Arguments to update one or more rows.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Update many AdoptionDetails
const adoptionDetail = await prisma.adoptionDetail.updateMany({
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

> **updateManyAndReturn**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13303

Update zero or more AdoptionDetails and returns the data updated in the database.

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailUpdateManyAndReturnArgs`](../type-aliases/AdoptionDetailUpdateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDetailUpdateManyAndReturnArgs`](../type-aliases/AdoptionDetailUpdateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to update many AdoptionDetails.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Update many AdoptionDetails
const adoptionDetail = await prisma.adoptionDetail.updateManyAndReturn({
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})

// Update zero or more AdoptionDetails and only return the `id`
const adoptionDetailWithIdOnly = await prisma.adoptionDetail.updateManyAndReturn({
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

> **upsert**\<`T`\>(`args`): [`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:13322

Create or update one AdoptionDetail.

#### Type Parameters

##### T

`T` *extends* [`AdoptionDetailUpsertArgs`](../type-aliases/AdoptionDetailUpsertArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDetailUpsertArgs`](../type-aliases/AdoptionDetailUpsertArgs.md)\<`ExtArgs`\>\>

Arguments to update or create a AdoptionDetail.

#### Returns

[`Prisma__AdoptionDetailClient`](Prisma__AdoptionDetailClient.md)\<`GetFindResult`\<[`$AdoptionDetailPayload`](../type-aliases/$AdoptionDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update or create a AdoptionDetail
const adoptionDetail = await prisma.adoptionDetail.upsert({
  create: {
    // ... data to create a AdoptionDetail
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the AdoptionDetail we want to update
  }
})
```
