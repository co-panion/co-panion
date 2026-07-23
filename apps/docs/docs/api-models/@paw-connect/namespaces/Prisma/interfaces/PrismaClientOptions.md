[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / PrismaClientOptions

# Interface: PrismaClientOptions

Defined in: libs/database/src/generated/prisma/index.d.ts:2219

## Properties

### accelerateUrl?

> `optional` **accelerateUrl?**: `string`

Defined in: libs/database/src/generated/prisma/index.d.ts:2266

Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.

***

### adapter?

> `optional` **adapter?**: `SqlDriverAdapterFactory`

Defined in: libs/database/src/generated/prisma/index.d.ts:2262

Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`

***

### comments?

> `optional` **comments?**: `SqlCommenterPlugin`[]

Defined in: libs/database/src/generated/prisma/index.d.ts:2297

SQL commenter plugins that add metadata to SQL queries as comments.
Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/

#### Example

```
const prisma = new PrismaClient({
  adapter,
  comments: [
    traceContext(),
    queryInsights(),
  ],
})
```

***

### errorFormat?

> `optional` **errorFormat?**: [`ErrorFormat`](../type-aliases/ErrorFormat.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:2223

#### Default

```ts
"colorless"
```

***

### log?

> `optional` **log?**: ([`LogLevel`](../type-aliases/LogLevel.md) \| [`LogDefinition`](../type-aliases/LogDefinition.md))[]

Defined in: libs/database/src/generated/prisma/index.d.ts:2248

#### Example

```
// Shorthand for `emit: 'stdout'`
log: ['query', 'info', 'warn', 'error']

// Emit as events only
log: [
  { emit: 'event', level: 'query' },
  { emit: 'event', level: 'info' },
  { emit: 'event', level: 'warn' }
  { emit: 'event', level: 'error' }
]

/ Emit as events and log to stdout
og: [
 { emit: 'stdout', level: 'query' },
 { emit: 'stdout', level: 'info' },
 { emit: 'stdout', level: 'warn' }
 { emit: 'stdout', level: 'error' }

```
Read more in our [docs](https://pris.ly/d/logging).

***

### omit?

> `optional` **omit?**: [`GlobalOmitConfig`](../type-aliases/GlobalOmitConfig.md)

Defined in: libs/database/src/generated/prisma/index.d.ts:2281

Global configuration for omitting model fields by default.

#### Example

```
const prisma = new PrismaClient({
  omit: {
    user: {
      password: true
    }
  }
})
```

***

### transactionOptions?

> `optional` **transactionOptions?**: `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:2254

The default values for transactionOptions
maxWait ?= 2000
timeout ?= 5000

#### isolationLevel?

> `optional` **isolationLevel?**: [`TransactionIsolationLevel`](../type-aliases/TransactionIsolationLevel.md)

#### maxWait?

> `optional` **maxWait?**: `number`

#### timeout?

> `optional` **timeout?**: `number`
