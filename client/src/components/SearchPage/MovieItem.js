import React, { useState, useEffect } from 'react';
import './MovieItem.css';

export default function MovieItem(props) {

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const parsedDate = new Date(props.data.release_date);

  return (
    <div className="movie">
      <div className="left">
        <div className='poster-image'>
          <img src={'https://image.tmdb.org/t/p/w200' + props.data.poster_path} />
        </div>
      </div>
      <div className="right">
        <div className="released">{monthNames[parsedDate.getMonth()]} {parsedDate.getFullYear()}</div>
        <div className="title">{props.data.title}</div>  
        <div className="description">{props.data.overview}</div>
      </div>
    </div>
  );
}