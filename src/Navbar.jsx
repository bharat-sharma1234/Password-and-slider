import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
        <div class="nav_container">
  <div class="logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Nyumbani_Hotel_Logo.png"/>
    <p>Logo</p>
  </div>
  <div class="menu">
    <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li> <Link to='/about'> About Us</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>SignUp</Link></li>
                </ul>
  </div>
  <div class="search">
    <input type="text" placeholder="enter keyword"/>
  </div>
  
</div>
        </>
    )
    
}

export default Navbar