import React from "react";
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBIcon } from 'mdbreact';

const Login = () => {
    return (

        <MDBCard>
            <MDBCardBody>

                <form>
                    <div>
                        <div className="text-center">
                            <h3 className="blue-text mb-5">
                                <strong>Sign up</strong>
                            </h3>
                        </div>
                    </div>

                    <div className="grey-text">
                        <MDBInput
                            label="Your name"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                        />
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
                            label="Confirm your email"
                            icon="exclamation-triangle"
                            group
                            type="text"
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

    );
};

export default Login;