const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  moviesDetail: {}
};

/* 3° crear los N+ reducers para las N+ acciones que creamos anteriormente*/

function rootReducer(state = initialState, action){ 
  //Se puede hacer con SWITCH CASE
  if(action.type === 'ADD_MOVIE_FAVORITE'){
      return {
          ...state,
          moviesFavourites: state./* 27° al state le agregamos el nuevo state*/moviesFavourites.concat(action.payload)
      }
  }
  if(action.type === 'GET_MOVIES'){
      return{
          ...state,
          moviesLoaded: action.payload
      };
  }
  if(action.type === 'REMOVE_MOVIE_FAVORITE'){
      return{
          ...state,
          moviesFavourites: state.moviesFavourites.filter((movie)=>movie.imdbID !== action.payload) //retorna un nuevo arreglo dejando removiendo lo que se encontro el filtro
      }
  }
  if(action.type === 'GET_MOVIE_DETAIL'){
      return{
          ...state,
          moviesDetail: action.payload
      }
  }
  return state;
}

export default rootReducer