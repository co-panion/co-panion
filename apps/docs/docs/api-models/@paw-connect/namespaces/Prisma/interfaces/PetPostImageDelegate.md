[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostImageDelegate

# Interface: PetPostImageDelegate\<ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18495

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Indexable

> \[`K`: `symbol`\]: `object`

## Properties

### fields

> `readonly` **fields**: [`PetPostImageFieldRefs`](PetPostImageFieldRefs.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:18867

Fields of the PetPostImage model

## Methods

### aggregate()

> **aggregate**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetPetPostImageAggregateType`](../type-aliases/GetPetPostImageAggregateType.md)\<`T`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18786

Allows you to perform aggregations operations on a PetPostImage.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`PetPostImageAggregateArgs`](../type-aliases/PetPostImageAggregateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`Subset`](../type-aliases/Subset.md)\<`T`, [`PetPostImageAggregateArgs`](../type-aliases/PetPostImageAggregateArgs.md)\>

Select which aggregations you would like to apply and on what fields.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetPetPostImageAggregateType`](../type-aliases/GetPetPostImageAggregateType.md)\<`T`\>\>

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

> **count**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof PetPostImageCountAggregateOutputType ? PetPostImageCountAggregateOutputType\[P\] : never \} : `number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18752

Count the number of PetPostImages.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`PetPostImageCountArgs`](../type-aliases/PetPostImageCountArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`PetPostImageCountArgs`](../type-aliases/PetPostImageCountArgs.md)\<`DefaultArgs`\>\>

Arguments to filter PetPostImages to count.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof PetPostImageCountAggregateOutputType ? PetPostImageCountAggregateOutputType\[P\] : never \} : `number`\>

#### Example

```ts
// Count the number of PetPostImages
const count = await prisma.petPostImage.count({
  where: {
    // ... the filter for the PetPostImages we want to count
  }
})
```

***

### create()

> **create**\<`T`\>(`args`): [`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18585

Create a PetPostImage.

#### Type Parameters

##### T

`T` *extends* [`PetPostImageCreateArgs`](../type-aliases/PetPostImageCreateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostImageCreateArgs`](../type-aliases/PetPostImageCreateArgs.md)\<`ExtArgs`\>\>

Arguments to create a PetPostImage.

#### Returns

[`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Create one PetPostImage
const PetPostImage = await prisma.petPostImage.create({
  data: {
    // ... data to create a PetPostImage
  }
})
```

***

### createMany()

> **createMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18599

Create many PetPostImages.

#### Type Parameters

##### T

`T` *extends* [`PetPostImageCreateManyArgs`](../type-aliases/PetPostImageCreateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostImageCreateManyArgs`](../type-aliases/PetPostImageCreateManyArgs.md)\<`ExtArgs`\>\>

Arguments to create many PetPostImages.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Create many PetPostImages
const petPostImage = await prisma.petPostImage.createMany({
  data: [
    // ... provide data here
  ]
})
```

***

### createManyAndReturn()

> **createManyAndReturn**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18623

Create many PetPostImages and returns the data saved in the database.

#### Type Parameters

##### T

`T` *extends* [`PetPostImageCreateManyAndReturnArgs`](../type-aliases/PetPostImageCreateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostImageCreateManyAndReturnArgs`](../type-aliases/PetPostImageCreateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to create many PetPostImages.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Create many PetPostImages
const petPostImage = await prisma.petPostImage.createManyAndReturn({
  data: [
    // ... provide data here
  ]
})

// Create many PetPostImages and only return the `id`
const petPostImageWithIdOnly = await prisma.petPostImage.createManyAndReturn({
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

> **delete**\<`T`\>(`args`): [`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18637

Delete a PetPostImage.

#### Type Parameters

##### T

`T` *extends* [`PetPostImageDeleteArgs`](../type-aliases/PetPostImageDeleteArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostImageDeleteArgs`](../type-aliases/PetPostImageDeleteArgs.md)\<`ExtArgs`\>\>

Arguments to delete one PetPostImage.

#### Returns

[`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Delete one PetPostImage
const PetPostImage = await prisma.petPostImage.delete({
  where: {
    // ... filter to delete one PetPostImage
  }
})
```

***

### deleteMany()

> **deleteMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18668

Delete zero or more PetPostImages.

#### Type Parameters

##### T

`T` *extends* [`PetPostImageDeleteManyArgs`](../type-aliases/PetPostImageDeleteManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostImageDeleteManyArgs`](../type-aliases/PetPostImageDeleteManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter PetPostImages to delete.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Delete a few PetPostImages
const { count } = await prisma.petPostImage.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirst()

> **findFirst**\<`T`\>(`args?`): [`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18537

Find the first PetPostImage that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`PetPostImageFindFirstArgs`](../type-aliases/PetPostImageFindFirstArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostImageFindFirstArgs`](../type-aliases/PetPostImageFindFirstArgs.md)\<`ExtArgs`\>\>

Arguments to find a PetPostImage

#### Returns

[`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one PetPostImage
const petPostImage = await prisma.petPostImage.findFirst({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirstOrThrow()

> **findFirstOrThrow**\<`T`\>(`args?`): [`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18553

Find the first PetPostImage that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`PetPostImageFindFirstOrThrowArgs`](../type-aliases/PetPostImageFindFirstOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostImageFindFirstOrThrowArgs`](../type-aliases/PetPostImageFindFirstOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a PetPostImage

#### Returns

[`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one PetPostImage
const petPostImage = await prisma.petPostImage.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### findMany()

> **findMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18571

Find zero or more PetPostImages that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`PetPostImageFindManyArgs`](../type-aliases/PetPostImageFindManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostImageFindManyArgs`](../type-aliases/PetPostImageFindManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter and select certain fields only.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Get all PetPostImages
const petPostImages = await prisma.petPostImage.findMany()

// Get first 10 PetPostImages
const petPostImages = await prisma.petPostImage.findMany({ take: 10 })

// Only select the `id`
const petPostImageWithIdOnly = await prisma.petPostImage.findMany({ select: { id: true } })
```

***

### findUnique()

> **findUnique**\<`T`\>(`args`): [`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18508

Find zero or one PetPostImage that matches the filter.

#### Type Parameters

##### T

`T` *extends* [`PetPostImageFindUniqueArgs`](../type-aliases/PetPostImageFindUniqueArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostImageFindUniqueArgs`](../type-aliases/PetPostImageFindUniqueArgs.md)\<`ExtArgs`\>\>

Arguments to find a PetPostImage

#### Returns

[`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one PetPostImage
const petPostImage = await prisma.petPostImage.findUnique({
  where: {
    // ... provide filter here
  }
})
```

***

### findUniqueOrThrow()

> **findUniqueOrThrow**\<`T`\>(`args`): [`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18522

Find one PetPostImage that matches the filter or throw an error with `error.code='P2025'`
if no matches were found.

#### Type Parameters

##### T

`T` *extends* [`PetPostImageFindUniqueOrThrowArgs`](../type-aliases/PetPostImageFindUniqueOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostImageFindUniqueOrThrowArgs`](../type-aliases/PetPostImageFindUniqueOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a PetPostImage

#### Returns

[`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one PetPostImage
const petPostImage = await prisma.petPostImage.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### groupBy()

> **groupBy**\<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): `object` *extends* `InputErrors` ? [`GetPetPostImageGroupByPayload`](../type-aliases/GetPetPostImageGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18806

Group by PetPostImage.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`PetPostImageGroupByArgs`](../type-aliases/PetPostImageGroupByArgs.md)\<`DefaultArgs`\>

##### HasSelectOrTake

`HasSelectOrTake` *extends* `0` \| `1`

##### OrderByArg

`OrderByArg` *extends* \{ `orderBy`: [`PetPostImageOrderByWithAggregationInput`](../type-aliases/PetPostImageOrderByWithAggregationInput.md) \| [`PetPostImageOrderByWithAggregationInput`](../type-aliases/PetPostImageOrderByWithAggregationInput.md)[] \| `undefined`; \} \| \{ `orderBy?`: [`PetPostImageOrderByWithAggregationInput`](../type-aliases/PetPostImageOrderByWithAggregationInput.md) \| [`PetPostImageOrderByWithAggregationInput`](../type-aliases/PetPostImageOrderByWithAggregationInput.md)[]; \}

##### OrderFields

`OrderFields` *extends* `"id"` \| `"img"` \| `"petPostId"`

##### ByFields

`ByFields` *extends* [`PetPostImageScalarFieldEnum`](../type-aliases/PetPostImageScalarFieldEnum.md)

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

\{ \[key in string \| number \| symbol\]: key extends keyof PetPostImageGroupByArgs\<DefaultArgs\> ? T\[key\] : never \} & `OrderByArg` & `InputErrors`

Group by arguments.

#### Returns

`object` *extends* `InputErrors` ? [`GetPetPostImageGroupByPayload`](../type-aliases/GetPetPostImageGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

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

> **update**\<`T`\>(`args`): [`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18654

Update one PetPostImage.

#### Type Parameters

##### T

`T` *extends* [`PetPostImageUpdateArgs`](../type-aliases/PetPostImageUpdateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostImageUpdateArgs`](../type-aliases/PetPostImageUpdateArgs.md)\<`ExtArgs`\>\>

Arguments to update one PetPostImage.

#### Returns

[`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update one PetPostImage
const petPostImage = await prisma.petPostImage.update({
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

Defined in: libs/database/src/generated/prisma/index.d.ts:18687

Update zero or more PetPostImages.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`PetPostImageUpdateManyArgs`](../type-aliases/PetPostImageUpdateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostImageUpdateManyArgs`](../type-aliases/PetPostImageUpdateManyArgs.md)\<`ExtArgs`\>\>

Arguments to update one or more rows.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Update many PetPostImages
const petPostImage = await prisma.petPostImage.updateMany({
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

> **updateManyAndReturn**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18717

Update zero or more PetPostImages and returns the data updated in the database.

#### Type Parameters

##### T

`T` *extends* [`PetPostImageUpdateManyAndReturnArgs`](../type-aliases/PetPostImageUpdateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostImageUpdateManyAndReturnArgs`](../type-aliases/PetPostImageUpdateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to update many PetPostImages.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Update many PetPostImages
const petPostImage = await prisma.petPostImage.updateManyAndReturn({
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})

// Update zero or more PetPostImages and only return the `id`
const petPostImageWithIdOnly = await prisma.petPostImage.updateManyAndReturn({
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

> **upsert**\<`T`\>(`args`): [`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:18736

Create or update one PetPostImage.

#### Type Parameters

##### T

`T` *extends* [`PetPostImageUpsertArgs`](../type-aliases/PetPostImageUpsertArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostImageUpsertArgs`](../type-aliases/PetPostImageUpsertArgs.md)\<`ExtArgs`\>\>

Arguments to update or create a PetPostImage.

#### Returns

[`Prisma__PetPostImageClient`](Prisma__PetPostImageClient.md)\<`GetFindResult`\<[`$PetPostImagePayload`](../type-aliases/$PetPostImagePayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update or create a PetPostImage
const petPostImage = await prisma.petPostImage.upsert({
  create: {
    // ... data to create a PetPostImage
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the PetPostImage we want to update
  }
})
```
