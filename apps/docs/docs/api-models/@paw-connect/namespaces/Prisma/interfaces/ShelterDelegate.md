[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterDelegate

# Interface: ShelterDelegate\<ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4058

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Indexable

> \[`K`: `symbol`\]: `object`

## Properties

### fields

> `readonly` **fields**: [`ShelterFieldRefs`](ShelterFieldRefs.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:4430

Fields of the Shelter model

## Methods

### aggregate()

> **aggregate**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetShelterAggregateType`](../type-aliases/GetShelterAggregateType.md)\<`T`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4349

Allows you to perform aggregations operations on a Shelter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`ShelterAggregateArgs`](../type-aliases/ShelterAggregateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`Subset`](../type-aliases/Subset.md)\<`T`, [`ShelterAggregateArgs`](../type-aliases/ShelterAggregateArgs.md)\>

Select which aggregations you would like to apply and on what fields.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetShelterAggregateType`](../type-aliases/GetShelterAggregateType.md)\<`T`\>\>

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

> **count**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof ShelterCountAggregateOutputType ? ShelterCountAggregateOutputType\[P\] : never \} : `number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4315

Count the number of Shelters.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`ShelterCountArgs`](../type-aliases/ShelterCountArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`ShelterCountArgs`](../type-aliases/ShelterCountArgs.md)\<`DefaultArgs`\>\>

Arguments to filter Shelters to count.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof ShelterCountAggregateOutputType ? ShelterCountAggregateOutputType\[P\] : never \} : `number`\>

#### Example

```ts
// Count the number of Shelters
const count = await prisma.shelter.count({
  where: {
    // ... the filter for the Shelters we want to count
  }
})
```

***

### create()

> **create**\<`T`\>(`args`): [`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4148

Create a Shelter.

#### Type Parameters

##### T

`T` *extends* [`ShelterCreateArgs`](../type-aliases/ShelterCreateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterCreateArgs`](../type-aliases/ShelterCreateArgs.md)\<`ExtArgs`\>\>

Arguments to create a Shelter.

#### Returns

[`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Create one Shelter
const Shelter = await prisma.shelter.create({
  data: {
    // ... data to create a Shelter
  }
})
```

***

### createMany()

> **createMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4162

Create many Shelters.

#### Type Parameters

##### T

`T` *extends* [`ShelterCreateManyArgs`](../type-aliases/ShelterCreateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterCreateManyArgs`](../type-aliases/ShelterCreateManyArgs.md)\<`ExtArgs`\>\>

Arguments to create many Shelters.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Create many Shelters
const shelter = await prisma.shelter.createMany({
  data: [
    // ... provide data here
  ]
})
```

***

### createManyAndReturn()

> **createManyAndReturn**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4186

Create many Shelters and returns the data saved in the database.

#### Type Parameters

##### T

`T` *extends* [`ShelterCreateManyAndReturnArgs`](../type-aliases/ShelterCreateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterCreateManyAndReturnArgs`](../type-aliases/ShelterCreateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to create many Shelters.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Create many Shelters
const shelter = await prisma.shelter.createManyAndReturn({
  data: [
    // ... provide data here
  ]
})

// Create many Shelters and only return the `id`
const shelterWithIdOnly = await prisma.shelter.createManyAndReturn({
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

> **delete**\<`T`\>(`args`): [`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4200

Delete a Shelter.

#### Type Parameters

##### T

`T` *extends* [`ShelterDeleteArgs`](../type-aliases/ShelterDeleteArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterDeleteArgs`](../type-aliases/ShelterDeleteArgs.md)\<`ExtArgs`\>\>

Arguments to delete one Shelter.

#### Returns

[`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Delete one Shelter
const Shelter = await prisma.shelter.delete({
  where: {
    // ... filter to delete one Shelter
  }
})
```

***

### deleteMany()

> **deleteMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4231

Delete zero or more Shelters.

#### Type Parameters

##### T

`T` *extends* [`ShelterDeleteManyArgs`](../type-aliases/ShelterDeleteManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterDeleteManyArgs`](../type-aliases/ShelterDeleteManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter Shelters to delete.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Delete a few Shelters
const { count } = await prisma.shelter.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirst()

> **findFirst**\<`T`\>(`args?`): [`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4100

Find the first Shelter that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`ShelterFindFirstArgs`](../type-aliases/ShelterFindFirstArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterFindFirstArgs`](../type-aliases/ShelterFindFirstArgs.md)\<`ExtArgs`\>\>

Arguments to find a Shelter

#### Returns

[`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Shelter
const shelter = await prisma.shelter.findFirst({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirstOrThrow()

> **findFirstOrThrow**\<`T`\>(`args?`): [`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4116

Find the first Shelter that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`ShelterFindFirstOrThrowArgs`](../type-aliases/ShelterFindFirstOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterFindFirstOrThrowArgs`](../type-aliases/ShelterFindFirstOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a Shelter

#### Returns

[`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Shelter
const shelter = await prisma.shelter.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### findMany()

> **findMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4134

Find zero or more Shelters that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`ShelterFindManyArgs`](../type-aliases/ShelterFindManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterFindManyArgs`](../type-aliases/ShelterFindManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter and select certain fields only.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Get all Shelters
const shelters = await prisma.shelter.findMany()

// Get first 10 Shelters
const shelters = await prisma.shelter.findMany({ take: 10 })

// Only select the `id`
const shelterWithIdOnly = await prisma.shelter.findMany({ select: { id: true } })
```

***

### findUnique()

> **findUnique**\<`T`\>(`args`): [`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4071

Find zero or one Shelter that matches the filter.

#### Type Parameters

##### T

`T` *extends* [`ShelterFindUniqueArgs`](../type-aliases/ShelterFindUniqueArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterFindUniqueArgs`](../type-aliases/ShelterFindUniqueArgs.md)\<`ExtArgs`\>\>

Arguments to find a Shelter

#### Returns

[`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Shelter
const shelter = await prisma.shelter.findUnique({
  where: {
    // ... provide filter here
  }
})
```

***

### findUniqueOrThrow()

> **findUniqueOrThrow**\<`T`\>(`args`): [`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4085

Find one Shelter that matches the filter or throw an error with `error.code='P2025'`
if no matches were found.

#### Type Parameters

##### T

`T` *extends* [`ShelterFindUniqueOrThrowArgs`](../type-aliases/ShelterFindUniqueOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterFindUniqueOrThrowArgs`](../type-aliases/ShelterFindUniqueOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a Shelter

#### Returns

[`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Shelter
const shelter = await prisma.shelter.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### groupBy()

> **groupBy**\<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): `object` *extends* `InputErrors` ? [`GetShelterGroupByPayload`](../type-aliases/GetShelterGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4369

Group by Shelter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`ShelterGroupByArgs`](../type-aliases/ShelterGroupByArgs.md)\<`DefaultArgs`\>

##### HasSelectOrTake

`HasSelectOrTake` *extends* `0` \| `1`

##### OrderByArg

`OrderByArg` *extends* \{ `orderBy`: [`ShelterOrderByWithAggregationInput`](../type-aliases/ShelterOrderByWithAggregationInput.md) \| [`ShelterOrderByWithAggregationInput`](../type-aliases/ShelterOrderByWithAggregationInput.md)[] \| `undefined`; \} \| \{ `orderBy?`: [`ShelterOrderByWithAggregationInput`](../type-aliases/ShelterOrderByWithAggregationInput.md) \| [`ShelterOrderByWithAggregationInput`](../type-aliases/ShelterOrderByWithAggregationInput.md)[]; \}

##### OrderFields

`OrderFields` *extends* `"name"` \| `"id"` \| `"createdAt"` \| `"updatedAt"` \| `"address"` \| `"addressDetail"` \| `"phone"` \| `"operatingHours"` \| `"description"` \| `"imgBanner"`

##### ByFields

`ByFields` *extends* [`ShelterScalarFieldEnum`](../type-aliases/ShelterScalarFieldEnum.md)

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

\{ \[key in string \| number \| symbol\]: key extends keyof ShelterGroupByArgs\<DefaultArgs\> ? T\[key\] : never \} & `OrderByArg` & `InputErrors`

Group by arguments.

#### Returns

`object` *extends* `InputErrors` ? [`GetShelterGroupByPayload`](../type-aliases/GetShelterGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

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

> **update**\<`T`\>(`args`): [`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4217

Update one Shelter.

#### Type Parameters

##### T

`T` *extends* [`ShelterUpdateArgs`](../type-aliases/ShelterUpdateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterUpdateArgs`](../type-aliases/ShelterUpdateArgs.md)\<`ExtArgs`\>\>

Arguments to update one Shelter.

#### Returns

[`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update one Shelter
const shelter = await prisma.shelter.update({
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

Defined in: libs/database/src/generated/prisma/index.d.ts:4250

Update zero or more Shelters.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`ShelterUpdateManyArgs`](../type-aliases/ShelterUpdateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterUpdateManyArgs`](../type-aliases/ShelterUpdateManyArgs.md)\<`ExtArgs`\>\>

Arguments to update one or more rows.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Update many Shelters
const shelter = await prisma.shelter.updateMany({
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

> **updateManyAndReturn**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4280

Update zero or more Shelters and returns the data updated in the database.

#### Type Parameters

##### T

`T` *extends* [`ShelterUpdateManyAndReturnArgs`](../type-aliases/ShelterUpdateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterUpdateManyAndReturnArgs`](../type-aliases/ShelterUpdateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to update many Shelters.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Update many Shelters
const shelter = await prisma.shelter.updateManyAndReturn({
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})

// Update zero or more Shelters and only return the `id`
const shelterWithIdOnly = await prisma.shelter.updateManyAndReturn({
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

> **upsert**\<`T`\>(`args`): [`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:4299

Create or update one Shelter.

#### Type Parameters

##### T

`T` *extends* [`ShelterUpsertArgs`](../type-aliases/ShelterUpsertArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterUpsertArgs`](../type-aliases/ShelterUpsertArgs.md)\<`ExtArgs`\>\>

Arguments to update or create a Shelter.

#### Returns

[`Prisma__ShelterClient`](Prisma__ShelterClient.md)\<`GetFindResult`\<[`$ShelterPayload`](../type-aliases/$ShelterPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update or create a Shelter
const shelter = await prisma.shelter.upsert({
  create: {
    // ... data to create a Shelter
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the Shelter we want to update
  }
})
```
