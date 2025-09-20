import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg fixed-top py-3 navbar-transparent" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link to='/home' className="navbar-brand mb-0 h1 nav-brand">
                    SignSpeak
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 nav-list">
                        <li className="nav-item">
                            <Link to='home' className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}>
                                <span className="nav-link-text">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/features' className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}>
                                <span className="nav-link-text">Features</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/convert' className={`nav-link ${location.pathname === '/convert' ? 'active' : ''}`}>
                                <span className="nav-link-text">Convert</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;