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
import { Outlet,  } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Purchase } from './Components/Purchases/Pruchase';
import { SalesList } from './Components/SalesList/SalesList';
function App() {
  
  return (
    
     <div className="App">
      <BrowserRouter>
       <Header></Header>
       <div className="" style={{marginBottom:"3%",marginLeft:"2%",marginRight:"2%"}}>
        <Routes>
       <Route index path="/"  element={<Sale/>} />
       <Route path="/Customers" element={<Customers/>} />
       <Route path="/SaleItems" element={<SaleItems/>} />
       <Route path="/Purchase" element={<Purchase/>} />
       <Route path="/SaleList" element={<SalesList/>} />
       </Routes>
       </div>
       </BrowserRouter>
     </div>
  );
}

export default App;
