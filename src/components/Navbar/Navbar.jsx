import React from 'react';
import './navbar.css';

export default function Navbar() {
    function toggleMenu() {
        var navbarContent = document.querySelector('.navbar-content');
        navbarContent.classList.toggle('active');
    }

    return (
        <div className="navbar-main">
            <div className="toggle-button" onClick={toggleMenu}>
                <i className="fa fa-bars"></i>
            </div>

            <div className="navbar-content">
                <ul className="nav-item">
                    <li><a href="pages/Home.html">Home</a></li>
                    <li><a href="pages/About.html">About</a></li>
                    <li><a href="pages/Services.html">Services</a></li>
                    <li><a href="pages/Contact.html">Contact</a></li>
                    <li><a href="pages/Login.html">Login</a></li>
                </ul>
            </div>
        </div>
    );
}
