import React from 'react';
import "./Menu.css";


const Menu = ({page}) => {
    console.log(page)
    return (
        <section className="menu" style={{backgroundImage: `url(${page.menuImage.url})`}}>
            <h2> Årets</h2>
            <h2>meny</h2>
        </section>
    )
}

export default Menu;