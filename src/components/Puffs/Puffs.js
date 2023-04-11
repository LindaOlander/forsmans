import React from 'react';
import "./Puffs.css";
import { NavLink } from 'react-router-dom';


const Puffs = ({heroPuffs}) => {
    return (
        <div className="puffs">
            {/* {heroPuffs.map(puff => 
                <div className="puff">
                    <h2>{puff.title}</h2>
                    <p>{puff.text}</p>
                </div>
            )} */}
            <div className="puff">
                <h2>{heroPuffs[0].title}</h2>
                <p>{heroPuffs[0].text}</p>
            </div>
            <div className="puff">
                <h2>{heroPuffs[1].title}</h2>
                <p>{heroPuffs[1].text}</p>
                <p>
                <NavLink to="/karta">
                    <span className="puffLinkHover" style={{color: '#ffffff'}}>
                    Hitta till vår brygga genom Arnströmmen</span>
                    <i className="fa fa-arrow-right arrow" aria-hidden="true"></i>
                </NavLink>
                </p>
            </div>
            <div className="puff">
                <h2>{heroPuffs[2].title}</h2>
                <p>{heroPuffs[2].text}
                    <a className="phone" href="tel:'46730461312" style={{color: '#ffffff'}}><span> 073-0461312</span></a>
                </p>
            </div>
        </div>
    )
}

export default Puffs;