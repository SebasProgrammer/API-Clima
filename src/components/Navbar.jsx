import React from "react";
import '../App.css'

const Navbar = () => {
    return (
        <div className="nav">
            <nav className="navbar text-light mb-5"></nav>
            <div className="container-fluid">
                <h3 className="mx-auto">Predicción Meteorológica</h3>
            </div>
        </div>
    );
};

export default Navbar;