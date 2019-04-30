export default function Defect(data) {
    fetch('http://localhost:8080/defect/saveDefect', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });



}