import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';

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
