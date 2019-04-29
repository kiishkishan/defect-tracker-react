import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import Nav from './Nav';
import Defect from '../fetch/DefectPost';

// import Select from 'react-select';






class AddDefectForm extends Component {


    state = {
        defectid: "",
        description: "",
        stepstorecreate: "",
        // entereddate: Date('YY/MM/DD'),
        entereddate: new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay(),
        severity: "High",
        priority: "High",
        module: "",
        defecttype: "UI",
        enteredby: "",
        status: "",
        assignedto: "",
        fixedby: "",
        fixeddate: new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay(),
        availablein: "",
        comments: "",
        user: []

    }


    async componentDidMount() {
        const url = "http://localhost:8080/defect/user/getall";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ user: data });

        // data.forEach(element => {
        //     console.log(element.severity);
        // });

    }


    doChange = e => {

        // console.log(this.state.defectid)
        // console.log(this.state.module)
        // console.log(this.state.fixeddate)
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state.severity)

    }

    doSubmit = e => {
        e.preventDefault();
        const defects = {
            Defect_ID: this.state.defectid,
            Module: this.state.module,
            Description: this.state.description,
            Steps_to_recreate: this.state.stepstorecreate,
            Severity: this.state.severity,
            Priority: this.state.priority,
            Defect_Type: this.state.defecttype,
            Entered_By: this.state.enteredby,
            Entered_Date: this.state.entereddate,
            Status: this.state.status,
            Assigned_To: this.state.assignedto,
            Fixed_By: this.state.fixedby,
            Fixed_Date: this.state.fixeddate,
            Available_in: this.state.availablein,
            Comments: this.state.comments
        }
        Defect(defects);
        console.log(
            Defect
        )

        // this.setState({
        //     defectid: "",
        //     description: "",
        //     stepstorecreate: "",
        //     entereddate: "",
        //     severity: "",
        //     priority: "",
        //     module: "",
        //     defecttype: "",
        //     enteredby: "",
        //     status: "",
        //     assignedto: "",
        //     fixedby: "",
        //     fixeddate: "",
        //     availablein: "",
        //     comments: "",
        // })

    }


    render() {

        // console.log(this.state.severity)
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
                                    <input
                                        type="text"
                                        name="defectid"
                                        id="defectid"
                                        value={this.state.defectid}
                                        onChange={e => this.doChange(e)}
                                    />
                                </p>
                                <p>
                                    <label>Module</label>
                                    <select
                                        id="module"
                                        name="module"
                                        value={this.state.module}
                                        onChange={e => this.doChange(e)}
                                    >
                                        <option value="Login">Login</option>
                                        <option value="SignUp">SignUp</option>
                                        <option value="DashBoard">DashBoard</option>
                                    </select>
                                </p>
                                <p className="full">
                                    <label>Description</label>
                                    <textarea
                                        value={this.state.description}
                                        onChange={e => this.doChange(e)}
                                        name="description"
                                        rows="3"
                                        id="description"
                                    >
                                    </textarea>
                                </p>
                                <p className="full">
                                    <label>Steps to Recreate</label>
                                    <textarea
                                        value={this.state.stepstorecreate}
                                        onChange={e => this.doChange(e)}
                                        name="stepstorecreate"
                                        rows="4"
                                        id="stepstorecreate"
                                    >
                                    </textarea>
                                </p>
                                <p>
                                    <label>Severity</label>
                                    <select
                                        id="severity"
                                        name="severity"
                                        value={this.state.severity}
                                        onChange={e => this.doChange(e)}
                                    >
                                        <option active="true" value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                    {/* <Select
                                        // className="contact"
                                        id="severity"
                                        name="severity"
                                        value={this.state.severity}
                                        onChange={e => this.doChange(e)}
                                        options={levels}
                                        placeholder="Select The Severity"
                                    /> */}
                                </p>
                                <p>
                                    <label>Priority</label>
                                    {/* <Select
                                        id="priority"
                                        name="priority"
                                        value={this.state.priority}
                                        onChange={e => this.handleChange(e)}
                                        options={levels}
                                        placeholder="Select The Priority"
                                    /> */}
                                    <select
                                        id="priority"
                                        name="priority"
                                        value={this.state.priority}
                                        onChange={e => this.doChange(e)}
                                    >
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </p>
                                <p>
                                    <label>Defect Type</label>
                                    <select
                                        id="defecttype"
                                        name="defecttype"
                                        value={this.state.defecttype}
                                        onChange={e => this.doChange(e)}
                                    >
                                        <option value="UI">UI</option>
                                        <option value="Functionality">Functionality</option>
                                        <option value="Performance">Performance</option>
                                    </select>
                                </p>
                                <p>
                                    <label>Entered By</label>
                                    <select
                                        id="enteredby"
                                        name="enteredby"
                                        value={this.state.enteredby}
                                        onChange={e => this.doChange(e)}
                                    >
                                        <option value="user1">Choose the User</option>
                                        {this.state.user.map(e => (
                                            <option value={e.id}>{e.name}</option>
                                        ))}
                                    </select>
                                </p>
                                <p>
                                    <label>Entered Date</label>
                                    <input
                                        value={this.state.entereddate}
                                        onChange={e => this.doChange(e)}
                                        type="date"
                                        name="entereddate"
                                        id="entereddate" />
                                </p>
                                <p>
                                    <label>Status</label>
                                    <select
                                        id="status"
                                        name="status"
                                        value={this.state.status}
                                        onChange={e => this.doChange(e)}
                                    >
                                        <option value="New">New</option>
                                        <option value="Open">Open</option>
                                        <option value="Fixed">Fixed</option>
                                    </select>
                                </p>
                                <p>
                                    <label>Assigned To</label>
                                    <select
                                        name="assignedto"
                                        id="assignedto"
                                        value={this.state.assignedto}
                                        onChange={e => this.doChange(e)}
                                    >
                                        <option value="user1">Choose the User</option>
                                        {this.state.user.map(e => (
                                            <option value={e.id}>{e.name}</option>
                                        ))}
                                    </select>
                                </p>
                                <p>
                                    <label>Fixed By</label>
                                    <select
                                        name="fixedby"
                                        id="fixedby"
                                        value={this.state.fixedby}
                                        onChange={e => this.doChange(e)}
                                    >
                                        <option value="user1">Choose the User</option>
                                        {this.state.user.map(e => (
                                            <option value={e.id}>{e.name}</option>
                                        ))}
                                    </select>
                                </p>
                                <p>
                                    <label>Fixed Date</label>
                                    <input
                                        type="date"
                                        name="fixeddate"
                                        id="fixeddate"
                                        value={this.state.fixeddate}
                                        onChange={e => this.doChange(e)}
                                    />
                                </p>
                                <p>
                                    <label>Available In</label>
                                    <input
                                        type="text"
                                        name="availablein"
                                        id="availablein"
                                        value={this.state.availablein}
                                        onChange={e => this.doChange(e)}
                                    />
                                </p>
                                <p className="full">
                                    <label>Comments</label>
                                    <textarea
                                        name="comments"
                                        rows="5"
                                        id="comments"
                                        value={this.state.comments}
                                        onChange={e => this.doChange(e)}
                                    >
                                    </textarea>
                                </p>
                                <p className="full">
                                    <button
                                        type="button"
                                        onClick={e => this.doSubmit(e)}
                                        id="btn-submit"
                                    >
                                        Submit
                                    </button>
                                </p>
                            </form>
                        </div>
                    </div>
                </MDBContainer >
            </div >

        );
    }
}

export default AddDefectForm;