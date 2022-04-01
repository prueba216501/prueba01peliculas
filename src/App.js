import './App.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './COMPONENTES/NavBar';
import PeliculasPage from './pages/PeliculasPage';

import RedSocialPage from './pages/RedSocialPage';
import LocoEstupidoAmorPage from './pages/LocoEstupidoAmorPage';
import Taken01 from './pages/Taken01';
import CazaFantasmasElLegado from './pages/CazaFantasmasElLegado';
import LaEraDeHieloAventurasBuck from './pages/LaEraDeHieloAventurasBuck';
import Eternals from './pages/Eternals';
import HotelTransylvaniaTransformania from './pages/HotelTransylvaniaTransformania';
import LosLocosAddams2 from './pages/LosLocosAddams2';
import HalloweenKills from './pages/HalloweenKills';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';
// import x from './pages/x';


// import x from './pages/x';


function App() {
  return (

    <Router>
      <NavBar/>
      <div className="container-fluid">
        <div >
          <Routes>            
            <Route path='/' element={<PeliculasPage/>} />
            <Route path='/pelicula/red-social' element={<RedSocialPage/>} />            
            <Route path='/pelicula/loco-estupido-amor' element={<LocoEstupidoAmorPage/>} />  
            <Route path='/pelicula/taken-01' element={<Taken01/>} />   
            <Route path='/pelicula/cazafantasmas-el-legado' element={<CazaFantasmasElLegado/>} />   
            <Route path='/pelicula/la-era-de-hielo-las-aventuras-de-buck' element={<LaEraDeHieloAventurasBuck/>} />
            <Route path='/pelicula/eternals' element={<Eternals/>} />
            <Route path='/pelicula/hotel-transylvania-transformania' element={<HotelTransylvaniaTransformania/>} />
            <Route path='/pelicula/los-locos-addams-2' element={<LosLocosAddams2/>} />
            <Route path='/pelicula/halloween-kills' element={<HalloweenKills/>} />
            {/* <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} />
            <Route path='x' element={<x/>} /> */}

          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
