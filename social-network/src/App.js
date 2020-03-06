import React from 'react'
// import logo from './logo.svg';
import './App.scss'
import { Route, BrowserRouter } from 'react-router-dom'
import Header from './componets/Header/Header'
import Navbar from './componets/Navbar/Navbar'
import Profile from './componets/Profile/Profile'
import Dialogs from './componets/Dialogs/Dialogs'
import News from './componets/News/News'
import Music from './componets/Music/Music'
import Settings from './componets/Settings/Settings'

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content-wrapper">
          <Route path="/profile" render={() => <Profile />} />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs dialogs={props.dialogs} messages={props.messages} />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
