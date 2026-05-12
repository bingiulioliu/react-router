import { useState } from "react";
import { Link } from "react-router";


function Navbar() {

    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to='/'>Homepage</Link></li>
                        <li className="nav-item"><Link to='/prodotti'>Prodotti</Link></li>
                        <li className="nav-item"><Link to='/chi-siamo'>About Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
};

export default Navbar;