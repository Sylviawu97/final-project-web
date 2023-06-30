import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";


const Navbar =()=>{
    return(
        <div  className='navbar'>
        <img 
         src=""
         alt=""/>

       <Link className='link' to="/">About</Link>
       <Link className='link' to="/service">Service</Link>
       <Link className='link' to="/career">Career Advice</Link>
       <Link className='link' to="/information">PI Form</Link>
       <Link className='link' to="/contact">Contact Us</Link>
       </div>
    );

};

export default Navbar;