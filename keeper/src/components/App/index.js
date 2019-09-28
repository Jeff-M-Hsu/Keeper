import React from 'react';
import Tile from '../Tile';
import { JHsu, MenuIcon } from '../Icon';
import { Home, Gym, Shopping, Payments, Mail, Notes } from '../Menu';
import '../../styles/tailwind.css'

function App() {
  return (
    <div className="App">
        <div className="sidebar r-border-light">
          <div className="mt-6 mb-8 flex justify-center">
            <JHsu />
          </div>
          <div className="inner">
            <Home />
            <Mail />
            <Payments />
            <Shopping />
            <Gym />
            <Notes />
          </div>
        </div>
        <div className="main bg-offwhite min-h-screen">
          <header>
            <div className="topbar b-border-light bg-white">
              <div className="inner ml-6">
                <MenuIcon />
              </div>
            </div>
          </header>
          <div id="home" className="nav page">
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
        </div>
    </div>
  );
}

export default App;
