import React, { Component } from 'react';
import TopBar from './TopBar';
import HomePage from './HomePage';
import MailPage from './MailPage';
import PaymentPage from './PaymentPage';
import ShoppingPage from './ShoppingPage';
import GymPage from './GymPage';
import NotesPage from './NotesPage';

class Main extends Component{
  render(){
    return(
      <div id="main" className="main bg-offwhite min-h-screen">
          <TopBar />
          <HomePage />
          <MailPage />
          <PaymentPage />
          <ShoppingPage />
          <GymPage />
          <NotesPage />
        </div>
    );
  }
}

export default Main;
