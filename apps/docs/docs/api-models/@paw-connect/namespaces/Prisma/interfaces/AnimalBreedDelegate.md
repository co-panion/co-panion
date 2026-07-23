[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalBreedDelegate

# Interface: AnimalBreedDelegate\<ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8482

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Indexable

> \[`K`: `symbol`\]: `object`

## Properties

### fields

> `readonly` **fields**: [`AnimalBreedFieldRefs`](AnimalBreedFieldRefs.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:8854

Fields of the AnimalBreed model

## Methods

### aggregate()

> **aggregate**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAnimalBreedAggregateType`](../type-aliases/GetAnimalBreedAggregateType.md)\<`T`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8773

Allows you to perform aggregations operations on a AnimalBreed.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedAggregateArgs`](../type-aliases/AnimalBreedAggregateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AnimalBreedAggregateArgs`](../type-aliases/AnimalBreedAggregateArgs.md)\>

Select which aggregations you would like to apply and on what fields.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAnimalBreedAggregateType`](../type-aliases/GetAnimalBreedAggregateType.md)\<`T`\>\>

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

> **count**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AnimalBreedCountAggregateOutputType ? AnimalBreedCountAggregateOutputType\[P\] : never \} : `number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8739

Count the number of AnimalBreeds.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedCountArgs`](../type-aliases/AnimalBreedCountArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AnimalBreedCountArgs`](../type-aliases/AnimalBreedCountArgs.md)\<`DefaultArgs`\>\>

Arguments to filter AnimalBreeds to count.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AnimalBreedCountAggregateOutputType ? AnimalBreedCountAggregateOutputType\[P\] : never \} : `number`\>

#### Example

```ts
// Count the number of AnimalBreeds
const count = await prisma.animalBreed.count({
  where: {
    // ... the filter for the AnimalBreeds we want to count
  }
})
```

***

### create()

> **create**\<`T`\>(`args`): [`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8572

Create a AnimalBreed.

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedCreateArgs`](../type-aliases/AnimalBreedCreateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalBreedCreateArgs`](../type-aliases/AnimalBreedCreateArgs.md)\<`ExtArgs`\>\>

Arguments to create a AnimalBreed.

#### Returns

[`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Create one AnimalBreed
const AnimalBreed = await prisma.animalBreed.create({
  data: {
    // ... data to create a AnimalBreed
  }
})
```

***

### createMany()

> **createMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8586

Create many AnimalBreeds.

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedCreateManyArgs`](../type-aliases/AnimalBreedCreateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalBreedCreateManyArgs`](../type-aliases/AnimalBreedCreateManyArgs.md)\<`ExtArgs`\>\>

Arguments to create many AnimalBreeds.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Create many AnimalBreeds
const animalBreed = await prisma.animalBreed.createMany({
  data: [
    // ... provide data here
  ]
})
```

***

### createManyAndReturn()

> **createManyAndReturn**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8610

Create many AnimalBreeds and returns the data saved in the database.

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedCreateManyAndReturnArgs`](../type-aliases/AnimalBreedCreateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalBreedCreateManyAndReturnArgs`](../type-aliases/AnimalBreedCreateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to create many AnimalBreeds.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Create many AnimalBreeds
const animalBreed = await prisma.animalBreed.createManyAndReturn({
  data: [
    // ... provide data here
  ]
})

// Create many AnimalBreeds and only return the `id`
const animalBreedWithIdOnly = await prisma.animalBreed.createManyAndReturn({
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

> **delete**\<`T`\>(`args`): [`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8624

Delete a AnimalBreed.

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedDeleteArgs`](../type-aliases/AnimalBreedDeleteArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalBreedDeleteArgs`](../type-aliases/AnimalBreedDeleteArgs.md)\<`ExtArgs`\>\>

Arguments to delete one AnimalBreed.

#### Returns

[`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Delete one AnimalBreed
const AnimalBreed = await prisma.animalBreed.delete({
  where: {
    // ... filter to delete one AnimalBreed
  }
})
```

***

### deleteMany()

> **deleteMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8655

Delete zero or more AnimalBreeds.

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedDeleteManyArgs`](../type-aliases/AnimalBreedDeleteManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalBreedDeleteManyArgs`](../type-aliases/AnimalBreedDeleteManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter AnimalBreeds to delete.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Delete a few AnimalBreeds
const { count } = await prisma.animalBreed.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirst()

> **findFirst**\<`T`\>(`args?`): [`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8524

Find the first AnimalBreed that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedFindFirstArgs`](../type-aliases/AnimalBreedFindFirstArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalBreedFindFirstArgs`](../type-aliases/AnimalBreedFindFirstArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalBreed

#### Returns

[`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalBreed
const animalBreed = await prisma.animalBreed.findFirst({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirstOrThrow()

> **findFirstOrThrow**\<`T`\>(`args?`): [`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8540

Find the first AnimalBreed that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedFindFirstOrThrowArgs`](../type-aliases/AnimalBreedFindFirstOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalBreedFindFirstOrThrowArgs`](../type-aliases/AnimalBreedFindFirstOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalBreed

#### Returns

[`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalBreed
const animalBreed = await prisma.animalBreed.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### findMany()

> **findMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8558

Find zero or more AnimalBreeds that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedFindManyArgs`](../type-aliases/AnimalBreedFindManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalBreedFindManyArgs`](../type-aliases/AnimalBreedFindManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter and select certain fields only.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Get all AnimalBreeds
const animalBreeds = await prisma.animalBreed.findMany()

// Get first 10 AnimalBreeds
const animalBreeds = await prisma.animalBreed.findMany({ take: 10 })

// Only select the `id`
const animalBreedWithIdOnly = await prisma.animalBreed.findMany({ select: { id: true } })
```

***

### findUnique()

> **findUnique**\<`T`\>(`args`): [`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8495

Find zero or one AnimalBreed that matches the filter.

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedFindUniqueArgs`](../type-aliases/AnimalBreedFindUniqueArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalBreedFindUniqueArgs`](../type-aliases/AnimalBreedFindUniqueArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalBreed

#### Returns

[`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalBreed
const animalBreed = await prisma.animalBreed.findUnique({
  where: {
    // ... provide filter here
  }
})
```

***

### findUniqueOrThrow()

> **findUniqueOrThrow**\<`T`\>(`args`): [`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8509

Find one AnimalBreed that matches the filter or throw an error with `error.code='P2025'`
if no matches were found.

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedFindUniqueOrThrowArgs`](../type-aliases/AnimalBreedFindUniqueOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalBreedFindUniqueOrThrowArgs`](../type-aliases/AnimalBreedFindUniqueOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalBreed

#### Returns

[`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalBreed
const animalBreed = await prisma.animalBreed.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### groupBy()

> **groupBy**\<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): `object` *extends* `InputErrors` ? [`GetAnimalBreedGroupByPayload`](../type-aliases/GetAnimalBreedGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8793

Group by AnimalBreed.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedGroupByArgs`](../type-aliases/AnimalBreedGroupByArgs.md)\<`DefaultArgs`\>

##### HasSelectOrTake

`HasSelectOrTake` *extends* `0` \| `1`

##### OrderByArg

`OrderByArg` *extends* \{ `orderBy`: [`AnimalBreedOrderByWithAggregationInput`](../type-aliases/AnimalBreedOrderByWithAggregationInput.md) \| [`AnimalBreedOrderByWithAggregationInput`](../type-aliases/AnimalBreedOrderByWithAggregationInput.md)[] \| `undefined`; \} \| \{ `orderBy?`: [`AnimalBreedOrderByWithAggregationInput`](../type-aliases/AnimalBreedOrderByWithAggregationInput.md) \| [`AnimalBreedOrderByWithAggregationInput`](../type-aliases/AnimalBreedOrderByWithAggregationInput.md)[]; \}

##### OrderFields

`OrderFields` *extends* `"name"` \| `"id"` \| `"species"`

##### ByFields

`ByFields` *extends* [`AnimalBreedScalarFieldEnum`](../type-aliases/AnimalBreedScalarFieldEnum.md)

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

\{ \[key in string \| number \| symbol\]: key extends keyof AnimalBreedGroupByArgs\<DefaultArgs\> ? T\[key\] : never \} & `OrderByArg` & `InputErrors`

Group by arguments.

#### Returns

`object` *extends* `InputErrors` ? [`GetAnimalBreedGroupByPayload`](../type-aliases/GetAnimalBreedGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

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

> **update**\<`T`\>(`args`): [`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8641

Update one AnimalBreed.

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedUpdateArgs`](../type-aliases/AnimalBreedUpdateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalBreedUpdateArgs`](../type-aliases/AnimalBreedUpdateArgs.md)\<`ExtArgs`\>\>

Arguments to update one AnimalBreed.

#### Returns

[`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update one AnimalBreed
const animalBreed = await prisma.animalBreed.update({
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

Defined in: libs/database/src/generated/prisma/index.d.ts:8674

Update zero or more AnimalBreeds.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedUpdateManyArgs`](../type-aliases/AnimalBreedUpdateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalBreedUpdateManyArgs`](../type-aliases/AnimalBreedUpdateManyArgs.md)\<`ExtArgs`\>\>

Arguments to update one or more rows.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Update many AnimalBreeds
const animalBreed = await prisma.animalBreed.updateMany({
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

> **updateManyAndReturn**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8704

Update zero or more AnimalBreeds and returns the data updated in the database.

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedUpdateManyAndReturnArgs`](../type-aliases/AnimalBreedUpdateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalBreedUpdateManyAndReturnArgs`](../type-aliases/AnimalBreedUpdateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to update many AnimalBreeds.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Update many AnimalBreeds
const animalBreed = await prisma.animalBreed.updateManyAndReturn({
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})

// Update zero or more AnimalBreeds and only return the `id`
const animalBreedWithIdOnly = await prisma.animalBreed.updateManyAndReturn({
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

> **upsert**\<`T`\>(`args`): [`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:8723

Create or update one AnimalBreed.

#### Type Parameters

##### T

`T` *extends* [`AnimalBreedUpsertArgs`](../type-aliases/AnimalBreedUpsertArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalBreedUpsertArgs`](../type-aliases/AnimalBreedUpsertArgs.md)\<`ExtArgs`\>\>

Arguments to update or create a AnimalBreed.

#### Returns

[`Prisma__AnimalBreedClient`](Prisma__AnimalBreedClient.md)\<`GetFindResult`\<[`$AnimalBreedPayload`](../type-aliases/$AnimalBreedPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update or create a AnimalBreed
const animalBreed = await prisma.animalBreed.upsert({
  create: {
    // ... data to create a AnimalBreed
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the AnimalBreed we want to update
  }
})
```
