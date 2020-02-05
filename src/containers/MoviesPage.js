import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';
 
const MoviesPage = ({ match, movies }) => (
  <div>
    <Route exact path={match.url} render={() => <h3>Choose a movie from the list below</h3>}/>
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} /> }/>
    <MoviesList movies={movies} />
  </div>
)
 
export default MoviesPage