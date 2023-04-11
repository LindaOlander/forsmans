import React from 'react';
import "../App.css";
import NavbarStatic from '../components/Nav/NavbarStatic';
import Footer from '../components/Footer/Footer.tsx';

const Projekt = () => {
  const logo1 = require('../Images/EU-logo-jordbruksfonden-farg.jpg')
  const logo2 = require('../Images/Leader-logo.jpg')

    return (
      <div>
          <NavbarStatic />
            <div className="page">
                <h2>Europeiska jordbruksfonden för landsbygdsutveckling</h2>
                <p>”Utvidgning av restaurangen Forsmans på Aspöja” har erhållit projektstöd genom Europeiska jordbruksfonden för landsbygdsutveckling.</p>
                <div>
                  <img src={logo1} style={{marginRight: '15px'}} alt="eu-logo"/>
                  <img src={logo2} alt="eu-logo2"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projekt;