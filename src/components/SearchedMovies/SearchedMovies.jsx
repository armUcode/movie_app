import { connect } from "react-redux";
import { addMovieFavorite } from "../../actions";
import { Link } from "react-router-dom";

import './SearchedMovies.css'

function SearchedMovies(busqueda){

  console.log(busqueda)
  return (
    <div>
        {
          busqueda.moviesLoaded.map((movie)=>{
            
            return (
              <div className="cardMovie">
                <Link to={`/movie/${movie.imdbID}` /* 24° Se linkea al componente */}>
                  <span className="nombreMovie">
                    {movie.Title}
                  </span>      
                  <span className="nombreMovie"> 
                    año:{movie.Year} 
                  </span>
                </Link>
                <img className="poster" src={movie.Poster}/>
                <button className="botonLike">♡</button>
                
                <h3 key={movie.imdbID /*23° Quitamos el error del browser */}></h3>
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