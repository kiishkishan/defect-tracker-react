import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBBtn, MDBCol, MDBCard } from "mdbreact";
import Nav from './Nav';
import { User } from '../fetch/UsersPost'

// const st = () => { backgroundColor: 'black' }
import Select from 'react-select';

const options = [
    { value: 'Developer', label: 'Developer' },
    { value: 'QA', label: 'Quality Assuarance' }
];

class AddUsers extends Component {

    state = {
        fullName: "",
        email: "",
        password: "",
        cfPassword: "",
        selectedOption: null
    }


    doChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
        // console.log(this.state.jobRole)
        // console.log(this.state.jobRole)
    }


    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        console.log(this.state.selectedOption)
    }

    doVal = e => {
        e.preventDefault();
        if (this.state.password === "" || this.state.password == null) {
            console.log("fields are empty");
            return false;
        }

        if (this.state.cfPassword === "" || this.state.cfPassword == null) {
            console.log("fields are empty");
            return false;
        }

        if (this.state.password === this.state.cfPassword) {
            console.log("passwords are matching")
            this.doSubmit(e);
            return true;
        }
        else {
            console.log("passwords mismatching")
        }
    }


    doSubmit = e => {

        const users = {
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password,
            jobRole: this.state.selectedOption.value,
            // selectedOption: this.state.selectedOption
        }

        User(users);

        console.log(
            User
        )

    }


    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                <Nav />
                <div className="fixednavi-pr-solved"></div>
                <MDBContainer>

                    <MDBRow>
                        <MDBCol md="4" />

                        <MDBCard style={{ width: '400px' }}>
                            <div className="empty-height"></div>
                            <MDBCol>
                                <div className="div-width">
                                    <form className="form-align">
                                        <div className="image-align">
                                            <i className="prefix grey-text">
                                                <img src="https://img.icons8.com/dusk/65/000000/under-computer.png" alt="sorry no images" />
                                            </i>
                                            <p className="h4 mb-4">Add an User</p>
                                        </div>
                                        <div>
                                            <label htmlFor="fullName" className="grey-text">
                                                Full Name
                  </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={this.state.fullName}
                                                onChange={e => this.doChange(e)}
                                                className="form-control form-control-md input_style"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="grey-text">
                                                Email
                  </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={this.state.email}
                                                onChange={e => this.doChange(e)}
                                                className="form-control"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="password"
                                                className="grey-text"
                                            >
                                                Password
                  </label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={this.state.password}
                                                onChange={e => this.doChange(e)}
                                                className="form-control"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="cfPassword"
                                                className="grey-text"
                                            >
                                                Confirm Password
                  </label>
                                            <input
                                                type="password"
                                                id="cfPassword"
                                                name="cfPassword"
                                                value={this.state.cfPassword}
                                                onChange={e => this.doChange(e)}
                                                className="form-control"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="jobRole"
                                                className="grey-text"
                                            >
                                                Designation
                  </label>
                                            {/* <select
                                                id="jobRole"
                                                name="jobRole"
                                                value={this.state.jobRole}
                                                onChange={this.handleSelectChange}
                                                className="browser-default custom-select grey-text">
                                                <option value="0">Select your Designation</option>
                                                <option value="1">Software Developer</option>
                                                <option value="2">QA</option>
                                            </select> */}
                                            <Select
                                                value={selectedOption}
                                                onChange={this.handleChange}
                                                options={options}
                                                placeholder="What's Your Job Role?"
                                            />
                                        </div>

                                        <div className="text-center mt-4">
                                            <MDBBtn
                                                color="primary"
                                                type="submit"
                                                onClick={e => this.doVal(e)}
                                            >
                                                Register
                  </MDBBtn>
                                        </div>
                                    </form>
                                </div>
                            </MDBCol>
                            <div className="empty-height"></div>
                        </MDBCard>

                        <MDBCol md="3"></MDBCol>
                    </MDBRow>

                </MDBContainer>
            </div >
        );
    }

}

export default AddUsers;
