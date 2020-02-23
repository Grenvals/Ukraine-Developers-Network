import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialogs from './componets/Dialogs/Dialogs';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-content">
        <Profile />
        {/* <Dialogs /> */}
      </div>
    </div>
  );
}

export default App;
