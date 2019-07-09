import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import MarketSchedule from './MarketSchedule';
import InSeason from './InSeason';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Splash from './Splash';
import NewMessageControl from './NewMessageControl';
import NewMessageForm from './NewMessageForm';

const containerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  maxWidth: '800px',
  width: '80%',
  margin: 'auto',
  minHeight: '65vh',
  border: '3px solid lightgrey',
  marginTop: '8%',
  padding: '15px'
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterMessageList: ["hello"]
    };
    this.handleAddingNewMessageToList = this.handleAddingNewMessageToList.bind(this);
  }

  handleAddingNewMessageToList(newMessage){
    var newMasterMessageList = this.state.masterMessageList.slice();
    newMasterMessageList.push(newMessage);
    this.setState({masterMessageList: newMasterMessageList});
  }

  render(){
    return (
      <div className="App">
      <NavBar masterMessageList={this.state.masterMessageList}/>
      <HashRouter>
      <div style={containerStyle}>
      <Switch>
      <Route exact path="/" component={Splash} />
      <Route path="/InSeason" component={InSeason} />
      <Route path="/Schedule" render={()=><MarketSchedule onNewMessageCreation={this.handleAddingNewMessageToList} masterMessageList={this.state.masterMessageList}/> }/>

      </Switch>
      </div>
      </HashRouter>
      </div>
    );
  }
}

export default App;
