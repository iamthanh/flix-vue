import React, { useState, useEffect } from 'react';
import Apis from '../../services/Apis';
import SearchService from '../../services/SearchService';
import SearchBar from './SearchBar';
import Results from './Results';
import Filters from './Filters';

export default function SearchPage() {
  
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch the top movies
    if (!fetchedMovies.length) {
      Apis.fetchTopMovies().then(r=>{
        if (r && r.status === 200) {
          setFetchedMovies(r.data.results);
          
          // On init, set filteredMovies to be fetchedMovies, since we want to show all
          setFilteredMovies(r.data.results);
        }
      });
    }    
  }, []);

  const filterMovies = () => {
    // Performs a query for the search term using SearchService 
    SearchService.query(searchTerm, fetchedMovies).then((r)=>{
      setFilteredMovies(r);
    })
  }

  useEffect(() => {
    // This tracks changes to searchTerm, if so, performs the search
    filterMovies(searchTerm, fetchedMovies);
  }, [searchTerm])

  return (
    <div className="search-page-container">
      <div className="left-col">
        <Filters />
      </div>
      <div className="search-results-container">
        <SearchBar 
          setSearchTerm={setSearchTerm}
        />
        <Results 
          movies={filteredMovies}
        />
      </div>
    </div>
  );
}