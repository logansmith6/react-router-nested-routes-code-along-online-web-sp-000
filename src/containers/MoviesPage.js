// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    // Adding code to pass the movies to the `MovieShow` component
    <Route path={`${match.url}/:movieId`} component={<MovieShow movies={movies} /> }/>
  </div>
)

export default MoviesPage
