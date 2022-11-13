import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <>
        <section className="footer">
            <p style={{fontWeight: 'bold'}}>Forsmans Lax & Lamm</p>
            <p>Aspöja 1</p>
            <p>610 25 Vikbolandet</p>
            <a className="phone" href="tel:'46730461312" style={{color: '#ffffff'}}><p>0730461312</p></a>
            <div className="details">
                <a className="link" href="https://goo.gl/maps/GF3sjUB9n6Y43bJh7" target="_blank" style={{color: '#ffffff'}}><p>Hitta hit</p></a>
                <a className="link" href="https://goo.gl/maps/GF3sjUB9n6Y43bJh7" target="_blank" style={{color: '#ffffff'}}><p>Öppettider</p></a>
                <p>Fullständiga rättigheter.</p>
            </div>
        </section>
        </>
    )
}

export default Footer;