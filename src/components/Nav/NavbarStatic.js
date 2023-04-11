import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';


const NavbarStatic = () => {
    return (
        <header className="navbar navbarStatic">
                <div className="navbar-logo">
                    <Link to="/">
                        <img style={{width: '100px'}} src="https://images.ctfassets.net/zr788oaaef6o/1ysZz8oSw6h6bJDRPUfOHf/098fa118939e8648b42c2eb20be29c51/Ska__rmavbild_2023-02-07_kl._21.01.31.png" alt="logo" />
                    </Link>
                </div>
                {/* desktop */}
                <ul className="links">
                    <NavLink to="/meny"><span>Meny</span></NavLink>
                    <NavLink to="/kottlador"><span>Köttlådor</span></NavLink>
                    <NavLink to="/öppettider"><span>Öppettider</span></NavLink>
                    <NavLink to="/karta"><span>Hitta hit</span></NavLink>
                    <a href="https://www.instagram.com/forsmans_pa_aspoja/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i> </a>
                    <a href="https://www.facebook.com/people/Forsmans-p%C3%A5-Asp%C3%B6ja/100041170162114/" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i> </a>
                </ul>
                {/* hamburger */}
                <div id="hamburger">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu" className="menu">
                        <NavLink to="/meny"><li>Meny</li></NavLink>
                        <NavLink to="/kottlador"><li>Köttlådor</li></NavLink>
                        <NavLink to="/öppettider"><li>Öppettider</li></NavLink>
                        <NavLink to="/karta"><li>Hitta hit</li></NavLink>
                    </ul>
                </div>
        </header>
    )
}

export default NavbarStatic;