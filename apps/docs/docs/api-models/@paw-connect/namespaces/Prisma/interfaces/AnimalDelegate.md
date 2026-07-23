[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalDelegate

# Interface: AnimalDelegate\<ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6370

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Indexable

> \[`K`: `symbol`\]: `object`

## Properties

### fields

> `readonly` **fields**: [`AnimalFieldRefs`](AnimalFieldRefs.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:6742

Fields of the Animal model

## Methods

### aggregate()

> **aggregate**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAnimalAggregateType`](../type-aliases/GetAnimalAggregateType.md)\<`T`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6661

Allows you to perform aggregations operations on a Animal.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalAggregateArgs`](../type-aliases/AnimalAggregateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AnimalAggregateArgs`](../type-aliases/AnimalAggregateArgs.md)\>

Select which aggregations you would like to apply and on what fields.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAnimalAggregateType`](../type-aliases/GetAnimalAggregateType.md)\<`T`\>\>

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

> **count**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AnimalCountAggregateOutputType ? AnimalCountAggregateOutputType\[P\] : never \} : `number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6627

Count the number of Animals.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalCountArgs`](../type-aliases/AnimalCountArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AnimalCountArgs`](../type-aliases/AnimalCountArgs.md)\<`DefaultArgs`\>\>

Arguments to filter Animals to count.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AnimalCountAggregateOutputType ? AnimalCountAggregateOutputType\[P\] : never \} : `number`\>

#### Example

```ts
// Count the number of Animals
const count = await prisma.animal.count({
  where: {
    // ... the filter for the Animals we want to count
  }
})
```

***

### create()

> **create**\<`T`\>(`args`): [`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6460

Create a Animal.

#### Type Parameters

##### T

`T` *extends* [`AnimalCreateArgs`](../type-aliases/AnimalCreateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalCreateArgs`](../type-aliases/AnimalCreateArgs.md)\<`ExtArgs`\>\>

Arguments to create a Animal.

#### Returns

[`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Create one Animal
const Animal = await prisma.animal.create({
  data: {
    // ... data to create a Animal
  }
})
```

***

### createMany()

> **createMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6474

Create many Animals.

#### Type Parameters

##### T

`T` *extends* [`AnimalCreateManyArgs`](../type-aliases/AnimalCreateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalCreateManyArgs`](../type-aliases/AnimalCreateManyArgs.md)\<`ExtArgs`\>\>

Arguments to create many Animals.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Create many Animals
const animal = await prisma.animal.createMany({
  data: [
    // ... provide data here
  ]
})
```

***

### createManyAndReturn()

> **createManyAndReturn**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6498

Create many Animals and returns the data saved in the database.

#### Type Parameters

##### T

`T` *extends* [`AnimalCreateManyAndReturnArgs`](../type-aliases/AnimalCreateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalCreateManyAndReturnArgs`](../type-aliases/AnimalCreateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to create many Animals.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Create many Animals
const animal = await prisma.animal.createManyAndReturn({
  data: [
    // ... provide data here
  ]
})

// Create many Animals and only return the `id`
const animalWithIdOnly = await prisma.animal.createManyAndReturn({
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

> **delete**\<`T`\>(`args`): [`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6512

Delete a Animal.

#### Type Parameters

##### T

`T` *extends* [`AnimalDeleteArgs`](../type-aliases/AnimalDeleteArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDeleteArgs`](../type-aliases/AnimalDeleteArgs.md)\<`ExtArgs`\>\>

Arguments to delete one Animal.

#### Returns

[`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Delete one Animal
const Animal = await prisma.animal.delete({
  where: {
    // ... filter to delete one Animal
  }
})
```

***

### deleteMany()

> **deleteMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6543

Delete zero or more Animals.

#### Type Parameters

##### T

`T` *extends* [`AnimalDeleteManyArgs`](../type-aliases/AnimalDeleteManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalDeleteManyArgs`](../type-aliases/AnimalDeleteManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter Animals to delete.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Delete a few Animals
const { count } = await prisma.animal.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirst()

> **findFirst**\<`T`\>(`args?`): [`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6412

Find the first Animal that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalFindFirstArgs`](../type-aliases/AnimalFindFirstArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalFindFirstArgs`](../type-aliases/AnimalFindFirstArgs.md)\<`ExtArgs`\>\>

Arguments to find a Animal

#### Returns

[`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Animal
const animal = await prisma.animal.findFirst({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirstOrThrow()

> **findFirstOrThrow**\<`T`\>(`args?`): [`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6428

Find the first Animal that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalFindFirstOrThrowArgs`](../type-aliases/AnimalFindFirstOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalFindFirstOrThrowArgs`](../type-aliases/AnimalFindFirstOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a Animal

#### Returns

[`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Animal
const animal = await prisma.animal.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### findMany()

> **findMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6446

Find zero or more Animals that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalFindManyArgs`](../type-aliases/AnimalFindManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalFindManyArgs`](../type-aliases/AnimalFindManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter and select certain fields only.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Get all Animals
const animals = await prisma.animal.findMany()

// Get first 10 Animals
const animals = await prisma.animal.findMany({ take: 10 })

// Only select the `id`
const animalWithIdOnly = await prisma.animal.findMany({ select: { id: true } })
```

***

### findUnique()

> **findUnique**\<`T`\>(`args`): [`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6383

Find zero or one Animal that matches the filter.

#### Type Parameters

##### T

`T` *extends* [`AnimalFindUniqueArgs`](../type-aliases/AnimalFindUniqueArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalFindUniqueArgs`](../type-aliases/AnimalFindUniqueArgs.md)\<`ExtArgs`\>\>

Arguments to find a Animal

#### Returns

[`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Animal
const animal = await prisma.animal.findUnique({
  where: {
    // ... provide filter here
  }
})
```

***

### findUniqueOrThrow()

> **findUniqueOrThrow**\<`T`\>(`args`): [`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6397

Find one Animal that matches the filter or throw an error with `error.code='P2025'`
if no matches were found.

#### Type Parameters

##### T

`T` *extends* [`AnimalFindUniqueOrThrowArgs`](../type-aliases/AnimalFindUniqueOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalFindUniqueOrThrowArgs`](../type-aliases/AnimalFindUniqueOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a Animal

#### Returns

[`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Animal
const animal = await prisma.animal.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### groupBy()

> **groupBy**\<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): `object` *extends* `InputErrors` ? [`GetAnimalGroupByPayload`](../type-aliases/GetAnimalGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6681

Group by Animal.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalGroupByArgs`](../type-aliases/AnimalGroupByArgs.md)\<`DefaultArgs`\>

##### HasSelectOrTake

`HasSelectOrTake` *extends* `0` \| `1`

##### OrderByArg

`OrderByArg` *extends* \{ `orderBy`: [`AnimalOrderByWithAggregationInput`](../type-aliases/AnimalOrderByWithAggregationInput.md) \| [`AnimalOrderByWithAggregationInput`](../type-aliases/AnimalOrderByWithAggregationInput.md)[] \| `undefined`; \} \| \{ `orderBy?`: [`AnimalOrderByWithAggregationInput`](../type-aliases/AnimalOrderByWithAggregationInput.md) \| [`AnimalOrderByWithAggregationInput`](../type-aliases/AnimalOrderByWithAggregationInput.md)[]; \}

##### OrderFields

`OrderFields` *extends* `"name"` \| `"id"` \| `"shelterId"` \| `"createdAt"` \| `"updatedAt"` \| `"species"` \| `"breed"` \| `"gender"` \| `"isNeutered"` \| `"age"` \| `"isEstimatedAge"` \| `"animalStatus"` \| `"weight"` \| `"imgThumbnail"`

##### ByFields

`ByFields` *extends* [`AnimalScalarFieldEnum`](../type-aliases/AnimalScalarFieldEnum.md)

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

\{ \[key in string \| number \| symbol\]: key extends keyof AnimalGroupByArgs\<DefaultArgs\> ? T\[key\] : never \} & `OrderByArg` & `InputErrors`

Group by arguments.

#### Returns

`object` *extends* `InputErrors` ? [`GetAnimalGroupByPayload`](../type-aliases/GetAnimalGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

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

> **update**\<`T`\>(`args`): [`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6529

Update one Animal.

#### Type Parameters

##### T

`T` *extends* [`AnimalUpdateArgs`](../type-aliases/AnimalUpdateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalUpdateArgs`](../type-aliases/AnimalUpdateArgs.md)\<`ExtArgs`\>\>

Arguments to update one Animal.

#### Returns

[`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update one Animal
const animal = await prisma.animal.update({
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

Defined in: libs/database/src/generated/prisma/index.d.ts:6562

Update zero or more Animals.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalUpdateManyArgs`](../type-aliases/AnimalUpdateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalUpdateManyArgs`](../type-aliases/AnimalUpdateManyArgs.md)\<`ExtArgs`\>\>

Arguments to update one or more rows.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Update many Animals
const animal = await prisma.animal.updateMany({
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

> **updateManyAndReturn**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6592

Update zero or more Animals and returns the data updated in the database.

#### Type Parameters

##### T

`T` *extends* [`AnimalUpdateManyAndReturnArgs`](../type-aliases/AnimalUpdateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalUpdateManyAndReturnArgs`](../type-aliases/AnimalUpdateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to update many Animals.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Update many Animals
const animal = await prisma.animal.updateManyAndReturn({
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})

// Update zero or more Animals and only return the `id`
const animalWithIdOnly = await prisma.animal.updateManyAndReturn({
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

> **upsert**\<`T`\>(`args`): [`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:6611

Create or update one Animal.

#### Type Parameters

##### T

`T` *extends* [`AnimalUpsertArgs`](../type-aliases/AnimalUpsertArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalUpsertArgs`](../type-aliases/AnimalUpsertArgs.md)\<`ExtArgs`\>\>

Arguments to update or create a Animal.

#### Returns

[`Prisma__AnimalClient`](Prisma__AnimalClient.md)\<`GetFindResult`\<[`$AnimalPayload`](../type-aliases/$AnimalPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update or create a Animal
const animal = await prisma.animal.upsert({
  create: {
    // ... data to create a Animal
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the Animal we want to update
  }
})
```
