[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalDetailDelegate

# Interface: AnimalDetailDelegate\<ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9576

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Indexable

> \[`K`: `symbol`\]: `object`

## Properties

### fields

> `readonly` **fields**: [`AnimalDetailFieldRefs`](AnimalDetailFieldRefs.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:9948

Fields of the AnimalDetail model

## Methods

### aggregate()

> **aggregate**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAnimalDetailAggregateType`](../type-aliases/GetAnimalDetailAggregateType.md)\<`T`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9867

Allows you to perform aggregations operations on a AnimalDetail.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailAggregateArgs`](../type-aliases/AnimalDetailAggregateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AnimalDetailAggregateArgs`](../type-aliases/AnimalDetailAggregateArgs.md)\>

Select which aggregations you would like to apply and on what fields.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAnimalDetailAggregateType`](../type-aliases/GetAnimalDetailAggregateType.md)\<`T`\>\>

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

> **count**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AnimalDetailCountAggregateOutputType ? AnimalDetailCountAggregateOutputType\[P\] : never \} : `number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9833

Count the number of AnimalDetails.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailCountArgs`](../type-aliases/AnimalDetailCountArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AnimalDetailCountArgs`](../type-aliases/AnimalDetailCountArgs.md)\<`DefaultArgs`\>\>

Arguments to filter AnimalDetails to count.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AnimalDetailCountAggregateOutputType ? AnimalDetailCountAggregateOutputType\[P\] : never \} : `number`\>

#### Example

```ts
// Count the number of AnimalDetails
const count = await prisma.animalDetail.count({
  where: {
    // ... the filter for the AnimalDetails we want to count
  }
})
```

***

### create()

> **create**\<`T`\>(`args`): [`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9666

Create a AnimalDetail.

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailCreateArgs`](../type-aliases/AnimalDetailCreateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDetailCreateArgs`](../type-aliases/AnimalDetailCreateArgs.md)\<`ExtArgs`\>\>

Arguments to create a AnimalDetail.

#### Returns

[`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Create one AnimalDetail
const AnimalDetail = await prisma.animalDetail.create({
  data: {
    // ... data to create a AnimalDetail
  }
})
```

***

### createMany()

> **createMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9680

Create many AnimalDetails.

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailCreateManyArgs`](../type-aliases/AnimalDetailCreateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDetailCreateManyArgs`](../type-aliases/AnimalDetailCreateManyArgs.md)\<`ExtArgs`\>\>

Arguments to create many AnimalDetails.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Create many AnimalDetails
const animalDetail = await prisma.animalDetail.createMany({
  data: [
    // ... provide data here
  ]
})
```

***

### createManyAndReturn()

> **createManyAndReturn**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9704

Create many AnimalDetails and returns the data saved in the database.

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailCreateManyAndReturnArgs`](../type-aliases/AnimalDetailCreateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDetailCreateManyAndReturnArgs`](../type-aliases/AnimalDetailCreateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to create many AnimalDetails.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Create many AnimalDetails
const animalDetail = await prisma.animalDetail.createManyAndReturn({
  data: [
    // ... provide data here
  ]
})

// Create many AnimalDetails and only return the `id`
const animalDetailWithIdOnly = await prisma.animalDetail.createManyAndReturn({
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

> **delete**\<`T`\>(`args`): [`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9718

Delete a AnimalDetail.

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailDeleteArgs`](../type-aliases/AnimalDetailDeleteArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDetailDeleteArgs`](../type-aliases/AnimalDetailDeleteArgs.md)\<`ExtArgs`\>\>

Arguments to delete one AnimalDetail.

#### Returns

[`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Delete one AnimalDetail
const AnimalDetail = await prisma.animalDetail.delete({
  where: {
    // ... filter to delete one AnimalDetail
  }
})
```

***

### deleteMany()

> **deleteMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9749

Delete zero or more AnimalDetails.

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailDeleteManyArgs`](../type-aliases/AnimalDetailDeleteManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDetailDeleteManyArgs`](../type-aliases/AnimalDetailDeleteManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter AnimalDetails to delete.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Delete a few AnimalDetails
const { count } = await prisma.animalDetail.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirst()

> **findFirst**\<`T`\>(`args?`): [`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9618

Find the first AnimalDetail that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailFindFirstArgs`](../type-aliases/AnimalDetailFindFirstArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDetailFindFirstArgs`](../type-aliases/AnimalDetailFindFirstArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalDetail

#### Returns

[`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalDetail
const animalDetail = await prisma.animalDetail.findFirst({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirstOrThrow()

> **findFirstOrThrow**\<`T`\>(`args?`): [`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9634

Find the first AnimalDetail that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailFindFirstOrThrowArgs`](../type-aliases/AnimalDetailFindFirstOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDetailFindFirstOrThrowArgs`](../type-aliases/AnimalDetailFindFirstOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalDetail

#### Returns

[`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalDetail
const animalDetail = await prisma.animalDetail.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### findMany()

> **findMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9652

Find zero or more AnimalDetails that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailFindManyArgs`](../type-aliases/AnimalDetailFindManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDetailFindManyArgs`](../type-aliases/AnimalDetailFindManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter and select certain fields only.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Get all AnimalDetails
const animalDetails = await prisma.animalDetail.findMany()

// Get first 10 AnimalDetails
const animalDetails = await prisma.animalDetail.findMany({ take: 10 })

// Only select the `id`
const animalDetailWithIdOnly = await prisma.animalDetail.findMany({ select: { id: true } })
```

***

### findUnique()

> **findUnique**\<`T`\>(`args`): [`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9589

Find zero or one AnimalDetail that matches the filter.

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailFindUniqueArgs`](../type-aliases/AnimalDetailFindUniqueArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDetailFindUniqueArgs`](../type-aliases/AnimalDetailFindUniqueArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalDetail

#### Returns

[`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalDetail
const animalDetail = await prisma.animalDetail.findUnique({
  where: {
    // ... provide filter here
  }
})
```

***

### findUniqueOrThrow()

> **findUniqueOrThrow**\<`T`\>(`args`): [`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9603

Find one AnimalDetail that matches the filter or throw an error with `error.code='P2025'`
if no matches were found.

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailFindUniqueOrThrowArgs`](../type-aliases/AnimalDetailFindUniqueOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDetailFindUniqueOrThrowArgs`](../type-aliases/AnimalDetailFindUniqueOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalDetail

#### Returns

[`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalDetail
const animalDetail = await prisma.animalDetail.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### groupBy()

> **groupBy**\<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): `object` *extends* `InputErrors` ? [`GetAnimalDetailGroupByPayload`](../type-aliases/GetAnimalDetailGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9887

Group by AnimalDetail.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailGroupByArgs`](../type-aliases/AnimalDetailGroupByArgs.md)\<`DefaultArgs`\>

##### HasSelectOrTake

`HasSelectOrTake` *extends* `0` \| `1`

##### OrderByArg

`OrderByArg` *extends* \{ `orderBy`: [`AnimalDetailOrderByWithAggregationInput`](../type-aliases/AnimalDetailOrderByWithAggregationInput.md) \| [`AnimalDetailOrderByWithAggregationInput`](../type-aliases/AnimalDetailOrderByWithAggregationInput.md)[] \| `undefined`; \} \| \{ `orderBy?`: [`AnimalDetailOrderByWithAggregationInput`](../type-aliases/AnimalDetailOrderByWithAggregationInput.md) \| [`AnimalDetailOrderByWithAggregationInput`](../type-aliases/AnimalDetailOrderByWithAggregationInput.md)[]; \}

##### OrderFields

`OrderFields` *extends* `"id"` \| `"updatedAt"` \| `"animalId"` \| `"description"` \| `"noticeStartDate"` \| `"noticeEndDate"` \| `"foundLocation"` \| `"specialNotes"` \| `"healthStatus"`

##### ByFields

`ByFields` *extends* [`AnimalDetailScalarFieldEnum`](../type-aliases/AnimalDetailScalarFieldEnum.md)

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

\{ \[key in string \| number \| symbol\]: key extends keyof AnimalDetailGroupByArgs\<DefaultArgs\> ? T\[key\] : never \} & `OrderByArg` & `InputErrors`

Group by arguments.

#### Returns

`object` *extends* `InputErrors` ? [`GetAnimalDetailGroupByPayload`](../type-aliases/GetAnimalDetailGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

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

> **update**\<`T`\>(`args`): [`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9735

Update one AnimalDetail.

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailUpdateArgs`](../type-aliases/AnimalDetailUpdateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDetailUpdateArgs`](../type-aliases/AnimalDetailUpdateArgs.md)\<`ExtArgs`\>\>

Arguments to update one AnimalDetail.

#### Returns

[`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update one AnimalDetail
const animalDetail = await prisma.animalDetail.update({
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

Defined in: libs/database/src/generated/prisma/index.d.ts:9768

Update zero or more AnimalDetails.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailUpdateManyArgs`](../type-aliases/AnimalDetailUpdateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDetailUpdateManyArgs`](../type-aliases/AnimalDetailUpdateManyArgs.md)\<`ExtArgs`\>\>

Arguments to update one or more rows.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Update many AnimalDetails
const animalDetail = await prisma.animalDetail.updateMany({
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

> **updateManyAndReturn**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9798

Update zero or more AnimalDetails and returns the data updated in the database.

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailUpdateManyAndReturnArgs`](../type-aliases/AnimalDetailUpdateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDetailUpdateManyAndReturnArgs`](../type-aliases/AnimalDetailUpdateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to update many AnimalDetails.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Update many AnimalDetails
const animalDetail = await prisma.animalDetail.updateManyAndReturn({
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})

// Update zero or more AnimalDetails and only return the `id`
const animalDetailWithIdOnly = await prisma.animalDetail.updateManyAndReturn({
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

> **upsert**\<`T`\>(`args`): [`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:9817

Create or update one AnimalDetail.

#### Type Parameters

##### T

`T` *extends* [`AnimalDetailUpsertArgs`](../type-aliases/AnimalDetailUpsertArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDetailUpsertArgs`](../type-aliases/AnimalDetailUpsertArgs.md)\<`ExtArgs`\>\>

Arguments to update or create a AnimalDetail.

#### Returns

[`Prisma__AnimalDetailClient`](Prisma__AnimalDetailClient.md)\<`GetFindResult`\<[`$AnimalDetailPayload`](../type-aliases/$AnimalDetailPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update or create a AnimalDetail
const animalDetail = await prisma.animalDetail.upsert({
  create: {
    // ... data to create a AnimalDetail
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the AnimalDetail we want to update
  }
})
```
