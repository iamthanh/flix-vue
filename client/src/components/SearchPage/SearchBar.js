import React, { useState, useEffect } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
  useEffect(()=>{
  });

  const searchHandler = (search) => {
    props.setSearchTerm(search);
  }

  return (
    <div className="search-bar-container">
      <input type='text' placeholder='Search here' onChange={(e)=>searchHandler(e.target.value)} />
    </div>
  );
}