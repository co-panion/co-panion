[**@co-panion/database**](../../../../README.md)

***

[@co-panion/database](../../../../README.md) / [Prisma](../README.md) / TypeMap

# Type Alias: TypeMap\<ExtArgs, GlobalOmitOptions\>

> **TypeMap**\<`ExtArgs`, `GlobalOmitOptions`\> = `object` & `object`

Defined in: libs/database/src/generated/prisma/index.d.ts:999

## Type Declaration

### globalOmitOptions

> **globalOmitOptions**: `object`

#### globalOmitOptions.omit

> **omit**: `GlobalOmitOptions`

### meta

> **meta**: `object`

#### meta.modelProps

> **modelProps**: `"user"` \| `"shelter"` \| `"shelterImage"` \| `"animal"` \| `"animalSpecies"` \| `"animalBreed"` \| `"animalDetail"` \| `"animalImage"` \| `"adoption"` \| `"adoptionDetail"` \| `"agreement"` \| `"userAgreement"` \| `"adoptionAgreement"` \| `"petPost"` \| `"petPostImage"` \| `"inquiry"`

#### meta.txIsolationLevel

> **txIsolationLevel**: [`TransactionIsolationLevel`](TransactionIsolationLevel.md)

### model

> **model**: `object`

#### model.Adoption

> **Adoption**: `object`

#### model.Adoption.fields

> **fields**: [`AdoptionFieldRefs`](../interfaces/AdoptionFieldRefs.md)

#### model.Adoption.operations

> **operations**: `object`

#### model.Adoption.operations.aggregate

> **aggregate**: `object`

#### model.Adoption.operations.aggregate.args

> **args**: [`AdoptionAggregateArgs`](AdoptionAggregateArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregateAdoption`](AggregateAdoption.md)\>

#### model.Adoption.operations.count

> **count**: `object`

#### model.Adoption.operations.count.args

> **args**: [`AdoptionCountArgs`](AdoptionCountArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.count.result

> **result**: `$Utils.Optional`\<[`AdoptionCountAggregateOutputType`](AdoptionCountAggregateOutputType.md)\> \| `number`

#### model.Adoption.operations.create

> **create**: `object`

#### model.Adoption.operations.create.args

> **args**: [`AdoptionCreateArgs`](AdoptionCreateArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionPayload`]($AdoptionPayload.md)\>

#### model.Adoption.operations.createMany

> **createMany**: `object`

#### model.Adoption.operations.createMany.args

> **args**: [`AdoptionCreateManyArgs`](AdoptionCreateManyArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.Adoption.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.Adoption.operations.createManyAndReturn.args

> **args**: [`AdoptionCreateManyAndReturnArgs`](AdoptionCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionPayload`]($AdoptionPayload.md)\>[]

#### model.Adoption.operations.delete

> **delete**: `object`

#### model.Adoption.operations.delete.args

> **args**: [`AdoptionDeleteArgs`](AdoptionDeleteArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionPayload`]($AdoptionPayload.md)\>

#### model.Adoption.operations.deleteMany

> **deleteMany**: `object`

#### model.Adoption.operations.deleteMany.args

> **args**: [`AdoptionDeleteManyArgs`](AdoptionDeleteManyArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.Adoption.operations.findFirst

> **findFirst**: `object`

#### model.Adoption.operations.findFirst.args

> **args**: [`AdoptionFindFirstArgs`](AdoptionFindFirstArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionPayload`]($AdoptionPayload.md)\> \| `null`

#### model.Adoption.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.Adoption.operations.findFirstOrThrow.args

> **args**: [`AdoptionFindFirstOrThrowArgs`](AdoptionFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionPayload`]($AdoptionPayload.md)\>

#### model.Adoption.operations.findMany

> **findMany**: `object`

#### model.Adoption.operations.findMany.args

> **args**: [`AdoptionFindManyArgs`](AdoptionFindManyArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionPayload`]($AdoptionPayload.md)\>[]

#### model.Adoption.operations.findUnique

> **findUnique**: `object`

#### model.Adoption.operations.findUnique.args

> **args**: [`AdoptionFindUniqueArgs`](AdoptionFindUniqueArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionPayload`]($AdoptionPayload.md)\> \| `null`

#### model.Adoption.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.Adoption.operations.findUniqueOrThrow.args

> **args**: [`AdoptionFindUniqueOrThrowArgs`](AdoptionFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionPayload`]($AdoptionPayload.md)\>

#### model.Adoption.operations.groupBy

> **groupBy**: `object`

#### model.Adoption.operations.groupBy.args

> **args**: [`AdoptionGroupByArgs`](AdoptionGroupByArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`AdoptionGroupByOutputType`](AdoptionGroupByOutputType.md)\>[]

#### model.Adoption.operations.update

> **update**: `object`

#### model.Adoption.operations.update.args

> **args**: [`AdoptionUpdateArgs`](AdoptionUpdateArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionPayload`]($AdoptionPayload.md)\>

#### model.Adoption.operations.updateMany

> **updateMany**: `object`

#### model.Adoption.operations.updateMany.args

> **args**: [`AdoptionUpdateManyArgs`](AdoptionUpdateManyArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.Adoption.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.Adoption.operations.updateManyAndReturn.args

> **args**: [`AdoptionUpdateManyAndReturnArgs`](AdoptionUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionPayload`]($AdoptionPayload.md)\>[]

#### model.Adoption.operations.upsert

> **upsert**: `object`

#### model.Adoption.operations.upsert.args

> **args**: [`AdoptionUpsertArgs`](AdoptionUpsertArgs.md)\<`ExtArgs`\>

#### model.Adoption.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionPayload`]($AdoptionPayload.md)\>

#### model.Adoption.payload

> **payload**: [`$AdoptionPayload`]($AdoptionPayload.md)\<`ExtArgs`\>

#### model.AdoptionAgreement

> **AdoptionAgreement**: `object`

#### model.AdoptionAgreement.fields

> **fields**: [`AdoptionAgreementFieldRefs`](../interfaces/AdoptionAgreementFieldRefs.md)

#### model.AdoptionAgreement.operations

> **operations**: `object`

#### model.AdoptionAgreement.operations.aggregate

> **aggregate**: `object`

#### model.AdoptionAgreement.operations.aggregate.args

> **args**: [`AdoptionAgreementAggregateArgs`](AdoptionAgreementAggregateArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregateAdoptionAgreement`](AggregateAdoptionAgreement.md)\>

#### model.AdoptionAgreement.operations.count

> **count**: `object`

#### model.AdoptionAgreement.operations.count.args

> **args**: [`AdoptionAgreementCountArgs`](AdoptionAgreementCountArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.count.result

> **result**: `$Utils.Optional`\<[`AdoptionAgreementCountAggregateOutputType`](AdoptionAgreementCountAggregateOutputType.md)\> \| `number`

#### model.AdoptionAgreement.operations.create

> **create**: `object`

#### model.AdoptionAgreement.operations.create.args

> **args**: [`AdoptionAgreementCreateArgs`](AdoptionAgreementCreateArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionAgreementPayload`]($AdoptionAgreementPayload.md)\>

#### model.AdoptionAgreement.operations.createMany

> **createMany**: `object`

#### model.AdoptionAgreement.operations.createMany.args

> **args**: [`AdoptionAgreementCreateManyArgs`](AdoptionAgreementCreateManyArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AdoptionAgreement.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.AdoptionAgreement.operations.createManyAndReturn.args

> **args**: [`AdoptionAgreementCreateManyAndReturnArgs`](AdoptionAgreementCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionAgreementPayload`]($AdoptionAgreementPayload.md)\>[]

#### model.AdoptionAgreement.operations.delete

> **delete**: `object`

#### model.AdoptionAgreement.operations.delete.args

> **args**: [`AdoptionAgreementDeleteArgs`](AdoptionAgreementDeleteArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionAgreementPayload`]($AdoptionAgreementPayload.md)\>

#### model.AdoptionAgreement.operations.deleteMany

> **deleteMany**: `object`

#### model.AdoptionAgreement.operations.deleteMany.args

> **args**: [`AdoptionAgreementDeleteManyArgs`](AdoptionAgreementDeleteManyArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AdoptionAgreement.operations.findFirst

> **findFirst**: `object`

#### model.AdoptionAgreement.operations.findFirst.args

> **args**: [`AdoptionAgreementFindFirstArgs`](AdoptionAgreementFindFirstArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionAgreementPayload`]($AdoptionAgreementPayload.md)\> \| `null`

#### model.AdoptionAgreement.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.AdoptionAgreement.operations.findFirstOrThrow.args

> **args**: [`AdoptionAgreementFindFirstOrThrowArgs`](AdoptionAgreementFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionAgreementPayload`]($AdoptionAgreementPayload.md)\>

#### model.AdoptionAgreement.operations.findMany

> **findMany**: `object`

#### model.AdoptionAgreement.operations.findMany.args

> **args**: [`AdoptionAgreementFindManyArgs`](AdoptionAgreementFindManyArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionAgreementPayload`]($AdoptionAgreementPayload.md)\>[]

#### model.AdoptionAgreement.operations.findUnique

> **findUnique**: `object`

#### model.AdoptionAgreement.operations.findUnique.args

> **args**: [`AdoptionAgreementFindUniqueArgs`](AdoptionAgreementFindUniqueArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionAgreementPayload`]($AdoptionAgreementPayload.md)\> \| `null`

#### model.AdoptionAgreement.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.AdoptionAgreement.operations.findUniqueOrThrow.args

> **args**: [`AdoptionAgreementFindUniqueOrThrowArgs`](AdoptionAgreementFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionAgreementPayload`]($AdoptionAgreementPayload.md)\>

#### model.AdoptionAgreement.operations.groupBy

> **groupBy**: `object`

#### model.AdoptionAgreement.operations.groupBy.args

> **args**: [`AdoptionAgreementGroupByArgs`](AdoptionAgreementGroupByArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`AdoptionAgreementGroupByOutputType`](AdoptionAgreementGroupByOutputType.md)\>[]

#### model.AdoptionAgreement.operations.update

> **update**: `object`

#### model.AdoptionAgreement.operations.update.args

> **args**: [`AdoptionAgreementUpdateArgs`](AdoptionAgreementUpdateArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionAgreementPayload`]($AdoptionAgreementPayload.md)\>

#### model.AdoptionAgreement.operations.updateMany

> **updateMany**: `object`

#### model.AdoptionAgreement.operations.updateMany.args

> **args**: [`AdoptionAgreementUpdateManyArgs`](AdoptionAgreementUpdateManyArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AdoptionAgreement.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.AdoptionAgreement.operations.updateManyAndReturn.args

> **args**: [`AdoptionAgreementUpdateManyAndReturnArgs`](AdoptionAgreementUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionAgreementPayload`]($AdoptionAgreementPayload.md)\>[]

#### model.AdoptionAgreement.operations.upsert

> **upsert**: `object`

#### model.AdoptionAgreement.operations.upsert.args

> **args**: [`AdoptionAgreementUpsertArgs`](AdoptionAgreementUpsertArgs.md)\<`ExtArgs`\>

#### model.AdoptionAgreement.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionAgreementPayload`]($AdoptionAgreementPayload.md)\>

#### model.AdoptionAgreement.payload

> **payload**: [`$AdoptionAgreementPayload`]($AdoptionAgreementPayload.md)\<`ExtArgs`\>

#### model.AdoptionDetail

> **AdoptionDetail**: `object`

#### model.AdoptionDetail.fields

> **fields**: [`AdoptionDetailFieldRefs`](../interfaces/AdoptionDetailFieldRefs.md)

#### model.AdoptionDetail.operations

> **operations**: `object`

#### model.AdoptionDetail.operations.aggregate

> **aggregate**: `object`

#### model.AdoptionDetail.operations.aggregate.args

> **args**: [`AdoptionDetailAggregateArgs`](AdoptionDetailAggregateArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregateAdoptionDetail`](AggregateAdoptionDetail.md)\>

#### model.AdoptionDetail.operations.count

> **count**: `object`

#### model.AdoptionDetail.operations.count.args

> **args**: [`AdoptionDetailCountArgs`](AdoptionDetailCountArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.count.result

> **result**: `$Utils.Optional`\<[`AdoptionDetailCountAggregateOutputType`](AdoptionDetailCountAggregateOutputType.md)\> \| `number`

#### model.AdoptionDetail.operations.create

> **create**: `object`

#### model.AdoptionDetail.operations.create.args

> **args**: [`AdoptionDetailCreateArgs`](AdoptionDetailCreateArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionDetailPayload`]($AdoptionDetailPayload.md)\>

#### model.AdoptionDetail.operations.createMany

> **createMany**: `object`

#### model.AdoptionDetail.operations.createMany.args

> **args**: [`AdoptionDetailCreateManyArgs`](AdoptionDetailCreateManyArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AdoptionDetail.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.AdoptionDetail.operations.createManyAndReturn.args

> **args**: [`AdoptionDetailCreateManyAndReturnArgs`](AdoptionDetailCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionDetailPayload`]($AdoptionDetailPayload.md)\>[]

#### model.AdoptionDetail.operations.delete

> **delete**: `object`

#### model.AdoptionDetail.operations.delete.args

> **args**: [`AdoptionDetailDeleteArgs`](AdoptionDetailDeleteArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionDetailPayload`]($AdoptionDetailPayload.md)\>

#### model.AdoptionDetail.operations.deleteMany

> **deleteMany**: `object`

#### model.AdoptionDetail.operations.deleteMany.args

> **args**: [`AdoptionDetailDeleteManyArgs`](AdoptionDetailDeleteManyArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AdoptionDetail.operations.findFirst

> **findFirst**: `object`

#### model.AdoptionDetail.operations.findFirst.args

> **args**: [`AdoptionDetailFindFirstArgs`](AdoptionDetailFindFirstArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionDetailPayload`]($AdoptionDetailPayload.md)\> \| `null`

#### model.AdoptionDetail.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.AdoptionDetail.operations.findFirstOrThrow.args

> **args**: [`AdoptionDetailFindFirstOrThrowArgs`](AdoptionDetailFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionDetailPayload`]($AdoptionDetailPayload.md)\>

#### model.AdoptionDetail.operations.findMany

> **findMany**: `object`

#### model.AdoptionDetail.operations.findMany.args

> **args**: [`AdoptionDetailFindManyArgs`](AdoptionDetailFindManyArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionDetailPayload`]($AdoptionDetailPayload.md)\>[]

#### model.AdoptionDetail.operations.findUnique

> **findUnique**: `object`

#### model.AdoptionDetail.operations.findUnique.args

> **args**: [`AdoptionDetailFindUniqueArgs`](AdoptionDetailFindUniqueArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionDetailPayload`]($AdoptionDetailPayload.md)\> \| `null`

#### model.AdoptionDetail.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.AdoptionDetail.operations.findUniqueOrThrow.args

> **args**: [`AdoptionDetailFindUniqueOrThrowArgs`](AdoptionDetailFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionDetailPayload`]($AdoptionDetailPayload.md)\>

#### model.AdoptionDetail.operations.groupBy

> **groupBy**: `object`

#### model.AdoptionDetail.operations.groupBy.args

> **args**: [`AdoptionDetailGroupByArgs`](AdoptionDetailGroupByArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`AdoptionDetailGroupByOutputType`](AdoptionDetailGroupByOutputType.md)\>[]

#### model.AdoptionDetail.operations.update

> **update**: `object`

#### model.AdoptionDetail.operations.update.args

> **args**: [`AdoptionDetailUpdateArgs`](AdoptionDetailUpdateArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionDetailPayload`]($AdoptionDetailPayload.md)\>

#### model.AdoptionDetail.operations.updateMany

> **updateMany**: `object`

#### model.AdoptionDetail.operations.updateMany.args

> **args**: [`AdoptionDetailUpdateManyArgs`](AdoptionDetailUpdateManyArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AdoptionDetail.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.AdoptionDetail.operations.updateManyAndReturn.args

> **args**: [`AdoptionDetailUpdateManyAndReturnArgs`](AdoptionDetailUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionDetailPayload`]($AdoptionDetailPayload.md)\>[]

#### model.AdoptionDetail.operations.upsert

> **upsert**: `object`

#### model.AdoptionDetail.operations.upsert.args

> **args**: [`AdoptionDetailUpsertArgs`](AdoptionDetailUpsertArgs.md)\<`ExtArgs`\>

#### model.AdoptionDetail.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$AdoptionDetailPayload`]($AdoptionDetailPayload.md)\>

#### model.AdoptionDetail.payload

> **payload**: [`$AdoptionDetailPayload`]($AdoptionDetailPayload.md)\<`ExtArgs`\>

#### model.Agreement

> **Agreement**: `object`

#### model.Agreement.fields

> **fields**: [`AgreementFieldRefs`](../interfaces/AgreementFieldRefs.md)

#### model.Agreement.operations

> **operations**: `object`

#### model.Agreement.operations.aggregate

> **aggregate**: `object`

#### model.Agreement.operations.aggregate.args

> **args**: [`AgreementAggregateArgs`](AgreementAggregateArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregateAgreement`](AggregateAgreement.md)\>

#### model.Agreement.operations.count

> **count**: `object`

#### model.Agreement.operations.count.args

> **args**: [`AgreementCountArgs`](AgreementCountArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.count.result

> **result**: `$Utils.Optional`\<[`AgreementCountAggregateOutputType`](AgreementCountAggregateOutputType.md)\> \| `number`

#### model.Agreement.operations.create

> **create**: `object`

#### model.Agreement.operations.create.args

> **args**: [`AgreementCreateArgs`](AgreementCreateArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$AgreementPayload`]($AgreementPayload.md)\>

#### model.Agreement.operations.createMany

> **createMany**: `object`

#### model.Agreement.operations.createMany.args

> **args**: [`AgreementCreateManyArgs`](AgreementCreateManyArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.Agreement.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.Agreement.operations.createManyAndReturn.args

> **args**: [`AgreementCreateManyAndReturnArgs`](AgreementCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AgreementPayload`]($AgreementPayload.md)\>[]

#### model.Agreement.operations.delete

> **delete**: `object`

#### model.Agreement.operations.delete.args

> **args**: [`AgreementDeleteArgs`](AgreementDeleteArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$AgreementPayload`]($AgreementPayload.md)\>

#### model.Agreement.operations.deleteMany

> **deleteMany**: `object`

#### model.Agreement.operations.deleteMany.args

> **args**: [`AgreementDeleteManyArgs`](AgreementDeleteManyArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.Agreement.operations.findFirst

> **findFirst**: `object`

#### model.Agreement.operations.findFirst.args

> **args**: [`AgreementFindFirstArgs`](AgreementFindFirstArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$AgreementPayload`]($AgreementPayload.md)\> \| `null`

#### model.Agreement.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.Agreement.operations.findFirstOrThrow.args

> **args**: [`AgreementFindFirstOrThrowArgs`](AgreementFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AgreementPayload`]($AgreementPayload.md)\>

#### model.Agreement.operations.findMany

> **findMany**: `object`

#### model.Agreement.operations.findMany.args

> **args**: [`AgreementFindManyArgs`](AgreementFindManyArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$AgreementPayload`]($AgreementPayload.md)\>[]

#### model.Agreement.operations.findUnique

> **findUnique**: `object`

#### model.Agreement.operations.findUnique.args

> **args**: [`AgreementFindUniqueArgs`](AgreementFindUniqueArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$AgreementPayload`]($AgreementPayload.md)\> \| `null`

#### model.Agreement.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.Agreement.operations.findUniqueOrThrow.args

> **args**: [`AgreementFindUniqueOrThrowArgs`](AgreementFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AgreementPayload`]($AgreementPayload.md)\>

#### model.Agreement.operations.groupBy

> **groupBy**: `object`

#### model.Agreement.operations.groupBy.args

> **args**: [`AgreementGroupByArgs`](AgreementGroupByArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`AgreementGroupByOutputType`](AgreementGroupByOutputType.md)\>[]

#### model.Agreement.operations.update

> **update**: `object`

#### model.Agreement.operations.update.args

> **args**: [`AgreementUpdateArgs`](AgreementUpdateArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$AgreementPayload`]($AgreementPayload.md)\>

#### model.Agreement.operations.updateMany

> **updateMany**: `object`

#### model.Agreement.operations.updateMany.args

> **args**: [`AgreementUpdateManyArgs`](AgreementUpdateManyArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.Agreement.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.Agreement.operations.updateManyAndReturn.args

> **args**: [`AgreementUpdateManyAndReturnArgs`](AgreementUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AgreementPayload`]($AgreementPayload.md)\>[]

#### model.Agreement.operations.upsert

> **upsert**: `object`

#### model.Agreement.operations.upsert.args

> **args**: [`AgreementUpsertArgs`](AgreementUpsertArgs.md)\<`ExtArgs`\>

#### model.Agreement.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$AgreementPayload`]($AgreementPayload.md)\>

#### model.Agreement.payload

> **payload**: [`$AgreementPayload`]($AgreementPayload.md)\<`ExtArgs`\>

#### model.Animal

> **Animal**: `object`

#### model.Animal.fields

> **fields**: [`AnimalFieldRefs`](../interfaces/AnimalFieldRefs.md)

#### model.Animal.operations

> **operations**: `object`

#### model.Animal.operations.aggregate

> **aggregate**: `object`

#### model.Animal.operations.aggregate.args

> **args**: [`AnimalAggregateArgs`](AnimalAggregateArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregateAnimal`](AggregateAnimal.md)\>

#### model.Animal.operations.count

> **count**: `object`

#### model.Animal.operations.count.args

> **args**: [`AnimalCountArgs`](AnimalCountArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.count.result

> **result**: `$Utils.Optional`\<[`AnimalCountAggregateOutputType`](AnimalCountAggregateOutputType.md)\> \| `number`

#### model.Animal.operations.create

> **create**: `object`

#### model.Animal.operations.create.args

> **args**: [`AnimalCreateArgs`](AnimalCreateArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalPayload`]($AnimalPayload.md)\>

#### model.Animal.operations.createMany

> **createMany**: `object`

#### model.Animal.operations.createMany.args

> **args**: [`AnimalCreateManyArgs`](AnimalCreateManyArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.Animal.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.Animal.operations.createManyAndReturn.args

> **args**: [`AnimalCreateManyAndReturnArgs`](AnimalCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalPayload`]($AnimalPayload.md)\>[]

#### model.Animal.operations.delete

> **delete**: `object`

#### model.Animal.operations.delete.args

> **args**: [`AnimalDeleteArgs`](AnimalDeleteArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalPayload`]($AnimalPayload.md)\>

#### model.Animal.operations.deleteMany

> **deleteMany**: `object`

#### model.Animal.operations.deleteMany.args

> **args**: [`AnimalDeleteManyArgs`](AnimalDeleteManyArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.Animal.operations.findFirst

> **findFirst**: `object`

#### model.Animal.operations.findFirst.args

> **args**: [`AnimalFindFirstArgs`](AnimalFindFirstArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalPayload`]($AnimalPayload.md)\> \| `null`

#### model.Animal.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.Animal.operations.findFirstOrThrow.args

> **args**: [`AnimalFindFirstOrThrowArgs`](AnimalFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalPayload`]($AnimalPayload.md)\>

#### model.Animal.operations.findMany

> **findMany**: `object`

#### model.Animal.operations.findMany.args

> **args**: [`AnimalFindManyArgs`](AnimalFindManyArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalPayload`]($AnimalPayload.md)\>[]

#### model.Animal.operations.findUnique

> **findUnique**: `object`

#### model.Animal.operations.findUnique.args

> **args**: [`AnimalFindUniqueArgs`](AnimalFindUniqueArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalPayload`]($AnimalPayload.md)\> \| `null`

#### model.Animal.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.Animal.operations.findUniqueOrThrow.args

> **args**: [`AnimalFindUniqueOrThrowArgs`](AnimalFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalPayload`]($AnimalPayload.md)\>

#### model.Animal.operations.groupBy

> **groupBy**: `object`

#### model.Animal.operations.groupBy.args

> **args**: [`AnimalGroupByArgs`](AnimalGroupByArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`AnimalGroupByOutputType`](AnimalGroupByOutputType.md)\>[]

#### model.Animal.operations.update

> **update**: `object`

#### model.Animal.operations.update.args

> **args**: [`AnimalUpdateArgs`](AnimalUpdateArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalPayload`]($AnimalPayload.md)\>

#### model.Animal.operations.updateMany

> **updateMany**: `object`

#### model.Animal.operations.updateMany.args

> **args**: [`AnimalUpdateManyArgs`](AnimalUpdateManyArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.Animal.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.Animal.operations.updateManyAndReturn.args

> **args**: [`AnimalUpdateManyAndReturnArgs`](AnimalUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalPayload`]($AnimalPayload.md)\>[]

#### model.Animal.operations.upsert

> **upsert**: `object`

#### model.Animal.operations.upsert.args

> **args**: [`AnimalUpsertArgs`](AnimalUpsertArgs.md)\<`ExtArgs`\>

#### model.Animal.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalPayload`]($AnimalPayload.md)\>

#### model.Animal.payload

> **payload**: [`$AnimalPayload`]($AnimalPayload.md)\<`ExtArgs`\>

#### model.AnimalBreed

> **AnimalBreed**: `object`

#### model.AnimalBreed.fields

> **fields**: [`AnimalBreedFieldRefs`](../interfaces/AnimalBreedFieldRefs.md)

#### model.AnimalBreed.operations

> **operations**: `object`

#### model.AnimalBreed.operations.aggregate

> **aggregate**: `object`

#### model.AnimalBreed.operations.aggregate.args

> **args**: [`AnimalBreedAggregateArgs`](AnimalBreedAggregateArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregateAnimalBreed`](AggregateAnimalBreed.md)\>

#### model.AnimalBreed.operations.count

> **count**: `object`

#### model.AnimalBreed.operations.count.args

> **args**: [`AnimalBreedCountArgs`](AnimalBreedCountArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.count.result

> **result**: `$Utils.Optional`\<[`AnimalBreedCountAggregateOutputType`](AnimalBreedCountAggregateOutputType.md)\> \| `number`

#### model.AnimalBreed.operations.create

> **create**: `object`

#### model.AnimalBreed.operations.create.args

> **args**: [`AnimalBreedCreateArgs`](AnimalBreedCreateArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalBreedPayload`]($AnimalBreedPayload.md)\>

#### model.AnimalBreed.operations.createMany

> **createMany**: `object`

#### model.AnimalBreed.operations.createMany.args

> **args**: [`AnimalBreedCreateManyArgs`](AnimalBreedCreateManyArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AnimalBreed.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.AnimalBreed.operations.createManyAndReturn.args

> **args**: [`AnimalBreedCreateManyAndReturnArgs`](AnimalBreedCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalBreedPayload`]($AnimalBreedPayload.md)\>[]

#### model.AnimalBreed.operations.delete

> **delete**: `object`

#### model.AnimalBreed.operations.delete.args

> **args**: [`AnimalBreedDeleteArgs`](AnimalBreedDeleteArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalBreedPayload`]($AnimalBreedPayload.md)\>

#### model.AnimalBreed.operations.deleteMany

> **deleteMany**: `object`

#### model.AnimalBreed.operations.deleteMany.args

> **args**: [`AnimalBreedDeleteManyArgs`](AnimalBreedDeleteManyArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AnimalBreed.operations.findFirst

> **findFirst**: `object`

#### model.AnimalBreed.operations.findFirst.args

> **args**: [`AnimalBreedFindFirstArgs`](AnimalBreedFindFirstArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalBreedPayload`]($AnimalBreedPayload.md)\> \| `null`

#### model.AnimalBreed.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.AnimalBreed.operations.findFirstOrThrow.args

> **args**: [`AnimalBreedFindFirstOrThrowArgs`](AnimalBreedFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalBreedPayload`]($AnimalBreedPayload.md)\>

#### model.AnimalBreed.operations.findMany

> **findMany**: `object`

#### model.AnimalBreed.operations.findMany.args

> **args**: [`AnimalBreedFindManyArgs`](AnimalBreedFindManyArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalBreedPayload`]($AnimalBreedPayload.md)\>[]

#### model.AnimalBreed.operations.findUnique

> **findUnique**: `object`

#### model.AnimalBreed.operations.findUnique.args

> **args**: [`AnimalBreedFindUniqueArgs`](AnimalBreedFindUniqueArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalBreedPayload`]($AnimalBreedPayload.md)\> \| `null`

#### model.AnimalBreed.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.AnimalBreed.operations.findUniqueOrThrow.args

> **args**: [`AnimalBreedFindUniqueOrThrowArgs`](AnimalBreedFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalBreedPayload`]($AnimalBreedPayload.md)\>

#### model.AnimalBreed.operations.groupBy

> **groupBy**: `object`

#### model.AnimalBreed.operations.groupBy.args

> **args**: [`AnimalBreedGroupByArgs`](AnimalBreedGroupByArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`AnimalBreedGroupByOutputType`](AnimalBreedGroupByOutputType.md)\>[]

#### model.AnimalBreed.operations.update

> **update**: `object`

#### model.AnimalBreed.operations.update.args

> **args**: [`AnimalBreedUpdateArgs`](AnimalBreedUpdateArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalBreedPayload`]($AnimalBreedPayload.md)\>

#### model.AnimalBreed.operations.updateMany

> **updateMany**: `object`

#### model.AnimalBreed.operations.updateMany.args

> **args**: [`AnimalBreedUpdateManyArgs`](AnimalBreedUpdateManyArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AnimalBreed.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.AnimalBreed.operations.updateManyAndReturn.args

> **args**: [`AnimalBreedUpdateManyAndReturnArgs`](AnimalBreedUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalBreedPayload`]($AnimalBreedPayload.md)\>[]

#### model.AnimalBreed.operations.upsert

> **upsert**: `object`

#### model.AnimalBreed.operations.upsert.args

> **args**: [`AnimalBreedUpsertArgs`](AnimalBreedUpsertArgs.md)\<`ExtArgs`\>

#### model.AnimalBreed.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalBreedPayload`]($AnimalBreedPayload.md)\>

#### model.AnimalBreed.payload

> **payload**: [`$AnimalBreedPayload`]($AnimalBreedPayload.md)\<`ExtArgs`\>

#### model.AnimalDetail

> **AnimalDetail**: `object`

#### model.AnimalDetail.fields

> **fields**: [`AnimalDetailFieldRefs`](../interfaces/AnimalDetailFieldRefs.md)

#### model.AnimalDetail.operations

> **operations**: `object`

#### model.AnimalDetail.operations.aggregate

> **aggregate**: `object`

#### model.AnimalDetail.operations.aggregate.args

> **args**: [`AnimalDetailAggregateArgs`](AnimalDetailAggregateArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregateAnimalDetail`](AggregateAnimalDetail.md)\>

#### model.AnimalDetail.operations.count

> **count**: `object`

#### model.AnimalDetail.operations.count.args

> **args**: [`AnimalDetailCountArgs`](AnimalDetailCountArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.count.result

> **result**: `$Utils.Optional`\<[`AnimalDetailCountAggregateOutputType`](AnimalDetailCountAggregateOutputType.md)\> \| `number`

#### model.AnimalDetail.operations.create

> **create**: `object`

#### model.AnimalDetail.operations.create.args

> **args**: [`AnimalDetailCreateArgs`](AnimalDetailCreateArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalDetailPayload`]($AnimalDetailPayload.md)\>

#### model.AnimalDetail.operations.createMany

> **createMany**: `object`

#### model.AnimalDetail.operations.createMany.args

> **args**: [`AnimalDetailCreateManyArgs`](AnimalDetailCreateManyArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AnimalDetail.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.AnimalDetail.operations.createManyAndReturn.args

> **args**: [`AnimalDetailCreateManyAndReturnArgs`](AnimalDetailCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalDetailPayload`]($AnimalDetailPayload.md)\>[]

#### model.AnimalDetail.operations.delete

> **delete**: `object`

#### model.AnimalDetail.operations.delete.args

> **args**: [`AnimalDetailDeleteArgs`](AnimalDetailDeleteArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalDetailPayload`]($AnimalDetailPayload.md)\>

#### model.AnimalDetail.operations.deleteMany

> **deleteMany**: `object`

#### model.AnimalDetail.operations.deleteMany.args

> **args**: [`AnimalDetailDeleteManyArgs`](AnimalDetailDeleteManyArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AnimalDetail.operations.findFirst

> **findFirst**: `object`

#### model.AnimalDetail.operations.findFirst.args

> **args**: [`AnimalDetailFindFirstArgs`](AnimalDetailFindFirstArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalDetailPayload`]($AnimalDetailPayload.md)\> \| `null`

#### model.AnimalDetail.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.AnimalDetail.operations.findFirstOrThrow.args

> **args**: [`AnimalDetailFindFirstOrThrowArgs`](AnimalDetailFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalDetailPayload`]($AnimalDetailPayload.md)\>

#### model.AnimalDetail.operations.findMany

> **findMany**: `object`

#### model.AnimalDetail.operations.findMany.args

> **args**: [`AnimalDetailFindManyArgs`](AnimalDetailFindManyArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalDetailPayload`]($AnimalDetailPayload.md)\>[]

#### model.AnimalDetail.operations.findUnique

> **findUnique**: `object`

#### model.AnimalDetail.operations.findUnique.args

> **args**: [`AnimalDetailFindUniqueArgs`](AnimalDetailFindUniqueArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalDetailPayload`]($AnimalDetailPayload.md)\> \| `null`

#### model.AnimalDetail.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.AnimalDetail.operations.findUniqueOrThrow.args

> **args**: [`AnimalDetailFindUniqueOrThrowArgs`](AnimalDetailFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalDetailPayload`]($AnimalDetailPayload.md)\>

#### model.AnimalDetail.operations.groupBy

> **groupBy**: `object`

#### model.AnimalDetail.operations.groupBy.args

> **args**: [`AnimalDetailGroupByArgs`](AnimalDetailGroupByArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`AnimalDetailGroupByOutputType`](AnimalDetailGroupByOutputType.md)\>[]

#### model.AnimalDetail.operations.update

> **update**: `object`

#### model.AnimalDetail.operations.update.args

> **args**: [`AnimalDetailUpdateArgs`](AnimalDetailUpdateArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalDetailPayload`]($AnimalDetailPayload.md)\>

#### model.AnimalDetail.operations.updateMany

> **updateMany**: `object`

#### model.AnimalDetail.operations.updateMany.args

> **args**: [`AnimalDetailUpdateManyArgs`](AnimalDetailUpdateManyArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AnimalDetail.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.AnimalDetail.operations.updateManyAndReturn.args

> **args**: [`AnimalDetailUpdateManyAndReturnArgs`](AnimalDetailUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalDetailPayload`]($AnimalDetailPayload.md)\>[]

#### model.AnimalDetail.operations.upsert

> **upsert**: `object`

#### model.AnimalDetail.operations.upsert.args

> **args**: [`AnimalDetailUpsertArgs`](AnimalDetailUpsertArgs.md)\<`ExtArgs`\>

#### model.AnimalDetail.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalDetailPayload`]($AnimalDetailPayload.md)\>

#### model.AnimalDetail.payload

> **payload**: [`$AnimalDetailPayload`]($AnimalDetailPayload.md)\<`ExtArgs`\>

#### model.AnimalImage

> **AnimalImage**: `object`

#### model.AnimalImage.fields

> **fields**: [`AnimalImageFieldRefs`](../interfaces/AnimalImageFieldRefs.md)

#### model.AnimalImage.operations

> **operations**: `object`

#### model.AnimalImage.operations.aggregate

> **aggregate**: `object`

#### model.AnimalImage.operations.aggregate.args

> **args**: [`AnimalImageAggregateArgs`](AnimalImageAggregateArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregateAnimalImage`](AggregateAnimalImage.md)\>

#### model.AnimalImage.operations.count

> **count**: `object`

#### model.AnimalImage.operations.count.args

> **args**: [`AnimalImageCountArgs`](AnimalImageCountArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.count.result

> **result**: `$Utils.Optional`\<[`AnimalImageCountAggregateOutputType`](AnimalImageCountAggregateOutputType.md)\> \| `number`

#### model.AnimalImage.operations.create

> **create**: `object`

#### model.AnimalImage.operations.create.args

> **args**: [`AnimalImageCreateArgs`](AnimalImageCreateArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalImagePayload`]($AnimalImagePayload.md)\>

#### model.AnimalImage.operations.createMany

> **createMany**: `object`

#### model.AnimalImage.operations.createMany.args

> **args**: [`AnimalImageCreateManyArgs`](AnimalImageCreateManyArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AnimalImage.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.AnimalImage.operations.createManyAndReturn.args

> **args**: [`AnimalImageCreateManyAndReturnArgs`](AnimalImageCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalImagePayload`]($AnimalImagePayload.md)\>[]

#### model.AnimalImage.operations.delete

> **delete**: `object`

#### model.AnimalImage.operations.delete.args

> **args**: [`AnimalImageDeleteArgs`](AnimalImageDeleteArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalImagePayload`]($AnimalImagePayload.md)\>

#### model.AnimalImage.operations.deleteMany

> **deleteMany**: `object`

#### model.AnimalImage.operations.deleteMany.args

> **args**: [`AnimalImageDeleteManyArgs`](AnimalImageDeleteManyArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AnimalImage.operations.findFirst

> **findFirst**: `object`

#### model.AnimalImage.operations.findFirst.args

> **args**: [`AnimalImageFindFirstArgs`](AnimalImageFindFirstArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalImagePayload`]($AnimalImagePayload.md)\> \| `null`

#### model.AnimalImage.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.AnimalImage.operations.findFirstOrThrow.args

> **args**: [`AnimalImageFindFirstOrThrowArgs`](AnimalImageFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalImagePayload`]($AnimalImagePayload.md)\>

#### model.AnimalImage.operations.findMany

> **findMany**: `object`

#### model.AnimalImage.operations.findMany.args

> **args**: [`AnimalImageFindManyArgs`](AnimalImageFindManyArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalImagePayload`]($AnimalImagePayload.md)\>[]

#### model.AnimalImage.operations.findUnique

> **findUnique**: `object`

#### model.AnimalImage.operations.findUnique.args

> **args**: [`AnimalImageFindUniqueArgs`](AnimalImageFindUniqueArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalImagePayload`]($AnimalImagePayload.md)\> \| `null`

#### model.AnimalImage.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.AnimalImage.operations.findUniqueOrThrow.args

> **args**: [`AnimalImageFindUniqueOrThrowArgs`](AnimalImageFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalImagePayload`]($AnimalImagePayload.md)\>

#### model.AnimalImage.operations.groupBy

> **groupBy**: `object`

#### model.AnimalImage.operations.groupBy.args

> **args**: [`AnimalImageGroupByArgs`](AnimalImageGroupByArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`AnimalImageGroupByOutputType`](AnimalImageGroupByOutputType.md)\>[]

#### model.AnimalImage.operations.update

> **update**: `object`

#### model.AnimalImage.operations.update.args

> **args**: [`AnimalImageUpdateArgs`](AnimalImageUpdateArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalImagePayload`]($AnimalImagePayload.md)\>

#### model.AnimalImage.operations.updateMany

> **updateMany**: `object`

#### model.AnimalImage.operations.updateMany.args

> **args**: [`AnimalImageUpdateManyArgs`](AnimalImageUpdateManyArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AnimalImage.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.AnimalImage.operations.updateManyAndReturn.args

> **args**: [`AnimalImageUpdateManyAndReturnArgs`](AnimalImageUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalImagePayload`]($AnimalImagePayload.md)\>[]

#### model.AnimalImage.operations.upsert

> **upsert**: `object`

#### model.AnimalImage.operations.upsert.args

> **args**: [`AnimalImageUpsertArgs`](AnimalImageUpsertArgs.md)\<`ExtArgs`\>

#### model.AnimalImage.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalImagePayload`]($AnimalImagePayload.md)\>

#### model.AnimalImage.payload

> **payload**: [`$AnimalImagePayload`]($AnimalImagePayload.md)\<`ExtArgs`\>

#### model.AnimalSpecies

> **AnimalSpecies**: `object`

#### model.AnimalSpecies.fields

> **fields**: [`AnimalSpeciesFieldRefs`](../interfaces/AnimalSpeciesFieldRefs.md)

#### model.AnimalSpecies.operations

> **operations**: `object`

#### model.AnimalSpecies.operations.aggregate

> **aggregate**: `object`

#### model.AnimalSpecies.operations.aggregate.args

> **args**: [`AnimalSpeciesAggregateArgs`](AnimalSpeciesAggregateArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregateAnimalSpecies`](AggregateAnimalSpecies.md)\>

#### model.AnimalSpecies.operations.count

> **count**: `object`

#### model.AnimalSpecies.operations.count.args

> **args**: [`AnimalSpeciesCountArgs`](AnimalSpeciesCountArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.count.result

> **result**: `$Utils.Optional`\<[`AnimalSpeciesCountAggregateOutputType`](AnimalSpeciesCountAggregateOutputType.md)\> \| `number`

#### model.AnimalSpecies.operations.create

> **create**: `object`

#### model.AnimalSpecies.operations.create.args

> **args**: [`AnimalSpeciesCreateArgs`](AnimalSpeciesCreateArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalSpeciesPayload`]($AnimalSpeciesPayload.md)\>

#### model.AnimalSpecies.operations.createMany

> **createMany**: `object`

#### model.AnimalSpecies.operations.createMany.args

> **args**: [`AnimalSpeciesCreateManyArgs`](AnimalSpeciesCreateManyArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AnimalSpecies.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.AnimalSpecies.operations.createManyAndReturn.args

> **args**: [`AnimalSpeciesCreateManyAndReturnArgs`](AnimalSpeciesCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalSpeciesPayload`]($AnimalSpeciesPayload.md)\>[]

#### model.AnimalSpecies.operations.delete

> **delete**: `object`

#### model.AnimalSpecies.operations.delete.args

> **args**: [`AnimalSpeciesDeleteArgs`](AnimalSpeciesDeleteArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalSpeciesPayload`]($AnimalSpeciesPayload.md)\>

#### model.AnimalSpecies.operations.deleteMany

> **deleteMany**: `object`

#### model.AnimalSpecies.operations.deleteMany.args

> **args**: [`AnimalSpeciesDeleteManyArgs`](AnimalSpeciesDeleteManyArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AnimalSpecies.operations.findFirst

> **findFirst**: `object`

#### model.AnimalSpecies.operations.findFirst.args

> **args**: [`AnimalSpeciesFindFirstArgs`](AnimalSpeciesFindFirstArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalSpeciesPayload`]($AnimalSpeciesPayload.md)\> \| `null`

#### model.AnimalSpecies.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.AnimalSpecies.operations.findFirstOrThrow.args

> **args**: [`AnimalSpeciesFindFirstOrThrowArgs`](AnimalSpeciesFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalSpeciesPayload`]($AnimalSpeciesPayload.md)\>

#### model.AnimalSpecies.operations.findMany

> **findMany**: `object`

#### model.AnimalSpecies.operations.findMany.args

> **args**: [`AnimalSpeciesFindManyArgs`](AnimalSpeciesFindManyArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalSpeciesPayload`]($AnimalSpeciesPayload.md)\>[]

#### model.AnimalSpecies.operations.findUnique

> **findUnique**: `object`

#### model.AnimalSpecies.operations.findUnique.args

> **args**: [`AnimalSpeciesFindUniqueArgs`](AnimalSpeciesFindUniqueArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalSpeciesPayload`]($AnimalSpeciesPayload.md)\> \| `null`

#### model.AnimalSpecies.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.AnimalSpecies.operations.findUniqueOrThrow.args

> **args**: [`AnimalSpeciesFindUniqueOrThrowArgs`](AnimalSpeciesFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalSpeciesPayload`]($AnimalSpeciesPayload.md)\>

#### model.AnimalSpecies.operations.groupBy

> **groupBy**: `object`

#### model.AnimalSpecies.operations.groupBy.args

> **args**: [`AnimalSpeciesGroupByArgs`](AnimalSpeciesGroupByArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`AnimalSpeciesGroupByOutputType`](AnimalSpeciesGroupByOutputType.md)\>[]

#### model.AnimalSpecies.operations.update

> **update**: `object`

#### model.AnimalSpecies.operations.update.args

> **args**: [`AnimalSpeciesUpdateArgs`](AnimalSpeciesUpdateArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalSpeciesPayload`]($AnimalSpeciesPayload.md)\>

#### model.AnimalSpecies.operations.updateMany

> **updateMany**: `object`

#### model.AnimalSpecies.operations.updateMany.args

> **args**: [`AnimalSpeciesUpdateManyArgs`](AnimalSpeciesUpdateManyArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.AnimalSpecies.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.AnimalSpecies.operations.updateManyAndReturn.args

> **args**: [`AnimalSpeciesUpdateManyAndReturnArgs`](AnimalSpeciesUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalSpeciesPayload`]($AnimalSpeciesPayload.md)\>[]

#### model.AnimalSpecies.operations.upsert

> **upsert**: `object`

#### model.AnimalSpecies.operations.upsert.args

> **args**: [`AnimalSpeciesUpsertArgs`](AnimalSpeciesUpsertArgs.md)\<`ExtArgs`\>

#### model.AnimalSpecies.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$AnimalSpeciesPayload`]($AnimalSpeciesPayload.md)\>

#### model.AnimalSpecies.payload

> **payload**: [`$AnimalSpeciesPayload`]($AnimalSpeciesPayload.md)\<`ExtArgs`\>

#### model.Inquiry

> **Inquiry**: `object`

#### model.Inquiry.fields

> **fields**: [`InquiryFieldRefs`](../interfaces/InquiryFieldRefs.md)

#### model.Inquiry.operations

> **operations**: `object`

#### model.Inquiry.operations.aggregate

> **aggregate**: `object`

#### model.Inquiry.operations.aggregate.args

> **args**: [`InquiryAggregateArgs`](InquiryAggregateArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregateInquiry`](AggregateInquiry.md)\>

#### model.Inquiry.operations.count

> **count**: `object`

#### model.Inquiry.operations.count.args

> **args**: [`InquiryCountArgs`](InquiryCountArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.count.result

> **result**: `$Utils.Optional`\<[`InquiryCountAggregateOutputType`](InquiryCountAggregateOutputType.md)\> \| `number`

#### model.Inquiry.operations.create

> **create**: `object`

#### model.Inquiry.operations.create.args

> **args**: [`InquiryCreateArgs`](InquiryCreateArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$InquiryPayload`]($InquiryPayload.md)\>

#### model.Inquiry.operations.createMany

> **createMany**: `object`

#### model.Inquiry.operations.createMany.args

> **args**: [`InquiryCreateManyArgs`](InquiryCreateManyArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.Inquiry.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.Inquiry.operations.createManyAndReturn.args

> **args**: [`InquiryCreateManyAndReturnArgs`](InquiryCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$InquiryPayload`]($InquiryPayload.md)\>[]

#### model.Inquiry.operations.delete

> **delete**: `object`

#### model.Inquiry.operations.delete.args

> **args**: [`InquiryDeleteArgs`](InquiryDeleteArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$InquiryPayload`]($InquiryPayload.md)\>

#### model.Inquiry.operations.deleteMany

> **deleteMany**: `object`

#### model.Inquiry.operations.deleteMany.args

> **args**: [`InquiryDeleteManyArgs`](InquiryDeleteManyArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.Inquiry.operations.findFirst

> **findFirst**: `object`

#### model.Inquiry.operations.findFirst.args

> **args**: [`InquiryFindFirstArgs`](InquiryFindFirstArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$InquiryPayload`]($InquiryPayload.md)\> \| `null`

#### model.Inquiry.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.Inquiry.operations.findFirstOrThrow.args

> **args**: [`InquiryFindFirstOrThrowArgs`](InquiryFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$InquiryPayload`]($InquiryPayload.md)\>

#### model.Inquiry.operations.findMany

> **findMany**: `object`

#### model.Inquiry.operations.findMany.args

> **args**: [`InquiryFindManyArgs`](InquiryFindManyArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$InquiryPayload`]($InquiryPayload.md)\>[]

#### model.Inquiry.operations.findUnique

> **findUnique**: `object`

#### model.Inquiry.operations.findUnique.args

> **args**: [`InquiryFindUniqueArgs`](InquiryFindUniqueArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$InquiryPayload`]($InquiryPayload.md)\> \| `null`

#### model.Inquiry.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.Inquiry.operations.findUniqueOrThrow.args

> **args**: [`InquiryFindUniqueOrThrowArgs`](InquiryFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$InquiryPayload`]($InquiryPayload.md)\>

#### model.Inquiry.operations.groupBy

> **groupBy**: `object`

#### model.Inquiry.operations.groupBy.args

> **args**: [`InquiryGroupByArgs`](InquiryGroupByArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`InquiryGroupByOutputType`](InquiryGroupByOutputType.md)\>[]

#### model.Inquiry.operations.update

> **update**: `object`

#### model.Inquiry.operations.update.args

> **args**: [`InquiryUpdateArgs`](InquiryUpdateArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$InquiryPayload`]($InquiryPayload.md)\>

#### model.Inquiry.operations.updateMany

> **updateMany**: `object`

#### model.Inquiry.operations.updateMany.args

> **args**: [`InquiryUpdateManyArgs`](InquiryUpdateManyArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.Inquiry.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.Inquiry.operations.updateManyAndReturn.args

> **args**: [`InquiryUpdateManyAndReturnArgs`](InquiryUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$InquiryPayload`]($InquiryPayload.md)\>[]

#### model.Inquiry.operations.upsert

> **upsert**: `object`

#### model.Inquiry.operations.upsert.args

> **args**: [`InquiryUpsertArgs`](InquiryUpsertArgs.md)\<`ExtArgs`\>

#### model.Inquiry.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$InquiryPayload`]($InquiryPayload.md)\>

#### model.Inquiry.payload

> **payload**: [`$InquiryPayload`]($InquiryPayload.md)\<`ExtArgs`\>

#### model.PetPost

> **PetPost**: `object`

#### model.PetPost.fields

> **fields**: [`PetPostFieldRefs`](../interfaces/PetPostFieldRefs.md)

#### model.PetPost.operations

> **operations**: `object`

#### model.PetPost.operations.aggregate

> **aggregate**: `object`

#### model.PetPost.operations.aggregate.args

> **args**: [`PetPostAggregateArgs`](PetPostAggregateArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregatePetPost`](AggregatePetPost.md)\>

#### model.PetPost.operations.count

> **count**: `object`

#### model.PetPost.operations.count.args

> **args**: [`PetPostCountArgs`](PetPostCountArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.count.result

> **result**: `$Utils.Optional`\<[`PetPostCountAggregateOutputType`](PetPostCountAggregateOutputType.md)\> \| `number`

#### model.PetPost.operations.create

> **create**: `object`

#### model.PetPost.operations.create.args

> **args**: [`PetPostCreateArgs`](PetPostCreateArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostPayload`]($PetPostPayload.md)\>

#### model.PetPost.operations.createMany

> **createMany**: `object`

#### model.PetPost.operations.createMany.args

> **args**: [`PetPostCreateManyArgs`](PetPostCreateManyArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.PetPost.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.PetPost.operations.createManyAndReturn.args

> **args**: [`PetPostCreateManyAndReturnArgs`](PetPostCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostPayload`]($PetPostPayload.md)\>[]

#### model.PetPost.operations.delete

> **delete**: `object`

#### model.PetPost.operations.delete.args

> **args**: [`PetPostDeleteArgs`](PetPostDeleteArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostPayload`]($PetPostPayload.md)\>

#### model.PetPost.operations.deleteMany

> **deleteMany**: `object`

#### model.PetPost.operations.deleteMany.args

> **args**: [`PetPostDeleteManyArgs`](PetPostDeleteManyArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.PetPost.operations.findFirst

> **findFirst**: `object`

#### model.PetPost.operations.findFirst.args

> **args**: [`PetPostFindFirstArgs`](PetPostFindFirstArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostPayload`]($PetPostPayload.md)\> \| `null`

#### model.PetPost.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.PetPost.operations.findFirstOrThrow.args

> **args**: [`PetPostFindFirstOrThrowArgs`](PetPostFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostPayload`]($PetPostPayload.md)\>

#### model.PetPost.operations.findMany

> **findMany**: `object`

#### model.PetPost.operations.findMany.args

> **args**: [`PetPostFindManyArgs`](PetPostFindManyArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostPayload`]($PetPostPayload.md)\>[]

#### model.PetPost.operations.findUnique

> **findUnique**: `object`

#### model.PetPost.operations.findUnique.args

> **args**: [`PetPostFindUniqueArgs`](PetPostFindUniqueArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostPayload`]($PetPostPayload.md)\> \| `null`

#### model.PetPost.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.PetPost.operations.findUniqueOrThrow.args

> **args**: [`PetPostFindUniqueOrThrowArgs`](PetPostFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostPayload`]($PetPostPayload.md)\>

#### model.PetPost.operations.groupBy

> **groupBy**: `object`

#### model.PetPost.operations.groupBy.args

> **args**: [`PetPostGroupByArgs`](PetPostGroupByArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`PetPostGroupByOutputType`](PetPostGroupByOutputType.md)\>[]

#### model.PetPost.operations.update

> **update**: `object`

#### model.PetPost.operations.update.args

> **args**: [`PetPostUpdateArgs`](PetPostUpdateArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostPayload`]($PetPostPayload.md)\>

#### model.PetPost.operations.updateMany

> **updateMany**: `object`

#### model.PetPost.operations.updateMany.args

> **args**: [`PetPostUpdateManyArgs`](PetPostUpdateManyArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.PetPost.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.PetPost.operations.updateManyAndReturn.args

> **args**: [`PetPostUpdateManyAndReturnArgs`](PetPostUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostPayload`]($PetPostPayload.md)\>[]

#### model.PetPost.operations.upsert

> **upsert**: `object`

#### model.PetPost.operations.upsert.args

> **args**: [`PetPostUpsertArgs`](PetPostUpsertArgs.md)\<`ExtArgs`\>

#### model.PetPost.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostPayload`]($PetPostPayload.md)\>

#### model.PetPost.payload

> **payload**: [`$PetPostPayload`]($PetPostPayload.md)\<`ExtArgs`\>

#### model.PetPostImage

> **PetPostImage**: `object`

#### model.PetPostImage.fields

> **fields**: [`PetPostImageFieldRefs`](../interfaces/PetPostImageFieldRefs.md)

#### model.PetPostImage.operations

> **operations**: `object`

#### model.PetPostImage.operations.aggregate

> **aggregate**: `object`

#### model.PetPostImage.operations.aggregate.args

> **args**: [`PetPostImageAggregateArgs`](PetPostImageAggregateArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregatePetPostImage`](AggregatePetPostImage.md)\>

#### model.PetPostImage.operations.count

> **count**: `object`

#### model.PetPostImage.operations.count.args

> **args**: [`PetPostImageCountArgs`](PetPostImageCountArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.count.result

> **result**: `$Utils.Optional`\<[`PetPostImageCountAggregateOutputType`](PetPostImageCountAggregateOutputType.md)\> \| `number`

#### model.PetPostImage.operations.create

> **create**: `object`

#### model.PetPostImage.operations.create.args

> **args**: [`PetPostImageCreateArgs`](PetPostImageCreateArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostImagePayload`]($PetPostImagePayload.md)\>

#### model.PetPostImage.operations.createMany

> **createMany**: `object`

#### model.PetPostImage.operations.createMany.args

> **args**: [`PetPostImageCreateManyArgs`](PetPostImageCreateManyArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.PetPostImage.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.PetPostImage.operations.createManyAndReturn.args

> **args**: [`PetPostImageCreateManyAndReturnArgs`](PetPostImageCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostImagePayload`]($PetPostImagePayload.md)\>[]

#### model.PetPostImage.operations.delete

> **delete**: `object`

#### model.PetPostImage.operations.delete.args

> **args**: [`PetPostImageDeleteArgs`](PetPostImageDeleteArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostImagePayload`]($PetPostImagePayload.md)\>

#### model.PetPostImage.operations.deleteMany

> **deleteMany**: `object`

#### model.PetPostImage.operations.deleteMany.args

> **args**: [`PetPostImageDeleteManyArgs`](PetPostImageDeleteManyArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.PetPostImage.operations.findFirst

> **findFirst**: `object`

#### model.PetPostImage.operations.findFirst.args

> **args**: [`PetPostImageFindFirstArgs`](PetPostImageFindFirstArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostImagePayload`]($PetPostImagePayload.md)\> \| `null`

#### model.PetPostImage.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.PetPostImage.operations.findFirstOrThrow.args

> **args**: [`PetPostImageFindFirstOrThrowArgs`](PetPostImageFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostImagePayload`]($PetPostImagePayload.md)\>

#### model.PetPostImage.operations.findMany

> **findMany**: `object`

#### model.PetPostImage.operations.findMany.args

> **args**: [`PetPostImageFindManyArgs`](PetPostImageFindManyArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostImagePayload`]($PetPostImagePayload.md)\>[]

#### model.PetPostImage.operations.findUnique

> **findUnique**: `object`

#### model.PetPostImage.operations.findUnique.args

> **args**: [`PetPostImageFindUniqueArgs`](PetPostImageFindUniqueArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostImagePayload`]($PetPostImagePayload.md)\> \| `null`

#### model.PetPostImage.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.PetPostImage.operations.findUniqueOrThrow.args

> **args**: [`PetPostImageFindUniqueOrThrowArgs`](PetPostImageFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostImagePayload`]($PetPostImagePayload.md)\>

#### model.PetPostImage.operations.groupBy

> **groupBy**: `object`

#### model.PetPostImage.operations.groupBy.args

> **args**: [`PetPostImageGroupByArgs`](PetPostImageGroupByArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`PetPostImageGroupByOutputType`](PetPostImageGroupByOutputType.md)\>[]

#### model.PetPostImage.operations.update

> **update**: `object`

#### model.PetPostImage.operations.update.args

> **args**: [`PetPostImageUpdateArgs`](PetPostImageUpdateArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostImagePayload`]($PetPostImagePayload.md)\>

#### model.PetPostImage.operations.updateMany

> **updateMany**: `object`

#### model.PetPostImage.operations.updateMany.args

> **args**: [`PetPostImageUpdateManyArgs`](PetPostImageUpdateManyArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.PetPostImage.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.PetPostImage.operations.updateManyAndReturn.args

> **args**: [`PetPostImageUpdateManyAndReturnArgs`](PetPostImageUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostImagePayload`]($PetPostImagePayload.md)\>[]

#### model.PetPostImage.operations.upsert

> **upsert**: `object`

#### model.PetPostImage.operations.upsert.args

> **args**: [`PetPostImageUpsertArgs`](PetPostImageUpsertArgs.md)\<`ExtArgs`\>

#### model.PetPostImage.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$PetPostImagePayload`]($PetPostImagePayload.md)\>

#### model.PetPostImage.payload

> **payload**: [`$PetPostImagePayload`]($PetPostImagePayload.md)\<`ExtArgs`\>

#### model.Shelter

> **Shelter**: `object`

#### model.Shelter.fields

> **fields**: [`ShelterFieldRefs`](../interfaces/ShelterFieldRefs.md)

#### model.Shelter.operations

> **operations**: `object`

#### model.Shelter.operations.aggregate

> **aggregate**: `object`

#### model.Shelter.operations.aggregate.args

> **args**: [`ShelterAggregateArgs`](ShelterAggregateArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregateShelter`](AggregateShelter.md)\>

#### model.Shelter.operations.count

> **count**: `object`

#### model.Shelter.operations.count.args

> **args**: [`ShelterCountArgs`](ShelterCountArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.count.result

> **result**: `$Utils.Optional`\<[`ShelterCountAggregateOutputType`](ShelterCountAggregateOutputType.md)\> \| `number`

#### model.Shelter.operations.create

> **create**: `object`

#### model.Shelter.operations.create.args

> **args**: [`ShelterCreateArgs`](ShelterCreateArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterPayload`]($ShelterPayload.md)\>

#### model.Shelter.operations.createMany

> **createMany**: `object`

#### model.Shelter.operations.createMany.args

> **args**: [`ShelterCreateManyArgs`](ShelterCreateManyArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.Shelter.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.Shelter.operations.createManyAndReturn.args

> **args**: [`ShelterCreateManyAndReturnArgs`](ShelterCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterPayload`]($ShelterPayload.md)\>[]

#### model.Shelter.operations.delete

> **delete**: `object`

#### model.Shelter.operations.delete.args

> **args**: [`ShelterDeleteArgs`](ShelterDeleteArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterPayload`]($ShelterPayload.md)\>

#### model.Shelter.operations.deleteMany

> **deleteMany**: `object`

#### model.Shelter.operations.deleteMany.args

> **args**: [`ShelterDeleteManyArgs`](ShelterDeleteManyArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.Shelter.operations.findFirst

> **findFirst**: `object`

#### model.Shelter.operations.findFirst.args

> **args**: [`ShelterFindFirstArgs`](ShelterFindFirstArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterPayload`]($ShelterPayload.md)\> \| `null`

#### model.Shelter.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.Shelter.operations.findFirstOrThrow.args

> **args**: [`ShelterFindFirstOrThrowArgs`](ShelterFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterPayload`]($ShelterPayload.md)\>

#### model.Shelter.operations.findMany

> **findMany**: `object`

#### model.Shelter.operations.findMany.args

> **args**: [`ShelterFindManyArgs`](ShelterFindManyArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterPayload`]($ShelterPayload.md)\>[]

#### model.Shelter.operations.findUnique

> **findUnique**: `object`

#### model.Shelter.operations.findUnique.args

> **args**: [`ShelterFindUniqueArgs`](ShelterFindUniqueArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterPayload`]($ShelterPayload.md)\> \| `null`

#### model.Shelter.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.Shelter.operations.findUniqueOrThrow.args

> **args**: [`ShelterFindUniqueOrThrowArgs`](ShelterFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterPayload`]($ShelterPayload.md)\>

#### model.Shelter.operations.groupBy

> **groupBy**: `object`

#### model.Shelter.operations.groupBy.args

> **args**: [`ShelterGroupByArgs`](ShelterGroupByArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`ShelterGroupByOutputType`](ShelterGroupByOutputType.md)\>[]

#### model.Shelter.operations.update

> **update**: `object`

#### model.Shelter.operations.update.args

> **args**: [`ShelterUpdateArgs`](ShelterUpdateArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterPayload`]($ShelterPayload.md)\>

#### model.Shelter.operations.updateMany

> **updateMany**: `object`

#### model.Shelter.operations.updateMany.args

> **args**: [`ShelterUpdateManyArgs`](ShelterUpdateManyArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.Shelter.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.Shelter.operations.updateManyAndReturn.args

> **args**: [`ShelterUpdateManyAndReturnArgs`](ShelterUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterPayload`]($ShelterPayload.md)\>[]

#### model.Shelter.operations.upsert

> **upsert**: `object`

#### model.Shelter.operations.upsert.args

> **args**: [`ShelterUpsertArgs`](ShelterUpsertArgs.md)\<`ExtArgs`\>

#### model.Shelter.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterPayload`]($ShelterPayload.md)\>

#### model.Shelter.payload

> **payload**: [`$ShelterPayload`]($ShelterPayload.md)\<`ExtArgs`\>

#### model.ShelterImage

> **ShelterImage**: `object`

#### model.ShelterImage.fields

> **fields**: [`ShelterImageFieldRefs`](../interfaces/ShelterImageFieldRefs.md)

#### model.ShelterImage.operations

> **operations**: `object`

#### model.ShelterImage.operations.aggregate

> **aggregate**: `object`

#### model.ShelterImage.operations.aggregate.args

> **args**: [`ShelterImageAggregateArgs`](ShelterImageAggregateArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregateShelterImage`](AggregateShelterImage.md)\>

#### model.ShelterImage.operations.count

> **count**: `object`

#### model.ShelterImage.operations.count.args

> **args**: [`ShelterImageCountArgs`](ShelterImageCountArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.count.result

> **result**: `$Utils.Optional`\<[`ShelterImageCountAggregateOutputType`](ShelterImageCountAggregateOutputType.md)\> \| `number`

#### model.ShelterImage.operations.create

> **create**: `object`

#### model.ShelterImage.operations.create.args

> **args**: [`ShelterImageCreateArgs`](ShelterImageCreateArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterImagePayload`]($ShelterImagePayload.md)\>

#### model.ShelterImage.operations.createMany

> **createMany**: `object`

#### model.ShelterImage.operations.createMany.args

> **args**: [`ShelterImageCreateManyArgs`](ShelterImageCreateManyArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.ShelterImage.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.ShelterImage.operations.createManyAndReturn.args

> **args**: [`ShelterImageCreateManyAndReturnArgs`](ShelterImageCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterImagePayload`]($ShelterImagePayload.md)\>[]

#### model.ShelterImage.operations.delete

> **delete**: `object`

#### model.ShelterImage.operations.delete.args

> **args**: [`ShelterImageDeleteArgs`](ShelterImageDeleteArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterImagePayload`]($ShelterImagePayload.md)\>

#### model.ShelterImage.operations.deleteMany

> **deleteMany**: `object`

#### model.ShelterImage.operations.deleteMany.args

> **args**: [`ShelterImageDeleteManyArgs`](ShelterImageDeleteManyArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.ShelterImage.operations.findFirst

> **findFirst**: `object`

#### model.ShelterImage.operations.findFirst.args

> **args**: [`ShelterImageFindFirstArgs`](ShelterImageFindFirstArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterImagePayload`]($ShelterImagePayload.md)\> \| `null`

#### model.ShelterImage.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.ShelterImage.operations.findFirstOrThrow.args

> **args**: [`ShelterImageFindFirstOrThrowArgs`](ShelterImageFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterImagePayload`]($ShelterImagePayload.md)\>

#### model.ShelterImage.operations.findMany

> **findMany**: `object`

#### model.ShelterImage.operations.findMany.args

> **args**: [`ShelterImageFindManyArgs`](ShelterImageFindManyArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterImagePayload`]($ShelterImagePayload.md)\>[]

#### model.ShelterImage.operations.findUnique

> **findUnique**: `object`

#### model.ShelterImage.operations.findUnique.args

> **args**: [`ShelterImageFindUniqueArgs`](ShelterImageFindUniqueArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterImagePayload`]($ShelterImagePayload.md)\> \| `null`

#### model.ShelterImage.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.ShelterImage.operations.findUniqueOrThrow.args

> **args**: [`ShelterImageFindUniqueOrThrowArgs`](ShelterImageFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterImagePayload`]($ShelterImagePayload.md)\>

#### model.ShelterImage.operations.groupBy

> **groupBy**: `object`

#### model.ShelterImage.operations.groupBy.args

> **args**: [`ShelterImageGroupByArgs`](ShelterImageGroupByArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`ShelterImageGroupByOutputType`](ShelterImageGroupByOutputType.md)\>[]

#### model.ShelterImage.operations.update

> **update**: `object`

#### model.ShelterImage.operations.update.args

> **args**: [`ShelterImageUpdateArgs`](ShelterImageUpdateArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterImagePayload`]($ShelterImagePayload.md)\>

#### model.ShelterImage.operations.updateMany

> **updateMany**: `object`

#### model.ShelterImage.operations.updateMany.args

> **args**: [`ShelterImageUpdateManyArgs`](ShelterImageUpdateManyArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.ShelterImage.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.ShelterImage.operations.updateManyAndReturn.args

> **args**: [`ShelterImageUpdateManyAndReturnArgs`](ShelterImageUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterImagePayload`]($ShelterImagePayload.md)\>[]

#### model.ShelterImage.operations.upsert

> **upsert**: `object`

#### model.ShelterImage.operations.upsert.args

> **args**: [`ShelterImageUpsertArgs`](ShelterImageUpsertArgs.md)\<`ExtArgs`\>

#### model.ShelterImage.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$ShelterImagePayload`]($ShelterImagePayload.md)\>

#### model.ShelterImage.payload

> **payload**: [`$ShelterImagePayload`]($ShelterImagePayload.md)\<`ExtArgs`\>

#### model.User

> **User**: `object`

#### model.User.fields

> **fields**: [`UserFieldRefs`](../interfaces/UserFieldRefs.md)

#### model.User.operations

> **operations**: `object`

#### model.User.operations.aggregate

> **aggregate**: `object`

#### model.User.operations.aggregate.args

> **args**: [`UserAggregateArgs`](UserAggregateArgs.md)\<`ExtArgs`\>

#### model.User.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregateUser`](AggregateUser.md)\>

#### model.User.operations.count

> **count**: `object`

#### model.User.operations.count.args

> **args**: [`UserCountArgs`](UserCountArgs.md)\<`ExtArgs`\>

#### model.User.operations.count.result

> **result**: `$Utils.Optional`\<[`UserCountAggregateOutputType`](UserCountAggregateOutputType.md)\> \| `number`

#### model.User.operations.create

> **create**: `object`

#### model.User.operations.create.args

> **args**: [`UserCreateArgs`](UserCreateArgs.md)\<`ExtArgs`\>

#### model.User.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$UserPayload`]($UserPayload.md)\>

#### model.User.operations.createMany

> **createMany**: `object`

#### model.User.operations.createMany.args

> **args**: [`UserCreateManyArgs`](UserCreateManyArgs.md)\<`ExtArgs`\>

#### model.User.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.User.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.User.operations.createManyAndReturn.args

> **args**: [`UserCreateManyAndReturnArgs`](UserCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.User.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$UserPayload`]($UserPayload.md)\>[]

#### model.User.operations.delete

> **delete**: `object`

#### model.User.operations.delete.args

> **args**: [`UserDeleteArgs`](UserDeleteArgs.md)\<`ExtArgs`\>

#### model.User.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$UserPayload`]($UserPayload.md)\>

#### model.User.operations.deleteMany

> **deleteMany**: `object`

#### model.User.operations.deleteMany.args

> **args**: [`UserDeleteManyArgs`](UserDeleteManyArgs.md)\<`ExtArgs`\>

#### model.User.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.User.operations.findFirst

> **findFirst**: `object`

#### model.User.operations.findFirst.args

> **args**: [`UserFindFirstArgs`](UserFindFirstArgs.md)\<`ExtArgs`\>

#### model.User.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$UserPayload`]($UserPayload.md)\> \| `null`

#### model.User.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.User.operations.findFirstOrThrow.args

> **args**: [`UserFindFirstOrThrowArgs`](UserFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.User.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$UserPayload`]($UserPayload.md)\>

#### model.User.operations.findMany

> **findMany**: `object`

#### model.User.operations.findMany.args

> **args**: [`UserFindManyArgs`](UserFindManyArgs.md)\<`ExtArgs`\>

#### model.User.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$UserPayload`]($UserPayload.md)\>[]

#### model.User.operations.findUnique

> **findUnique**: `object`

#### model.User.operations.findUnique.args

> **args**: [`UserFindUniqueArgs`](UserFindUniqueArgs.md)\<`ExtArgs`\>

#### model.User.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$UserPayload`]($UserPayload.md)\> \| `null`

#### model.User.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.User.operations.findUniqueOrThrow.args

> **args**: [`UserFindUniqueOrThrowArgs`](UserFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.User.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$UserPayload`]($UserPayload.md)\>

#### model.User.operations.groupBy

> **groupBy**: `object`

#### model.User.operations.groupBy.args

> **args**: [`UserGroupByArgs`](UserGroupByArgs.md)\<`ExtArgs`\>

#### model.User.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`UserGroupByOutputType`](UserGroupByOutputType.md)\>[]

#### model.User.operations.update

> **update**: `object`

#### model.User.operations.update.args

> **args**: [`UserUpdateArgs`](UserUpdateArgs.md)\<`ExtArgs`\>

#### model.User.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$UserPayload`]($UserPayload.md)\>

#### model.User.operations.updateMany

> **updateMany**: `object`

#### model.User.operations.updateMany.args

> **args**: [`UserUpdateManyArgs`](UserUpdateManyArgs.md)\<`ExtArgs`\>

#### model.User.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.User.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.User.operations.updateManyAndReturn.args

> **args**: [`UserUpdateManyAndReturnArgs`](UserUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.User.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$UserPayload`]($UserPayload.md)\>[]

#### model.User.operations.upsert

> **upsert**: `object`

#### model.User.operations.upsert.args

> **args**: [`UserUpsertArgs`](UserUpsertArgs.md)\<`ExtArgs`\>

#### model.User.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$UserPayload`]($UserPayload.md)\>

#### model.User.payload

> **payload**: [`$UserPayload`]($UserPayload.md)\<`ExtArgs`\>

#### model.UserAgreement

> **UserAgreement**: `object`

#### model.UserAgreement.fields

> **fields**: [`UserAgreementFieldRefs`](../interfaces/UserAgreementFieldRefs.md)

#### model.UserAgreement.operations

> **operations**: `object`

#### model.UserAgreement.operations.aggregate

> **aggregate**: `object`

#### model.UserAgreement.operations.aggregate.args

> **args**: [`UserAgreementAggregateArgs`](UserAgreementAggregateArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.aggregate.result

> **result**: `$Utils.Optional`\<[`AggregateUserAgreement`](AggregateUserAgreement.md)\>

#### model.UserAgreement.operations.count

> **count**: `object`

#### model.UserAgreement.operations.count.args

> **args**: [`UserAgreementCountArgs`](UserAgreementCountArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.count.result

> **result**: `$Utils.Optional`\<[`UserAgreementCountAggregateOutputType`](UserAgreementCountAggregateOutputType.md)\> \| `number`

#### model.UserAgreement.operations.create

> **create**: `object`

#### model.UserAgreement.operations.create.args

> **args**: [`UserAgreementCreateArgs`](UserAgreementCreateArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.create.result

> **result**: `$Utils.PayloadToResult`\<[`$UserAgreementPayload`]($UserAgreementPayload.md)\>

#### model.UserAgreement.operations.createMany

> **createMany**: `object`

#### model.UserAgreement.operations.createMany.args

> **args**: [`UserAgreementCreateManyArgs`](UserAgreementCreateManyArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.createMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.UserAgreement.operations.createManyAndReturn

> **createManyAndReturn**: `object`

#### model.UserAgreement.operations.createManyAndReturn.args

> **args**: [`UserAgreementCreateManyAndReturnArgs`](UserAgreementCreateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.createManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$UserAgreementPayload`]($UserAgreementPayload.md)\>[]

#### model.UserAgreement.operations.delete

> **delete**: `object`

#### model.UserAgreement.operations.delete.args

> **args**: [`UserAgreementDeleteArgs`](UserAgreementDeleteArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.delete.result

> **result**: `$Utils.PayloadToResult`\<[`$UserAgreementPayload`]($UserAgreementPayload.md)\>

#### model.UserAgreement.operations.deleteMany

> **deleteMany**: `object`

#### model.UserAgreement.operations.deleteMany.args

> **args**: [`UserAgreementDeleteManyArgs`](UserAgreementDeleteManyArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.deleteMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.UserAgreement.operations.findFirst

> **findFirst**: `object`

#### model.UserAgreement.operations.findFirst.args

> **args**: [`UserAgreementFindFirstArgs`](UserAgreementFindFirstArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.findFirst.result

> **result**: `$Utils.PayloadToResult`\<[`$UserAgreementPayload`]($UserAgreementPayload.md)\> \| `null`

#### model.UserAgreement.operations.findFirstOrThrow

> **findFirstOrThrow**: `object`

#### model.UserAgreement.operations.findFirstOrThrow.args

> **args**: [`UserAgreementFindFirstOrThrowArgs`](UserAgreementFindFirstOrThrowArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.findFirstOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$UserAgreementPayload`]($UserAgreementPayload.md)\>

#### model.UserAgreement.operations.findMany

> **findMany**: `object`

#### model.UserAgreement.operations.findMany.args

> **args**: [`UserAgreementFindManyArgs`](UserAgreementFindManyArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.findMany.result

> **result**: `$Utils.PayloadToResult`\<[`$UserAgreementPayload`]($UserAgreementPayload.md)\>[]

#### model.UserAgreement.operations.findUnique

> **findUnique**: `object`

#### model.UserAgreement.operations.findUnique.args

> **args**: [`UserAgreementFindUniqueArgs`](UserAgreementFindUniqueArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.findUnique.result

> **result**: `$Utils.PayloadToResult`\<[`$UserAgreementPayload`]($UserAgreementPayload.md)\> \| `null`

#### model.UserAgreement.operations.findUniqueOrThrow

> **findUniqueOrThrow**: `object`

#### model.UserAgreement.operations.findUniqueOrThrow.args

> **args**: [`UserAgreementFindUniqueOrThrowArgs`](UserAgreementFindUniqueOrThrowArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.findUniqueOrThrow.result

> **result**: `$Utils.PayloadToResult`\<[`$UserAgreementPayload`]($UserAgreementPayload.md)\>

#### model.UserAgreement.operations.groupBy

> **groupBy**: `object`

#### model.UserAgreement.operations.groupBy.args

> **args**: [`UserAgreementGroupByArgs`](UserAgreementGroupByArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.groupBy.result

> **result**: `$Utils.Optional`\<[`UserAgreementGroupByOutputType`](UserAgreementGroupByOutputType.md)\>[]

#### model.UserAgreement.operations.update

> **update**: `object`

#### model.UserAgreement.operations.update.args

> **args**: [`UserAgreementUpdateArgs`](UserAgreementUpdateArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.update.result

> **result**: `$Utils.PayloadToResult`\<[`$UserAgreementPayload`]($UserAgreementPayload.md)\>

#### model.UserAgreement.operations.updateMany

> **updateMany**: `object`

#### model.UserAgreement.operations.updateMany.args

> **args**: [`UserAgreementUpdateManyArgs`](UserAgreementUpdateManyArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.updateMany.result

> **result**: [`BatchPayload`](BatchPayload.md)

#### model.UserAgreement.operations.updateManyAndReturn

> **updateManyAndReturn**: `object`

#### model.UserAgreement.operations.updateManyAndReturn.args

> **args**: [`UserAgreementUpdateManyAndReturnArgs`](UserAgreementUpdateManyAndReturnArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.updateManyAndReturn.result

> **result**: `$Utils.PayloadToResult`\<[`$UserAgreementPayload`]($UserAgreementPayload.md)\>[]

#### model.UserAgreement.operations.upsert

> **upsert**: `object`

#### model.UserAgreement.operations.upsert.args

> **args**: [`UserAgreementUpsertArgs`](UserAgreementUpsertArgs.md)\<`ExtArgs`\>

#### model.UserAgreement.operations.upsert.result

> **result**: `$Utils.PayloadToResult`\<[`$UserAgreementPayload`]($UserAgreementPayload.md)\>

#### model.UserAgreement.payload

> **payload**: [`$UserAgreementPayload`]($UserAgreementPayload.md)\<`ExtArgs`\>

## Type Declaration

### other

> **other**: `object`

#### other.operations

> **operations**: `object`

#### other.operations.$executeRaw

> **$executeRaw**: `object`

#### other.operations.$executeRaw.args

> **args**: \[`TemplateStringsArray` \| [`PrismaClientKnownRequestError`](../variables/PrismaClientKnownRequestError.md), `any`[]\]

#### other.operations.$executeRaw.result

> **result**: `any`

#### other.operations.$executeRawUnsafe

> **$executeRawUnsafe**: `object`

#### other.operations.$executeRawUnsafe.args

> **args**: \[`string`, `any`[]\]

#### other.operations.$executeRawUnsafe.result

> **result**: `any`

#### other.operations.$queryRaw

> **$queryRaw**: `object`

#### other.operations.$queryRaw.args

> **args**: \[`TemplateStringsArray` \| [`PrismaClientKnownRequestError`](../variables/PrismaClientKnownRequestError.md), `any`[]\]

#### other.operations.$queryRaw.result

> **result**: `any`

#### other.operations.$queryRawUnsafe

> **$queryRawUnsafe**: `object`

#### other.operations.$queryRawUnsafe.args

> **args**: \[`string`, `any`[]\]

#### other.operations.$queryRawUnsafe.result

> **result**: `any`

#### other.payload

> **payload**: `any`

## Type Parameters

### ExtArgs

`ExtArgs` *extends* `$Extensions.InternalArgs` = `$Extensions.DefaultArgs`

### GlobalOmitOptions

`GlobalOmitOptions` = \{ \}
