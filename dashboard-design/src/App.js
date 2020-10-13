import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard } from "./components";
import { Login } from "./components";


function App() {
  
  return (
    <div className="App">
      <Router>
  
        <Switch>
          <Route path="/" exact component={() => <Login />} />
          <Route path="/dashboard" exact component={() => <Dashboard />} />
        </Switch>
        
      </Router>
    </div>
  );

}

export default App;
