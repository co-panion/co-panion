[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PetPostDelegate

# Interface: PetPostDelegate\<ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17405

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Indexable

> \[`K`: `symbol`\]: `object`

## Properties

### fields

> `readonly` **fields**: [`PetPostFieldRefs`](PetPostFieldRefs.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:17777

Fields of the PetPost model

## Methods

### aggregate()

> **aggregate**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetPetPostAggregateType`](../type-aliases/GetPetPostAggregateType.md)\<`T`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17696

Allows you to perform aggregations operations on a PetPost.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`PetPostAggregateArgs`](../type-aliases/PetPostAggregateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`Subset`](../type-aliases/Subset.md)\<`T`, [`PetPostAggregateArgs`](../type-aliases/PetPostAggregateArgs.md)\>

Select which aggregations you would like to apply and on what fields.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetPetPostAggregateType`](../type-aliases/GetPetPostAggregateType.md)\<`T`\>\>

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

> **count**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof PetPostCountAggregateOutputType ? PetPostCountAggregateOutputType\[P\] : never \} : `number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17662

Count the number of PetPosts.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`PetPostCountArgs`](../type-aliases/PetPostCountArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`PetPostCountArgs`](../type-aliases/PetPostCountArgs.md)\<`DefaultArgs`\>\>

Arguments to filter PetPosts to count.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof PetPostCountAggregateOutputType ? PetPostCountAggregateOutputType\[P\] : never \} : `number`\>

#### Example

```ts
// Count the number of PetPosts
const count = await prisma.petPost.count({
  where: {
    // ... the filter for the PetPosts we want to count
  }
})
```

***

### create()

> **create**\<`T`\>(`args`): [`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17495

Create a PetPost.

#### Type Parameters

##### T

`T` *extends* [`PetPostCreateArgs`](../type-aliases/PetPostCreateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostCreateArgs`](../type-aliases/PetPostCreateArgs.md)\<`ExtArgs`\>\>

Arguments to create a PetPost.

#### Returns

[`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Create one PetPost
const PetPost = await prisma.petPost.create({
  data: {
    // ... data to create a PetPost
  }
})
```

***

### createMany()

> **createMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17509

Create many PetPosts.

#### Type Parameters

##### T

`T` *extends* [`PetPostCreateManyArgs`](../type-aliases/PetPostCreateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostCreateManyArgs`](../type-aliases/PetPostCreateManyArgs.md)\<`ExtArgs`\>\>

Arguments to create many PetPosts.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Create many PetPosts
const petPost = await prisma.petPost.createMany({
  data: [
    // ... provide data here
  ]
})
```

***

### createManyAndReturn()

> **createManyAndReturn**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17533

Create many PetPosts and returns the data saved in the database.

#### Type Parameters

##### T

`T` *extends* [`PetPostCreateManyAndReturnArgs`](../type-aliases/PetPostCreateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostCreateManyAndReturnArgs`](../type-aliases/PetPostCreateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to create many PetPosts.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Create many PetPosts
const petPost = await prisma.petPost.createManyAndReturn({
  data: [
    // ... provide data here
  ]
})

// Create many PetPosts and only return the `id`
const petPostWithIdOnly = await prisma.petPost.createManyAndReturn({
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

> **delete**\<`T`\>(`args`): [`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17547

Delete a PetPost.

#### Type Parameters

##### T

`T` *extends* [`PetPostDeleteArgs`](../type-aliases/PetPostDeleteArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostDeleteArgs`](../type-aliases/PetPostDeleteArgs.md)\<`ExtArgs`\>\>

Arguments to delete one PetPost.

#### Returns

[`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Delete one PetPost
const PetPost = await prisma.petPost.delete({
  where: {
    // ... filter to delete one PetPost
  }
})
```

***

### deleteMany()

> **deleteMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17578

Delete zero or more PetPosts.

#### Type Parameters

##### T

`T` *extends* [`PetPostDeleteManyArgs`](../type-aliases/PetPostDeleteManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostDeleteManyArgs`](../type-aliases/PetPostDeleteManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter PetPosts to delete.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Delete a few PetPosts
const { count } = await prisma.petPost.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirst()

> **findFirst**\<`T`\>(`args?`): [`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17447

Find the first PetPost that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`PetPostFindFirstArgs`](../type-aliases/PetPostFindFirstArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostFindFirstArgs`](../type-aliases/PetPostFindFirstArgs.md)\<`ExtArgs`\>\>

Arguments to find a PetPost

#### Returns

[`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one PetPost
const petPost = await prisma.petPost.findFirst({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirstOrThrow()

> **findFirstOrThrow**\<`T`\>(`args?`): [`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17463

Find the first PetPost that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`PetPostFindFirstOrThrowArgs`](../type-aliases/PetPostFindFirstOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostFindFirstOrThrowArgs`](../type-aliases/PetPostFindFirstOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a PetPost

#### Returns

[`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one PetPost
const petPost = await prisma.petPost.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### findMany()

> **findMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17481

Find zero or more PetPosts that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`PetPostFindManyArgs`](../type-aliases/PetPostFindManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostFindManyArgs`](../type-aliases/PetPostFindManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter and select certain fields only.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Get all PetPosts
const petPosts = await prisma.petPost.findMany()

// Get first 10 PetPosts
const petPosts = await prisma.petPost.findMany({ take: 10 })

// Only select the `id`
const petPostWithIdOnly = await prisma.petPost.findMany({ select: { id: true } })
```

***

### findUnique()

> **findUnique**\<`T`\>(`args`): [`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17418

Find zero or one PetPost that matches the filter.

#### Type Parameters

##### T

`T` *extends* [`PetPostFindUniqueArgs`](../type-aliases/PetPostFindUniqueArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostFindUniqueArgs`](../type-aliases/PetPostFindUniqueArgs.md)\<`ExtArgs`\>\>

Arguments to find a PetPost

#### Returns

[`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one PetPost
const petPost = await prisma.petPost.findUnique({
  where: {
    // ... provide filter here
  }
})
```

***

### findUniqueOrThrow()

> **findUniqueOrThrow**\<`T`\>(`args`): [`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17432

Find one PetPost that matches the filter or throw an error with `error.code='P2025'`
if no matches were found.

#### Type Parameters

##### T

`T` *extends* [`PetPostFindUniqueOrThrowArgs`](../type-aliases/PetPostFindUniqueOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostFindUniqueOrThrowArgs`](../type-aliases/PetPostFindUniqueOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a PetPost

#### Returns

[`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one PetPost
const petPost = await prisma.petPost.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### groupBy()

> **groupBy**\<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): `object` *extends* `InputErrors` ? [`GetPetPostGroupByPayload`](../type-aliases/GetPetPostGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17716

Group by PetPost.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`PetPostGroupByArgs`](../type-aliases/PetPostGroupByArgs.md)\<`DefaultArgs`\>

##### HasSelectOrTake

`HasSelectOrTake` *extends* `0` \| `1`

##### OrderByArg

`OrderByArg` *extends* \{ `orderBy`: [`PetPostOrderByWithAggregationInput`](../type-aliases/PetPostOrderByWithAggregationInput.md) \| [`PetPostOrderByWithAggregationInput`](../type-aliases/PetPostOrderByWithAggregationInput.md)[] \| `undefined`; \} \| \{ `orderBy?`: [`PetPostOrderByWithAggregationInput`](../type-aliases/PetPostOrderByWithAggregationInput.md) \| [`PetPostOrderByWithAggregationInput`](../type-aliases/PetPostOrderByWithAggregationInput.md)[]; \}

##### OrderFields

`OrderFields` *extends* `"id"` \| `"createdAt"` \| `"updatedAt"` \| `"title"` \| `"content"` \| `"authorId"`

##### ByFields

`ByFields` *extends* [`PetPostScalarFieldEnum`](../type-aliases/PetPostScalarFieldEnum.md)

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

\{ \[key in string \| number \| symbol\]: key extends keyof PetPostGroupByArgs\<DefaultArgs\> ? T\[key\] : never \} & `OrderByArg` & `InputErrors`

Group by arguments.

#### Returns

`object` *extends* `InputErrors` ? [`GetPetPostGroupByPayload`](../type-aliases/GetPetPostGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

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

> **update**\<`T`\>(`args`): [`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17564

Update one PetPost.

#### Type Parameters

##### T

`T` *extends* [`PetPostUpdateArgs`](../type-aliases/PetPostUpdateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostUpdateArgs`](../type-aliases/PetPostUpdateArgs.md)\<`ExtArgs`\>\>

Arguments to update one PetPost.

#### Returns

[`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update one PetPost
const petPost = await prisma.petPost.update({
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

Defined in: libs/database/src/generated/prisma/index.d.ts:17597

Update zero or more PetPosts.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`PetPostUpdateManyArgs`](../type-aliases/PetPostUpdateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostUpdateManyArgs`](../type-aliases/PetPostUpdateManyArgs.md)\<`ExtArgs`\>\>

Arguments to update one or more rows.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Update many PetPosts
const petPost = await prisma.petPost.updateMany({
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

> **updateManyAndReturn**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17627

Update zero or more PetPosts and returns the data updated in the database.

#### Type Parameters

##### T

`T` *extends* [`PetPostUpdateManyAndReturnArgs`](../type-aliases/PetPostUpdateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostUpdateManyAndReturnArgs`](../type-aliases/PetPostUpdateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to update many PetPosts.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Update many PetPosts
const petPost = await prisma.petPost.updateManyAndReturn({
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})

// Update zero or more PetPosts and only return the `id`
const petPostWithIdOnly = await prisma.petPost.updateManyAndReturn({
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

> **upsert**\<`T`\>(`args`): [`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:17646

Create or update one PetPost.

#### Type Parameters

##### T

`T` *extends* [`PetPostUpsertArgs`](../type-aliases/PetPostUpsertArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`PetPostUpsertArgs`](../type-aliases/PetPostUpsertArgs.md)\<`ExtArgs`\>\>

Arguments to update or create a PetPost.

#### Returns

[`Prisma__PetPostClient`](Prisma__PetPostClient.md)\<`GetFindResult`\<[`$PetPostPayload`](../type-aliases/$PetPostPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update or create a PetPost
const petPost = await prisma.petPost.upsert({
  create: {
    // ... data to create a PetPost
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the PetPost we want to update
  }
})
```
