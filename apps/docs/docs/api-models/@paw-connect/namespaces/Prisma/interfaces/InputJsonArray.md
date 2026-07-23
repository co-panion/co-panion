[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / InputJsonArray

# Interface: InputJsonArray

Defined in: libs/database/src/generated/prisma/runtime/client.d.ts:1434

Matches a JSON array.
Unlike `JsonArray`, readonly arrays are assignable to this type.

## Extends

- `ReadonlyArray`\<[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`\>

## Indexable

> \[`n`: `number`\]: [`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

## Properties

### \[unscopables\]

> `readonly` **\[unscopables\]**: `object`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:105

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Index Signature

\[`key`: `number`\]: `boolean` \| `undefined`

#### \[iterator\]?

> `optional` **\[iterator\]?**: `boolean`

#### \[unscopables\]?

> `readonly` `optional` **\[unscopables\]?**: `boolean`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### concat?

> `optional` **concat?**: `boolean`

#### entries?

> `optional` **entries?**: `boolean`

#### every?

> `optional` **every?**: `boolean`

#### filter?

> `optional` **filter?**: `boolean`

#### find?

> `optional` **find?**: `boolean`

#### findIndex?

> `optional` **findIndex?**: `boolean`

#### flat?

> `optional` **flat?**: `boolean`

#### flatMap?

> `optional` **flatMap?**: `boolean`

#### forEach?

> `optional` **forEach?**: `boolean`

#### includes?

> `optional` **includes?**: `boolean`

#### indexOf?

> `optional` **indexOf?**: `boolean`

#### join?

> `optional` **join?**: `boolean`

#### keys?

> `optional` **keys?**: `boolean`

#### lastIndexOf?

> `optional` **lastIndexOf?**: `boolean`

#### length?

> `readonly` `optional` **length?**: `boolean`

Gets the length of the array. This is a number one higher than the highest element defined in an array.

#### map?

> `optional` **map?**: `boolean`

#### reduce?

> `optional` **reduce?**: `boolean`

#### reduceRight?

> `optional` **reduceRight?**: `boolean`

#### slice?

> `optional` **slice?**: `boolean`

#### some?

> `optional` **some?**: `boolean`

#### toLocaleString?

> `optional` **toLocaleString?**: `boolean`

#### toString?

> `optional` **toString?**: `boolean`

#### values?

> `optional` **values?**: `boolean`

#### Inherited from

`ReadonlyArray.[unscopables]`

***

### length

> `readonly` **length**: `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1193

Gets the length of the array. This is a number one higher than the highest element defined in an array.

#### Inherited from

`ReadonlyArray.length`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `ArrayIterator`\<[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`\>

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:112

Iterator of values in the array.

#### Returns

`ArrayIterator`\<[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`\>

#### Inherited from

`ReadonlyArray.[iterator]`

***

### concat()

#### Call Signature

> **concat**(...`items`): ([`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`)[]

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1206

Combines two or more arrays.

##### Parameters

###### items

...`ConcatArray`\<[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`\>[]

Additional items to add to the end of array1.

##### Returns

([`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`)[]

##### Inherited from

`ReadonlyArray.concat`

#### Call Signature

> **concat**(...`items`): ([`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`)[]

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1211

Combines two or more arrays.

##### Parameters

###### items

...([`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `ConcatArray`\<InputJsonValue \| null\> \| `null`)[]

Additional items to add to the end of array1.

##### Returns

([`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`)[]

##### Inherited from

`ReadonlyArray.concat`

***

### entries()

> **entries**(): `ArrayIterator`\<\[`number`, [`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`\]\>

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:117

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`ArrayIterator`\<\[`number`, [`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`\]\>

#### Inherited from

`ReadonlyArray.entries`

***

### every()

#### Call Signature

> **every**\<`S`\>(`predicate`, `thisArg?`): `this is readonly S[]`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1243

Determines whether all the members of an array satisfy the specified test.

##### Type Parameters

###### S

`S` *extends* [`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

##### Parameters

###### predicate

(`value`, `index`, `array`) => `value is S`

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`this is readonly S[]`

##### Inherited from

`ReadonlyArray.every`

#### Call Signature

> **every**(`predicate`, `thisArg?`): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1252

Determines whether all the members of an array satisfy the specified test.

##### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`boolean`

##### Inherited from

`ReadonlyArray.every`

***

### filter()

#### Call Signature

> **filter**\<`S`\>(`predicate`, `thisArg?`): `S`[]

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1279

Returns the elements of an array that meet the condition specified in a callback function.

##### Type Parameters

###### S

`S` *extends* [`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

##### Parameters

###### predicate

(`value`, `index`, `array`) => `value is S`

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

`S`[]

##### Inherited from

`ReadonlyArray.filter`

#### Call Signature

> **filter**(`predicate`, `thisArg?`): ([`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`)[]

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1285

Returns the elements of an array that meet the condition specified in a callback function.

##### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

([`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`)[]

##### Inherited from

`ReadonlyArray.filter`

***

### find()

#### Call Signature

> **find**\<`S`\>(`predicate`, `thisArg?`): `S` \| `undefined`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:350

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

##### Type Parameters

###### S

`S` *extends* [`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

##### Parameters

###### predicate

(`value`, `index`, `obj`) => `value is S`

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

###### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

##### Returns

`S` \| `undefined`

##### Inherited from

`ReadonlyArray.find`

#### Call Signature

> **find**(`predicate`, `thisArg?`): [`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null` \| `undefined`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:351

##### Parameters

###### predicate

(`value`, `index`, `obj`) => `unknown`

###### thisArg?

`any`

##### Returns

[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null` \| `undefined`

##### Inherited from

`ReadonlyArray.find`

***

### findIndex()

> **findIndex**(`predicate`, `thisArg?`): `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:362

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

##### predicate

(`value`, `index`, `obj`) => `unknown`

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

##### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

#### Returns

`number`

#### Inherited from

`ReadonlyArray.findIndex`

***

### flat()

> **flat**\<`A`, `D`\>(`this`, `depth?`): `FlatArray`\<`A`, `D`\>[]

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es2019.array.d.ts:45

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type Parameters

##### A

`A`

##### D

`D` *extends* `number` = `1`

#### Parameters

##### this

`A`

##### depth?

`D`

The maximum recursion depth

#### Returns

`FlatArray`\<`A`, `D`\>[]

#### Inherited from

`ReadonlyArray.flat`

***

### flatMap()

> **flatMap**\<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es2019.array.d.ts:34

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type Parameters

##### U

`U`

##### This

`This` = `undefined`

#### Parameters

##### callback

(`this`, `value`, `index`, `array`) => `U` \| readonly `U`[]

A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.

##### thisArg?

`This`

An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

`ReadonlyArray.flatMap`

***

### forEach()

> **forEach**(`callbackfn`, `thisArg?`): `void`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1267

Performs the specified action for each element in an array.

#### Parameters

##### callbackfn

(`value`, `index`, `array`) => `void`

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`void`

#### Inherited from

`ReadonlyArray.forEach`

***

### includes()

> **includes**(`searchElement`, `fromIndex?`): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es2016.array.include.d.ts:32

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

##### searchElement

[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

The element to search for.

##### fromIndex?

`number`

The position in this array at which to begin searching for searchElement.

#### Returns

`boolean`

#### Inherited from

`ReadonlyArray.includes`

***

### indexOf()

> **indexOf**(`searchElement`, `fromIndex?`): `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1228

Returns the index of the first occurrence of a value in an array.

#### Parameters

##### searchElement

[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

The value to locate in the array.

##### fromIndex?

`number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

#### Returns

`number`

#### Inherited from

`ReadonlyArray.indexOf`

***

### join()

> **join**(`separator?`): `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1216

Adds all the elements of an array separated by the specified separator string.

#### Parameters

##### separator?

`string`

A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.

#### Returns

`string`

#### Inherited from

`ReadonlyArray.join`

***

### keys()

> **keys**(): `ArrayIterator`\<`number`\>

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:122

Returns an iterable of keys in the array

#### Returns

`ArrayIterator`\<`number`\>

#### Inherited from

`ReadonlyArray.keys`

***

### lastIndexOf()

> **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1234

Returns the index of the last occurrence of a specified value in an array.

#### Parameters

##### searchElement

[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

The value to locate in the array.

##### fromIndex?

`number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.

#### Returns

`number`

#### Inherited from

`ReadonlyArray.lastIndexOf`

***

### map()

> **map**\<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1273

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type Parameters

##### U

`U`

#### Parameters

##### callbackfn

(`value`, `index`, `array`) => `U`

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

`ReadonlyArray.map`

***

### reduce()

#### Call Signature

> **reduce**(`callbackfn`): [`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1291

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => [`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

##### Returns

[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

##### Inherited from

`ReadonlyArray.reduce`

#### Call Signature

> **reduce**(`callbackfn`, `initialValue`): [`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1292

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => [`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

###### initialValue

[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

##### Returns

[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

##### Inherited from

`ReadonlyArray.reduce`

#### Call Signature

> **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1298

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type Parameters

###### U

`U`

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

`ReadonlyArray.reduce`

***

### reduceRight()

#### Call Signature

> **reduceRight**(`callbackfn`): [`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1304

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => [`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

##### Returns

[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

##### Inherited from

`ReadonlyArray.reduceRight`

#### Call Signature

> **reduceRight**(`callbackfn`, `initialValue`): [`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1305

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => [`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

###### initialValue

[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

##### Returns

[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`

##### Inherited from

`ReadonlyArray.reduceRight`

#### Call Signature

> **reduceRight**\<`U`\>(`callbackfn`, `initialValue`): `U`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1311

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type Parameters

###### U

`U`

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

`ReadonlyArray.reduceRight`

***

### slice()

> **slice**(`start?`, `end?`): ([`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`)[]

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1222

Returns a section of an array.

#### Parameters

##### start?

`number`

The beginning of the specified portion of the array.

##### end?

`number`

The end of the specified portion of the array. This is exclusive of the element at the index 'end'.

#### Returns

([`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`)[]

#### Inherited from

`ReadonlyArray.slice`

***

### some()

> **some**(`predicate`, `thisArg?`): `boolean`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1261

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`boolean`

#### Inherited from

`ReadonlyArray.some`

***

### toLocaleString()

#### Call Signature

> **toLocaleString**(): `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1201

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

##### Returns

`string`

##### Inherited from

`ReadonlyArray.toLocaleString`

#### Call Signature

> **toLocaleString**(`locales`, `options?`): `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:364

##### Parameters

###### locales

`string` \| `string`[]

###### options?

`NumberFormatOptions` & `DateTimeFormatOptions`

##### Returns

`string`

##### Inherited from

`ReadonlyArray.toLocaleString`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es5.d.ts:1197

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

`ReadonlyArray.toString`

***

### values()

> **values**(): `ArrayIterator`\<[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`\>

Defined in: node\_modules/.pnpm/typescript@6.0.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:127

Returns an iterable of values in the array

#### Returns

`ArrayIterator`\<[`InputJsonValue`](../type-aliases/InputJsonValue.md) \| `null`\>

#### Inherited from

`ReadonlyArray.values`
