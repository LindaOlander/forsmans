import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MenuPage from "./Views/Menu.tsx";
import Start from "./Views/Start.tsx";
import OpeningPage from "./Views/Openings.tsx";
import KartaPage from "./Views/Karta.tsx";
import Projekt from "./Views/Projekt.tsx";
import ShopPage from "./Views/Shop.tsx";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>  
          <Route exact path='/' element={<Start />}></Route>  
          <Route exact path='/meny' element={<MenuPage />}></Route>  
          <Route exact path='/öppettider' element={<OpeningPage />}></Route>  
          <Route exact path='/karta' element={<KartaPage />}></Route>  
          <Route exact path='/projektsida' element={<Projekt />}></Route>  
          <Route exact path='/kottlador' element={<ShopPage />}></Route>  
        </Routes>  
      </div>
    </Router>
  );
}

export default App;