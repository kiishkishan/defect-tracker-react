import React, { Component } from "react";
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBContainer } from "mdbreact";
// import { Multiselect } from 'multiselect-react-dropdown';
import Nav from "./Nav";
import { Module } from '../fetch/ModulePost';


class AddModule extends Component {


  state = {
    moduleID: "",
    moduleName: "",
    user: "",
    // alert1: "",
    // alert2: "",
    users: []
  };


  //load users
  async componentDidMount() {
    const url = "http://localhost:3000/users";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ users: data });

  }



  doChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })


    // console.log(this.state.user);
  }

  // doSelect = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  //   console.log(this.state.user);
  // }

  doSubmit = e => {
    e.preventDefault();
    const mod = {
      moduleID: this.state.moduleID,
      moduleName: this.state.moduleName,
      assignedPersons: this.state.user
    }

    if (this.state.moduleID === "" || this.state.moduleID == null) {
      document.getElementById('alert1').innerHTML = '<div class="alert alert-danger" role="alert">Module Id field is Empty</div > ';
      document.getElementById('alert2').innerHTML = "";
      return false;
    }
    else if (this.state.moduleName === "" || this.state.moduleName == null) {
      document.getElementById('alert1').innerHTML = "";
      document.getElementById('alert2').innerHTML = '<div class="alert alert-danger" role="alert">Module Name field is Empty</div > ';
      return false;
    }
    else if (this.state.user === "" || this.state.user == null) {
      document.getElementById('alert1').innerHTML = "";
      document.getElementById('alert2').innerHTML = "";
      return false;
    }

    else {
      Module(mod);

    }


    console.log(
      mod
    )
  }

  isSubmit = e => {
    this.doSubmit(e);
    if (this.doSubmit) {
      this.setState({
        moduleID: "",
        moduleName: "",
        user: ""
      }
      )



    };

  }



  render() {
    console.log(this.state.user);
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
                      <i className="prefix grey-text">
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
                        name="moduleID"
                        id="moduleID"
                        value={this.state.moduleID}
                        onChange={e => this.doChange(e)}
                        label="Module ID"
                        icon="key"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <div id="alert1">
                      </div>

                      <MDBInput
                        name="moduleName"
                        id="moduleName"
                        value={this.state.moduleName}
                        onChange={e => this.doChange(e)}
                        label="Module Name"
                        icon="puzzle-piece"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <div id="alert2"></div>
                      <label for="user">Users</label>
                      <select
                        className="browser-default custom-select"
                        id="user"
                        name="user"
                        placeholder="Choose Users"
                        value={this.state.user}
                        onChange={e => this.doChange(e)}
                      >
                        <option value="">Choose the Users</option>


                        {this.state.users.map(e => (
                          <option value={e.fullName}>{e.fullName}</option>
                        ))}



                      </select>
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn
                        type="submit"
                        onClick={e => this.isSubmit(e)}
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
