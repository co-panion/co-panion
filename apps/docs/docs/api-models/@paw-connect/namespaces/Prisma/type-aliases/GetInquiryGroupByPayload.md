[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / GetInquiryGroupByPayload

# Type Alias: GetInquiryGroupByPayload\<T\>

> **GetInquiryGroupByPayload**\<`T`\> = [`PrismaPromise`](PrismaPromise.md)\<[`PickEnumerable`](PickEnumerable.md)\<[`InquiryGroupByOutputType`](InquiryGroupByOutputType.md), `T`\[`"by"`\]\> & `{ [P in keyof T & keyof InquiryGroupByOutputType]: P extends "_count" ? T[P] extends boolean ? number : GetScalarType<T[P], InquiryGroupByOutputType[P]> : GetScalarType<T[P], InquiryGroupByOutputType[P]> }`[]\>

Defined in: libs/database/src/generated/prisma/index.d.ts:19467

## Type Parameters

### T

`T` *extends* [`InquiryGroupByArgs`](InquiryGroupByArgs.md)
