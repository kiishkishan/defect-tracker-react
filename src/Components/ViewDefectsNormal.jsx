import React, { Component } from 'react';
import Nav from './Nav';
import { MDBContainer } from 'mdbreact';

class ViewDefectTable extends Component {

    state = {
        defects: []
    }

    async componentDidMount() {
        const url = "http://localhost:3000/defect";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ defects: data });
    }

    render() {
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
                                    <td>{e.Defect_ID}</td>
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
                                    <td>{e.Comments}</td>
                                    <td><a href="/editdefect"><img src="https://img.icons8.com/nolan/35/000000/edit.png" alt="sorry no images" /></a></td>
                                    <td><a href="/deletedefect"><img src="https://img.icons8.com/color/35/000000/trash.png" alt="sorry no images" /></a></td>



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