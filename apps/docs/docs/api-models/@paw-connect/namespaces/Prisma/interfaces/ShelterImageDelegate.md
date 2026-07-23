[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterImageDelegate

# Interface: ShelterImageDelegate\<ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5143

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Indexable

> \[`K`: `symbol`\]: `object`

## Properties

### fields

> `readonly` **fields**: [`ShelterImageFieldRefs`](ShelterImageFieldRefs.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:5515

Fields of the ShelterImage model

## Methods

### aggregate()

> **aggregate**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetShelterImageAggregateType`](../type-aliases/GetShelterImageAggregateType.md)\<`T`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5434

Allows you to perform aggregations operations on a ShelterImage.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`ShelterImageAggregateArgs`](../type-aliases/ShelterImageAggregateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`Subset`](../type-aliases/Subset.md)\<`T`, [`ShelterImageAggregateArgs`](../type-aliases/ShelterImageAggregateArgs.md)\>

Select which aggregations you would like to apply and on what fields.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetShelterImageAggregateType`](../type-aliases/GetShelterImageAggregateType.md)\<`T`\>\>

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

> **count**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof ShelterImageCountAggregateOutputType ? ShelterImageCountAggregateOutputType\[P\] : never \} : `number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5400

Count the number of ShelterImages.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`ShelterImageCountArgs`](../type-aliases/ShelterImageCountArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`ShelterImageCountArgs`](../type-aliases/ShelterImageCountArgs.md)\<`DefaultArgs`\>\>

Arguments to filter ShelterImages to count.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof ShelterImageCountAggregateOutputType ? ShelterImageCountAggregateOutputType\[P\] : never \} : `number`\>

#### Example

```ts
// Count the number of ShelterImages
const count = await prisma.shelterImage.count({
  where: {
    // ... the filter for the ShelterImages we want to count
  }
})
```

***

### create()

> **create**\<`T`\>(`args`): [`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5233

Create a ShelterImage.

#### Type Parameters

##### T

`T` *extends* [`ShelterImageCreateArgs`](../type-aliases/ShelterImageCreateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterImageCreateArgs`](../type-aliases/ShelterImageCreateArgs.md)\<`ExtArgs`\>\>

Arguments to create a ShelterImage.

#### Returns

[`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Create one ShelterImage
const ShelterImage = await prisma.shelterImage.create({
  data: {
    // ... data to create a ShelterImage
  }
})
```

***

### createMany()

> **createMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5247

Create many ShelterImages.

#### Type Parameters

##### T

`T` *extends* [`ShelterImageCreateManyArgs`](../type-aliases/ShelterImageCreateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterImageCreateManyArgs`](../type-aliases/ShelterImageCreateManyArgs.md)\<`ExtArgs`\>\>

Arguments to create many ShelterImages.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Create many ShelterImages
const shelterImage = await prisma.shelterImage.createMany({
  data: [
    // ... provide data here
  ]
})
```

***

### createManyAndReturn()

> **createManyAndReturn**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5271

Create many ShelterImages and returns the data saved in the database.

#### Type Parameters

##### T

`T` *extends* [`ShelterImageCreateManyAndReturnArgs`](../type-aliases/ShelterImageCreateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterImageCreateManyAndReturnArgs`](../type-aliases/ShelterImageCreateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to create many ShelterImages.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Create many ShelterImages
const shelterImage = await prisma.shelterImage.createManyAndReturn({
  data: [
    // ... provide data here
  ]
})

// Create many ShelterImages and only return the `id`
const shelterImageWithIdOnly = await prisma.shelterImage.createManyAndReturn({
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

> **delete**\<`T`\>(`args`): [`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5285

Delete a ShelterImage.

#### Type Parameters

##### T

`T` *extends* [`ShelterImageDeleteArgs`](../type-aliases/ShelterImageDeleteArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterImageDeleteArgs`](../type-aliases/ShelterImageDeleteArgs.md)\<`ExtArgs`\>\>

Arguments to delete one ShelterImage.

#### Returns

[`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Delete one ShelterImage
const ShelterImage = await prisma.shelterImage.delete({
  where: {
    // ... filter to delete one ShelterImage
  }
})
```

***

### deleteMany()

> **deleteMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5316

Delete zero or more ShelterImages.

#### Type Parameters

##### T

`T` *extends* [`ShelterImageDeleteManyArgs`](../type-aliases/ShelterImageDeleteManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterImageDeleteManyArgs`](../type-aliases/ShelterImageDeleteManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter ShelterImages to delete.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Delete a few ShelterImages
const { count } = await prisma.shelterImage.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirst()

> **findFirst**\<`T`\>(`args?`): [`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5185

Find the first ShelterImage that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`ShelterImageFindFirstArgs`](../type-aliases/ShelterImageFindFirstArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterImageFindFirstArgs`](../type-aliases/ShelterImageFindFirstArgs.md)\<`ExtArgs`\>\>

Arguments to find a ShelterImage

#### Returns

[`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one ShelterImage
const shelterImage = await prisma.shelterImage.findFirst({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirstOrThrow()

> **findFirstOrThrow**\<`T`\>(`args?`): [`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5201

Find the first ShelterImage that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`ShelterImageFindFirstOrThrowArgs`](../type-aliases/ShelterImageFindFirstOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterImageFindFirstOrThrowArgs`](../type-aliases/ShelterImageFindFirstOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a ShelterImage

#### Returns

[`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one ShelterImage
const shelterImage = await prisma.shelterImage.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### findMany()

> **findMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5219

Find zero or more ShelterImages that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`ShelterImageFindManyArgs`](../type-aliases/ShelterImageFindManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterImageFindManyArgs`](../type-aliases/ShelterImageFindManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter and select certain fields only.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Get all ShelterImages
const shelterImages = await prisma.shelterImage.findMany()

// Get first 10 ShelterImages
const shelterImages = await prisma.shelterImage.findMany({ take: 10 })

// Only select the `id`
const shelterImageWithIdOnly = await prisma.shelterImage.findMany({ select: { id: true } })
```

***

### findUnique()

> **findUnique**\<`T`\>(`args`): [`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5156

Find zero or one ShelterImage that matches the filter.

#### Type Parameters

##### T

`T` *extends* [`ShelterImageFindUniqueArgs`](../type-aliases/ShelterImageFindUniqueArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterImageFindUniqueArgs`](../type-aliases/ShelterImageFindUniqueArgs.md)\<`ExtArgs`\>\>

Arguments to find a ShelterImage

#### Returns

[`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one ShelterImage
const shelterImage = await prisma.shelterImage.findUnique({
  where: {
    // ... provide filter here
  }
})
```

***

### findUniqueOrThrow()

> **findUniqueOrThrow**\<`T`\>(`args`): [`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5170

Find one ShelterImage that matches the filter or throw an error with `error.code='P2025'`
if no matches were found.

#### Type Parameters

##### T

`T` *extends* [`ShelterImageFindUniqueOrThrowArgs`](../type-aliases/ShelterImageFindUniqueOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterImageFindUniqueOrThrowArgs`](../type-aliases/ShelterImageFindUniqueOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a ShelterImage

#### Returns

[`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one ShelterImage
const shelterImage = await prisma.shelterImage.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### groupBy()

> **groupBy**\<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): `object` *extends* `InputErrors` ? [`GetShelterImageGroupByPayload`](../type-aliases/GetShelterImageGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5454

Group by ShelterImage.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`ShelterImageGroupByArgs`](../type-aliases/ShelterImageGroupByArgs.md)\<`DefaultArgs`\>

##### HasSelectOrTake

`HasSelectOrTake` *extends* `0` \| `1`

##### OrderByArg

`OrderByArg` *extends* \{ `orderBy`: [`ShelterImageOrderByWithAggregationInput`](../type-aliases/ShelterImageOrderByWithAggregationInput.md) \| [`ShelterImageOrderByWithAggregationInput`](../type-aliases/ShelterImageOrderByWithAggregationInput.md)[] \| `undefined`; \} \| \{ `orderBy?`: [`ShelterImageOrderByWithAggregationInput`](../type-aliases/ShelterImageOrderByWithAggregationInput.md) \| [`ShelterImageOrderByWithAggregationInput`](../type-aliases/ShelterImageOrderByWithAggregationInput.md)[]; \}

##### OrderFields

`OrderFields` *extends* `"id"` \| `"shelterId"` \| `"img"`

##### ByFields

`ByFields` *extends* [`ShelterImageScalarFieldEnum`](../type-aliases/ShelterImageScalarFieldEnum.md)

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

\{ \[key in string \| number \| symbol\]: key extends keyof ShelterImageGroupByArgs\<DefaultArgs\> ? T\[key\] : never \} & `OrderByArg` & `InputErrors`

Group by arguments.

#### Returns

`object` *extends* `InputErrors` ? [`GetShelterImageGroupByPayload`](../type-aliases/GetShelterImageGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

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

> **update**\<`T`\>(`args`): [`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5302

Update one ShelterImage.

#### Type Parameters

##### T

`T` *extends* [`ShelterImageUpdateArgs`](../type-aliases/ShelterImageUpdateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterImageUpdateArgs`](../type-aliases/ShelterImageUpdateArgs.md)\<`ExtArgs`\>\>

Arguments to update one ShelterImage.

#### Returns

[`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update one ShelterImage
const shelterImage = await prisma.shelterImage.update({
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

Defined in: libs/database/src/generated/prisma/index.d.ts:5335

Update zero or more ShelterImages.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`ShelterImageUpdateManyArgs`](../type-aliases/ShelterImageUpdateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterImageUpdateManyArgs`](../type-aliases/ShelterImageUpdateManyArgs.md)\<`ExtArgs`\>\>

Arguments to update one or more rows.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Update many ShelterImages
const shelterImage = await prisma.shelterImage.updateMany({
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

> **updateManyAndReturn**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5365

Update zero or more ShelterImages and returns the data updated in the database.

#### Type Parameters

##### T

`T` *extends* [`ShelterImageUpdateManyAndReturnArgs`](../type-aliases/ShelterImageUpdateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterImageUpdateManyAndReturnArgs`](../type-aliases/ShelterImageUpdateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to update many ShelterImages.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Update many ShelterImages
const shelterImage = await prisma.shelterImage.updateManyAndReturn({
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})

// Update zero or more ShelterImages and only return the `id`
const shelterImageWithIdOnly = await prisma.shelterImage.updateManyAndReturn({
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

> **upsert**\<`T`\>(`args`): [`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:5384

Create or update one ShelterImage.

#### Type Parameters

##### T

`T` *extends* [`ShelterImageUpsertArgs`](../type-aliases/ShelterImageUpsertArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`ShelterImageUpsertArgs`](../type-aliases/ShelterImageUpsertArgs.md)\<`ExtArgs`\>\>

Arguments to update or create a ShelterImage.

#### Returns

[`Prisma__ShelterImageClient`](Prisma__ShelterImageClient.md)\<`GetFindResult`\<[`$ShelterImagePayload`](../type-aliases/$ShelterImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update or create a ShelterImage
const shelterImage = await prisma.shelterImage.upsert({
  create: {
    // ... data to create a ShelterImage
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the ShelterImage we want to update
  }
})
```
