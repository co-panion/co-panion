[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / InquiryDelegate

# Interface: InquiryDelegate\<ExtArgs, GlobalOmitOptions\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19544

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}

## Indexable

> \[`K`: `symbol`\]: `object`

## Properties

### fields

> `readonly` **fields**: [`InquiryFieldRefs`](InquiryFieldRefs.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:19916

Fields of the Inquiry model

## Methods

### aggregate()

> **aggregate**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetInquiryAggregateType`](../type-aliases/GetInquiryAggregateType.md)\<`T`\>\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19835

Allows you to perform aggregations operations on a Inquiry.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`InquiryAggregateArgs`](../type-aliases/InquiryAggregateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`Subset`](../type-aliases/Subset.md)\<`T`, [`InquiryAggregateArgs`](../type-aliases/InquiryAggregateArgs.md)\>

Select which aggregations you would like to apply and on what fields.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`GetInquiryAggregateType`](../type-aliases/GetInquiryAggregateType.md)\<`T`\>\>

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

> **count**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof InquiryCountAggregateOutputType ? InquiryCountAggregateOutputType\[P\] : never \} : `number`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19801

Count the number of Inquiries.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`InquiryCountArgs`](../type-aliases/InquiryCountArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`Subset`](../type-aliases/Subset.md)\<`T`, [`InquiryCountArgs`](../type-aliases/InquiryCountArgs.md)\<`DefaultArgs`\>\>

Arguments to filter Inquiries to count.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`T` *extends* `Record_2`\<`"select"`, `any`\> ? `T`\[`"select"`\] *extends* `true` ? `number` : \{ \[P in string \| number \| symbol\]: P extends keyof InquiryCountAggregateOutputType ? InquiryCountAggregateOutputType\[P\] : never \} : `number`\>

#### Example

```ts
// Count the number of Inquiries
const count = await prisma.inquiry.count({
  where: {
    // ... the filter for the Inquiries we want to count
  }
})
```

***

### create()

> **create**\<`T`\>(`args`): [`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19634

Create a Inquiry.

#### Type Parameters

##### T

`T` *extends* [`InquiryCreateArgs`](../type-aliases/InquiryCreateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`InquiryCreateArgs`](../type-aliases/InquiryCreateArgs.md)\<`ExtArgs`\>\>

Arguments to create a Inquiry.

#### Returns

[`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Create one Inquiry
const Inquiry = await prisma.inquiry.create({
  data: {
    // ... data to create a Inquiry
  }
})
```

***

### createMany()

> **createMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19648

Create many Inquiries.

#### Type Parameters

##### T

`T` *extends* [`InquiryCreateManyArgs`](../type-aliases/InquiryCreateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`InquiryCreateManyArgs`](../type-aliases/InquiryCreateManyArgs.md)\<`ExtArgs`\>\>

Arguments to create many Inquiries.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Create many Inquiries
const inquiry = await prisma.inquiry.createMany({
  data: [
    // ... provide data here
  ]
})
```

***

### createManyAndReturn()

> **createManyAndReturn**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19672

Create many Inquiries and returns the data saved in the database.

#### Type Parameters

##### T

`T` *extends* [`InquiryCreateManyAndReturnArgs`](../type-aliases/InquiryCreateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`InquiryCreateManyAndReturnArgs`](../type-aliases/InquiryCreateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to create many Inquiries.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Create many Inquiries
const inquiry = await prisma.inquiry.createManyAndReturn({
  data: [
    // ... provide data here
  ]
})

// Create many Inquiries and only return the `id`
const inquiryWithIdOnly = await prisma.inquiry.createManyAndReturn({
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

> **delete**\<`T`\>(`args`): [`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19686

Delete a Inquiry.

#### Type Parameters

##### T

`T` *extends* [`InquiryDeleteArgs`](../type-aliases/InquiryDeleteArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`InquiryDeleteArgs`](../type-aliases/InquiryDeleteArgs.md)\<`ExtArgs`\>\>

Arguments to delete one Inquiry.

#### Returns

[`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Delete one Inquiry
const Inquiry = await prisma.inquiry.delete({
  where: {
    // ... filter to delete one Inquiry
  }
})
```

***

### deleteMany()

> **deleteMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19717

Delete zero or more Inquiries.

#### Type Parameters

##### T

`T` *extends* [`InquiryDeleteManyArgs`](../type-aliases/InquiryDeleteManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`InquiryDeleteManyArgs`](../type-aliases/InquiryDeleteManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter Inquiries to delete.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Delete a few Inquiries
const { count } = await prisma.inquiry.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirst()

> **findFirst**\<`T`\>(`args?`): [`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19586

Find the first Inquiry that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`InquiryFindFirstArgs`](../type-aliases/InquiryFindFirstArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`InquiryFindFirstArgs`](../type-aliases/InquiryFindFirstArgs.md)\<`ExtArgs`\>\>

Arguments to find a Inquiry

#### Returns

[`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Inquiry
const inquiry = await prisma.inquiry.findFirst({
  where: {
    // ... provide filter here
  }
})
```

***

### findFirstOrThrow()

> **findFirstOrThrow**\<`T`\>(`args?`): [`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19602

Find the first Inquiry that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`InquiryFindFirstOrThrowArgs`](../type-aliases/InquiryFindFirstOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`InquiryFindFirstOrThrowArgs`](../type-aliases/InquiryFindFirstOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a Inquiry

#### Returns

[`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Inquiry
const inquiry = await prisma.inquiry.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### findMany()

> **findMany**\<`T`\>(`args?`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19620

Find zero or more Inquiries that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`InquiryFindManyArgs`](../type-aliases/InquiryFindManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args?

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`InquiryFindManyArgs`](../type-aliases/InquiryFindManyArgs.md)\<`ExtArgs`\>\>

Arguments to filter and select certain fields only.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Get all Inquiries
const inquiries = await prisma.inquiry.findMany()

// Get first 10 Inquiries
const inquiries = await prisma.inquiry.findMany({ take: 10 })

// Only select the `id`
const inquiryWithIdOnly = await prisma.inquiry.findMany({ select: { id: true } })
```

***

### findUnique()

> **findUnique**\<`T`\>(`args`): [`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19557

Find zero or one Inquiry that matches the filter.

#### Type Parameters

##### T

`T` *extends* [`InquiryFindUniqueArgs`](../type-aliases/InquiryFindUniqueArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`InquiryFindUniqueArgs`](../type-aliases/InquiryFindUniqueArgs.md)\<`ExtArgs`\>\>

Arguments to find a Inquiry

#### Returns

[`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\> \| `null`, `null`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Inquiry
const inquiry = await prisma.inquiry.findUnique({
  where: {
    // ... provide filter here
  }
})
```

***

### findUniqueOrThrow()

> **findUniqueOrThrow**\<`T`\>(`args`): [`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19571

Find one Inquiry that matches the filter or throw an error with `error.code='P2025'`
if no matches were found.

#### Type Parameters

##### T

`T` *extends* [`InquiryFindUniqueOrThrowArgs`](../type-aliases/InquiryFindUniqueOrThrowArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`InquiryFindUniqueOrThrowArgs`](../type-aliases/InquiryFindUniqueOrThrowArgs.md)\<`ExtArgs`\>\>

Arguments to find a Inquiry

#### Returns

[`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Get one Inquiry
const inquiry = await prisma.inquiry.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

***

### groupBy()

> **groupBy**\<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): `object` *extends* `InputErrors` ? [`GetInquiryGroupByPayload`](../type-aliases/GetInquiryGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19855

Group by Inquiry.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`InquiryGroupByArgs`](../type-aliases/InquiryGroupByArgs.md)\<`DefaultArgs`\>

##### HasSelectOrTake

`HasSelectOrTake` *extends* `0` \| `1`

##### OrderByArg

`OrderByArg` *extends* \{ `orderBy`: [`InquiryOrderByWithAggregationInput`](../type-aliases/InquiryOrderByWithAggregationInput.md) \| [`InquiryOrderByWithAggregationInput`](../type-aliases/InquiryOrderByWithAggregationInput.md)[] \| `undefined`; \} \| \{ `orderBy?`: [`InquiryOrderByWithAggregationInput`](../type-aliases/InquiryOrderByWithAggregationInput.md) \| [`InquiryOrderByWithAggregationInput`](../type-aliases/InquiryOrderByWithAggregationInput.md)[]; \}

##### OrderFields

`OrderFields` *extends* `"id"` \| `"userId"` \| `"title"` \| `"content"`

##### ByFields

`ByFields` *extends* [`InquiryScalarFieldEnum`](../type-aliases/InquiryScalarFieldEnum.md)

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

\{ \[key in string \| number \| symbol\]: key extends keyof InquiryGroupByArgs\<DefaultArgs\> ? T\[key\] : never \} & `OrderByArg` & `InputErrors`

Group by arguments.

#### Returns

`object` *extends* `InputErrors` ? [`GetInquiryGroupByPayload`](../type-aliases/GetInquiryGroupByPayload.md)\<`T`\> : [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`InputErrors`\>

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

> **update**\<`T`\>(`args`): [`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19703

Update one Inquiry.

#### Type Parameters

##### T

`T` *extends* [`InquiryUpdateArgs`](../type-aliases/InquiryUpdateArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`InquiryUpdateArgs`](../type-aliases/InquiryUpdateArgs.md)\<`ExtArgs`\>\>

Arguments to update one Inquiry.

#### Returns

[`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update one Inquiry
const inquiry = await prisma.inquiry.update({
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

Defined in: libs/database/src/generated/prisma/index.d.ts:19736

Update zero or more Inquiries.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type Parameters

##### T

`T` *extends* [`InquiryUpdateManyArgs`](../type-aliases/InquiryUpdateManyArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`InquiryUpdateManyArgs`](../type-aliases/InquiryUpdateManyArgs.md)\<`ExtArgs`\>\>

Arguments to update one or more rows.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<[`BatchPayload`](../type-aliases/BatchPayload.md)\>

#### Example

```ts
// Update many Inquiries
const inquiry = await prisma.inquiry.updateMany({
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

> **updateManyAndReturn**\<`T`\>(`args`): [`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19766

Update zero or more Inquiries and returns the data updated in the database.

#### Type Parameters

##### T

`T` *extends* [`InquiryUpdateManyAndReturnArgs`](../type-aliases/InquiryUpdateManyAndReturnArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`InquiryUpdateManyAndReturnArgs`](../type-aliases/InquiryUpdateManyAndReturnArgs.md)\<`ExtArgs`\>\>

Arguments to update many Inquiries.

#### Returns

[`PrismaPromise`](../type-aliases/PrismaPromise.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>[]\>

#### Example

```ts
// Update many Inquiries
const inquiry = await prisma.inquiry.updateManyAndReturn({
  where: {
    // ... provide filter here
  },
  data: [
    // ... provide data here
  ]
})

// Update zero or more Inquiries and only return the `id`
const inquiryWithIdOnly = await prisma.inquiry.updateManyAndReturn({
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

> **upsert**\<`T`\>(`args`): [`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19785

Create or update one Inquiry.

#### Type Parameters

##### T

`T` *extends* [`InquiryUpsertArgs`](../type-aliases/InquiryUpsertArgs.md)\<`DefaultArgs`\>

#### Parameters

##### args

[`SelectSubset`](../type-aliases/SelectSubset.md)\<`T`, [`InquiryUpsertArgs`](../type-aliases/InquiryUpsertArgs.md)\<`ExtArgs`\>\>

Arguments to update or create a Inquiry.

#### Returns

[`Prisma__InquiryClient`](Prisma__InquiryClient.md)\<`GetFindResult`\<[`$InquiryPayload`](../type-aliases/$InquiryPayload.md)\<`ExtArgs`\>, `T`, `GlobalOmitOptions`\>, `never`, `ExtArgs`, `GlobalOmitOptions`\>

#### Example

```ts
// Update or create a Inquiry
const inquiry = await prisma.inquiry.upsert({
  create: {
    // ... data to create a Inquiry
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the Inquiry we want to update
  }
})
```
