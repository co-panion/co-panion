[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterFindFirstOrThrowArgs

# Type Alias: ShelterFindFirstOrThrowArgs\<ExtArgs\>

> **ShelterFindFirstOrThrowArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:4585

Shelter findFirstOrThrow

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`ShelterWhereUniqueInput`](ShelterWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:4613

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for Shelters.

***

### distinct?

> `optional` **distinct?**: [`ShelterScalarFieldEnum`](ShelterScalarFieldEnum.md) \| [`ShelterScalarFieldEnum`](ShelterScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:4631

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of Shelters.

***

### include?

> `optional` **include?**: [`ShelterInclude`](ShelterInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4597

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`ShelterOmit`](ShelterOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4593

Omit specific fields from the Shelter

***

### orderBy?

> `optional` **orderBy?**: [`ShelterOrderByWithRelationInput`](ShelterOrderByWithRelationInput.md) \| [`ShelterOrderByWithRelationInput`](ShelterOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:4607

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Shelters to fetch.

***

### select?

> `optional` **select?**: [`ShelterSelect`](ShelterSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4589

Select specific fields to fetch from the Shelter

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:4625

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Shelters.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:4619

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Shelters from the position of the cursor.

***

### where?

> `optional` **where?**: [`ShelterWhereInput`](ShelterWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:4601

Filter, which Shelter to fetch.
