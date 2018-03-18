import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends Component {


  render() {
    console.log("search results props", this.props);
    return(
      <div className="SearchResults">
        <div className="Title"><h2>Results</h2></div>
        <div className="List">
          <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
        </div>
      </div>
    );
  }
}

export default SearchResults;
