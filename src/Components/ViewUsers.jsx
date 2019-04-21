import React, { Component } from 'react';
import Nav from './Nav';
import { MDBContainer } from 'mdbreact';

class ViewUsers extends Component {
    state = {
        users: []

    }

    async componentDidMount() {
        const url = "http://localhost:8080/defect/user/getall";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ users: data });

        // data.forEach(element => {
        //     console.log(element.severity);
        // });

    }
    render() {
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
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Position</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        {/* <!--Table head-->
                <!--Table body--> */}
                        <tbody id="getresult">

                            {this.state.users.map(e => (
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.type}</td>
                                    <td><a href="/edituser"><img src="https://img.icons8.com/nolan/35/000000/edit.png" alt="sorry no images" /></a></td>
                                    <td><a href="/deleteuser"><img src="https://img.icons8.com/color/35/000000/trash.png" alt="sorry no images" /></a></td>
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

export default ViewUsers;