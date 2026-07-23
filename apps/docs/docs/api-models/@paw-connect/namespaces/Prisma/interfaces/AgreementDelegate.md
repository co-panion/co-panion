[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AgreementDelegate

# Interface: AgreementDelegate\<ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14157

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Indexable

> \[`K`: `symbol`\]: `object`

## Properties

### fields

> `readonly` **fields**: [`AgreementFieldRefs`](AgreementFieldRefs.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:14529

Fields of the Agreement model

## Methods

### aggregate()

> **aggregate**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAgreementAggregateType`](../type-aliases/GetAgreementAggregateType.md)\<`T`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14448

Allows you to perform aggregations operations on a Agreement.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AgreementAggregateArgs`](../type-aliases/AgreementAggregateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AgreementAggregateArgs`](../type-aliases/AgreementAggregateArgs.md)\>

Select which aggregations you would like to apply and on what fields.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetAgreementAggregateType`](../type-aliases/GetAgreementAggregateType.md)\<`T`\>\>

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

> **count**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AgreementCountAggregateOutputType ? AgreementCountAggregateOutputType\[P\] : never \} : `number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14414

Count the number of Agreements.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AgreementCountArgs`](../type-aliases/AgreementCountArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`AgreementCountArgs`](../type-aliases/AgreementCountArgs.md)\<`DefaultArgs`\>\>

Arguments to filter Agreements to count.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof AgreementCountAggregateOutputType ? AgreementCountAggregateOutputType\[P\] : never \} : `number`\>

#### Example

```ts
// Count the number of Agreements
const count = await prisma.agreement.count({
  where: {
    // ... the filter for the Agreements we want to count
  }
})
```

***

### create()

> **create**\<`T`\>(`args`): [`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14247

Create a Agreement.

#### Type Parameters

##### T

`T` *extends* [`AgreementCreateArgs`](../type-aliases/AgreementCreateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AgreementCreateArgs`](../type-aliases/AgreementCreateArgs.md)\<`ExtArgs`\>\>

Arguments to create a Agreement.

#### Returns

[`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Create one Agreement
const Agreement = await prisma.agreement.create({
  data: {
    // ... data to create a Agreement
  }
})
```

***

### createMany()

> **createMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14261

Create many Agreements.

#### Type Parameters

##### T

`T` *extends* [`AgreementCreateManyArgs`](../type-aliases/AgreementCreateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AgreementCreateManyArgs`](../type-aliases/AgreementCreateManyArgs.md)\<`ExtArgs`\>\>

Arguments to create many Agreements.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Create many Agreements
const agreement = await prisma.agreement.createMany({
  data: [
    // ... provide data here
  ]
})
```

***

### createManyAndReturn()

> **createManyAndReturn**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14285

Create many Agreements and returns the data saved in the database.

#### Type Parameters

##### T

`T` *extends* [`AgreementCreateManyAndReturnArgs`](../type-aliases/AgreementCreateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AgreementCreateManyAndReturnArgs`](../type-aliases/AgreementCreateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to create many Agreements.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Create many Agreements
const agreement = await prisma.agreement.createManyAndReturn({
  data: [
    // ... provide data here
  ]
})

// Create many Agreements and only return the `id`
const agreementWithIdOnly = await prisma.agreement.createManyAndReturn({
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

> **delete**\<`T`\>(`args`): [`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14299

Delete a Agreement.

#### Type Parameters

##### T

`T` *extends* [`AgreementDeleteArgs`](../type-aliases/AgreementDeleteArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AgreementDeleteArgs`](../type-aliases/AgreementDeleteArgs.md)\<`ExtArgs`\>\>

Arguments to delete one Agreement.

#### Returns

[`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Delete one Agreement
const Agreement = await prisma.agreement.delete({
  where: {
    // ... filter to delete one Agreement
  }
})
```

***

### deleteMany()

> **deleteMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14330

Delete zero or more Agreements.

#### Type Parameters

##### T

`T` *extends* [`AgreementDeleteManyArgs`](../type-aliases/AgreementDeleteManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AgreementDeleteManyArgs`](../type-aliases/AgreementDeleteManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter Agreements to delete.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Delete a few Agreements
const { count } = await prisma.agreement.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirst()

> **findFirst**\<`T`\>(`args?`): [`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14199

Find the first Agreement that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AgreementFindFirstArgs`](../type-aliases/AgreementFindFirstArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AgreementFindFirstArgs`](../type-aliases/AgreementFindFirstArgs.md)\<`ExtArgs`\>\>

Arguments to find a Agreement

#### Returns

[`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Agreement
const agreement = await prisma.agreement.findFirst({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirstOrThrow()

> **findFirstOrThrow**\<`T`\>(`args?`): [`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14215

Find the first Agreement that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AgreementFindFirstOrThrowArgs`](../type-aliases/AgreementFindFirstOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AgreementFindFirstOrThrowArgs`](../type-aliases/AgreementFindFirstOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a Agreement

#### Returns

[`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Agreement
const agreement = await prisma.agreement.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### findMany()

> **findMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14233

Find zero or more Agreements that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AgreementFindManyArgs`](../type-aliases/AgreementFindManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AgreementFindManyArgs`](../type-aliases/AgreementFindManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter and select certain fields only.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Get all Agreements
const agreements = await prisma.agreement.findMany()

// Get first 10 Agreements
const agreements = await prisma.agreement.findMany({ take: 10 })

// Only select the `id`
const agreementWithIdOnly = await prisma.agreement.findMany({ select: { id: true } })
```

***

### findUnique()

> **findUnique**\<`T`\>(`args`): [`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14170

Find zero or one Agreement that matches the filter.

#### Type Parameters

##### T

`T` *extends* [`AgreementFindUniqueArgs`](../type-aliases/AgreementFindUniqueArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AgreementFindUniqueArgs`](../type-aliases/AgreementFindUniqueArgs.md)\<`ExtArgs`\>\>

Arguments to find a Agreement

#### Returns

[`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Agreement
const agreement = await prisma.agreement.findUnique({
  where: {
    // ... provide filter here
  }
})
```

***

### findUniqueOrThrow()

> **findUniqueOrThrow**\<`T`\>(`args`): [`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14184

Find one Agreement that matches the filter or throw an error with `error.code='P2025'`
if no matches were found.

#### Type Parameters

##### T

`T` *extends* [`AgreementFindUniqueOrThrowArgs`](../type-aliases/AgreementFindUniqueOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AgreementFindUniqueOrThrowArgs`](../type-aliases/AgreementFindUniqueOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a Agreement

#### Returns

[`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Agreement
const agreement = await prisma.agreement.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### groupBy()

> **groupBy**\<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): `object` *extends* `InputErrors` ? [`GetAgreementGroupByPayload`](../type-aliases/GetAgreementGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14468

Group by Agreement.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AgreementGroupByArgs`](../type-aliases/AgreementGroupByArgs.md)\<`DefaultArgs`\>

##### HasSelectOrTake

`HasSelectOrTake` *extends* `0` \| `1`

##### OrderByArg

`OrderByArg` *extends* \{ `orderBy`: [`AgreementOrderByWithAggregationInput`](../type-aliases/AgreementOrderByWithAggregationInput.md) \| [`AgreementOrderByWithAggregationInput`](../type-aliases/AgreementOrderByWithAggregationInput.md)[] \| `undefined`; \} \| \{ `orderBy?`: [`AgreementOrderByWithAggregationInput`](../type-aliases/AgreementOrderByWithAggregationInput.md) \| [`AgreementOrderByWithAggregationInput`](../type-aliases/AgreementOrderByWithAggregationInput.md)[]; \}

##### OrderFields

`OrderFields` *extends* `"id"` \| `"title"` \| `"content"`

##### ByFields

`ByFields` *extends* [`AgreementScalarFieldEnum`](../type-aliases/AgreementScalarFieldEnum.md)

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

\{ \[key in string \| number \| symbol\]: key extends keyof AgreementGroupByArgs\<DefaultArgs\> ? T\[key\] : never \} & `OrderByArg` & `InputErrors`

Group by arguments.

#### Returns

`object` *extends* `InputErrors` ? [`GetAgreementGroupByPayload`](../type-aliases/GetAgreementGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

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

> **update**\<`T`\>(`args`): [`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14316

Update one Agreement.

#### Type Parameters

##### T

`T` *extends* [`AgreementUpdateArgs`](../type-aliases/AgreementUpdateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AgreementUpdateArgs`](../type-aliases/AgreementUpdateArgs.md)\<`ExtArgs`\>\>

Arguments to update one Agreement.

#### Returns

[`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update one Agreement
const agreement = await prisma.agreement.update({
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

Defined in: libs/database/src/generated/prisma/index.d.ts:14349

Update zero or more Agreements.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`AgreementUpdateManyArgs`](../type-aliases/AgreementUpdateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AgreementUpdateManyArgs`](../type-aliases/AgreementUpdateManyArgs.md)\<`ExtArgs`\>\>

Arguments to update one or more rows.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Update many Agreements
const agreement = await prisma.agreement.updateMany({
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

> **updateManyAndReturn**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14379

Update zero or more Agreements and returns the data updated in the database.

#### Type Parameters

##### T

`T` *extends* [`AgreementUpdateManyAndReturnArgs`](../type-aliases/AgreementUpdateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AgreementUpdateManyAndReturnArgs`](../type-aliases/AgreementUpdateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to update many Agreements.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Update many Agreements
const agreement = await prisma.agreement.updateManyAndReturn({
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})

// Update zero or more Agreements and only return the `id`
const agreementWithIdOnly = await prisma.agreement.updateManyAndReturn({
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

> **upsert**\<`T`\>(`args`): [`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:14398

Create or update one Agreement.

#### Type Parameters

##### T

`T` *extends* [`AgreementUpsertArgs`](../type-aliases/AgreementUpsertArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`AgreementUpsertArgs`](../type-aliases/AgreementUpsertArgs.md)\<`ExtArgs`\>\>

Arguments to update or create a Agreement.

#### Returns

[`Prisma__AgreementClient`](Prisma__AgreementClient.md)\<`GetFindResult`\<[`$AgreementPayload`](../type-aliases/$AgreementPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update or create a Agreement
const agreement = await prisma.agreement.upsert({
  create: {
    // ... data to create a Agreement
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the Agreement we want to update
  }
})
```
