import React, { Component } from 'react';
import { Home, Gym, Shopping, Payments, Mail, Notes } from './Menu';
import { JHsu } from '../Icon';

class Sidebar extends Component{
  switchPage = (page) =>{
    var prev = document.getElementsByClassName("nav-page slid-in");
    prev[0].className = "nav-page slid-out";
    var current = document.getElementById(page.target.id + " page");
    current.className = "nav-page slid-in";
  };
  render(){
    return(
      <div id="sidebar" className="sidebar r-border-light slide-r">
          <div id="sidebar-inner">
            <div className="pt-6 mb-8 pb-6 flex justify-center b-border-light">
              <JHsu />
            </div>
            <div className="inner">
              <div onClick={this.switchPage}><Home /></div>
              <div onClick={this.switchPage}><Mail /></div>
              <div onClick={this.switchPage}><Payments /></div>
              <div onClick={this.switchPage}><Shopping /></div>
              <div onClick={this.switchPage}><Gym /></div>
              <div onClick={this.switchPage}><Notes /></div>
            </div>
          </div>
        </div>
    );
  }
}

export default Sidebar;
