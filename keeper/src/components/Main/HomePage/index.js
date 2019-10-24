import React, { Component } from 'react';
import Tile from './Tile';
import { Button } from 'jhsu-components';

class HomePage extends Component{
  render(){
    return(
      <div id="home page" className="nav-page slid-in">
            <Button theme="primary" size="medium">Hello</Button>
            <div className="h-16"/>
            <section className="tile-row">
              <Tile />
              <Tile />
              <Tile />
              <Tile />
            </section>
            <div className="h-20"/>
            <section className="tile-row">
              <Tile />
              <Tile />
              <Tile />
              <Tile />
            </section>
          </div>
    );
  }
}

export default HomePage;
