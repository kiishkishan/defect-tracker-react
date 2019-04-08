import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBNavbarToggler, MDBCollapse, MDBNavbar } from 'mdbreact';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {

        return (
            <div>
                <Router>
                    <MDBNavbar className="navbar navbar-expand-md navbar-dark info-color fixed-top">
                        <a className="navbar-brand" href="/">Defect Tracker</a>
                        <MDBNavbarToggler onClick={this.onClick} />
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link waves-effect waves-light" href="/dashboard">Dashboard </a>
                                </li>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <span className="mr-2">Defects</span>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem id="dd" href="/adddefect">Add a Defect</MDBDropdownItem>
                                            <MDBDropdownItem id="dd" href="/viewdefect">Manage Defects</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <span className="mr-2">Users</span>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem id="dd" href="/addusers">Add an User</MDBDropdownItem>
                                            <MDBDropdownItem id="dd" href="/viewusers">Manage Users</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <span className="mr-2">Modules</span>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem id="dd" href="/addmodules">Add a Module</MDBDropdownItem>
                                            <MDBDropdownItem id="dd" href="/viewmodule">Manage Modules</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Users</a>
                                    <div className="dropdown-menu dropdown-info" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item waves-effect waves-light" href="#">Add</a>
                                        <a className="dropdown-item waves-effect waves-light" href="#">Manage</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Modules</a>
                                    <div className="dropdown-menu dropdown-info" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item waves-effect waves-light" href="#">Add</a>
                                        <a className="dropdown-item waves-effect waves-light" href="#">Manage</a>
                                    </div>
                                </li> */}
                            </ul>
                        </MDBCollapse>

                    </MDBNavbar>
                </Router>
            </div >
        );
    }
}

export default Nav;