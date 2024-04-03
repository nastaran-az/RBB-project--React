import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
