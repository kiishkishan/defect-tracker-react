import React from 'react';
import { MDBDataTable } from 'mdbreact';

const ViewDefects = () => {
    const data = {
        columns: [
            {
                label: 'Defect_ID',
                field: 'Defect_ID',
                sort: 'asc',
                width: "auto"
            },
            {
                label: 'Module',
                field: 'Module',
                sort: 'asc',
                width: "auto"
            },
            {
                label: 'Description',
                field: 'Description',
                sort: 'asc',
                width: "auto"
            },
            {
                label: 'Steps_to_Recreate',
                field: 'Steps_to_Recreate',
                sort: 'asc',
                width: "auto"
            },
            {
                label: 'Severity',
                field: 'Severity',
                sort: 'asc',
                width: "auto"
            },
            {
                label: 'Priority',
                field: 'Priority',
                sort: 'asc',
                width: "auto"
            },
            {
                label: 'Defect_Type',
                field: 'Defect_Type',
                sort: 'asc',
                width: "auto"
            },
            {
                label: 'Entered_By',
                field: 'Entered_By',
                sort: 'asc',
                width: "auto"
            },
            {
                label: 'Entered_Date',
                field: 'Entered_Date',
                sort: 'asc',
                width: "auto"
            },
            {
                label: 'Status',
                field: 'Status',
                sort: 'asc',
                width: "auto"
            },
            {
                label: 'Assigned_To',
                field: 'Assigned_To',
                sort: 'asc',
                width: "auto"
            },
            {
                label: 'Fixed_By',
                field: 'Fixed_By',
                sort: 'asc',
                width: "auto"
            },
            {
                label: 'Fixed_Date',
                field: 'Fixed_Date',
                sort: 'asc',
                width: "auto"
            },
            {
                label: 'Available_in',
                field: 'Available_in',
                sort: 'asc',
                width: "auto"
            },
            {
                label: 'Comments',
                field: 'Comments',
                sort: 'asc',
                width: "auto"
            },
        ],
        rows: [
            {
                Defect_ID: 'DEF001',
                Module: 'Login',
                Description: 'Login Form and Validation',
                Steps_to_Recreate: 'Changing the Input Fields',
                Severity: 'High',
                Priority: 'Medium',
                Defect_Type: 'UI',
                Entered_By: 'Kishanth',
                Entered_Date: '26/03/2019',
                Status: 'Opened',
                Assigned_To: 'Thuvaragan',
                Fixed_By: 'Thuvaragan',
                Fixed_Date: '29/03/2019',
                Available_in: 'Login Form v2.0',
                Comments: 'Changed Color themes and CSS Preprocessors',
            },

        ]
    };

    return (
        <MDBDataTable
            striped
            bordered
            responsive
            hover
            data={data}
        />
    );
}

export default ViewDefects;