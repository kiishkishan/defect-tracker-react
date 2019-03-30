import React, { Component } from 'react';
import Nav from './Nav';
import { MDBContainer } from 'mdbreact';


class dashboard extends Component {
    render() {
        return (
            <div>
                <Nav />
                <MDBContainer>
                    <div className="row mb-4">
                        <div className="col-md-6 col-xl-3 mb-3">
                            <div className="card primary-color classic-admin-card">
                                <div className="card-body">
                                    <div className="pull-right">
                                        <i className="fa fa-money">
                                        </i>
                                    </div>
                                    <p className="white-text"><h4>Total Defects</h4></p>
                                    <h4>
                                        <strong>count</strong>
                                    </h4>
                                </div>
                                <div className="progress">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{ width: '60%' }}>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>Better than last week (25%)</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3 mb-3">
                            <div className="card primary-color classic-admin-card">
                                <div className="card-body">
                                    <div classNames="pull-right">
                                        <i className="fa fa-money">
                                        </i>
                                    </div>
                                    <p className="white-text"><h4>Fixed Defects</h4></p>
                                    <h4>
                                        <strong>count</strong>
                                    </h4>
                                </div>
                                <div className="progress">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{ width: '10%' }}>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>Better than last week (25%)</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3 mb-3">
                            <div className="card primary-color classic-admin-card">
                                <div className="card-body">
                                    <div className="pull-right">
                                        <i className="fa fa-money">
                                        </i>
                                    </div>
                                    <p className="white-text"><h4>Available Defects</h4></p>
                                    <h4>
                                        <strong>count</strong>
                                    </h4>
                                </div>
                                <div className="progress">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{ width: '30%' }}>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>Better than last week (25%)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </MDBContainer>
            </div>
        )
    }
}

export default dashboard;
