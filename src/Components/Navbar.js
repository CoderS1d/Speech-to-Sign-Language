import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top py-3" id="mainNav" style={navStyle}>
            <div className="container px-4 px-lg-5">
                <Link to='/sign-kit/home' className="navbar-brand mb-0 h1" style={brandStyle}>
                    Ranguski
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><Link to='/sign-kit/home' className="nav-link active">Home</Link></li>
                        <li className="nav-item"><Link to='/sign-kit/convert' className="nav-link">Convert</Link></li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// Styles to make Navbar blend with the background
const navStyle = {
    background: "transparent", // Remove dark background
    position: "absolute",
    width: "100%",
    zIndex: 1000
};

const brandStyle = {
    color: "white", // Adjust text color for visibility
    fontWeight: "bold",
    fontSize: "20px",
    textDecoration: "none"
};

export default Navbar;
