import React, { Component } from 'react';
import { MenuIcon } from '../../Icon';

class TopBar extends Component{
  toggleView = () =>{
    console.log("toggle");
    var sidebar = document.getElementById("sidebar-inner");
    var main = document.getElementById("main");
    if(sidebar.classList.contains("slide-l")){
      sidebar.className = "slide-r";
      main.className = "main windowed bg-offwhite min-h-screen";
    }
    else{
      sidebar.className = "slide-l";
      main.className = "full bg-offwhite min-h-screen";
    }
  };
  render(){
    return(
      <header>
            <div className="topbar b-border-light bg-white">
              <div className="inner" >
                <button onClick={this.toggleView} className="ml-6 h-6 w-6 mt-3"><MenuIcon /></button>
              </div>
            </div>
          </header>
    );
  }
}

export default TopBar;
