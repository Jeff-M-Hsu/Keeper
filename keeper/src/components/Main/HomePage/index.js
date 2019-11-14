import React, { Component } from 'react';
import Tile from './Tile';
import { Button, Menu, MenuItem, Header, Icon, Card, Accordion } from 'jhsu-components';

class HomePage extends Component{
  handleClick = () => {
    alert("hello");
  };
  render(){
    return(
      <div id="home page" className="nav-page slid-in">
        <Accordion size="large" title="Test Section">
          <Button theme="primary" size="medium" onClick={this.handleClick}>Hello</Button>
          <Card size="large"><Icon shape="circle" src="https://dummyimage.com/250/888/fff" /><p><Header>John Smith</Header><br/>Email: John@Smith.com<br/>Phone: 999-999-9999</p></Card>
          <Menu>
            <MenuItem href="https://www.npmjs.com/package/jhsu-components" target="__blank" size="medium">Menu Item</MenuItem>
            <MenuItem size="medium">Menu Item</MenuItem>
            <MenuItem size="medium">Menu Item</MenuItem>
          </Menu>
        </Accordion>
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
