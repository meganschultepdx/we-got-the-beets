import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import MarketSchedule from './MarketSchedule';
import InSeason from './InSeason';
import { Switch, Route } from 'react-router-dom';


function App() {
  var containerStyle = {
      backgroundColor: 'rgba(255, 255, 255, 0.65)',
      maxWidth: '800px',
      width: '80%',
      margin: 'auto'
  }
  return (
    <div className="App">
    <NavBar/>
      <div style={containerStyle}>
        <p>
          The Lin-Lins
        </p>
        <p>We got the beets!</p>
        <Switch>
          <Route exact path="/" component={MarketSchedule} />
          <Route path="/InSeason" component={InSeason} />
          <Route path="/Schedule" component={MarketSchedule} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
