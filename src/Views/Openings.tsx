import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import Footer from '../components/Footer/Footer.tsx';

import "../App.css";
import NavbarStatic from '../components/Nav/NavbarStatic';

const query = `
{
    oppettiderCollection {
        items {
            title
            text
        }
    }
}
`;


const OpeningPage = () => {
    const [oppettider, setOppettider] = useState(null);
  
    useEffect(() => {
      window
        .fetch(`https://graphql.contentful.com/content/v1/spaces/zr788oaaef6o/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer Gb6mXKp6IFzto-esCYOYC4sy6Gn3qDMHpIqPcsVl6T0",
          },
          body: JSON.stringify({ query }),
        })
        .then((response) => response.json())
        .then(({ data, errors }) => {
          if (errors) {
            console.error(errors);
          }
          setOppettider(data.oppettiderCollection.items[0]);
        });
    }, []);
  
    if (!oppettider) {
      return "Laddar...";
    }

    return (
        <div>
          <NavbarStatic />
            <div className="shortHero">
                <h1>Öppettider</h1>
            </div>
            <div className="page">
              <ReactMarkdown>{oppettider.text}</ReactMarkdown>
            </div>
            <Footer />
        </div>
    )
}

export default OpeningPage;