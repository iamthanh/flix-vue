import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {

  const [searchTerm, setSearchTerm] = useState('');

  const searchInputHandler = (search) => setSearchTerm(search)
  const performSearchHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.performSearch(searchTerm)
  };
  
  return (
    <div className="search-bar-container">
      <form onSubmit={(e) => performSearchHandler(e)}>
        <input type='text' placeholder='Search here' onChange={(e) => searchInputHandler(e.target.value)} />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}