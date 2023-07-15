import React, { FunctionComponent, useState } from 'react';
import { Customer } from '../../Models/Customer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';
import { faTrash ,faEdit} from '@fortawesome/free-solid-svg-icons'
import { isEditable } from '@testing-library/user-event/dist/utils';
import {toast,ToastContainer} from 'react-toastify';
import Swal from 'sweetalert2';

const Customers: FunctionComponent = () => {
  let customerModel:Customer= {} as Customer;
  const [customer, setCustomer] = useState<Customer>(customerModel);
  const [customersList, setCustomersList] = useState<Customer[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);

  const onChangeInput = (e:any) => {
    debugger;
     const { name, value } = e.target;
     let customerUpdate= {...customer,[name]:value};
     setCustomer(customerUpdate);
   
  }
  const onRemoveItem = function (index:number)
  {
    Swal.fire({
      title: 'Are you sure want to delete customer?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // var customerToDelete = customersList.find(x=>x.Id == id);
        // if(customerToEdit)
        // {
        //  setEditMode(true);
        //  setCustomer(customerToEdit);
    
        // }
      } 
      
    })
  //  orderDetailsState.splice(index, 1);
  //  setOrderDetails([...orderDetailsState]);
  }
  const onEditItem = function (id:number)
  {
    
    var customerToEdit = customersList.find(x=>x.Id == id);
    if(customerToEdit)
    {
     setEditMode(true);
     setCustomer(customerToEdit);

    }
  }
  const onCancelItem = function ()
  {
    debugger;
    setEditMode(false);
    ClearControls();
  }
  function ClearControls()
  {
    let customerObj:Customer= {Name:"", Address:"",City:"",GST:"",Id:0,Mobile:""} as Customer;
    setCustomer(customerObj);
  }

  const onAddItem = function ()
  {
    debugger;
    if(!customer.Name|| !customer.Name.trim())
    {
      toast.error("Please fill customer name")
    }
    else if(!customer.City|| !customer.City.trim())
    {
      toast.error("Please fill customer city")
    }
    else{
      var duplicateCustomer = customersList.find(x=>x.Name ==customer.Name && x.City ==customer.City );
      if(duplicateCustomer)
      {
        toast.error("Customer is added already")
      }
      else{
      let customers= [...customersList];
      customers.push(customer);
      setCustomersList(customers);
      ClearControls();
      toast.success("Customer is added successully");
      }
    }
    
  }
  const onUpdateItem = function ()
  {
    debugger;
    if(!customer.Name|| !customer.Name.trim())
    {
      toast.error("Please fill customer name")
    }
    else if(!customer.City|| !customer.City.trim())
    {
      toast.error("Please fill customer city")
    }
    else{
      var duplicateCustomer = customersList.find(x=>x.Name ==customer.Name && x.City ==customer.City );
      if(duplicateCustomer && duplicateCustomer.Id != customer.Id)
      {
        toast.error("saleItem is added already")
      }
      else{
           customersList.map(
          (customerEdit,index) => {
                if(customerEdit.Id==customer.Id)
                {
                  customerEdit.Name = customer.Name;
                  customerEdit.City = customer.City;
                  customerEdit.GST = customer.GST;
                  customerEdit.Mobile = customer.Mobile;
                  customerEdit.Address = customer.Address;
                }
          });
        setCustomersList([...customersList]);
        ClearControls();
        setEditMode(false);
        toast.success("Customer is updated successully");
      }
    }
      
  }

 
  return (
    <div>
        <ToastContainer />
  <div className="row align-items-start mt-1" >
                <div className="col">
                <label>Customer Name</label>
                <input type="text" name="Name" className="form-control" id="txtCustomerName" onChange={(e)=>{onChangeInput(e)}} placeholder="Customer Name" 
                value={customer.Name} />
                </div> 
                <div className="col">
                <label>Mobile</label>
                <input type="text" name="Mobile" className="form-control" id="txtMobile" onChange={(e)=>{onChangeInput(e)}}  placeholder="Mobile" 
                value={customer.Mobile} />
                </div>
                <div className="col">
                <label>GST</label>
                <input type="text"  name="GST" className="form-control" id="txtGST" onChange={(e)=>{onChangeInput(e)}}  placeholder="GST" 
                value={customer.GST} />
                </div>
                <div className="col">
                <label>City</label>
                <input type="text" name="City" className="form-control" id="txtCity" onChange={(e)=>{onChangeInput(e)}}  placeholder="City" 
                value={customer.City} />
                </div>
            </div>
           
            <div className="row align-items-start mt-1" >
                <div className="col-md-5">
                <label>Address</label>
                <textarea name="Address" onChange={(e)=>{onChangeInput(e)}}   className="form-control" id="txtAddress" placeholder="Address" rows={3}
                value={customer.Address} />
                </div>
            </div> 
            <div className="mt-2 pull-right">
            {
            !editMode &&
            <button id="btnSave" type="button" className="btn btn-primary" value="Add" onClick={()=>{onAddItem()}} >Add</button>
            }
            {
            editMode &&
                  <>
                  <button id="btnUpdate" type="button" className="btn btn-primary" value="Add" onClick={()=>{onUpdateItem()}} >Update</button>
                  <button id="btnSave" type="button" className="btn btn-secondary" value="Add" onClick={()=>{onCancelItem()}} >Cancel</button>
                  </> 
            } 
            </div>
            <div className="row align-items-start mt-2 mytable" >
                <div className="col">
               <table className="tbl" >
                <thead>
                <tr>
                    <td>Action</td>
                    <td>Name</td>
                    <td>City</td>
                    <td>Mobile</td>
                    <td>GST</td>
                    <td>Address</td>
                </tr></thead>
                <tbody>
                {
                    customersList.map(
                        (customer,index) => 
                        <tr>
                        <td style={{width:"2%"}} > <FontAwesomeIcon icon={faTrash} onClick={()=>{onRemoveItem(index)}} />
                        <FontAwesomeIcon icon={faEdit} className="ms-2" onClick={()=>{onEditItem(customer.Id)}} /></td>
                        <td style={{width:"20%"}} >{customer.Name}</td>
                        <td style={{width:"20%"}} >{customer.City}</td>
                        <td style={{width:"15%"}} >{customer.Mobile}</td>
                        <td style={{width:"15%"}} >{customer.GST} </td>
                        <td style={{width:"30%"}} >{customer.Address}</td>
                        </tr>
                    )
                   
               }
               
                </tbody>
               </table>
              
                </div>
            </div>
    </div>
  );
}

export { Customers};
