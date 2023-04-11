import React from 'react';
import Footer from '../components/Footer/Footer.tsx';
import Map from '../components/Map/Map.tsx';
import NavbarStatic from '../components/Nav/NavbarStatic';
import "../App.css";
import "./Karta.css";

const KartaPage = () => {
const youtube = require('../Images/youtube.png')
    return (
        <div>
          <NavbarStatic />
            <div className="shortHero">
                <h1>Hitta hit</h1>
            </div>
            <div className="page">
              <div className="kartaContainer">
                <div>
                  <p>
                    Det går att komma till Aspöja med egen båt. Vi har från östra sidan, lagt gröna och röda bojar för att markera vart man kan åka.
                    Du åker mellan gröna och röda, gröna till höger och röda till vänster när du går in till oss. 
                    
                  </p>
                  <p>
                    Några luriga grynnor är uppmärkta med röd/svarta bojar mitt på grundet.
                    När ni ser den gröna och grå fiskebåten som vi ankrat inne i viken har ni bryggorna till vänster (väster om) den.
                  </p>
                  <p>
                    Det finns brygga i Östantillviken där man kan lägga till, dock inte med båtar med större djupgående än 1,20 vid normalvatten.
                  </p>
                </div>
                <div className="kartaVideo">
                  <iframe src="https://www.youtube.com/embed/Nr4-qlMW-Z8" title="Hitta till bryggorna hos Forsmans på Aspöja" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
                <div className="kartaVideoMobile">
                  <a href="https://www.youtube.com/embed/Nr4-qlMW-Z8" target="_blank" rel="noreferrer">
                    <img src={youtube} alt="Hitta till bryggorna hos Forsmans på Aspöja" />
                  </a>
                </div>
              </div>
              <div>
                <h2>Ta sig hit med Tärnskär</h2>
                <p>
                    Har du inte egen båt så kan ni åka med båten Tärnskär som tar 12 personer tur och retur till Aspöja. Bokar den gör ni hos mig på <a className="phone" href="tel:'46730461312"><span className="puffLinkHover" style={{color: '#000000'}}>073-0461312.</span></a> Kostar 300 kr/person t.o.r.
                </p>
              </div>
              <div>
                <h2>Åka med linjetrafik</h2>
                <p>
                  Enkelt är också att åka med linjetrafik. Linje 781 går till två bryggor på Aspöja. Bokas på Östgötatrafikens bokningscentral på telefon 0771-71 10 20. Ange brygga 44 eller 60 med avgång från Arkösund. Tidtabell finns på www.ostgotatrafiken.se
                </p>
              </div>
              <div>
                <h2>Paddla hit</h2>
                <p>
                  Paddlar du kajak så är du välkommen att hämta vatten vid vår sjöbod Venedig längst in i Östantillviken. Stanna en dag eller några timmar på vår vackra ö.
                </p>
              </div>
              <Map />
            </div>
            <Footer />
        </div>
    )
}

export default KartaPage;