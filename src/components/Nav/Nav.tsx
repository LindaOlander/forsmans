import React, { useState, useEffect } from 'react';
import "./Nav.css";

const Nav = ({page}) => {
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 66) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }

      useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
      })
    
    return (
        <nav className={navbar ? "navbar navbar-active" : "navbar"}>
            <div className="navbar-logo">
                <p>{page.title}</p>
                {/* <img className="logo" alt="Logo" /> */}
            </div>
            <div id="hamburger">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <a href="#"><li>Om Forsmans</li></a>
                    <a href="#"><li>Hitta hit</li></a>
                    <a href="#"><li>Öppettider</li></a>
                    <a href="#"><li>Meny</li></a>
                    <a href="#"><li>Kontakt</li></a>
                </ul>
            </div>
        </nav>
    )

}

export default Nav;