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
      ],
      playlistName : 'Playlist Title',
      playlistTracks : [
        track,
        track,
        track,
        track,
        track
      ]
    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;

    if(!this.state.playlistTracks.includes(track.id)) {
      tracks.push(track);
      this.setState({
        playlistTracks: tracks
      });
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
             <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
             <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
