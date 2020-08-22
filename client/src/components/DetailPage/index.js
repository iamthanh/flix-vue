import React, { useState, useEffect } from 'react';
import Apis from '../../services/Apis';
import './DetailPage.css';

export default function DetailPage() {

  const movieId = window.location.pathname.split('/')[3];
  const [movieData, setMovieData] = useState(null);

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    Apis.fetchMovieById(movieId).then((r) => {
      if (r && r.status === 200) {
        setMovieData(r.data);
      }
    });
  }, [])

  let renderMovieData = '';
  if (movieData) {
    const parsedDate = new Date(movieData.release_date);
    renderMovieData = (
      <React.Fragment>
        {movieData.poster_path ? (
          <div className="image-container">
            <img src={'https://image.tmdb.org/t/p/w500' + movieData.poster_path} />
          </div>
        ) : ''}
        <div className='details-col'>
          <div className='title'>{movieData.title}</div>
          <div className='ratings'>Ratings <strong>{movieData.vote_average}</strong>/10 from {movieData.vote_count} voters</div>

          <div className='released'>
            <div className='date'>
              <label className='detail-label'>Released</label>
              <div className="data">
                {monthNames[parsedDate.getMonth()]} {parsedDate.getDate()} {parsedDate.getFullYear()}
              </div>
            </div>
            <div className='locations'>
              <label className='detail-label'>Locations</label>
              {movieData.production_countries.length ? (
                <div className="data">
                  {movieData.production_countries.map((data, key) => (
                    <div key={key} className=''>{data.name}</div>
                  ))}
                </div>
              ) : (<div className="data">Not available</div>)}
            </div>
          </div>
          <div className='production'>
            <label className='detail-label'>Production by</label>

            {movieData.production_companies.length ? (
              <div className="data">
                {movieData.production_companies.map((data, key) => (
                  <div key={key} className=''>{data.name}</div>
                ))}
              </div>
            ) : (<div className="data">Not available</div>)}
          </div>
          <div className='languages'>
            <label className='detail-label'>Available languages</label>
            <div className="data">
              {movieData.spoken_languages.map((data, key) => (
                <div key={key} className=''>{data.name}</div>
              ))}
            </div>
          </div>
          <div className='overview'>
            <label className='detail-label'>Overview</label>
            <div className="data">
              {movieData.overview}
            </div>
          </div>
          <div className='overview'>
            <label className='detail-label'>Website</label>

            {movieData.homepage ? (
              <div className="data">
                <a href={movieData.homepage}>{movieData.homepage}</a>
              </div>
            ) : (<div className="data">Not available</div>)}
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="back-button">
        <a href={document.referrer}>{'<'} Back</a>
      </div>
      <div className="details-page-container">
        {renderMovieData}
      </div>
    </React.Fragment>
  );
}