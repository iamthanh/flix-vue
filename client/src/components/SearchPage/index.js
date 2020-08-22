import React, { useState, useEffect } from 'react';
import Apis from '../../services/Apis';
import SearchService from '../../services/SearchService';
import SearchBar from './SearchBar';
import Results from './Results';
import Filters from './Filters';

export default function SearchPage() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch the top movies
    if (!movies.length) {
      Apis.fetchTopMovies().then(r => {
        if (r && r.status === 200) {
          setMovies(r.data.results);
        }
      });
    }
  }, []);

  const performSearch = (searchTerm) => {
    setSearchTerm(searchTerm);

    SearchService.search(searchTerm).then((r) => {
      if (r && r.status === 200) {
        setMovies(r.data.results);
      }
    })
  }

  return (
    <div className="search-page-container">
      <div className="left-col">
        <Filters />
      </div>
      <div className="search-results-container">
        <SearchBar
          performSearch={performSearch}
        />
        <Results
          searchTerm={searchTerm}
          movies={movies}
        />
      </div>
    </div>
  );
}