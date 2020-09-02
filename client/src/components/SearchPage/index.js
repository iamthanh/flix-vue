import React, { useState, useEffect } from 'react';
import Apis from '../../services/Apis';
import SearchService from '../../services/SearchService';
import SearchBar from './SearchBar';
import Results from './Results';

export default function SearchPage() {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Fetch the top movies
    setIsLoading(true);
    Apis.fetchTopMovies(currentPage, false).then(r => {
      if (r && r.status === 200) {
        setMovies(r.data.results);
        setTotalPages(r.data.total_pages);
        setIsLoading(false);
      }
    });
  }, [currentPage, searchTerm, movies.length]);

  // This function is called when a search request is made
  const performSearch = (searchTerm) => {
    setIsLoading(false);
    setSearchTerm(searchTerm);
    SearchService.search(searchTerm).then((r) => {
      if (r && r.status === 200) {
        setMovies(r.data.results);
        setIsLoading(false);
      }
    })
  }

  const updatePageNumber = (newPage) => setCurrentPage(newPage);

  return (
    <div className="search-page-container">
      <div className="search-results-container">
        <SearchBar
          performSearch={performSearch}
        />
        <div className='results-main-container'>
          {isLoading && (
            <>
              <div className='loading-container'>
                Loading, please wait...
            </div>
            </>
          )}

          {!isLoading && (
            <Results
              searchTerm={searchTerm}
              movies={movies}
            />
          )}

          <div className='pagination-container'>
            <div className='arrow left'>
              <button disabled={(currentPage === 1 ? true : false)} onClick={() => updatePageNumber(currentPage - 1)}>{'<'}</button>
            </div>
            <div className='current-page'>{currentPage}</div>
            <div className='arrow right'>
              <button disabled={(currentPage === totalPages ? true : false)} onClick={() => updatePageNumber(currentPage + 1)}>{'>'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}