import React from 'react'
import { NavLink } from 'react-router-dom';
import "../style/Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row py-2">
                    <div className="col-md-6">
                        <NavLink to="/" className="headerLink" style={{ fontSize: "40px" }}>CMS</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end pt-3">
                        <NavLink to="/add" className="headerLink px-4 pt-2">Add</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;