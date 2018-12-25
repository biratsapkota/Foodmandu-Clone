import React, { Component } from 'react';
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import Craving from './components/craving/craving';
import Specialdeal from './components/specialdeal/specialdeal';
import Restaurants from './components/restaurants/restaurants';
import "./styles/main.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Hero/>
        <Craving/>
        <Specialdeal/>
        <Restaurants />
      </div>
    );
  }
}

export default App;
