//38° montando componentes
import React from "react";
import { useState } from "react";
import { Route } from "react-router-dom";


import Buscador from './components/Buscador/Buscador'
import Movie from "./components/Movie/Movie";
import Favorites from "./components/Favorites/Favorites";
import NavBar from "./components/Navbar/Navbar";
import Error404 from "./components/Error404/Error404";

//aqui es donde se definen las rutas <Route>

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <React.Fragment>
      
      <NavBar  />
      
        <Route exact path="/" component={Buscador} />
        <Route path="/favs" component={Favorites} />
        <Route path="/movie/:id" component={Movie} />
        {/* <Route path="*" component={Error404} /> */}
        
        
    </React.Fragment>
  );
}

export default App;