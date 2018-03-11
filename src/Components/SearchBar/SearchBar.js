import React, { Component } from 'react';
import './App.css';

class SearchBar extends React.Component {
  render(){
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" />
      <a>SEARCH</a>
    </div>
  }
}

export default SearchBar;
