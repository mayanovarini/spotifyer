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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
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

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    // filter only tracks that are not the currentTrack / the chosen Track to be removed
    tracks = tracks.filter( currentTrack => currentTrack.id !== track.id );
    console.log("tracks that are left now", tracks, "length is", tracks.length)
    this.setState( {
      playlistTracks: tracks
    });
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
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

             <SearchResults searchResults={this.state.searchResults}
                            onAdd={this.addTrack} />

             <Playlist onRemove={this.removeTrack}
                       playlistName={this.state.playlistName}
                       playlistTracks={this.state.playlistTracks}
                       onNameChange={this.updatePlaylistName} />

            </div>
          </div>
      </div>
    );
  }
}

export default App;
