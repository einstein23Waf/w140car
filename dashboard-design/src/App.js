import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard } from "./components";
import { Login } from "./components";
import { Userprofile } from "./components";
import { Myservicehistory } from "./components";
import { Calendar } from "./components";
import { Messages } from "./components";
import { Payments } from "./components";


function App() {
  
  return (
    <div className="App">
      <Router>
  
        <Switch>
          <Route path="/" exact component={() => <Login />} />
          <Route path="/dashboard" exact component={() => <Dashboard />} />
          <Route path="/userprofile" exact component={() => <Userprofile />} />
          <Route path="/myservicehistory" exact component={() => <Myservicehistory />} />
          <Route path="/calendar" exact component={() => <Calendar />} />
          <Route path="/messages" exact component={() => <Messages />} />
          <Route path="/payments" exact component={() => <Payments />} />
        </Switch>
        
      </Router>
    </div>
  );

}

export default App;
