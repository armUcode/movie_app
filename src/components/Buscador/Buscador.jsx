import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { addMovieFavorite, getMovies } from '../../actions';

import './Buscador.css';

//9° Creamos el componente -[]-
export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) { //12° Capturar el input
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) { //13° Evitar que se recargue automaticamente
    event.preventDefault();
  }

  render() {
    const { title } = this.state; /*20° Viene de la linea13 */
    return (
      <div className="pelicula">
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e) /*13° Evitar carga automatica*/}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e) /*12° Capturar el input*/} 
            />
          </div>
          <button type="submit" onClick={()=>this.props.getMovies(title)/* 21°viene de la L27 */
		        /*15° Conecto el boton a la función que llega por ***PROPS*** y el THIS por ser de CLASE, seteamos por defecto 'club' */}
          >BUSCAR</button>
        </form>
        <ul>
            {/* 18° para mostrar las peliculas del buscador*/
              this.props.movies.map((movie)=>{
                const datosPelicula = {
                  Title: movie.Title,
                  imdbID: movie.imdbID
                }

                return (
                  <h3 key={movie.imdbID /*23° Quitamos el error del browser */}>
                      <Link to={`/movie/${movie.imdbID}` /* 24° Se linkea al componente */}>
                        <span>{movie.Title}</span>
                      </Link>
                        <span> año:{movie.Year} </span>

                      <button 
                        onClick={/*22° creamos la accion add*/
                            ()=>this.props.addMovieFavorite(datosPelicula) // 25° llamamos la función despues de conectar
                        }
                      > ♡ </button>
                  </h3>
                )
              })
            }
        </ul>
      </div>
    );
  }
}

/*
10° Usamos las funciones mapStateToProps y mapDispatchToProps dentro de nuestros componentes. 
La primera nos permite traer nuestro state global como props a nuestro componente,
la segunda nos permite hacer el dispatch de nuestras actions al store
*/


function mapStateToProps(state){ /* 16.1° state Le llega desde el connect convierte en props
	recibe como parametro state y nos devuelvo un objecto con parte del state que queremos, en este caso usamos la key 'movies' (accedemos a ella en nuestro componente como this.props.movies)
	*/
	return { // este es el objeto que se convierte en props
	/*
		state = 	const initialState = {
						moviesFavourites: [],
						moviesLoaded: [],
						moviesDetail: {}
					};
	*/
		// state: state ---> se conecta al state pero lo adaptamos al ejercicio
		movies: state.moviesLoaded
	};
}

/*
OPCIONAL 17° recibe el dispatch desde el connect
function mapDispatchToProps(dispatch){ //OPCIONAL 17° recibe el dispatch desde el connect
	return {
		addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
		getMovies: title => dispatch(getMovies(title)) //17.1°¿Que función deseas despachar? cuando recibes el input del submit???
	};
}
Y despues se las recibo en el connect en el 2do argumento      ,
*/

// connect recibe:              (state, accionesADespachar)    10.1° ¿ Que acción queremos {getMovies}?
export default connect(/* 16° */mapStateToProps,	/*mapDispatchToProps=>destructuro*/{ /* 25° conectar función*/addMovieFavorite, getMovies })(Buscador); //11° Conectamos el componente Buscador