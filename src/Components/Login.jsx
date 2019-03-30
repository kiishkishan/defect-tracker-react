import React from "react";
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Login = () => {
  return (
    <MDBContainer>
      <div className="empty-height"></div>
      <div className="empty-height"></div>
      <div className="empty-height"></div>
      <MDBRow>
        <MDBCol></MDBCol>
        <MDBCol>
          <MDBCard style={{ width: '400px' }}>
            <MDBCardBody style={{ height: '500px' }}>
              <form>
                <div className="image-align">
                  <i class="prefix grey-text">
                    <img src="https://img.icons8.com/bubbles/100/000000/password.png" alt="sorry no images" />
                  </i>
                  <p className="h4 mb-4">Sign In</p>
                </div>
                <div className="empty-height"></div>
                <div className="grey-text">
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                  >
                    Sign in
            </MDBBtn>
                  {/* <MDBBtn color="cyan" type="submit">
                            Register
                  </MDBBtn> */}
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
