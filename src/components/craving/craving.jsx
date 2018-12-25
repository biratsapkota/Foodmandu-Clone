import React, { Component } from 'react';
import Cravingbox from './cravingbox';

class App extends Component {
  render() {
    let cravings = [
      {
        image_url: "https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545468551/pngs/sweets.png",
        name: "Sweets"
      },
      {
        image_url: "https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545468551/pngs/pizza.png",
        name: "Pizza"
      },
      {
        image_url: "https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545468551/pngs/momo.png",
        name: "Mo:Mo"
      },
      {
        image_url: "https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545468551/pngs/newari.png",
        name: "Newari"
      },
      {
        image_url: "https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545468551/pngs/chinese.png",
        name: "Chinese"
      },
      {
        image_url: "https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545468551/pngs/japanese.png",
        name: "Japanese"
      },
      {
        image_url: "https://res.cloudinary.com/dpy0mkwsp/image/upload/v1545468551/pngs/Burger1-min.png",
        name: "Burger"
      },
    ]
    let display_cravings = cravings.map(craving => {
      return (
        <Cravingbox image_url={craving.image_url} name={craving.name}/>
      )
    })
    return (
      <div className="cravingwrapper">
      	<div className = "cravinghead">What are you craving for?</div>
      	<div className = "cravingboxes">
          { display_cravings }
        </div>
      </div>
    );
  }
}

export default App;