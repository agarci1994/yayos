import React, { Component } from "react"

/* ----- RRD components ----- */
import { Switch, Route, Redirect } from "react-router-dom"

/* ----- auth components ----- */
import AuthServices from "./services/auth.services"

/* ----- UI components ----- */
import Nav from "./components/elements/nav/Nav"
import Signup from "./components/pages/auth/signup/Signup"
import Login from "./components/pages/auth/login/Login"

/* ----- RRD components ----- */
import Index from "./components/pages/index/index"
import Profile from "./components/pages/profile/Profile"
import Main from "./components/pages/main/main"
import Warming from "./components/pages/main/util/warming/warming"
import Diet from "./components/pages/main/util/diet/diet"
import Drug from "./components/pages/main/util/drug/drug"
import Memory from "./components/pages/main/util/memory/memory"
import Events from "./components/pages/main/util/map/map"
import Ejercite from "./components/pages/main/util/ejercite/ejercite"
import Brain from "./components/pages/main/util/ejercite/memory/ejerciteMemory"
import Sport from "./components/pages/main/util/ejercite/sport/ejerciteSport"
import Doctor from "./components/pages/main/util/doctor/doctor"




import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: false
    }
    this.services = new AuthServices();
  }

  componentDidUpdate = (prevProps, prevState) => console.log("El estado de App se ha actualizado:", this.state);
  componentDidMount = () => this.fetchUser();

  setTheUser = userObj =>
    this.setState({
      loggedInUser: userObj
    })

  fetchUser = () => {
    this.services
      .loggedin()
      .then(theUser =>
        this.setState({
          loggedInUser: theUser
        })
      )
      .catch(() =>
        this.setState({
          loggedInUser: false
        })
      )
  }

  render() {
    return (
      <div className="App">
        <Nav
          setTheUser={this.setTheUser}
          loggedInUser={this.state.loggedInUser}
        />
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Index loggedInUser={this.state.loggedInUser} />}
            />
            <Route
              path="/signup"
              render={props => (
                <Signup setTheUser={this.setTheUser} {...props} />
              )}
            />
            <Route
              path="/login"
              render={props => (
                <Login setTheUser={this.setTheUser} {...props} />
              )}
            />
            <Route
              path="/profile"
              render={() =>
                this.state.loggedInUser ? (
                  <Profile loggedInUser={this.state.loggedInUser} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/main"
              render={() =>
                this.state.loggedInUser ? (
                  <Main loggedInUser={this.state.loggedInUser} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/warming"
              render={() => <Warming loggedInUser={this.state.loggedInUser} />}
            />
            <Route
              path="/diet"
              render={() =>
                this.state.loggedInUser ? (
                  <Diet loggedInUser={this.state.loggedInUser} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/pils"
              render={() =>
                this.state.loggedInUser ? (
                  <Drug loggedInUser={this.state.loggedInUser} />
                ) : (
                    <Redirect to="/" />
                  )
              }/>
            <Route
              path="/memory"
              render={() =>
                this.state.loggedInUser ? (
                  <Memory
                    setTheUser={this.setTheUser}
                    loggedInUser={this.state.loggedInUser}
                  />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/event"
              render={() =>
                this.state.loggedInUser ? (
                  <Events loggedInUser={this.state.loggedInUser} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/ejercite"
              render={() => this.state.loggedInUser ? (
                <Ejercite loggedInUser={this.state.loggedInUser} />
              ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/braing-training"
              render={() => this.state.loggedInUser ? (
                <Brain loggedInUser={this.state.loggedInUser} />
              ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/sport-training"
              render={() => this.state.loggedInUser ? (
                <Sport loggedInUser={this.state.loggedInUser} />
              ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/medical"
              render={() => this.state.loggedInUser ? (
                <Doctor loggedInUser={this.state.loggedInUser} />
              ) : (
                  <Redirect to="/" />
                )
              }
            />
          </Switch>
        </main>
      </div>
    )
  }
}
export default App;
