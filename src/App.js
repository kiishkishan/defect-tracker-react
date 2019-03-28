import React, { Component } from "react";
import "./App.css";
import { MDBContainer, MDBRow } from "mdbreact";
// import Login from "./Components/Login";
// import AddModule from "./Components/AddModule";
import AddDefectForm from "./Components/AddDefectForm";
// import AddDefectForm from './Components/AddDefectForm';
// import ViewDefects from './Components/ViewDefects';
// import ViewDefectTable from './Components/ViewDefectsNormal';

class App extends Component {
  render() {
    return (
      <div>
        <MDBContainer fluid>
          <MDBRow className="row-height" />
          <MDBRow>
            <AddDefectForm />
          </MDBRow>
          {/* <MDBRow>
            <MDBCol />
            <MDBCol>
              <Login />
            </MDBCol>
            <MDBCol />
          </MDBRow> */}
        </MDBContainer>
      </div>
    );
  }
}

export default App;
