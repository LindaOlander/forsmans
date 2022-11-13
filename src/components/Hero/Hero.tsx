import React from 'react';
import "./Hero.css";

const Hero = ({hero}) => {
    return (
        <header className="hero" style={{backgroundImage: `url(${hero.heroImage.url})`}}>
            <h1>{hero.heroTitle}</h1>
      </header>
    )
}

export default Hero;