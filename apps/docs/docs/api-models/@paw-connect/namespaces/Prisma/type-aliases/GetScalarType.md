[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetScalarType

# Type Alias: GetScalarType\<T, O\>

> **GetScalarType**\<`T`, `O`\> = `O` *extends* `object` ? `{ [P in keyof T]: P extends keyof O ? O[P] : never }` : `never`

Defined in: libs/database/src/generated/prisma/index.d.ts:922

Used by group by

## Type Parameters

### T

`T`

### O

`O`
