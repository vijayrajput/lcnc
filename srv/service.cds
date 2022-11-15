using { BASApp as my } from '../db/schema';

using BASApp from '../db/schema';

@path : 'service/BASApp'
service BASAppService
{
    @odata.draft.enabled
    @Aggregation.CustomAggregate#price : 'Edm.Decimal'
    entity Books as
        projection on my.Books
        {
            *,
            price
                @(Aggregation.default : #sum)
        };

    annotate Books with @restrict :
    [
        { grant : [ '*' ], to : [ 'authenticated-user' ] }
    ];

    annotate Books with @Aggregation.ApplySupported : 
    {
        $Type : 'Aggregation.ApplySupportedType',
        GroupableProperties :
        [
            name
        ],
        AggregatableProperties :
        [
            {
                Property : price
            }
        ]
    };
}

annotate BASAppService with @requires :
[
    'authenticated-user'
];
