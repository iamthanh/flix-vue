import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';

export default function Results(props) {
  useEffect(()=>{
  });

  const renderMovies = props.movies.map((data, key)=> {
    return (
      <MovieItem 
        key={key}
        data={data}
      />
    )
  });

  return (
    <div className="results-container">
      {renderMovies}
    </div>
  );
}