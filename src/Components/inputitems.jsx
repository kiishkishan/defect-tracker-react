import React, { Component } from 'react';

class DefectID extends Component {
    render() {
        return (
            <p>
                <label>Defect ID</label>
                <input type="text" name="defectid" id="defectid" />
            </p >
        );
    }
}


class Description extends Component {
    render() {
        return (
            <p>
                <label>Module</label>
                <select id="module">
                </select>
            </p>
        );
    }
}






export default { DefectID, Description }
