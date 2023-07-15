//import logo from './logo.svg';
import React, { FunctionComponent } from 'react';
import { DropdownSource } from '../../Models/Dropdown';

const DropdownControl :FunctionComponent<DropdownSource> = props =>  {
  const handleChange = (event:any) => {
       props.onChange(event.target.value);
   // setValue(event.target.value);
 
  };
  //const [value, setValue] = React.useState('fruit');
  return (
//     <div className="dropdown">
//   <button className="btn btn-secondary dropdown-toggle" type="button" id={props.Id} data-bs-toggle="dropdown" aria-expanded="false">
//    {props.Text}
//   </button>
//   <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//   {props.Data.map(item => (  
      
//         <li key={item.Key}> 
//           <a className="dropdown-item" data-key={item.Key}  href="#" onClick={(e)=>{props.onChange(item.Key);}}>{item.Value} </a>
//         </li>
//         ))}  
//   </ul>
// </div>
<select onChange={handleChange} className="form-select" id={props.Id} name={props.Id}>
<option value={0}>Select</option>
{props.Data.map(item => (  
      <option value={item.Key}>{item.Value}</option>
      
      ))}  
    </select>
    
  );
}

export default DropdownControl;
