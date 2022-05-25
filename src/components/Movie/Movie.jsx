import React from 'react';
import { connect } from 'react-redux';

import { getMovieDetail } from '../../actions';

import './Movie.css'

class Movie extends React.Component {

  componentDidMount(){//35° Tan pronto se ejecute la acción haz lo siguiente despacha la función
      this.props.getMovieDetail(this.props.match.params.id) // el de abajo ↓↓↓↓
  } 


  render() {
      console.log(this.props) //llegan desde App.js
      /*
  {history: {…}, location: {…}, match: {…}, staticContext: undefined, getMovieDetail: ƒ}
  getMovieDetail: ƒ ()
  history: {length: 14, action: 'POP', location: {…}, createHref: ƒ, push: ƒ, …}
  location: {pathname: '/movie/tt4116480', search: '', hash: '', state: undefined, key: '9ykis2'}
  match:
      isExact: true
      params: {id: 'tt4116480'}
      path: "/movie/:id"
      url: "/movie/tt4116480"
      [[Prototype]]: Object
  staticContext: undefined
  [[Prototype]]: Object.....
*/
/*
console.log(this.props.state)
  {moviesFavourites: Array(0), moviesLoaded: Array(0), moviesDetail: {…}}
  moviesDetail: {}
  moviesFavourites: []
  moviesLoaded: []
  [[Prototype]]: Object
*/
/*
console.log(this.props.state.moviesDetail)
{Title: 'Robots', Year: '2005', Rated: 'PG', Released: '11 Mar 2005', Runtime: '91 min', …}
Actors: "Ewan McGregor, Halle Berry, Mel Brooks"
Awards: "2 wins & 22 nominations"
BoxOffice: "$128,200,012"
Country: "United States"
DVD: "27 Sep 2005"
Director: "Chris Wedge, Carlos Saldanha"
Genre: "Animation, Adventure, Comedy"
*/

      return (

          <div className="movie-detail">
              Detalle de la pelicula:
               <h1> {this.props.movies.Title} </h1>
               <h3> {this.props.movies.Actors} </h3>
               <h3> {this.props.movies.Genre} </h3>
               <p> {this.props.movies.Year} </p>
               <img src={this.props.movies.Poster} alt='imagen de la pelicula' />
          </div>
      );
  }
}

function mapStateToProps(state){ //40° conectar el estado del store al componente
  return{
      movies: state.moviesDetail
  }
}



export default connect(mapStateToProps, { getMovieDetail })(Movie);