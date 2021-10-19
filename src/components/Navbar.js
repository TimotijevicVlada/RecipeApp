import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">Recipe App</div>
            <div className="icons">
                <Link to="/" style={{color: "black"}}>
                    <i className="fas fa-home"></i>
                </Link>
                <Link to="/favorites">
                    <i className="fas fa-heart"></i>
                </Link>
                
            </div>
        </div>
    )
}

export default Navbar;
