import React, { Component } from 'react';
import Cravingbox from './cravingbox';

class App extends Component {
  render() {
    return (
      <div className="cravingwrapper">
      	<div className = "cravinghead">What are you craving for?</div>
      	<div className = "cravingboxes">
	      	<Cravingbox image_url="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545468551/pngs/sweets.png" name="Sweets"/>
	      	<Cravingbox image_url="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545468551/pngs/pizza.png" name="Pizza"/>
	      	<Cravingbox image_url="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545468551/pngs/momo.png" name="Mo:Mo"/>
	      	<Cravingbox image_url="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545468551/pngs/japanese.png" name="Japanese"/>
	      	<Cravingbox image_url="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545468551/pngs/chinese.png" name="Chinese"/>
	      	<Cravingbox image_url="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545468551/pngs/newari.png" name="Newari"/>
	      	<Cravingbox image_url="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545468551/pngs/continental.png" name="Continental"/>
	      	<Cravingbox image_url="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545468551/pngs/Burger1-min.png" name="Burger"/>
      	</div>
      </div>

    );
  }
}

export default App;