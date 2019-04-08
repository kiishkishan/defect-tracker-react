import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";


class FormPage extends Component {

  state = {
    name: "",
    email: "",
    cfemail: "",
    password: ""
  }

  doChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(this.state.password)

  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={e => this.doChange(e)}
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={e => this.doChange(e)}
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Confirm your email"
                  name="cfemail"
                  id="cfemail"
                  value={this.state.cfemail}
                  onChange={e => this.doChange(e)}
                  icon="exclamation-triangle"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={e => this.doChange(e)}
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn
                  color="primary"
                  type="submit"
                  onClick={e => this.doSubmit(e)}
                >
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer >
    );
  }
}

export default FormPage;
