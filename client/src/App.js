import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/elements/nav/Nav";
import Signup from './components/pages/auth/signup/Signup'
import Login from './components/pages/auth/login/Login'
import Index from "./components/pages/index/index"

class App extends Component {
  constructor() {
    super();
    this.state = { loggedInUser: false };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <main>
        <Switch>
          <Route exact path="/" render={() => <Index />} />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/login" render={props => <Login {...props} />} />
        </Switch>

        </main>
      </div>
    );
  }
}
export default App;
