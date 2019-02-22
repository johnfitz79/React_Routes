import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

import Navbar from './components/navbar'

class Home extends Component{
  render(){
    return(
    <div id='root'>
      <BrowserRouter>
      <div>
            <Navbar />
      <Switch>
              <Route exact path="/happy" component={Happy} />
              <Route exact path="/guilty" component={Guilty} />
              <Route exact path="/sleepy" component={Sleepy} />
      </Switch>
          </div>
      </BrowserRouter>

    </div>


)
}
}
ReactDOM.render( <Home />, document.getElementById('root') );
