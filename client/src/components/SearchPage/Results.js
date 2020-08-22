import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';
import './Results.css';

export default function Results(props) {
  const renderMovies = props.movies.map((data, key) => {
    return (
      <MovieItem
        key={key}
        data={data}
      />
    )
  });

  const searchTermResults = props.searchTerm.length ? (
    <div className="results-for-search">Results for: {props.searchTerm}</div>
  ) : '';

  return (
    <React.Fragment>
      {searchTermResults}
      <div className="results-container">
        {renderMovies}
      </div>
    </React.Fragment>
  );
}