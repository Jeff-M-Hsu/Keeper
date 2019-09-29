import React, { Component } from 'react';
import Tile from '../Tile';
import { JHsu, MenuIcon } from '../Icon';
import { Home, Gym, Shopping, Payments, Mail, Notes } from '../Menu';
import '../../styles/tailwind.css'

class App extends Component {
  
  toggleView = () =>{
    console.log("toggle");
    var sidebar = document.getElementById("sidebar-inner");
    var main = document.getElementById("main");
    if(sidebar.className.includes("slide-l")){
      sidebar.className = "slide-r";
      main.className = "main windowed bg-offwhite min-h-screen";
    }
    else{
      sidebar.className = "slide-l";
      main.className = "full bg-offwhite min-h-screen";
    }
  };
  render(){
  return (
    <div className="App">
        <div id="sidebar" className="sidebar r-border-light">
          <div id="sidebar-inner">
            <div className="pt-6 mb-8 pb-6 flex justify-center b-border-light">
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
        </div>
        <div id="main" className="main bg-offwhite min-h-screen">
          <header>
            <div className="topbar b-border-light bg-white">
              <div className="inner" >
                <button onClick={this.toggleView} className="ml-6 h-6 w-6 mt-3"><MenuIcon /></button>
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
}

export default App;
