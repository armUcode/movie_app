import { connect } from "react-redux";
import { addMovieFavorite } from "../../actions";
import { Link } from "react-router-dom";

import './SearchedMovies.css'
import { BsFillBookmarkStarFill } from 'react-icons/bs'

function SearchedMovies(busqueda){

  console.log(busqueda)
  return (
    <div className="movies">
        {
          busqueda.moviesLoaded.map((movie)=>{
            const datosPelicula = {
              Title: movie.Title,
              imdbID: movie.imdbID
            }
            
            return (
                <div className="cardMovie">
                  <Link to={`/movie/${movie.imdbID}` /* 24° Se linkea al componente */}>

                      <img position='absolute' align className="poster" src={movie.Poster}/>
                    <div className="nombreMovie">
                      {movie.Title}
                    </div>      
                    <div className="year"> 
                      año:{movie.Year} 
                    </div>

                  
                  <span key={movie.imdbID /*23° Quitamos el error del browser */}></span>
                  </Link>
                  <button className="botonLike"
                    onClick={/*22° creamos la accion add*/
                    ()=>movie.addMovieFavorite(datosPelicula) // 25° llamamos la función despues de conectar
                    }> 
                      <BsFillBookmarkStarFill/> 
                  </button>
                </div>
            )
          })
        }
    </div>
  )
}

function mapStateToProps(state){
  return {
    moviesLoaded: state.moviesLoaded
  }
}

export default connect(mapStateToProps, { addMovieFavorite })(SearchedMovies)