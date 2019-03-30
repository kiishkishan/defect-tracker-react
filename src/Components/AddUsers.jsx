import React from "react";
import { MDBContainer, MDBRow, MDBBtn, MDBCol, MDBCard } from "mdbreact";
import Nav from './Nav';

// const st = () => { backgroundColor: 'black' }


const AddUser = () => {

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
                                        <i class="prefix grey-text">
                                            <img src="https://img.icons8.com/dusk/65/000000/under-computer.png" alt="sorry no images" />
                                        </i>
                                        <p className="h4 mb-4">Add an User</p>
                                    </div>
                                    <div>
                                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                            Full Name
              </label>
                                        <input
                                            type="text"
                                            id="defaultFormRegisterNameEx"
                                            className="form-control form-control-md input_style"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                            Email
              </label>
                                        <input
                                            type="email"
                                            id="defaultFormRegisterEmailEx"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="defaultFormRegisterConfirmEx"
                                            className="grey-text"
                                        >
                                            Password
              </label>
                                        <input
                                            type="password"
                                            id="defaultFormRegisterConfirmEx"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="defaultFormRegisterPasswordEx"
                                            className="grey-text"
                                        >
                                            Confirm Password
              </label>
                                        <input
                                            type="password"
                                            id="defaultFormRegisterPasswordEx"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="defaultFormRegisterPasswordEx"
                                            className="grey-text"
                                        >
                                            Designation
              </label>
                                        <select className="browser-default custom-select grey-text">
                                            <option>Select your Designation</option>
                                            <option value="1">Software Developer</option>
                                            <option value="2">QA</option>
                                        </select>
                                    </div>

                                    <div className="text-center mt-4">
                                        <MDBBtn color="primary" type="submit">
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
        </div>
    );
};

export default AddUser;
