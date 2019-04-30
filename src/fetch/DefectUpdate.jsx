export default function UpdateSubClass(data) {
    return fetch(
        "http://localhost:8080/defect/update",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    )
        .then(res => {
            return res;
        })
        .catch(err => err);
}