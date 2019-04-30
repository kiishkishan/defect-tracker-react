import React, { Component } from 'react';
import Nav from './Nav';
import { MDBContainer } from 'mdbreact';
// import DefectDelete from '../fetch/DefectDelete';

class ViewDefectTable extends Component {

    state = {
        defects: []
    }

    handleDelete = id => {
        fetch("http://localhost:8080/defect/deleteDefect/" + id, {
            method: "DELETE"
        })
            .then(() => this.getAllDefect())
        console.log(" Successfully deleted " + id);
    };


    handleEdit = id => {
        // this.props.history.push(`/EditSubClass`);
        this.props.history.push(`/EditDefect/${id}`);
        console.log(id);
    };



    async getAllDefect() {
        const url = "http://localhost:8080/defect/getAllDefect";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ defects: data });
    }

    componentDidMount() {

        this.getAllDefect();
        // this.handleDelete();

    }

    render() {
        // this.handleDelete();
        // this.getAllDefect();
        return (
            <div>
                <Nav />
                <div className="fixednavi-pr-solved"></div>
                <MDBContainer fluid>
                    <div className="empty-height"></div>
                    {/* // < !--Table-- > */}
                    <table class="table-striped table-light table-responsive-xl table-bordered">

                        {/* <!--Table head--> */}
                        <thead>
                            <tr>
                                <th scope="row">#</th>
                                <th>Defect ID</th>
                                <th>Module</th>
                                <th>Description</th>
                                <th>Steps to Recreate</th>
                                <th>Severity</th>
                                <th>Priority</th>
                                <th>Defect Type</th>
                                <th>Entered By</th>
                                <th>Entered Date</th>
                                <th>Status</th>
                                <th>Assigned To</th>
                                <th>Fixed By</th>
                                <th>Fixed Date</th>
                                <th>Available in</th>
                                <th>Comments</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        {/* <!--Table head-->
                <!--Table body--> */}
                        <tbody id="getresult">


                            {this.state.defects.map(e => (
                                <tr>

                                    <td>{e.id}</td>
                                    <td>{e.defect_id}</td>
                                    <td>{e.module}</td>
                                    <td>{e.description}</td>
                                    <td>{e.stepstorecreate}</td>
                                    <td>{e.severity}</td>
                                    <td>{e.priority}</td>
                                    <td>{e.defecttype}</td>
                                    <td>{e.enteredby}</td>
                                    <td>{e.entereddate}</td>
                                    <td>{e.status}</td>
                                    <td>{e.assignedto}</td>
                                    <td>{e.fixedby}</td>
                                    <td>{e.fixeddate}</td>
                                    <td>{e.availablein}</td>
                                    <td>{e.comments}</td>
                                    {/* <td>{e.Defect_ID}</td>
                                    <td>{e.Module}</td>
                                    <td>{e.Description}</td>
                                    <td>{e.Steps_to_recreate}</td>
                                    <td>{e.Severity}</td>
                                    <td>{e.Priority}</td>
                                    <td>{e.Defect_Type}</td>
                                    <td>{e.Entered_By}</td>
                                    <td>{e.Entered_Date}</td>
                                    <td>{e.Status}</td>
                                    <td>{e.Assigned_To}</td>
                                    <td>{e.Fixed_By}</td>
                                    <td>{e.Fixed_Date}</td>
                                    <td>{e.Available_in}</td>
                                    <td>{e.Comments}</td> */}
                                    <td><button type="submit" onClick={this.handleEdit.bind(this, e.id)}><img src="https://img.icons8.com/nolan/35/000000/edit.png" alt="sorry no images" /></button></td>
                                    <td><button type="submit" onClick={this.handleDelete.bind(this, e.id)}><img src="https://img.icons8.com/color/35/000000/trash.png" alt="sorry no images" /></button></td>



                                </tr>
                            ))}



                        </tbody>
                        {/* <!--Table body--> */}


                    </table>
                    {/* // <!--Table--> */}
                </MDBContainer>
            </div>
        );
    }
}

export default ViewDefectTable;