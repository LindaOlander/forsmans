import { useState, useEffect } from "react";
import Hero from '../components/Hero/Hero.tsx'
import About from '../components/About/About.tsx'
import Menu from '../components/Menu/Menu.tsx'
import Footer from '../components/Footer/Footer.tsx'
import Us from "../components/About/Us.tsx";
import Instagram from "../components/About/Instagram.tsx";
import "../App.css";

const query = `
{
  pageCollection {
    items {
      name
      title
      logo {
        url
      }
      introText
      menuText
      menuImagesCollection {
        items {
          url
        }
      }
      textWithImageCollection (limit: 1) {
        items {
          title
          text
          image {
            url
          }
        }
      }
      data
    }
  }
  heroCollection {
    items {
      heroImage {
        url
      }
      heroPuffsCollection(limit:3) {
        items {
          title
          text       
        }
      }
    }
  }
}
`;

function Start() {
  const [page, setPage] = useState(null);
  const [hero, setHero] = useState(null);

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
        setPage(data.pageCollection.items.filter(page => page.name === "Startsida"));
        setHero(data.heroCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Laddar...";
  }

  return (
    <>
      <Hero hero={hero} logo={page[0]?.logo?.url}/>
      <div className="page">
        <About introText={page[0]?.introText} />
        <Menu menuText={page[0]?.menuText} menuImages={page[0]?.menuImagesCollection.items}/>
      </div>
      <Us omOss={page[0]?.textWithImageCollection?.items}/>
      {page[0]?.data?.token && <div className="page">
        <Instagram token={page[0]?.data?.token} />
      </div>}
      <Footer/>
      </>
  );
}

export default Start;