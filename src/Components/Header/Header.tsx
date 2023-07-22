import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Header() {
  return (
     /* <div className="siteheader" >
            <div style={{textAlign: "center" , padding:"1%"}} >
               SRI LAKSHMINARAYANA UMA SMALL SCALE INDUSTRY
            </div>
        </div> */
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="collapse navbar-collapse" id="navbarNavDarkDropdown" style={{width:"10%"}}>
  <ul className="navbar-nav">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Menu
      </a>
      <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
        <li><Link className="dropdown-item" to="/">Home</Link></li>
        <li><Link className="dropdown-item" to="/Customers">Customers</Link></li>
        <li><Link className="dropdown-item" to="/SaleItems">Sale Items</Link></li>
        <li><Link className="dropdown-item" to="/Purchases">Raw Meterial Purchases</Link></li>
        <li><Link className="dropdown-item" to="/SalesList">Sales List</Link></li>
      </ul>
    </li>
  </ul>
  <a className="navbar-brand" style={{marginLeft:"26%"}} href="#">SRI LAKSHMI NARAYANA UMA SMALL SCALE INDUSTRY</a>
</div>

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

</nav>
</div>
  );
}

export default Header;
