import React, { Component } from "react";
import "./App.css";

// import Login from "./Components/Login";
// import AddModule from "./Components/AddModule";
// import AddDefectForm from './Components/AddDefectForm';
// import ViewDefects from './Components/ViewDefects';
import ViewDefectTable from './Components/ViewDefectsNormal';
// import Nav from './Components/Nav';
// import NavBar from './Components/navbar';
// import DashBoard from './Components/DashBoard';
// import AddUsers from './Components/AddUsers';

class App extends Component {
  render() {
    return (
      <div>
        <ViewDefectTable/>

      </div>
    );
  }
}

export default App;
