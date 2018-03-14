import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

const track = {
  name: "Oakheart",
  artist: "Poldoore",
  album: "Dreamworks - EP"
};


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchResults : [
        track,
        track,
        track,
        track,
        track
      ]
    }
  }
  render() {
    console.log(this.state.searchResults);

    return (
      <div>
        <div className="Head-bar">
          <h1><img id="spotifyer" alt="spotifyer logo" src="/spotifyer.png" />Spotifyer</h1>
        </div>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
             <SearchResults searchResults={this.state.searchResults} />
             <Playlist />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
