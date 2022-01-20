import React from 'react';
import './Search.scss'

export default function Search() {
  return( 
  <div id="search">
    <div id="searchbar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder='Search for a country...' />
    </div>

    <select>
        <option>Africa</option>
        <option>America</option>
    </select>
  </div>
  );
}
