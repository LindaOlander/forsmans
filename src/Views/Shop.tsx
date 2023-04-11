import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown'
import Footer from '../components/Footer/Footer.tsx';
import NavbarStatic from '../components/Nav/NavbarStatic';

import "./Shop.css";

const query = `
{
  pageCollection {
    items {
      name
      title
      textWithImageCollection (limit: 4) {
        items {
          title
          text
          image {
            url
          }
        }
      }
    }
  }
}
`;

const ShopPage = () => {
    const [page, setPage] = useState(null);
  
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
          setPage(data.pageCollection.items.filter(item => item.name === "Köttlådor"))
        });
    }, []);
  
    if (!page) {
      return "Laddar...";
    }

    return (
        <div>
          <NavbarStatic />
            <div className="shortHero center">
                <h1>{page[0]?.name}</h1>
                <p>
                  {page[0]?.title}
                  <a className="puffLinkHover" style={{color: '#000000'}}href={`mailto:aspoja.helen@telia.com`}> aspoja.helen@telia.com</a>
                  </p>
            </div>
            <div className="page">
                <div className="shopContainer">
                    {page[0]?.textWithImageCollection?.items?.map(item => 
                        <div key={item?.title} className="shopBox">
                            {item?.image?.url && <div className="shopImageContainer" style={{backgroundImage: `url(${item?.image?.url})`}}></div>}
                            <h2>{item?.title}</h2>
                            <ReactMarkdown>{item?.text}</ReactMarkdown>
                        </div>)}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ShopPage;