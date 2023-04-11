import React from 'react';
import Puffs from '../Puffs/Puffs';
import Navbar from '../Nav/Navbar';
import "./Hero.css";

const Hero = ({hero, logo}) => {
    return (
        <div className="hero" style={{backgroundImage: `url(${hero.heroImage.url})`}}>
            <Navbar />
            <img className="logo" alt="logo" src={logo}/>
            <Puffs heroPuffs={hero.heroPuffsCollection.items}/>
        </div>
    )
}

export default Hero;