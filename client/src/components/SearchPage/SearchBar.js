import React, { useState, useEffect } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {

  const [searchTerm, setSearchTerm] = useState('');
  const [timerRunning, setTimerRunning] = useState(null);

  const searchInputHandler = (search) => {
    if (timerRunning) 

    setTimeout(()=>{
      setSearchTerm(search);
    },2000);


    console.log(search);
  }

  useEffect(()=>{
    // props.performSearch(searchTerm)
  }, [searchTerm])
  
  return (
    <div className="search-bar-container">
      <form>
        <input type='text' placeholder='Search here' onChange={(e) => searchInputHandler(e.target.value)} />
      </form>
    </div>
  );
}