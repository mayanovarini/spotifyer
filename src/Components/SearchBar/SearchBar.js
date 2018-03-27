import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    }

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.searchOnEnter = this.searchOnEnter.bind(this);
  }

  search(e){
    e.preventDefault();
    console.log("search term state is", this.state.term);
    this.props.onSearch(this.state.term);
  }

  searchOnEnter(e){
    if(e.key === 'Enter') {
      console.log("the key enter is presssed and search term state is", this.state.term);
      this.props.onSearch(this.state.term);
      e.preventDefault();
    }
  }

  handleTermChange(e){
    this.setState({
      term: e.target.value
    });
  }

  render(){
    return(
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song" onKeyPress={this.searchOnEnter} />
        <a href="#" onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
