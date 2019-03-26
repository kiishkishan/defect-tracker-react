import React, { Component } from "react";
import "./App.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import Login from "./Components/Login";
import AddModule from "./Components/AddModule";
// import AddDefectForm from './Components/AddDefectForm';

class App extends Component {
  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow className="row-height" />
          <MDBRow>
            <MDBCol md="4" />
            <MDBCol md="4">
              <AddModule />
            </MDBCol>
            <MDBCol md="4" />
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
