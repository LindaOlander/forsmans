import React from 'react';
import "./About.css";

const Us = ({page}) => {
    return (
        <section className="us">
            <div className="usImage" style={{backgroundImage: `url(${page.forsmanImage.url})`}}></div>
            {/* <a>Läs mer om oss</a> */}
        </section>
    )
}

export default Us;