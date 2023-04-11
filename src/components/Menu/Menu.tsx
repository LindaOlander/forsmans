import React from 'react';
import { NavLink} from 'react-router-dom';
import "./Menu.css";


const Menu = ({menuText, menuImages}) => {
    return (
        <section className="container">
            <div className="menuContainer">
                <div className="imageContainer image1" style={{backgroundImage: `url(${menuImages[0]?.url})`}}></div>
                <div className="imageContainer image2" style={{backgroundImage: `url(${menuImages[1]?.url})`}}></div>
                <div className="imageContainer image3" style={{backgroundImage: `url(${menuImages[2]?.url})`}}></div>
            </div>
            <div className="menuBox">
                <h2>Årets meny</h2>
                <p>{menuText}</p>
                <NavLink to="/meny"><button>Se hela menyn</button></NavLink>
            </div>
        </section>
    )
}

export default Menu;