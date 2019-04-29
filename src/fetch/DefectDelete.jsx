export default function DefectDelete(id) {
    fetch("http://localhost:8080/defect/deleteDefect/" + id, {
        method: "DELETE"
    })
    .then()
}