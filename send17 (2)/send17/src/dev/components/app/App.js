import React, { Component } from "react";
import { reactLocalStorage } from 'reactjs-localstorage';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Switch,Route } from 'react-router-dom';

import "./App.css";
import Login from '../login';


injectTapEventPlugin();

class App extends Component {
  state = {
    data: [],
    username:""
  };

  render() {
    const { username,type } = reactLocalStorage.getObject('user')
    return ( 
      <MuiThemeProvider>
        <div className="App">
          <Switch  >
            <Route exact path="/" component={Login}/>
            
           
            }            
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
