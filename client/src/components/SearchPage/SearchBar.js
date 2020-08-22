import React, { useState, useEffect } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {

  const [searchTerm, setSearchTerm] = useState('');
  
  const searchInputHandler = (search) => setSearchTerm(search)
  const performSearchHandler = () => props.performSearch(searchTerm);

  return (
    <div className="search-bar-container">
      <input type='text' placeholder='Search here' onChange={(e)=>searchInputHandler(e.target.value)} />
      <button onClick={()=>performSearchHandler()}>Search</button>
    </div>
  );
}