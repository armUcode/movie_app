import { connect } from "react-redux";
import { addMovieFavorite } from "../../actions";
import { Link } from "react-router-dom";

import './SearchedMovies.css'

function SearchedMovies(busqueda){

  console.log(busqueda)
  return (
    <>
        {
          busqueda.moviesLoaded.map((movie)=>{
            
            return (
              <div>
                <h3 key={movie.imdbID /*23° Quitamos el error del browser */}></h3>
                <Link to={`/movie/${movie.imdbID}` /* 24° Se linkea al componente */}>
                  <span>{movie.Title}</span>
                </Link>
                <span> año:{movie.Year} </span>
                <img className="poster" src={movie.Poster}/>
                <button>♡</button>
              </div>
            )
          })
        }
    </>
  )
}

function mapStateToProps(state){
  return {
    moviesLoaded: state.moviesLoaded
  }
}

export default connect(mapStateToProps, { addMovieFavorite })(SearchedMovies)