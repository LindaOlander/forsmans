import { useState, useEffect } from "react";
import Hero from './components/Hero/Hero.tsx'
import Nav from './components/Nav/Nav.tsx'
import About from './components/About/About.tsx'
import Menu from './components/Menu/Menu.tsx'
import Footer from './components/Footer/Footer.tsx'
import Catering from "./components/About/Catering.tsx";
import Us from "./components/About/Us.tsx";
import "./App.css";

const query = `
{
  pageCollection {
    items {
      title
      logo {
        url
      }
      menuImage {
        url
      }
      forsmanImage {
        url
      }
    }
  }
  heroCollection {
    items {
      heroTitle
      heroImage {
        url
      }
    }
  }
}
`;

function App() {
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
        setPage(data.pageCollection.items[0]);
        setHero(data.heroCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  return (
    <div className="App">
      <Nav page={page}/>
      <Hero hero={hero}/>
      <About />
      <Menu page={page}/>
      <Catering />
      <Us page={page}/>
      <Footer />
    </div>
  );
}

export default App;