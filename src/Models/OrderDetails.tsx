export interface OrderDetails
{
    Id:number;
    ItemId: number;
    ItemDescription:string;
    Qunatity:number;
    HCNCode:string;
    Rate:number;
    TaxableValue:number;
    CGSTAmmount:number;
    SGSTAmmount:number;
    CGSTRate:number;
    SGSTRate:number;
    TotalPrice:number;
}
