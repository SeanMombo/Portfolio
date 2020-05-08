import React from 'react';
import {
    Link
  } from "react-router-dom";
import "./navbar.styles.scss"

const Navbar = () => (
    <div className='navbar'>
        
        <Link className="name" to="/">sean mombo</Link>
        <Link to="/">About</Link>
        <Link to="/">portfolio</Link>
        <Link to="/">games</Link>
        <Link to="/">contact</Link>
        <Link to="/">resume</Link>
        {/* <a className="navButton name" href="/#">sean mombo</a> 
         <a className="navButton" href="/#">About</a>
        <a className="navButton" href="/#">portfolio</a>
        <a className="navButton" href="/#">games</a>
        <a className="navButton" href="/#">contact</a>
        <a className="navButton" href="/#">resume</a> */}
    </div>
)

export default Navbar;
