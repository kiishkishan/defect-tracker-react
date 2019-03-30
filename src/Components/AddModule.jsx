import React, { Component } from "react";
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import Nav from "./Nav";

class AddModule extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="fixednavi-pr-solved">
        </div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3"></MDBCol>
            <MDBCol>
              <MDBCard>
                <MDBCardBody>
                  <form>
                    <div className="image-align">
                      <i class="prefix grey-text">
                        <img
                          src="https://img.icons8.com/color/65/000000/module.png"
                          alt="asdf"
                        />
                      </i>
                      <p className="h4 mb-4">Modules</p>
                    </div>
                    <br />
                    <div className="grey-text">
                      <MDBInput
                        label="Module ID"
                        icon="key"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Module Name"
                        icon="puzzle-piece"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn
                        type="button"
                        gradient="blue"
                        rounded
                        className="btn-block z-depth-1a"
                      >
                        Add
              </MDBBtn>
                      {/* <MDBBtn color="cyan" type="submit">
                              Register
                    </MDBBtn> */}
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="3"></MDBCol>
          </MDBRow>
        </MDBContainer>

      </div>
    );
  };
}




export default AddModule;
