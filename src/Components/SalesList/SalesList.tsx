//import logo from './logo.svg';
import React, { FunctionComponent, useState } from 'react';
import { DropdownSource } from '../../Models/Dropdown';
import { SaleItem } from '../../Models/SaleItem';
import { Order } from '../../Models/Order';
import { OrderDetails } from '../../Models/OrderDetails';
import DropdownControl from '../Dropdown/DropdownControl';
import './Sale.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPlusSquare ,faEdit} from '@fortawesome/free-solid-svg-icons'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const SalesList: FunctionComponent = () => {
   
   let saleModel:Order= {} as Order;
   let dropdownSource = {} as DropdownSource;
   dropdownSource.Data= [];
   saleModel.OrderDetails=[];
   let ItemData:SaleItem[] = 
   [{Id:1,ItemDescription:"5.5 MM Plane",CGSTRate:9,SGSTRate:9,HCNCode:"7214",CurrentRate:67},
   {Id:2,ItemDescription:"5.5 MM TMT",CGSTRate:9,SGSTRate:9,HCNCode:"7214",CurrentRate:67},
   {Id:3,ItemDescription:"6 MM TMT",CGSTRate:9,SGSTRate:9,HCNCode:"7214",CurrentRate:67},
   {Id:4,ItemDescription:"7 MM",CGSTRate:9,SGSTRate:9,HCNCode:"7214",CurrentRate:67},
   {Id:5,ItemDescription:"4 MM",CGSTRate:9,SGSTRate:9,HCNCode:"7214",CurrentRate:67},
   {Id:6,ItemDescription:"2.7 MM",CGSTRate:9,SGSTRate:9,HCNCode:"7214",CurrentRate:67},
   {Id:7,ItemDescription:"Binding Wire 10 KG",CGSTRate:9,SGSTRate:9,HCNCode:"7214",CurrentRate:67},
   {Id:8,ItemDescription:"Binding Wire 25 KG",CGSTRate:9,SGSTRate:9,HCNCode:"7214",CurrentRate:67},
   {Id:9,ItemDescription:"5.0 MM Plane",CGSTRate:9,SGSTRate:9,HCNCode:"7214",CurrentRate:67}];
   ItemData.forEach(x=>{dropdownSource.Data.push({Key:x.Id.toString(),Value:x.ItemDescription})});
   let orderDetails= {Id:0,CGSTAmmount:0,Qunatity:0,SGSTAmmount:0,CGSTRate:0,
    HCNCode:"",ItemDescription:"",Rate:0,SGSTRate:0,ItemId:0,TaxableValue:0,TotalPrice:0} as OrderDetails;
   saleModel.OrderDetails.push(orderDetails);

   const [saleDetail, setSaleDetail] = useState<Order>(saleModel);
   const [orderDetailsState, setOrderDetails] = useState<OrderDetails[]>([orderDetails]);
   const onItemChange = function (value:string,index:number)
   {
    var id=parseInt(value);
    var dropDown =  ItemData.filter(x=>x.Id= id);
    
    saleDetail.OrderDetails[index].HCNCode= dropDown[0].HCNCode;
    saleDetail.OrderDetails[index].CGSTRate=dropDown[0].CGSTRate;
    saleDetail.OrderDetails[index].SGSTRate=dropDown[0].SGSTRate;
    setOrderDetails([...orderDetailsState]);
   }
  
const onChangeInput = (e:any, employeeId:number,index:number) => {
    debugger;
    const { name, value } = e.target
     orderDetailsState[index].Qunatity=  parseInt(value);
     setOrderDetails([...orderDetailsState]);
   
  }
   const onAddItem = function ()
   {

    let orderDetails= {CGSTAmmount:0,Qunatity:0,SGSTAmmount:0,CGSTRate:0,
        HCNCode:"",ItemDescription:"",Rate:0,SGSTRate:0,ItemId:0,TaxableValue:0,TotalPrice:0} as OrderDetails;
        orderDetailsState.push(orderDetails);
    setOrderDetails([...orderDetailsState]);
   }
   const onRemoveItem = function (index:number)
   {
    orderDetailsState.splice(index, 1);
    setOrderDetails([...orderDetailsState]);
   }
  return (
        <div >
            <div className="row align-items-start mt-1" >
                <div className="col">
                <label>Customer Name</label>
                <input type="text" className="form-control" id="txtCustomerName" placeholder="Customer Name" 
                value={saleModel.CustomerName} />
                </div> 
                <div className="col">
                <label>Mobile</label>
                <input type="text" className="form-control" id="txtMobile" placeholder="Mobile" 
                value={saleModel.Mobile} />
                </div>
                <div className="col">
                <label>GST</label>
                <input type="text" className="form-control" id="txtGST" placeholder="GST" 
                value={saleModel.GST} />
                </div>
            </div>
            <div className="row align-items-start mt-1" >
                <div className="col-md-5">
                <label>Address</label>
                <textarea  className="form-control" id="txtAddress" placeholder="Address" rows={3}
                value={saleModel.Address} />
                </div>
            </div>  
            <div className="mt-2 pull-right">
            <FontAwesomeIcon icon={faPlusSquare} onClick={()=>{onAddItem()}} />
            </div>
            <div className="row align-items-start mt-2 mytable" >
                <div className="col">
               <table className="tbl" >
                <thead>
                <tr>
                    <td>Remove</td>
                    <td>Description of Goods</td>
                    <td>HSN Code</td>
                    <td>Quantity</td>
                    <td>Rate</td>
                    <td>Taxable Value</td>
                    <td>CGST Rate</td>
                    <td>CGST Amt</td>
                    <td>SGST Rate</td>
                    <td>SGST Amt</td>
                    <td>Tax Value</td>
                    <td >Total Price</td>
                </tr></thead>
                <tbody>
                {
                    orderDetailsState.map(
                        (order,index) => 
                        <tr>
                        <td style={{width:"5%"}} > <FontAwesomeIcon icon={faTrash} onClick={()=>{onRemoveItem(index)}} />
                        <FontAwesomeIcon icon={faEdit} className="ms-2" onClick={()=>{onRemoveItem(index)}} /></td>
                        <td style={{width:"18%"}} ><DropdownControl Data={dropdownSource.Data} Id={index.toString()} Text={"Item"} onChange={(val)=>{onItemChange(val,index)}}/></td>
                        <td style={{width:"5%"}} >{order.HCNCode}</td>
                        <td style={{width:"8%"}} ><input type="text" style={{width:"99%"}} name="Qunatity" onChange={(e)=>{onChangeInput(e,order.Id,index)}} value={order.Qunatity.toString()}  /></td>
                        <td style={{width:"5%"}} >{order.Rate} </td>
                        <td style={{width:"9%"}} >{order.TaxableValue}</td>
                        <td style={{width:"5%"}} >{order.CGSTRate}</td>
                        <td style={{width:"8%"}} >{order.CGSTAmmount}</td>
                        <td style={{width:"5%"}} >{order.SGSTRate}</td>
                        <td style={{width:"8%"}} >{order.SGSTAmmount}</td>
                        <td style={{width:"9%"}} >{order.TaxableValue}</td>   
                        <td style={{width:"9%"}} >{order.TotalPrice}</td>
                        </tr>
                    )
                   
               }
               
                </tbody>
               </table>
              
                </div>
            </div>
            <div className="row align-items-start mytable mt-4">
                <div className='col'>
                    <table className='tbl'>
                        <tr>
                          <td style={{width:"70%"}} ></td>  <td style={{width:"20%"}}>Total Amount Before Tax</td><td style={{width:"10%"}}>{24234324}</td>
                        </tr>
                        <tr>
                        <td  ></td> <td>Added: SGST 9% </td><td>{0}</td>
                        </tr>
                        <tr>
                        <td ></td><td>Added: CGST 9% </td><td>{0}</td>
                        </tr>
                        <tr>
                        <td ></td><td>Total Amount After Tax</td><td><label  style={{textAlign:"center"}}>{0}</label></td>
                        </tr>
                        </table>
                        </div>
            </div>
            <div className="row justify-content-start">
                <div className="col">
                    <table className='tbl'>
                        <tr>
                            <td style={{width:"30%"}}>
                            Bank Details: Bank of Baroda Peddapuram<br></br>
                            Bank A/c No : 5035020000286<br></br>
                            IFSC Code   : 00000000
                            </td>
                            <td style={{width:"40%"}}>

                            </td>
                            <td style={{width:"30%"}}>
                            Certified that perticulers given above true and correct.
                            For <b>Sri Lakshmi Narayana Uma Small Scale Industry</b>
                            </td>
                        </tr>
                    </table>
                </div>
  </div>
             
        </div>
    
  );
}

export { SalesList};
