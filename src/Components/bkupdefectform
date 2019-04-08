import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact'
import Nav from './Nav';

class AddDefectForm extends Component {
    render() {
        return (
            <div>
                <Nav />
                <MDBContainer>
                    <div className="fixednavi-pr-solved"></div>
                    <div className="wrapper animated bounceInLeft">
                        <div className="company-info">
                            <h3>Defect Entry</h3>
                        </div>
                        <div className="contact">
                            <form name="defAdd">
                                <p>
                                    <label>Defect ID</label>
                                    <input type="text" name="defectid" id="defectid" />
                                </p>
                                <p>
                                    <label>Module</label>
                                    <select id="module">
                                        <option value="Login">Login</option>
                                        <option value="SignUp">SignUp</option>
                                        <option value="DashBoard">DashBoard</option>
                                    </select>
                                </p>
                                <p className="full">
                                    <label>Description</label>
                                    <textarea name="message" rows="3" id="description"></textarea>
                                </p>
                                <p className="full">
                                    <label>Steps to Recreate</label>
                                    <textarea name="message" rows="4" id="stepstorecreate"></textarea>
                                </p>
                                <p>
                                    <label>Severity</label>
                                    <select id="severity">
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </p>
                                <p>
                                    <label>Priority</label>
                                    <select id="priority">
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </p>
                                <p>
                                    <label>Defect Type</label>
                                    <select id="defecttype">
                                        <option value="UI">UI</option>
                                        <option value="Functionality">Functionality</option>
                                        <option value="Performance">Performance</option>
                                    </select>
                                </p>
                                <p>
                                    <label>Entered By</label>
                                    <select id="enteredby">
                                        <option value="user1">user1</option>
                                        <option value="user2">user2</option>
                                    </select>
                                </p>
                                <p>
                                    <label>Entered Date</label>
                                    <input type="date" name="bday" id="entereddate" />
                                </p>
                                <p>
                                    <label>Status</label>
                                    <select id="status">
                                        <option value="New">New</option>
                                        <option value="Open">Open</option>
                                        <option value="Fixed">Fixed</option>
                                    </select>
                                </p>
                                <p>
                                    <label>Assigned To</label>
                                    <select id="assignedto">
                                        <option value="user1">user1</option>
                                        <option value="user2">user2</option>
                                    </select>
                                </p>
                                <p>
                                    <label>Fixed By</label>
                                    <select id="fixedby">
                                        <option value="user1">user1</option>
                                        <option value="user2">user2</option>
                                    </select>
                                </p>
                                <p>
                                    <label>Fixed Date</label>
                                    <input type="date" name="bday" id="fixeddate" />
                                </p>
                                <p>
                                    <label>Available In</label>
                                    <input type="text" name="available in" id="availablein" />
                                </p>
                                <p className="full">
                                    <label>Comments</label>
                                    <textarea name="message" rows="5" id="comments"></textarea>
                                </p>
                                <p className="full">
                                    <button type="button" onclick="addDefect()" id="btn-submit">Submit</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </MDBContainer >
            </div>

        );
    }
}

export default AddDefectForm;