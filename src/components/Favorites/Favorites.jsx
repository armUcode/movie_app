import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { removeMovieFavorite } from "../../actions";
import './Favorites.css'

export class ConnectedList extends Component {

  render() {
  /*
  console.log(this.props.state)
      {moviesFavourites: Array(1), moviesLoaded: Array(10), moviesDetail: {…}}
      moviesDetail: {}
      moviesFavourites: Array(1)
      0: {Title: 'Rio Lobo', imdbID: 'tt0066301'}
      length: 1
      [[Prototype]]: Array(0)
      moviesLoaded: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
      [[Prototype]]: Object
  */

    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.moviesFavourites.map((movie) =>{
              return (
                
                <span key={movie.imdbID}>
                    <Link to={`/movie/${movie.imdbID}` }>
                      <p>{movie.Title}</p>
                    </Link>
                    <button onClick={ //30° llamamos la función remove
                                    ()=>{this.props.removeMovieFavorite(movie.imdbID)}
                            }
                    > X </button>
                </span>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
    return{
        moviesFavourites: state.moviesFavourites
    }
}


// 31°                                      despachamos la función remove
export default connect (mapStateToProps, { removeMovieFavorite } )(ConnectedList);