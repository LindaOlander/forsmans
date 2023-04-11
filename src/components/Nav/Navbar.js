import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
    return (
        <header className="navbar">
            {/* <div className="nav"> */}
                <div className="navbar-logo">
                    {/* <Link to="/forsmans">
                        Forsmans på Aspöja
                    </Link> */}
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
            {/* </div> */}
        </header>
    )
}

export default Navbar;