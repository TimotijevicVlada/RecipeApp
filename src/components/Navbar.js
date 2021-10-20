import React from 'react';
import {Link} from "react-router-dom";

const Navbar = ({totalFav}) => {
    return (
        <div className="navbar">
            <div className="logo"><h2>Recipe App</h2></div>
            <div className="icons">
                <Link to="/" style={{color: "black"}}>
                    <i className="fas fa-home"></i>
                </Link>
                <Link to="/favorites">
                    <i className="fas fa-heart"><span className="fav_num">{totalFav}</span></i>
                </Link>
                
            </div>
        </div>
    )
}

export default Navbar;
