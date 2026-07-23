[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / AnimalFindFirstOrThrowArgs

# Type Alias: AnimalFindFirstOrThrowArgs\<ExtArgs\>

> **AnimalFindFirstOrThrowArgs**\<`ExtArgs`\> = `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:6902

Animal findFirstOrThrow

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

## Properties

### cursor?

> `optional` **cursor?**: [`AnimalWhereUniqueInput`](AnimalWhereUniqueInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:6930

[Cursor Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination)

Sets the position for searching for Animals.

***

### distinct?

> `optional` **distinct?**: [`AnimalScalarFieldEnum`](AnimalScalarFieldEnum.md) \| [`AnimalScalarFieldEnum`](AnimalScalarFieldEnum.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:6948

[Distinct Docs](https://www.prisma.io/docs/concepts/components/prisma-client/distinct)

Filter by unique combinations of Animals.

***

### include?

> `optional` **include?**: [`AnimalInclude`](AnimalInclude.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:6914

Choose, which related nodes to fetch as well

***

### omit?

> `optional` **omit?**: [`AnimalOmit`](AnimalOmit.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:6910

Omit specific fields from the Animal

***

### orderBy?

> `optional` **orderBy?**: [`AnimalOrderByWithRelationInput`](AnimalOrderByWithRelationInput.md) \| [`AnimalOrderByWithRelationInput`](AnimalOrderByWithRelationInput.md)[]

Defined in: libs/database/src/generated/prisma/index.d.ts:6924

[Sorting Docs](https://www.prisma.io/docs/concepts/components/prisma-client/sorting)

Determine the order of Animals to fetch.

***

### select?

> `optional` **select?**: [`AnimalSelect`](AnimalSelect.md)\<`ExtArgs`\> \| `null`

Defined in: libs/database/src/generated/prisma/index.d.ts:6906

Select specific fields to fetch from the Animal

***

### skip?

> `optional` **skip?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:6942

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Skip the first `n` Animals.

***

### take?

> `optional` **take?**: `number`

Defined in: libs/database/src/generated/prisma/index.d.ts:6936

[Pagination Docs](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)

Take `±n` Animals from the position of the cursor.

***

### where?

> `optional` **where?**: [`AnimalWhereInput`](AnimalWhereInput.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:6918

Filter, which Animal to fetch.
