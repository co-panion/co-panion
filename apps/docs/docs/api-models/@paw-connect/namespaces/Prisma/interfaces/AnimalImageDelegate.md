[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalImageDelegate

# Interface: AnimalImageDelegate\<ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10653

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Indexable

> \[`K`: `symbol`\]: `object`

## Properties

### fields

> `readonly` **fields**: [`AnimalImageFieldRefs`](AnimalImageFieldRefs.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:11025

Fields of the AnimalImage model

## Methods

### aggregate()

> **aggregate**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAnimalImageAggregateType`](../type-aliases/GetAnimalImageAggregateType.md)\<`T`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10944

Allows you to perform aggregations operations on a AnimalImage.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalImageAggregateArgs`](../type-aliases/AnimalImageAggregateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AnimalImageAggregateArgs`](../type-aliases/AnimalImageAggregateArgs.md)\>

Select which aggregations you would like to apply and on what fields.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAnimalImageAggregateType`](../type-aliases/GetAnimalImageAggregateType.md)\<`T`\>\>

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

> **count**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AnimalImageCountAggregateOutputType ? AnimalImageCountAggregateOutputType\[P\] : never \} : `number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10910

Count the number of AnimalImages.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalImageCountArgs`](../type-aliases/AnimalImageCountArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AnimalImageCountArgs`](../type-aliases/AnimalImageCountArgs.md)\<`DefaultArgs`\>\>

Arguments to filter AnimalImages to count.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AnimalImageCountAggregateOutputType ? AnimalImageCountAggregateOutputType\[P\] : never \} : `number`\>

#### Example

```ts
// Count the number of AnimalImages
const count = await prisma.animalImage.count({
  where: {
    // ... the filter for the AnimalImages we want to count
  }
})
```

***

### create()

> **create**\<`T`\>(`args`): [`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10743

Create a AnimalImage.

#### Type Parameters

##### T

`T` *extends* [`AnimalImageCreateArgs`](../type-aliases/AnimalImageCreateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalImageCreateArgs`](../type-aliases/AnimalImageCreateArgs.md)\<`ExtArgs`\>\>

Arguments to create a AnimalImage.

#### Returns

[`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Create one AnimalImage
const AnimalImage = await prisma.animalImage.create({
  data: {
    // ... data to create a AnimalImage
  }
})
```

***

### createMany()

> **createMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10757

Create many AnimalImages.

#### Type Parameters

##### T

`T` *extends* [`AnimalImageCreateManyArgs`](../type-aliases/AnimalImageCreateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalImageCreateManyArgs`](../type-aliases/AnimalImageCreateManyArgs.md)\<`ExtArgs`\>\>

Arguments to create many AnimalImages.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Create many AnimalImages
const animalImage = await prisma.animalImage.createMany({
  data: [
    // ... provide data here
  ]
})
```

***

### createManyAndReturn()

> **createManyAndReturn**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10781

Create many AnimalImages and returns the data saved in the database.

#### Type Parameters

##### T

`T` *extends* [`AnimalImageCreateManyAndReturnArgs`](../type-aliases/AnimalImageCreateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalImageCreateManyAndReturnArgs`](../type-aliases/AnimalImageCreateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to create many AnimalImages.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Create many AnimalImages
const animalImage = await prisma.animalImage.createManyAndReturn({
  data: [
    // ... provide data here
  ]
})

// Create many AnimalImages and only return the `id`
const animalImageWithIdOnly = await prisma.animalImage.createManyAndReturn({
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

> **delete**\<`T`\>(`args`): [`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10795

Delete a AnimalImage.

#### Type Parameters

##### T

`T` *extends* [`AnimalImageDeleteArgs`](../type-aliases/AnimalImageDeleteArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalImageDeleteArgs`](../type-aliases/AnimalImageDeleteArgs.md)\<`ExtArgs`\>\>

Arguments to delete one AnimalImage.

#### Returns

[`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Delete one AnimalImage
const AnimalImage = await prisma.animalImage.delete({
  where: {
    // ... filter to delete one AnimalImage
  }
})
```

***

### deleteMany()

> **deleteMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10826

Delete zero or more AnimalImages.

#### Type Parameters

##### T

`T` *extends* [`AnimalImageDeleteManyArgs`](../type-aliases/AnimalImageDeleteManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalImageDeleteManyArgs`](../type-aliases/AnimalImageDeleteManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter AnimalImages to delete.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Delete a few AnimalImages
const { count } = await prisma.animalImage.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirst()

> **findFirst**\<`T`\>(`args?`): [`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10695

Find the first AnimalImage that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalImageFindFirstArgs`](../type-aliases/AnimalImageFindFirstArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalImageFindFirstArgs`](../type-aliases/AnimalImageFindFirstArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalImage

#### Returns

[`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalImage
const animalImage = await prisma.animalImage.findFirst({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirstOrThrow()

> **findFirstOrThrow**\<`T`\>(`args?`): [`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10711

Find the first AnimalImage that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalImageFindFirstOrThrowArgs`](../type-aliases/AnimalImageFindFirstOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalImageFindFirstOrThrowArgs`](../type-aliases/AnimalImageFindFirstOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalImage

#### Returns

[`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalImage
const animalImage = await prisma.animalImage.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### findMany()

> **findMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10729

Find zero or more AnimalImages that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalImageFindManyArgs`](../type-aliases/AnimalImageFindManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalImageFindManyArgs`](../type-aliases/AnimalImageFindManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter and select certain fields only.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Get all AnimalImages
const animalImages = await prisma.animalImage.findMany()

// Get first 10 AnimalImages
const animalImages = await prisma.animalImage.findMany({ take: 10 })

// Only select the `id`
const animalImageWithIdOnly = await prisma.animalImage.findMany({ select: { id: true } })
```

***

### findUnique()

> **findUnique**\<`T`\>(`args`): [`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10666

Find zero or one AnimalImage that matches the filter.

#### Type Parameters

##### T

`T` *extends* [`AnimalImageFindUniqueArgs`](../type-aliases/AnimalImageFindUniqueArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalImageFindUniqueArgs`](../type-aliases/AnimalImageFindUniqueArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalImage

#### Returns

[`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalImage
const animalImage = await prisma.animalImage.findUnique({
  where: {
    // ... provide filter here
  }
})
```

***

### findUniqueOrThrow()

> **findUniqueOrThrow**\<`T`\>(`args`): [`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10680

Find one AnimalImage that matches the filter or throw an error with `error.code='P2025'`
if no matches were found.

#### Type Parameters

##### T

`T` *extends* [`AnimalImageFindUniqueOrThrowArgs`](../type-aliases/AnimalImageFindUniqueOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalImageFindUniqueOrThrowArgs`](../type-aliases/AnimalImageFindUniqueOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a AnimalImage

#### Returns

[`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one AnimalImage
const animalImage = await prisma.animalImage.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### groupBy()

> **groupBy**\<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): `object` *extends* `InputErrors` ? [`GetAnimalImageGroupByPayload`](../type-aliases/GetAnimalImageGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10964

Group by AnimalImage.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalImageGroupByArgs`](../type-aliases/AnimalImageGroupByArgs.md)\<`DefaultArgs`\>

##### HasSelectOrTake

`HasSelectOrTake` *extends* `0` \| `1`

##### OrderByArg

`OrderByArg` *extends* \{ `orderBy`: [`AnimalImageOrderByWithAggregationInput`](../type-aliases/AnimalImageOrderByWithAggregationInput.md) \| [`AnimalImageOrderByWithAggregationInput`](../type-aliases/AnimalImageOrderByWithAggregationInput.md)[] \| `undefined`; \} \| \{ `orderBy?`: [`AnimalImageOrderByWithAggregationInput`](../type-aliases/AnimalImageOrderByWithAggregationInput.md) \| [`AnimalImageOrderByWithAggregationInput`](../type-aliases/AnimalImageOrderByWithAggregationInput.md)[]; \}

##### OrderFields

`OrderFields` *extends* `"id"` \| `"animalId"` \| `"img"`

##### ByFields

`ByFields` *extends* [`AnimalImageScalarFieldEnum`](../type-aliases/AnimalImageScalarFieldEnum.md)

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

\{ \[key in string \| number \| symbol\]: key extends keyof AnimalImageGroupByArgs\<DefaultArgs\> ? T\[key\] : never \} & `OrderByArg` & `InputErrors`

Group by arguments.

#### Returns

`object` *extends* `InputErrors` ? [`GetAnimalImageGroupByPayload`](../type-aliases/GetAnimalImageGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

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

> **update**\<`T`\>(`args`): [`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10812

Update one AnimalImage.

#### Type Parameters

##### T

`T` *extends* [`AnimalImageUpdateArgs`](../type-aliases/AnimalImageUpdateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalImageUpdateArgs`](../type-aliases/AnimalImageUpdateArgs.md)\<`ExtArgs`\>\>

Arguments to update one AnimalImage.

#### Returns

[`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update one AnimalImage
const animalImage = await prisma.animalImage.update({
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

Defined in: libs/database/src/generated/prisma/index.d.ts:10845

Update zero or more AnimalImages.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AnimalImageUpdateManyArgs`](../type-aliases/AnimalImageUpdateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalImageUpdateManyArgs`](../type-aliases/AnimalImageUpdateManyArgs.md)\<`ExtArgs`\>\>

Arguments to update one or more rows.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Update many AnimalImages
const animalImage = await prisma.animalImage.updateMany({
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

> **updateManyAndReturn**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10875

Update zero or more AnimalImages and returns the data updated in the database.

#### Type Parameters

##### T

`T` *extends* [`AnimalImageUpdateManyAndReturnArgs`](../type-aliases/AnimalImageUpdateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalImageUpdateManyAndReturnArgs`](../type-aliases/AnimalImageUpdateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to update many AnimalImages.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Update many AnimalImages
const animalImage = await prisma.animalImage.updateManyAndReturn({
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})

// Update zero or more AnimalImages and only return the `id`
const animalImageWithIdOnly = await prisma.animalImage.updateManyAndReturn({
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

> **upsert**\<`T`\>(`args`): [`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:10894

Create or update one AnimalImage.

#### Type Parameters

##### T

`T` *extends* [`AnimalImageUpsertArgs`](../type-aliases/AnimalImageUpsertArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AnimalImageUpsertArgs`](../type-aliases/AnimalImageUpsertArgs.md)\<`ExtArgs`\>\>

Arguments to update or create a AnimalImage.

#### Returns

[`Prisma__AnimalImageClient`](Prisma__AnimalImageClient.md)\<`GetFindResult`\<[`$AnimalImagePayload`](../type-aliases/$AnimalImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update or create a AnimalImage
const animalImage = await prisma.animalImage.upsert({
  create: {
    // ... data to create a AnimalImage
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the AnimalImage we want to update
  }
})
```
