import "./App.css";

import { Route, HashRouter as Router } from "react-router-dom";

import PlayerForm from "./PlayerForm";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={PlayerForm} />
      </Router>
    </div>
  );
}

export default App;
