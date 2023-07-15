import { OrderDetails } from "./OrderDetails";

export interface PrintOrder
{
    Id:number;
    Date:Date;
    CustomerName:string;
    CustomerMobile:string;
    CustomerGST:string;
    CustomerCity:string;
    CustomerAddress:string
    Mobile:string;
    GST:string;
    Address:string;
    OrderDetails:OrderDetails[];
    OrderTotal:number;
    OrderGST:number;
    
}
