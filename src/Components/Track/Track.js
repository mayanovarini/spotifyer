import React, {Component} from 'react';
import './Track.css';

class Track extends Component {

  renderAction(){
    if(this.props.isRemoval) {
      return <a className="Track-action" href="#">-</a>;
    }
    return <a className="Track-action" href="#">+</a>;
  }

  render(){
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>track name will go here</h3>
          <p>track artist will go here | track album will go here </p>
        </div>
        <a className="Track-action"> + or - will go here</a>
      </div>
    );
  }
}

export default Track;
