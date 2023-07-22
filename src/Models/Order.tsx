import { OrderDetails } from "./OrderDetails";

export interface Order
{
    Id:number;
    Date:Date;
    CustomerName:string;
    Mobile:string;
    GST:string;
    Address:string;
    OrderDetails:OrderDetails[];
    OrderTotal:number;
    OrderGST:number;
    
}
