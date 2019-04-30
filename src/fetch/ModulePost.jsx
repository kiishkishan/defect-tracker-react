export function Module(data) {
    fetch('http://localhost:8080/defect/module/save', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });



}