import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import MarketSchedule from './MarketSchedule';
import InSeason from './InSeason';

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
        <MarketSchedule/>
        <InSeason/>
      </div>
    </div>
  );
}

export default App;
