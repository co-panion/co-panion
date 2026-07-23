[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AdoptionDelegate

# Interface: AdoptionDelegate\<ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11768

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Indexable

> \[`K`: `symbol`\]: `object`

## Properties

### fields

> `readonly` **fields**: [`AdoptionFieldRefs`](AdoptionFieldRefs.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:12140

Fields of the Adoption model

## Methods

### aggregate()

> **aggregate**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAdoptionAggregateType`](../type-aliases/GetAdoptionAggregateType.md)\<`T`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:12059

Allows you to perform aggregations operations on a Adoption.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionAggregateArgs`](../type-aliases/AdoptionAggregateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AdoptionAggregateArgs`](../type-aliases/AdoptionAggregateArgs.md)\>

Select which aggregations you would like to apply and on what fields.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAdoptionAggregateType`](../type-aliases/GetAdoptionAggregateType.md)\<`T`\>\>

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

> **count**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AdoptionCountAggregateOutputType ? AdoptionCountAggregateOutputType\[P\] : never \} : `number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:12025

Count the number of Adoptions.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionCountArgs`](../type-aliases/AdoptionCountArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AdoptionCountArgs`](../type-aliases/AdoptionCountArgs.md)\<`DefaultArgs`\>\>

Arguments to filter Adoptions to count.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AdoptionCountAggregateOutputType ? AdoptionCountAggregateOutputType\[P\] : never \} : `number`\>

#### Example

```ts
// Count the number of Adoptions
const count = await prisma.adoption.count({
  where: {
    // ... the filter for the Adoptions we want to count
  }
})
```

***

### create()

> **create**\<`T`\>(`args`): [`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11858

Create a Adoption.

#### Type Parameters

##### T

`T` *extends* [`AdoptionCreateArgs`](../type-aliases/AdoptionCreateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionCreateArgs`](../type-aliases/AdoptionCreateArgs.md)\<`ExtArgs`\>\>

Arguments to create a Adoption.

#### Returns

[`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Create one Adoption
const Adoption = await prisma.adoption.create({
  data: {
    // ... data to create a Adoption
  }
})
```

***

### createMany()

> **createMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11872

Create many Adoptions.

#### Type Parameters

##### T

`T` *extends* [`AdoptionCreateManyArgs`](../type-aliases/AdoptionCreateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionCreateManyArgs`](../type-aliases/AdoptionCreateManyArgs.md)\<`ExtArgs`\>\>

Arguments to create many Adoptions.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Create many Adoptions
const adoption = await prisma.adoption.createMany({
  data: [
    // ... provide data here
  ]
})
```

***

### createManyAndReturn()

> **createManyAndReturn**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11896

Create many Adoptions and returns the data saved in the database.

#### Type Parameters

##### T

`T` *extends* [`AdoptionCreateManyAndReturnArgs`](../type-aliases/AdoptionCreateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionCreateManyAndReturnArgs`](../type-aliases/AdoptionCreateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to create many Adoptions.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Create many Adoptions
const adoption = await prisma.adoption.createManyAndReturn({
  data: [
    // ... provide data here
  ]
})

// Create many Adoptions and only return the `id`
const adoptionWithIdOnly = await prisma.adoption.createManyAndReturn({
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

> **delete**\<`T`\>(`args`): [`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11910

Delete a Adoption.

#### Type Parameters

##### T

`T` *extends* [`AdoptionDeleteArgs`](../type-aliases/AdoptionDeleteArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDeleteArgs`](../type-aliases/AdoptionDeleteArgs.md)\<`ExtArgs`\>\>

Arguments to delete one Adoption.

#### Returns

[`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Delete one Adoption
const Adoption = await prisma.adoption.delete({
  where: {
    // ... filter to delete one Adoption
  }
})
```

***

### deleteMany()

> **deleteMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11941

Delete zero or more Adoptions.

#### Type Parameters

##### T

`T` *extends* [`AdoptionDeleteManyArgs`](../type-aliases/AdoptionDeleteManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionDeleteManyArgs`](../type-aliases/AdoptionDeleteManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter Adoptions to delete.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Delete a few Adoptions
const { count } = await prisma.adoption.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirst()

> **findFirst**\<`T`\>(`args?`): [`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11810

Find the first Adoption that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionFindFirstArgs`](../type-aliases/AdoptionFindFirstArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionFindFirstArgs`](../type-aliases/AdoptionFindFirstArgs.md)\<`ExtArgs`\>\>

Arguments to find a Adoption

#### Returns

[`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Adoption
const adoption = await prisma.adoption.findFirst({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirstOrThrow()

> **findFirstOrThrow**\<`T`\>(`args?`): [`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11826

Find the first Adoption that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionFindFirstOrThrowArgs`](../type-aliases/AdoptionFindFirstOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionFindFirstOrThrowArgs`](../type-aliases/AdoptionFindFirstOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a Adoption

#### Returns

[`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Adoption
const adoption = await prisma.adoption.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### findMany()

> **findMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11844

Find zero or more Adoptions that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionFindManyArgs`](../type-aliases/AdoptionFindManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionFindManyArgs`](../type-aliases/AdoptionFindManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter and select certain fields only.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Get all Adoptions
const adoptions = await prisma.adoption.findMany()

// Get first 10 Adoptions
const adoptions = await prisma.adoption.findMany({ take: 10 })

// Only select the `id`
const adoptionWithIdOnly = await prisma.adoption.findMany({ select: { id: true } })
```

***

### findUnique()

> **findUnique**\<`T`\>(`args`): [`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11781

Find zero or one Adoption that matches the filter.

#### Type Parameters

##### T

`T` *extends* [`AdoptionFindUniqueArgs`](../type-aliases/AdoptionFindUniqueArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionFindUniqueArgs`](../type-aliases/AdoptionFindUniqueArgs.md)\<`ExtArgs`\>\>

Arguments to find a Adoption

#### Returns

[`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Adoption
const adoption = await prisma.adoption.findUnique({
  where: {
    // ... provide filter here
  }
})
```

***

### findUniqueOrThrow()

> **findUniqueOrThrow**\<`T`\>(`args`): [`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11795

Find one Adoption that matches the filter or throw an error with `error.code='P2025'`
if no matches were found.

#### Type Parameters

##### T

`T` *extends* [`AdoptionFindUniqueOrThrowArgs`](../type-aliases/AdoptionFindUniqueOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionFindUniqueOrThrowArgs`](../type-aliases/AdoptionFindUniqueOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a Adoption

#### Returns

[`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Adoption
const adoption = await prisma.adoption.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### groupBy()

> **groupBy**\<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): `object` *extends* `InputErrors` ? [`GetAdoptionGroupByPayload`](../type-aliases/GetAdoptionGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:12079

Group by Adoption.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionGroupByArgs`](../type-aliases/AdoptionGroupByArgs.md)\<`DefaultArgs`\>

##### HasSelectOrTake

`HasSelectOrTake` *extends* `0` \| `1`

##### OrderByArg

`OrderByArg` *extends* \{ `orderBy`: [`AdoptionOrderByWithAggregationInput`](../type-aliases/AdoptionOrderByWithAggregationInput.md) \| [`AdoptionOrderByWithAggregationInput`](../type-aliases/AdoptionOrderByWithAggregationInput.md)[] \| `undefined`; \} \| \{ `orderBy?`: [`AdoptionOrderByWithAggregationInput`](../type-aliases/AdoptionOrderByWithAggregationInput.md) \| [`AdoptionOrderByWithAggregationInput`](../type-aliases/AdoptionOrderByWithAggregationInput.md)[]; \}

##### OrderFields

`OrderFields` *extends* `"id"` \| `"createdAt"` \| `"updatedAt"` \| `"userId"` \| `"animalId"` \| `"adoptionStatus"`

##### ByFields

`ByFields` *extends* [`AdoptionScalarFieldEnum`](../type-aliases/AdoptionScalarFieldEnum.md)

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

\{ \[key in string \| number \| symbol\]: key extends keyof AdoptionGroupByArgs\<DefaultArgs\> ? T\[key\] : never \} & `OrderByArg` & `InputErrors`

Group by arguments.

#### Returns

`object` *extends* `InputErrors` ? [`GetAdoptionGroupByPayload`](../type-aliases/GetAdoptionGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

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

> **update**\<`T`\>(`args`): [`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11927

Update one Adoption.

#### Type Parameters

##### T

`T` *extends* [`AdoptionUpdateArgs`](../type-aliases/AdoptionUpdateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionUpdateArgs`](../type-aliases/AdoptionUpdateArgs.md)\<`ExtArgs`\>\>

Arguments to update one Adoption.

#### Returns

[`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update one Adoption
const adoption = await prisma.adoption.update({
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

Defined in: libs/database/src/generated/prisma/index.d.ts:11960

Update zero or more Adoptions.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AdoptionUpdateManyArgs`](../type-aliases/AdoptionUpdateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionUpdateManyArgs`](../type-aliases/AdoptionUpdateManyArgs.md)\<`ExtArgs`\>\>

Arguments to update one or more rows.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Update many Adoptions
const adoption = await prisma.adoption.updateMany({
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

> **updateManyAndReturn**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:11990

Update zero or more Adoptions and returns the data updated in the database.

#### Type Parameters

##### T

`T` *extends* [`AdoptionUpdateManyAndReturnArgs`](../type-aliases/AdoptionUpdateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionUpdateManyAndReturnArgs`](../type-aliases/AdoptionUpdateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to update many Adoptions.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Update many Adoptions
const adoption = await prisma.adoption.updateManyAndReturn({
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})

// Update zero or more Adoptions and only return the `id`
const adoptionWithIdOnly = await prisma.adoption.updateManyAndReturn({
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

> **upsert**\<`T`\>(`args`): [`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:12009

Create or update one Adoption.

#### Type Parameters

##### T

`T` *extends* [`AdoptionUpsertArgs`](../type-aliases/AdoptionUpsertArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AdoptionUpsertArgs`](../type-aliases/AdoptionUpsertArgs.md)\<`ExtArgs`\>\>

Arguments to update or create a Adoption.

#### Returns

[`Prisma__AdoptionClient`](Prisma__AdoptionClient.md)\<`GetFindResult`\<[`$AdoptionPayload`](../type-aliases/$AdoptionPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update or create a Adoption
const adoption = await prisma.adoption.upsert({
  create: {
    // ... data to create a Adoption
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the Adoption we want to update
  }
})
```
