import React, { Component } from "react";
import "./App.css";

import Login from "./Components/Login";
import AddModule from "./Components/AddModule";
// import AddUser from "./Components/AddUser";
import AddUsers from "./Components/AddUsers";
import AddDefectForm from './Components/AddDefectForm';
import ViewDefectTable from './Components/ViewDefectsNormal';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Components/DashBoard';

class App extends Component {
  render() {
    return (
      <Router>
        <div>



          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/adddefect" component={AddDefectForm} />
          <Route path="/viewdefect" component={ViewDefectTable} />
          <Route path="/addusers" component={AddUsers} />
          {/* <Route path="/viewusers" component={ViewUser}/> */}
          <Route path="/addmodules" component={AddModule} />
          {/* <Route path="/viewmodules" component={ViewModules}/> */}

        </div>
      </Router>
    );
  }
}

export default App;