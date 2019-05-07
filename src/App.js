import React, { Component } from "react";
import "./App.css";

import AddProject from "./Components/AddProject";
import AddModule from "./Components/AddModule";
 import ViewProject from "./Components/ViewUsers";
import AddUsers from "./Components/AddUsers";
import AddDefectForm from './Components/AddDefectForm';
import EditDefectForm from './Components/EditDefectForm';
import ViewDefectTable from './Components/ViewDefectsNormal';
import ViewModules from './Components/ViewModules';
import ViewUsers from './Components/ViewUsers';
// import Nav from './Components/Nav';
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
          <Route path="/viewusers" component={ViewUsers} />
          <Route path="/addmodules" component={AddModule} />
          <Route path="/viewmodule" component={ViewModules} />
          <Route path="/addprojects" component={AddProject} />
          <Route path="/viewprojects" component={ViewProject} />

          {/* edit defect */}
          <Route path="/EditDefect/:id" component={EditDefectForm} />

        </div>
      </Router>
    );
  }
}

export default App;