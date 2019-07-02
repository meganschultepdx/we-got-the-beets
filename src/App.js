import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import MarketSchedule from './MarketSchedule';
import InSeason from './InSeason';
import { Switch, Route } from 'react-router-dom';
import Splash from './Splash';


function App() {
  var containerStyle = {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      maxWidth: '800px',
      width: '80%',
      margin: 'auto',
      minHeight: '65vh',
      border: '3px solid lightgrey',
      marginTop: '8%',
      padding: '15px'
  }
  return (
    <div className="App">
    <NavBar/>
      <div style={containerStyle}>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/InSeason" component={InSeason} />
          <Route path="/Schedule" component={MarketSchedule} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
