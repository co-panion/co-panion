[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterFindManyArgs

# Type Alias: ShelterFindManyArgs\<ExtArgs\>

> **ShelterFindManyArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:4637

Shelter findMany

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`ShelterWhereUniqueInput`](ShelterWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:4665

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for listing Shelters.

***

### distinct?

> `optional` **distinct?**: [`ShelterScalarFieldEnum`](ShelterScalarFieldEnum.md) \| [`ShelterScalarFieldEnum`](ShelterScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:4683

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of Shelters.

***

### include?

> `optional` **include?**: [`ShelterInclude`](ShelterInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4649

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`ShelterOmit`](ShelterOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4645

Omit specific fields from the Shelter

***

### orderBy?

> `optional` **orderBy?**: [`ShelterOrderByWithRelationInput`](ShelterOrderByWithRelationInput.md) \| [`ShelterOrderByWithRelationInput`](ShelterOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:4659

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Shelters to fetch.

***

### select?

> `optional` **select?**: [`ShelterSelect`](ShelterSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4641

Select specific fields to fetch from the Shelter

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:4677

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Shelters.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:4671

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Shelters from the position of the cursor.

***

### where?

> `optional` **where?**: [`ShelterWhereInput`](ShelterWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:4653

Filter, which Shelters to fetch.
