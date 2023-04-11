import React from 'react';
import "./About.css";

const About = ({introText}) => {
    return (
        <section className="om">
            <p>
                {introText}
            </p>
        </section>
    )
}

export default About;