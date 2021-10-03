import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Head.css'
const Head = () => {
    return (
        <div className="website">
            <img className="logo" src={logo} alt="" />
            <nav><NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Order</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Head;