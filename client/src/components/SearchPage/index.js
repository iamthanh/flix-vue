import React, { useState, useEffect } from 'react';
import Apis from '../../services/Apis';
import SearchService from '../../services/SearchService';
import SearchBar from './SearchBar';
import Results from './Results';

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
  }, [searchTerm, movies.length]);

  // This function is called when a search request is made
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