import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import Character from "./components/Character/Character";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage} />

          <Route exact path="/character/:charId" component={Character} />

          <Route render={() => <h3>404 Not Found</h3>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
