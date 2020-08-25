import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/dashboard" component={Dashboard}             
        ></Route>        
        <Route path="*" component={Error}></Route>
      </Switch>
    </Router>
  );
}

export default App;
