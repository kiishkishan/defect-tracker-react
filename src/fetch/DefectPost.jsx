export default function Defect(data) {
    fetch('http://localhost:3000/module', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });



}