import React from 'react';
import "./About.css";

const Us = ({omOss}) => {
    return (
        <section className="us">
            <div className="usText">
                <h2>{omOss[0]?.title}</h2>
                <p>
                    {omOss[0]?.text}
                </p>
            </div>
            <div className="usImage" style={{backgroundImage: `url(${omOss[0]?.image?.url})`}}></div>
        </section>
    )
}

export default Us;