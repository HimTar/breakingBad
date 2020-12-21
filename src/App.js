import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage} />

          <Route render={() => <h3>404 Not Found</h3>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
