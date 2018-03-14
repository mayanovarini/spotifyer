import React, {Component} from 'react';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  render(){
    return(
      <div class="Playlist">
        <input defaultValue={'New Playlist'}/>
        // Add a TrackList component 
        <a class="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
