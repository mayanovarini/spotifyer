import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Spotifyer</h1>
        <div className="App">
          // add a SearchBar component
          <div className="App-playlist">
           // Add a SearchResults component -->
           // Add a Playlist component -->
          </div>
        </div>
      </div>
    );
  }
}

export default App;
