import React, { Component } from "react";
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol } from "mdbreact";


class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };



  render() {
    return (
      <MDBContainer fluid className="card-image" style={{ height: '625px' }}>
        <div className="empty-height"></div>
        <div className="empty-height"></div>
        <div className="empty-height"></div>
        <MDBRow>
          <MDBCol></MDBCol>
          <MDBCol>
            <MDBCard style={{ width: '400px' }}>
              <MDBCardBody style={{ height: '500px' }}>
                <form className="needs-validation "
                  onSubmit={this.submitHandler}
                  noValidate>
                  <div className="image-align">
                    <i class="prefix grey-text">
                      <img src="https://img.icons8.com/bubbles/100/000000/password.png" alt="sorry no images" />
                    </i>
                    <p className="h4 mb-4">Sign In</p>
                  </div>
                  <div className="empty-height"></div>
                  <div className="grey-text">
                    <MDBInput
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeHandler}
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      id="loginFormEmail"
                      name="email"
                    />
                    <MDBInput
                      className="form-control"
                      onChange={this.changeHandler}
                      value={this.state.password}
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      id="loginFormPassword"
                      name="password"
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn
                      type="submit"
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
  }
}


export default Login;
