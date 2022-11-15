namespace BASApp;

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    extensible,
    managed,
    temporal
}
from '@sap/cds/common';

entity Books
{
    key ID : UUID
        @Core.Computed;
    name : String(100);
    price : Decimal;
}
