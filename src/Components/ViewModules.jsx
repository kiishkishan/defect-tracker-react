import React, { Component } from 'react';
import Nav from './Nav';
import { MDBContainer } from 'mdbreact';

class ViewModules extends Component {
    state = {
        modules: []

    }

    async componentDidMount() {
        const url = "http://localhost:8080/defect/module/getall";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ modules: data });

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
                                <th>Module ID</th>
                                <th>Module Name</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        {/* <!--Table head-->
                <!--Table body--> */}
                        <tbody id="getresult">

                            {this.state.modules.map(e => (
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.project_id}</td>
                                    <td><a href="/editmodule"><img src="https://img.icons8.com/nolan/35/000000/edit.png" alt="sorry no images" /></a></td>
                                    <td><a href="/deletemodule"><img src="https://img.icons8.com/color/35/000000/trash.png" alt="sorry no images" /></a></td>
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

export default ViewModules;