import React, { Fragment } from "react";
import Home from "./components/pages/Home";
import Capsule from "./components/launches/Capsule";
import About from "./components/pages/About";
import Navbar from "./components/layouts/Navbar";
import NotFound from "./components/pages/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AlertState from "./context/alert/AlertState";
import LaunchesState from "./context/launches/LaunchesState";

function App() {
  return (
    <LaunchesState>
      <AlertState>
        <Router>
          <div className='app'>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route
                  exact
                  path='/launch/:flight_number'
                  component={Capsule}
                />
                <Route exact path='/about' component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </LaunchesState>
  );
}

export default App;
