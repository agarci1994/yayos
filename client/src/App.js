import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/elements/nav/Nav";
import Signup from './components/pages/auth/signup/Signup'
import Login from './components/pages/auth/login/Login'
import Index from "./components/pages/index/index"
import Profile from './components/pages/profile/Profile'
import Main from './components/pages/main/main'
import AuthServices from './services/auth.services'

class App extends Component {
 constructor() {
    super()
    this.state = { loggedInUser: false }
    this.services = new AuthServices()
  }

  componentDidUpdate = (prevProps, prevState) => console.log("El estado de App se ha actualizado:", this.state)
  componentDidMount = () => this.fetchUser()


  setTheUser = userObj => this.setState({
    loggedInUser: userObj
  })
  fetchUser = () => {
    this.services.loggedin()
      .then(theUser => this.setState({
        loggedInUser: theUser
      }))
      .catch(() => this.setState({
        loggedInUser: false
      }))
  }


  render() {
    return (
      <div className="App">
        <Nav setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser}/>
        <main>
        <Switch>
          <Route exact path="/" render={() => <Index loggedInUser={this.state.loggedInUser}/>} />
          <Route path="/signup" render={props => <Signup setTheUser={this.setTheUser} {...props}/>} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
          <Route path="/profile" render={() => this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />} />
          <Route path="/main" render={() => <Main loggedInUser={this.state.loggedInUser}/>}></Route>
        </Switch>

        </main>
      </div>
    );
  }
}
export default App;
