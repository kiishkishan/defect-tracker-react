import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact'

class AddDefectForm extends Component {
    render() {
        return (
            <MDBContainer>
                <div class="wrapper animated bounceInLeft">
                    <div class="company-info">
                        <h3>Defect Entry</h3>
                    </div>
                    <div class="contact">
                        <form name="defAdd">
                            <p>
                                <label>Defect ID</label>
                                <input type="text" name="defectid" id="defectid" />
                            </p>
                            <p>
                                <label>Module</label>
                                <select id="module">
                                </select>
                            </p>
                            <p class="full">
                                <label>Description</label>
                                <textarea name="message" rows="5" id="description"></textarea>
                            </p>
                            <p class="full">
                                <label>Steps to Recreate</label>
                                <textarea name="message" rows="5" id="stepstorecreate"></textarea>
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
                            <p class="full">
                                <label>Comments</label>
                                <textarea name="message" rows="5" id="comments"></textarea>
                            </p>
                            <p class="full">
                                <button type="button" onclick="addDefect()" id="btn-submit">Submit</button>
                            </p>
                        </form>
                    </div>
                </div>
            </MDBContainer >
        );
    }
}

export default AddDefectForm;