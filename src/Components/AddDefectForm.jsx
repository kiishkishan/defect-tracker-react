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
        status: "New",
        assignedto: "",
        fixedby: "",
        fixeddate: new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay(),
        availablein: "",
        comments: "",
        user: [],
        modules: []

    }

    async getAllModules() {
        const url = "http://localhost:8080/defect/module/getall";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ modules: data });
    }

    async getAllUsers() {
        const url = "http://localhost:8080/defect/user/getall";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ user: data });

        // old try for seperate QA and Delveloper
        // this.state.user.forEach(data => {
        //     if (data.type === "QA") {
        //         this.setState({ qa: data })
        //         console.log(this.state.qa);
        //     }

        //     else if (data.type === "Developer") {
        //         this.setState({ developer: data })
        //         console.log(this.state.developer);
        //     }
        // });
    }

    // QAselector = () => {
    //     this.state.user.forEach(element => {
    //         if (element.type === "QA") {
    //             this.setState({ qa: element })
    //             alert(this.state.qa);
    //         }

    //         else if (element.type === "Developer") {
    //             this.setState({ developer: element })
    //             console.log(this.state.developer);
    //         }



    //     });
    // }

    componentDidMount() {
        this.getAllUsers();
        this.getAllModules();

    }

    doChange = e => {

        // console.log(this.state.defectid)
        // console.log(this.state.module)
        // console.log(this.state.fixeddate)
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state.defecttype)

    }


    doSubmit = e => {
        e.preventDefault();
        const defects = {
            defect_id: this.state.defectid,
            module: this.state.module,
            description: this.state.description,
            stepstorecreate: this.state.stepstorecreate,
            severity: this.state.severity,
            priority: this.state.priority,
            defecttype: this.state.defecttype,
            enteredby: this.state.enteredby,
            entereddate: this.state.entereddate,
            status: this.state.status,
            assignedto: this.state.assignedto,
            fixedby: this.state.fixedby,
            fixeddate: this.state.fixeddate,
            availablein: this.state.availablein,
            comments: this.state.comments
        }

        Defect(defects);
        console.log(
            Defect
        )
    }

    isSubmit = e => {
        e.preventDefault();
        this.doSubmit(e);
        if (this.doSubmit) {
            this.setState({
                defectid: "",
                description: "",
                stepstorecreate: "",
                entereddate: "",
                severity: "",
                priority: "",
                module: "",
                defecttype: "",
                enteredby: "",
                status: "",
                assignedto: "",
                fixedby: "",
                fixeddate: "",
                availablein: "",
                comments: "",
            })
        }
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
                            {/* <button onClick={element => this.QAselector(element)} value={this.state.sample}>Click</button> */}
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
                                        <option value="">Choose a Module </option>

                                        {this.state.modules.map(e => (
                                            <option value={e.name}>{e.name}</option>
                                        ))}

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
                                        <option value="">Choose a Developer</option>


                                        {/* eslint-disable-next-line array-callback-return */}
                                        {this.state.user.map(e => {
                                            if (e.type === "QA") {
                                                return (
                                                    <option value={e.id}>{e.name}</option>
                                                );

                                            }
                                        }
                                        )}
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

                                        <option value="">Choose a Developer</option>
                                        {/* eslint-disable-next-line array-callback-return */}
                                        {this.state.user.map(e => {
                                            if (e.type === "Developer") {
                                                return (
                                                    <option value={e.id}>{e.name}</option>
                                                );

                                            }
                                        }
                                        )}
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
                                        <option value="user1">Choose the Developer</option>
                                        {/* eslint-disable-next-line array-callback-return */}
                                        {this.state.user.map(e => {
                                            if (e.type === "Developer") {
                                                return (
                                                    <option value={e.id}>{e.name}</option>
                                                );

                                            }
                                        }
                                        )}
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
                                        onClick={e => this.isSubmit(e)}
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