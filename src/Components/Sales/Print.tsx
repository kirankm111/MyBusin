import React, { FunctionComponent } from 'react';
import { PrintOrder } from '../../Models/PrintOrder';
import './Print.css';

interface IprintOrderProps
{
    printOrder:PrintOrder
}
const PrintSale: FunctionComponent<IprintOrderProps> = ({printOrder}) => {
 
  return (
    <div className="App">
       <div className="container bootdey mt-4" style={{border:"1px solid black"}}>
        <div style={{textAlign:"center",fontSize:"20px"}}> <strong>Invoice</strong></div>
<div className="row invoice row-printable">
    <div className="col-md-12">
        <div className="panel panel-default plain" id="dash_0">
            <div className="panel-body p30">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="invoice-from" >
                            <ul className="list-unstyled right" >
                                <li><strong>SRI lAKSHMI NARAYANA UMA SMALL SCALE INDUSTRY</strong></li>
                                <li>GSTIN: 37AFMPY1432M2ZS</li>
                                <li>#3-134, Main Road, Singampalli</li>
                                <li>Rangampeta Mandal, East Godavari District</li>
                                <li>Andhra Pradesh-533343</li>
                                <li>Cell :9849689888, 9553797506</li>
                            </ul>
                        </div>
                    
                    </div>
                    <div className="col-lg-6">
                        <div className="invoice-from" style={{float:"right"}}>
                            
                            <ul className="list-unstyled mb0" style={{textAlign:"right"}}>
                                    <li><strong>Invoice No: </strong> #{printOrder.Id}</li>
                                    <li><><strong>Invoice Date:</strong>{printOrder.Date} </></li>
                                </ul>
                                <ul className="list-unstyled" style={{textAlign:"right"}}>
                                <li><strong>Invoiced To</strong></li>
                                <li>{printOrder.CustomerName}</li>
                                <li>{printOrder.CustomerGST}</li>
                                <li>{printOrder.CustomerCity}</li>
                                <li>{printOrder.CustomerAddress}</li>
                                <li>{printOrder.CustomerMobile}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="invoice-details mt25">
                           
                        </div>
                        <div className="invoice-to mt25">
                           
                        </div>
                        <div className="invoice-items">
                            <div className="table-responsive" style={{"overflow": "hidden","outline": "none"}} >
                                
                                <table className="table table-bordered" >
                <thead>
                <tr>
                    <th>Description of Goods</th>
                    <th>HSN Code</th>
                    <th>Quantity</th>
                    <th>Rate</th>
                    <th>Taxable Value</th>
                    <th>CGST Rate</th>
                    <th>CGST Amt</th>
                    <th>SGST Rate</th>
                    <th>SGST Amt</th>
                    <th>Tax Value</th>
                    <th >Total Price</th>
                </tr></thead>
                <tbody>
                {
                   printOrder.OrderDetails.map(
                        (order,index) => 
                        <tr>
                        <td style={{width:"18%"}} >{order.ItemDescription}</td>
                        <td style={{width:"5%"}} >{order.HCNCode}</td>
                        <td style={{width:"8%"}} >{order.Qunatity}</td>
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
               <table className="table table-bordered">
                <tbody>
                        <tr>
                          <td style={{width:"70%"}} ></td>  <th style={{width:"20%"}}>Total Amount Before Tax</th><td style={{width:"10%"}}>{24234324}</td>
                        </tr>
                        <tr>
                        <td  ></td> <th>Added: SGST 9% </th><td>{0}</td>
                        </tr>
                        <tr>
                        <td ></td><th>Added: CGST 9% </th><td>{0}</td>
                        </tr>
                        <tr>
                        <td ></td><th>Total Amount After Tax</th><td><label  style={{textAlign:"center"}}>{0}</label></td>
                        </tr>
                        </tbody>
                        </table>
                        <table className="table table-bordered">
                            <thead>
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
                        </thead>
                    </table>
                            </div>
                        </div>
                        {/* <div className="invoice-footer mt25">
                            <p className="text-center">Generated on Monday, October 08th, 2015 <a href="#" className="btn btn-default ml15"><i className="fa fa-print mr5"></i> Print</a></p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    </div>
  );
}

export default PrintSale;
