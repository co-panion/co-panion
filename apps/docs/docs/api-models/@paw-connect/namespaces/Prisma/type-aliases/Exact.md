[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / Exact

# Type Alias: Exact\<A, W\>

> **Exact**\<`A`, `W`\> = `A` *extends* `unknown` ? `W` *extends* `A` ? `{ [K in keyof A]: Exact<A[K], W[K]> }` : `W` : `never` \| `A` *extends* `Narrowable` ? `A` : `never`

Defined in: libs/database/src/generated/prisma/runtime/client.d.ts:853

## Type Parameters

### A

`A`

### W

`W`
