import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './componets/Header';
import Navbar from './componets/Navbar';
import Profile from './componets/Profile';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
