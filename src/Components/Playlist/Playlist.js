import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

class Playlist extends Component {
  constructor(props){
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.save = this.save.bind(this);
  }
  handleNameChange(e){
    this.props.onNameChange(e.target.value);
  }

  save(e){
    this.props.onSave(e)
  }

  render(){
    return(
      <div className="Playlist">
        <div className="Input-name">
          <input onChange={this.handleNameChange} value={this.props.playlistName}/>
        </div>
        <div className="Track-list">
          <h3>No song</h3>
          <TrackList tracks={this.props.playlistTracks}
                     isRemoval={true}
                     onRemove={this.props.onRemove}
          />
        </div>
        <a className="Playlist-save" onClick={this.save}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
