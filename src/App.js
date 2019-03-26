import React, { Component } from 'react';
import './App.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Login from './Components/Login';
// import AddDefectForm from './Components/AddDefectForm';


class App extends Component {
  render() {
    return (
      <div className="card-image">
        <MDBContainer>
          <MDBRow className="row-height"></MDBRow>
          <MDBRow>
            <MDBCol md="4"></MDBCol>
            <MDBCol md="4"><Login /></MDBCol>
            <MDBCol md="4"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div >

    );
  }
}

export default App;
