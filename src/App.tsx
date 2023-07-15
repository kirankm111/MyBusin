import React from 'react';
import './App.css';
import { Customers } from './Components/Customer/Customers';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import {Sale} from './Components/Sales/Sale';
import 'react-toastify/dist/ReactToastify.css';
import { SaleItems } from './Components/SaleItems/SaleItems';
import PrintSale from './Components/Sales/Print';
import { PrintOrder } from './Models/PrintOrder';
import { OrderDetails } from './Models/OrderDetails';
import AppRoutes from './Routes/Routes';
import { Outlet } from 'react-router-dom';

function App() {
  let printOrderModel:PrintOrder= { } as PrintOrder;
  printOrderModel.OrderDetails=[];
  let orderDetails= {Id:0,CGSTAmmount:0,Qunatity:0,SGSTAmmount:0,CGSTRate:0,
    HCNCode:"",ItemDescription:"",Rate:0,SGSTRate:0,ItemId:0,TaxableValue:0,TotalPrice:0} as OrderDetails;
    printOrderModel.OrderDetails.push(orderDetails);
  return (
    <div className="App">
        <Header></Header>
        <div className="" style={{marginBottom:"3%",marginLeft:"2%",marginRight:"2%"}}>
     {/* <AppRoutes></AppRoutes> */}
      {/* <PrintSale printOrder={printOrderModel} ></PrintSale> */}
      {/* <Customers></Customers> */}
      {/* <SaleItems></SaleItems> */}
      <Outlet></Outlet>
      {/* <AppRoutes></AppRoutes> */}
      </div>
      
      <Footer></Footer> 
    </div>
  );
}

export default App;
