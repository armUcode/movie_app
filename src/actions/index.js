const { REACT_APP_API_KEY } = process.env //usar tu propia apiKey registrando el usuario en la pagina de IMBD

export function addMovieFavorite(payload){
    return {
        type: 'ADD_MOVIE_FAVORITE',
        payload
    };
}

export function getMovies(titulo){ //Cada accion devuelve un objeto
  return function(dispatch){ //las actions hacen peticiones
      return fetch(`https://omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${titulo}`)
      .then(respuesta=>respuesta.json()) //Convierte a objeto Js
      .then(rjson=>{
          dispatch({
              type:'GET_MOVIES',
              payload: rjson.Search, // Search es el objeto que entrega la API (OMDBapi)
          });
      });
  };
}

/* { https://omdbapi.com/?apikey=REACT_APP_API_KEY&s=harry
    "Search": [
      {
        "Title": "Harry Potter and the Deathly Hallows: Part 2",
        "Year": "2011",
        "imdbID": "tt1201607",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
      },
      {
        "Title": "Harry Potter and the Sorcerer's Stone",... */

export function getMovieDetail(id){
  return function(dispatch){ 
      return fetch(`https://omdbapi.com/?apikey=${REACT_APP_API_KEY}&i=${id}`)
      .then(respuesta=>respuesta.json())
      .then(rjson=>{
          dispatch({
              type: 'GET_MOVIE_DETAIL',
              payload: rjson
          });
      });
  };
}

export function removeMovieFavorite(id){ 
  return {
              type: 'REMOVE_MOVIE_FAVORITE',
              payload: id //33° enviamos ese id
  };
}