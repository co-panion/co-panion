[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalSpeciesDelegate

# Interface: AnimalSpeciesDelegate\<ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7471

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Indexable

> \[`K`: `symbol`\]: `object`

## Properties

### fields

> `readonly` **fields**: [`AnimalSpeciesFieldRefs`](AnimalSpeciesFieldRefs.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:7843

Fields of the AnimalSpecies model

## Methods

### aggregate()

> **aggregate**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAnimalSpeciesAggregateType`](../type-aliases/GetAnimalSpeciesAggregateType.md)\<`T`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7762

Allows you to perform aggregations operations on a AnimalSpecies.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesAggregateArgs`](../type-aliases/AnimalSpeciesAggregateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AnimalSpeciesAggregateArgs`](../type-aliases/AnimalSpeciesAggregateArgs.md)\>

Select which aggregations you would like to apply and on what fields.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAnimalSpeciesAggregateType`](../type-aliases/GetAnimalSpeciesAggregateType.md)\<`T`\>\>

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

> **count**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AnimalSpeciesCountAggregateOutputType ? AnimalSpeciesCountAggregateOutputType\[P\] : never \} : `number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7728

Count the number of AnimalSpecies.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesCountArgs`](../type-aliases/AnimalSpeciesCountArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AnimalSpeciesCountArgs`](../type-aliases/AnimalSpeciesCountArgs.md)\<`DefaultArgs`\>\>

Arguments to filter AnimalSpecies to count.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AnimalSpeciesCountAggregateOutputType ? AnimalSpeciesCountAggregateOutputType\[P\] : never \} : `number`\>

#### Example

```ts
// Count the number of AnimalSpecies
const count = await prisma.animalSpecies.count({
  where: {
    // ... the filter for the AnimalSpecies we want to count
  }
})
```

***

### create()

> **create**\<`T`\>(`args`): [`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7561

Create a AnimalSpecies.

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesCreateArgs`](../type-aliases/AnimalSpeciesCreateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalSpeciesCreateArgs`](../type-aliases/AnimalSpeciesCreateArgs.md)\<`ExtArgs`\>\>

Arguments to create a AnimalSpecies.

#### Returns

[`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Create one AnimalSpecies
const AnimalSpecies = await prisma.animalSpecies.create({
  data: {
    // ... data to create a AnimalSpecies
  }
})
```

***

### createMany()

> **createMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7575

Create many AnimalSpecies.

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesCreateManyArgs`](../type-aliases/AnimalSpeciesCreateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalSpeciesCreateManyArgs`](../type-aliases/AnimalSpeciesCreateManyArgs.md)\<`ExtArgs`\>\>

Arguments to create many AnimalSpecies.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Create many AnimalSpecies
const animalSpecies = await prisma.animalSpecies.createMany({
  data: [
    // ... provide data here
  ]
})
```

***

### createManyAndReturn()

> **createManyAndReturn**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7599

Create many AnimalSpecies and returns the data saved in the database.

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesCreateManyAndReturnArgs`](../type-aliases/AnimalSpeciesCreateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalSpeciesCreateManyAndReturnArgs`](../type-aliases/AnimalSpeciesCreateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to create many AnimalSpecies.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Create many AnimalSpecies
const animalSpecies = await prisma.animalSpecies.createManyAndReturn({
  data: [
    // ... provide data here
  ]
})

// Create many AnimalSpecies and only return the `id`
const animalSpeciesWithIdOnly = await prisma.animalSpecies.createManyAndReturn({
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

> **delete**\<`T`\>(`args`): [`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7613

Delete a AnimalSpecies.

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesDeleteArgs`](../type-aliases/AnimalSpeciesDeleteArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalSpeciesDeleteArgs`](../type-aliases/AnimalSpeciesDeleteArgs.md)\<`ExtArgs`\>\>

Arguments to delete one AnimalSpecies.

#### Returns

[`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Delete one AnimalSpecies
const AnimalSpecies = await prisma.animalSpecies.delete({
  where: {
    // ... filter to delete one AnimalSpecies
  }
})
```

***

### deleteMany()

> **deleteMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7644

Delete zero or more AnimalSpecies.

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesDeleteManyArgs`](../type-aliases/AnimalSpeciesDeleteManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalSpeciesDeleteManyArgs`](../type-aliases/AnimalSpeciesDeleteManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter AnimalSpecies to delete.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Delete a few AnimalSpecies
const { count } = await prisma.animalSpecies.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirst()

> **findFirst**\<`T`\>(`args?`): [`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7513

Find the first AnimalSpecies that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesFindFirstArgs`](../type-aliases/AnimalSpeciesFindFirstArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalSpeciesFindFirstArgs`](../type-aliases/AnimalSpeciesFindFirstArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalSpecies

#### Returns

[`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalSpecies
const animalSpecies = await prisma.animalSpecies.findFirst({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirstOrThrow()

> **findFirstOrThrow**\<`T`\>(`args?`): [`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7529

Find the first AnimalSpecies that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesFindFirstOrThrowArgs`](../type-aliases/AnimalSpeciesFindFirstOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalSpeciesFindFirstOrThrowArgs`](../type-aliases/AnimalSpeciesFindFirstOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalSpecies

#### Returns

[`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalSpecies
const animalSpecies = await prisma.animalSpecies.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### findMany()

> **findMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7547

Find zero or more AnimalSpecies that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesFindManyArgs`](../type-aliases/AnimalSpeciesFindManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalSpeciesFindManyArgs`](../type-aliases/AnimalSpeciesFindManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter and select certain fields only.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Get all AnimalSpecies
const animalSpecies = await prisma.animalSpecies.findMany()

// Get first 10 AnimalSpecies
const animalSpecies = await prisma.animalSpecies.findMany({ take: 10 })

// Only select the `id`
const animalSpeciesWithIdOnly = await prisma.animalSpecies.findMany({ select: { id: true } })
```

***

### findUnique()

> **findUnique**\<`T`\>(`args`): [`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7484

Find zero or one AnimalSpecies that matches the filter.

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesFindUniqueArgs`](../type-aliases/AnimalSpeciesFindUniqueArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalSpeciesFindUniqueArgs`](../type-aliases/AnimalSpeciesFindUniqueArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalSpecies

#### Returns

[`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalSpecies
const animalSpecies = await prisma.animalSpecies.findUnique({
  where: {
    // ... provide filter here
  }
})
```

***

### findUniqueOrThrow()

> **findUniqueOrThrow**\<`T`\>(`args`): [`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7498

Find one AnimalSpecies that matches the filter or throw an error with `error.code='P2025'`
if no matches were found.

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesFindUniqueOrThrowArgs`](../type-aliases/AnimalSpeciesFindUniqueOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalSpeciesFindUniqueOrThrowArgs`](../type-aliases/AnimalSpeciesFindUniqueOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalSpecies

#### Returns

[`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalSpecies
const animalSpecies = await prisma.animalSpecies.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### groupBy()

> **groupBy**\<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): `object` *extends* `InputErrors` ? [`GetAnimalSpeciesGroupByPayload`](../type-aliases/GetAnimalSpeciesGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7782

Group by AnimalSpecies.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesGroupByArgs`](../type-aliases/AnimalSpeciesGroupByArgs.md)\<`DefaultArgs`\>

##### HasSelectOrTake

`HasSelectOrTake` *extends* `0` \| `1`

##### OrderByArg

`OrderByArg` *extends* \{ `orderBy`: [`AnimalSpeciesOrderByWithAggregationInput`](../type-aliases/AnimalSpeciesOrderByWithAggregationInput.md) \| [`AnimalSpeciesOrderByWithAggregationInput`](../type-aliases/AnimalSpeciesOrderByWithAggregationInput.md)[] \| `undefined`; \} \| \{ `orderBy?`: [`AnimalSpeciesOrderByWithAggregationInput`](../type-aliases/AnimalSpeciesOrderByWithAggregationInput.md) \| [`AnimalSpeciesOrderByWithAggregationInput`](../type-aliases/AnimalSpeciesOrderByWithAggregationInput.md)[]; \}

##### OrderFields

`OrderFields` *extends* `"name"` \| `"id"`

##### ByFields

`ByFields` *extends* [`AnimalSpeciesScalarFieldEnum`](../type-aliases/AnimalSpeciesScalarFieldEnum.md)

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

\{ \[key in string \| number \| symbol\]: key extends keyof AnimalSpeciesGroupByArgs\<DefaultArgs\> ? T\[key\] : never \} & `OrderByArg` & `InputErrors`

Group by arguments.

#### Returns

`object` *extends* `InputErrors` ? [`GetAnimalSpeciesGroupByPayload`](../type-aliases/GetAnimalSpeciesGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

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

> **update**\<`T`\>(`args`): [`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7630

Update one AnimalSpecies.

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesUpdateArgs`](../type-aliases/AnimalSpeciesUpdateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalSpeciesUpdateArgs`](../type-aliases/AnimalSpeciesUpdateArgs.md)\<`ExtArgs`\>\>

Arguments to update one AnimalSpecies.

#### Returns

[`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update one AnimalSpecies
const animalSpecies = await prisma.animalSpecies.update({
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

Defined in: libs/database/src/generated/prisma/index.d.ts:7663

Update zero or more AnimalSpecies.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesUpdateManyArgs`](../type-aliases/AnimalSpeciesUpdateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalSpeciesUpdateManyArgs`](../type-aliases/AnimalSpeciesUpdateManyArgs.md)\<`ExtArgs`\>\>

Arguments to update one or more rows.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Update many AnimalSpecies
const animalSpecies = await prisma.animalSpecies.updateMany({
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

> **updateManyAndReturn**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7693

Update zero or more AnimalSpecies and returns the data updated in the database.

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesUpdateManyAndReturnArgs`](../type-aliases/AnimalSpeciesUpdateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalSpeciesUpdateManyAndReturnArgs`](../type-aliases/AnimalSpeciesUpdateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to update many AnimalSpecies.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Update many AnimalSpecies
const animalSpecies = await prisma.animalSpecies.updateManyAndReturn({
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})

// Update zero or more AnimalSpecies and only return the `id`
const animalSpeciesWithIdOnly = await prisma.animalSpecies.updateManyAndReturn({
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

> **upsert**\<`T`\>(`args`): [`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:7712

Create or update one AnimalSpecies.

#### Type Parameters

##### T

`T` *extends* [`AnimalSpeciesUpsertArgs`](../type-aliases/AnimalSpeciesUpsertArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalSpeciesUpsertArgs`](../type-aliases/AnimalSpeciesUpsertArgs.md)\<`ExtArgs`\>\>

Arguments to update or create a AnimalSpecies.

#### Returns

[`Prisma__AnimalSpeciesClient`](Prisma__AnimalSpeciesClient.md)\<`GetFindResult`\<[`$AnimalSpeciesPayload`](../type-aliases/$AnimalSpeciesPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update or create a AnimalSpecies
const animalSpecies = await prisma.animalSpecies.upsert({
  create: {
    // ... data to create a AnimalSpecies
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the AnimalSpecies we want to update
  }
})
```
