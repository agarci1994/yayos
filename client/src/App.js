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
import Warming from './components/pages/main/util/warming/warming'
import Diet from './components/pages/main/util/diet/diet'
import Drug from './components/pages/main/util/drug/drug'
import Memory from './components/pages/main/util/memory/memory'



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
          <Route path="/main" render={() => this.state.loggedInUser ? <Main loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />}/>
          <Route path="/warming" render={() => <Warming loggedInUser={this.state.loggedInUser} />}/>
          <Route path="/diet" render={() => this.state.loggedInUser ? <Diet loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />}/>
          <Route path="/pils" render={() => <Drug loggedInUser={this.state.loggedInUser} />}/>
           <Route path="/memory" render={() => <Memory loggedInUser={this.state.loggedInUser} />} />
        </Switch>
        </main>
      </div>
    );
  }
}
export default App;
