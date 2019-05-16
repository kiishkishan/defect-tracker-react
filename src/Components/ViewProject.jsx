import React, { Component } from 'react';
import Nav from './Nav';
import { MDBContainer } from 'mdbreact';

class ViewProjects extends Component {
    state = {
        projects: []

    }

    componentDidMount() {
        this.getAllprojects();
        // this.handleDelete();
    }

    handleDelete = id => {
        fetch("http://localhost:8080/defect/user/delete/" + id, {
            method: "DELETE"
        })
            .then(() => this.getAllprojects())
        console.log(" Successfully deleted " + id);
    };


    async getAllprojects() {
        const url = "http://localhost:8080/defect/user/getall";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ projects: data });

        // data.forEach(element => {
        //     console.log(element.severity);
        // });

    }
    render() {
        // this.getAllprojects();
        return (
            <div>
                <Nav />
                <div className="fixednavi-pr-solved"></div>
                <MDBContainer fluid>
                    <div className="empty-height"></div>
                    {/* // < !--Table-- > */}
                    <table className="table-striped table-light table-responsive-xl table-bordered">

                        {/* <!--Table head--> */}
                        <thead>
                            <tr>
                                <th scope="row">#</th>
                                <th>Project Name</th>
        
                               
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        {/* <!--Table head-->
                <!--Table body--> */}
                        <tbody id="getresult">

                            {this.state.projects.map(e => (
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                  
                                    <td><button type="submit"><img src="https://img.icons8.com/nolan/35/000000/edit.png" alt="sorry no images" /></button></td>
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

export default ViewProjects;