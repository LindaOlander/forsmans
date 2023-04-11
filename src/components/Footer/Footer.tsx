import React from 'react';
import "./Footer.css";
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
        <section className="footer">
            <p style={{fontWeight: 'bold'}}>Forsmans på Aspöja</p>
            <p>Aspöja 1</p>
            <p>610 25 Vikbolandet</p>
            <a className="phone" href="tel:'46730461312" style={{color: '#ffffff'}}><p>073-0461312</p></a>
            <div className="details">
                <NavLink to="/karta" onClick={scrollToTop}><p className="puffLinkHover" style={{color: '#ffffff'}}>Hitta hit</p></NavLink>
                <NavLink to="/öppettider" onClick={scrollToTop}><p className="puffLinkHover" style={{color: '#ffffff'}}>Öppettider</p></NavLink>
                <NavLink to="/projektsida" onClick={scrollToTop}><p className="puffLinkHover" style={{color: '#ffffff'}}>Projektsida</p></NavLink>
                <p style={{margin: '40px 0 0 0'}}>Fullständiga rättigheter</p>
            </div>
        </section>
        </>
    )
}

export default Footer;