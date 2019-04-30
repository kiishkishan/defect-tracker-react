import React, { Component } from "react";
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBContainer } from "mdbreact";
// import { Multiselect } from 'multiselect-react-dropdown';
import Nav from "./Nav";
import { Module } from '../fetch/ModulePost';


class AddModule extends Component {


  state = {
    moduleName: "",
    user: "",
    project: "",
    // alert1: "",
    // alert2: "",
    users: [],
    projects: []
  };


  //load users
  async componentDidMount() {
    //load users
    const url = "http://localhost:8080/defect/user/getall";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ users: data });

    //load projects
    const url2 = "http://localhost:8080/defect/project/getall";
    const response2 = await fetch(url2);
    const data2 = await response2.json();
    console.log(data2);
    this.setState({ projects: data2 });
    console.log(data2)
  }



  doChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })


    console.log(this.state.project);
  }

  // doSelect = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  //   console.log(this.state.user);
  // }

  doSubmit = e => {
    e.preventDefault();
    // alert("sgf");
    let mod = {
      name: this.state.moduleName,
      user_id: this.state.user,
      project_id: this.state.project
    }
    console.log(mod);

    // if (this.state.moduleName === "" || this.state.moduleName == null) {
    //   document.getElementById('alert1').innerHTML = "";
    //   document.getElementById('alert2').innerHTML = '<div class="alert alert-danger" role="alert">Module Name field is Empty</div > ';
    //   return false;
    // }
    // else if (this.state.user === "" || this.state.user == null) {
    //   document.getElementById('alert1').innerHTML = "";
    //   document.getElementById('alert2').innerHTML = "";
    //   return false;
    // }

    Module(mod);

  }

  isSubmit = e => {
    this.doSubmit(e);
    console.log(Module);
    if (this.doSubmit) {
      this.setState({
        moduleName: "",
        user: "",
        project: ""
      }
      )



    };

  }



  render() {
    // console.log(this.state.project);
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
                          <option value={e.id}>{e.name}</option>
                        ))}



                      </select>
                      <br /><br />
                      Project
                      <br />
                      <select
                        className="browser-default custom-select"
                        id="project"
                        name="project"
                        placeholder="Choose Users"
                        value={this.state.project}
                        onChange={e => this.doChange(e)}
                      >
                        <option value="">Choose the Project</option>--+++


                        {this.state.projects.map(e => (
                          <option value={e.id}>{e.name}</option>
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
