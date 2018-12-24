import React, { Component } from 'react';

class hero extends Component {
  render() {
    return (
      <div className="herowrapper">
      	<div className="herohead">Order food from the widest range of restaurants.</div>
      	<div className="herosearch">
      		<input type="text" placeholder="Restaurant or Cuisine(leave it blank to browse all)"/>
      		<div className="herobutton">Find Restaurants</div>
      	</div>
      </div>
    );
  }
}

export default hero;
