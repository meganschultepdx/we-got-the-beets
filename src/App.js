import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  var containerStyle = {
      backgroundColor: 'rgba(255, 255, 255, 0.65)'
  }
  return (
    <div className="App">
    <NavBar/>
      <div style={containerStyle}>
        <p>
          The Lin-Lins
        </p>
        <p>We got the beets!</p>
      </div>
    </div>
  );
}

export default App;
