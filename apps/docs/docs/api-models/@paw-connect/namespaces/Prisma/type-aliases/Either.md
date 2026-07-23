[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / \_\_Either

# Type Alias: \_\_Either\<O, K\>

> **\_\_Either**\<`O`, `K`\> = `Omit`\<`O`, `K`\> & `{ [P in K]: Prisma__Pick<O, P & keyof O> }`\[`K`\]

Defined in: libs/database/src/generated/prisma/index.d.ts:785

From ts-toolbelt

## Type Parameters

### O

`O` *extends* `object`

### K

`K` *extends* [`Key`](Key.md)
