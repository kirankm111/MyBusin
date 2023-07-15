import React, { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { Customers } from "../Components/Customer/Customers";
import { SaleItems } from "../Components/SaleItems/SaleItems";
import { Sale } from "../Components/Sales/Sale";

const AppRoutes: FunctionComponent = () => {       
    return (                
        <BrowserRouter>
        <Routes >
            <Route index path="/" element={<App/>} />
            {/* <Route index element={<Sale />} /> */}
            <Route path="/Customer" element={<Customers/>} />
            <Route path="/SaleItems" element={<SaleItems/>} />
        </Routes>
        </BrowserRouter>
           
    )
};

export default AppRoutes;
