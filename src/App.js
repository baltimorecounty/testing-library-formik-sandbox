import "./App.css";

import { Route, HashRouter as Router } from "react-router-dom";

import MultiPageForm from "./MultiPageForm";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={MultiPageForm} />
      </Router>
    </div>
  );
}

export default App;
