import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Basicrequirements, Dashboard, Specificrequirements } from "./components";
import { Login } from "./components";
import { Userprofile } from "./components";
import { Myservicehistory } from "./components";
import { Calendar } from "./components";
import { Messages } from "./components";
import { Payments } from "./components";
import { Newservices } from "./components";
import { Requests } from "./components";
import { Location } from "./components";


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
          <Route path="/new" exact component={() => <Newservices />} />
          <Route path="/requests" exact component={() => <Requests />} />
          <Route path="/location" exact component={() => <Location />} />
          <Route path="/basicrequest" exact component={() => <Basicrequirements />} />
          <Route path="/specificrequest" exact component={() => <Specificrequirements />} />
        </Switch>
        
      </Router>
    </div>
  );

}

export default App;
