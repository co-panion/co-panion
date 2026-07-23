[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / ShelterFindFirstArgs

# Type Alias: ShelterFindFirstArgs\<ExtArgs\>

> **ShelterFindFirstArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:4533

Shelter findFirst

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`ShelterWhereUniqueInput`](ShelterWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:4561

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for Shelters.

***

### distinct?

> `optional` **distinct?**: [`ShelterScalarFieldEnum`](ShelterScalarFieldEnum.md) \| [`ShelterScalarFieldEnum`](ShelterScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:4579

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of Shelters.

***

### include?

> `optional` **include?**: [`ShelterInclude`](ShelterInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4545

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`ShelterOmit`](ShelterOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4541

Omit specific fields from the Shelter

***

### orderBy?

> `optional` **orderBy?**: [`ShelterOrderByWithRelationInput`](ShelterOrderByWithRelationInput.md) \| [`ShelterOrderByWithRelationInput`](ShelterOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:4555

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Shelters to fetch.

***

### select?

> `optional` **select?**: [`ShelterSelect`](ShelterSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:4537

Select specific fields to fetch from the Shelter

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:4573

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Shelters.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:4567

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Shelters from the position of the cursor.

***

### where?

> `optional` **where?**: [`ShelterWhereInput`](ShelterWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:4549

Filter, which Shelter to fetch.
