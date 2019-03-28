import React, { Component } from 'react';

class ViewDefectTable extends Component {
    render() {
        return (
            // < !--Table-- >
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
                    <tr>
                        <td></td>
                        <td>DEF001</td>
                        <td>Login</td>
                        <td>Login Form and Validation</td>
                        <td>Changing the Input Fields</td>
                        <td>High</td>
                        <td>Medium</td>
                        <td>UI</td>
                        <td>Kishanth</td>
                        <td>26/03/2019</td>
                        <td>Opened</td>
                        <td>Thuvaragan</td>
                        <td>Thuvaragan</td>
                        <td>29/03/2019</td>
                        <td>Login Form v2.0</td>
                        <td>Changed Color themes and CSS Preprocessors</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </tbody>
                {/* <!--Table body--> */}


            </table>
            // <!--Table-->
        );
    }
}

export default ViewDefectTable;