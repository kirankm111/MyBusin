import React, { FunctionComponent, useState } from 'react';
import { SaleItem } from '../../Models/SaleItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';
import { faTrash ,faEdit} from '@fortawesome/free-solid-svg-icons'
import { isEditable } from '@testing-library/user-event/dist/utils';
import {toast,ToastContainer} from 'react-toastify';
import Swal from 'sweetalert2';

const SaleItems: FunctionComponent = () => {
  let saleItemModel:SaleItem= {} as SaleItem;
  const [saleItem, setSaleItem] = useState<SaleItem>(saleItemModel);
  const [saleItemList, setSaleItemList] = useState<SaleItem[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);

  const onChangeInput = (e:any) => {
    debugger;
     const { name, value } = e.target;
     let saleItemUpdate= {...saleItem,[name]:value};
     setSaleItem(saleItemUpdate);
   
  }
  const onRemoveItem = function (index:number)
  {
    Swal.fire({
      title: 'Are you sure want to delete SaleItem?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // var saleItemToDelete = saleItemList.find(x=>x.Id == id);
        // if(saleItemToEdit)
        // {
        //  setEditMode(true);
        //  setSaleItem(saleItemToEdit);
    
        // }
      } 
      
    })
  //  orderDetailsState.splice(index, 1);
  //  setOrderDetails([...orderDetailsState]);
  }
  const onEditItem = function (id:number)
  {
    
    var saleItemToEdit = saleItemList.find(x=>x.Id == id);
    if(saleItemToEdit)
    {
     setEditMode(true);
     setSaleItem(saleItemToEdit);

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
    let saleItemObj:SaleItem= {Id:0, ItemDescription:"",CGSTRate:9,SGSTRate:9,CurrentRate:0,HCNCode:""} as SaleItem;
    setSaleItem(saleItemObj);
  }

  const onAddItem = function ()
  {
    debugger;
    if(!saleItem.ItemDescription|| !saleItem.ItemDescription.trim())
    {
      toast.error("Please fill Item Description name")
    }
    else if(saleItem.SGSTRate!=0)
    {
      toast.error("Please fill State GST Rate")
    }
    else if(saleItem.CGSTRate!=0)
    {
      toast.error("Please fill Central GST Rate")
    }
    else if(saleItem.CurrentRate!=0)
    {
      toast.error("Please fill saleItem city")
    }
    else if(!saleItem.HCNCode|| !saleItem.HCNCode.trim())
    {
      toast.error("Please fill HCN Code city")
    }
    else{
      var duplicatesaleItem = saleItemList.find(x=>x.ItemDescription ==saleItem.ItemDescription  );
      if(duplicatesaleItem)
      {
        toast.error("saleItem is added already")
      }
      else{
      let saleItems= [...saleItemList];
      saleItems.push(saleItem);
      setSaleItemList(saleItems);
      ClearControls();
      toast.success("saleItem is added successully");
      }
    }
    
  }
  const onUpdateItem = function ()
  {
    debugger;
    if(!saleItem.ItemDescription|| !saleItem.ItemDescription.trim())
    {
      toast.error("Please fill Item Description name")
    }
    else if(saleItem.SGSTRate!=0)
    {
      toast.error("Please fill State GST Rate")
    }
    else if(saleItem.CGSTRate!=0)
    {
      toast.error("Please fill Central GST Rate")
    }
    else if(saleItem.CurrentRate!=0)
    {
      toast.error("Please fill SaleItem Current Rate")
    }
    else if(!saleItem.HCNCode|| !saleItem.HCNCode.trim())
    {
      toast.error("Please fill HCN Code")
    }
    else{
      var duplicatesaleItem = saleItemList.find(x=>x.ItemDescription ==saleItem.ItemDescription  );
      if(duplicatesaleItem && duplicatesaleItem.Id != saleItem.Id)
      {
        toast.error("saleItem is added already")
      }
      else{
            saleItemList.map(
              (saleItemEdit,index) => {
                    if(saleItemEdit.Id==saleItem.Id)
                    {
                      saleItemEdit.ItemDescription = saleItem.ItemDescription;
                      saleItemEdit.CGSTRate = saleItem.CGSTRate
                      saleItemEdit.SGSTRate = saleItem.SGSTRate;
                      saleItemEdit.CurrentRate = saleItem.CurrentRate;
                      saleItemEdit.HCNCode = saleItem.HCNCode;
                    }
              });
            setSaleItemList([...saleItemList]);
            ClearControls();
            setEditMode(false);
            toast.success("SaleItem is updated successully");
      }
    }
      
  }

 
  return (
    <div>
        <ToastContainer />
  <div className="row align-items-start mt-1" >
                <div className="col">
                <label>Sale Item Description</label>
                <input type="text" name="ItemDescription" className="form-control" id="txtsaleItemName" onChange={(e)=>{onChangeInput(e)}} placeholder="Sale Item Description" 
                value={saleItem.ItemDescription} />
                </div> 
                <div className="col">
                <label>Current Rate</label>
                <input type="text" name="CurrentRate" className="form-control" id="txtMobile" onChange={(e)=>{onChangeInput(e)}}  placeholder="Current Rate" 
                value={saleItem.CurrentRate} />
                </div>
                <div className="col">
                <label>Central GST Rate</label>
                <input type="text"  name="CGSTRate" className="form-control" id="txtGST" onChange={(e)=>{onChangeInput(e)}}  placeholder="Central GST Rate" 
                value={saleItem.CGSTRate} />
                </div>
                <div className="col">
                <label>State GST Rate</label>
                <input type="text" name="SGSTRate" className="form-control" id="txtCity" onChange={(e)=>{onChangeInput(e)}}  placeholder="State GST Rate" 
                value={saleItem.SGSTRate} />
                </div>
            </div>
           
            <div className="row align-items-start mt-1" >
                <div className="col-md-3">
                <label>HCN Code</label>
                <input type="text" name="HCNCode" onChange={(e)=>{onChangeInput(e)}}   className="form-control" id="txtHcnCode" placeholder="HCN Code" 
                value={saleItem.HCNCode} />
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
                    <td>Item Description</td>
                    <td>Current Rate</td>
                    <td>Central GST Rate</td>
                    <td>State GST Rate</td>
                    <td>HCN Code</td>
                </tr></thead>
                <tbody>
                {
                    saleItemList.map(
                        (saleItem,index) => 
                        <tr>
                        <td style={{width:"2%"}} > <FontAwesomeIcon icon={faTrash} onClick={()=>{onRemoveItem(index)}} />
                        <FontAwesomeIcon icon={faEdit} className="ms-2" onClick={()=>{onEditItem(saleItem.Id)}} /></td>
                        <td style={{width:"20%"}} >{saleItem.ItemDescription}</td>
                        <td style={{width:"20%"}} >{saleItem.CurrentRate}</td>
                        <td style={{width:"15%"}} >{saleItem.CGSTRate}</td>
                        <td style={{width:"15%"}} >{saleItem.SGSTRate} </td>
                        <td style={{width:"30%"}} >{saleItem.HCNCode}</td>
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

export { SaleItems};
