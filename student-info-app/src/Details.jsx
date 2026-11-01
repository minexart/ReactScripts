import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


function Details()

{
    const { id } = useParams();
    const [student, setStudent] = useState(null);


    useEffect(() => {

        fetch("/students.json")
        .then(response => response.json())
        .then((data) => {

            const found = data.find((s) => s.id === parseInt(id));
            setStudent(found);
        })
    }, [id]);

    if(!student) {
        return <p>Loading...</p>;
    }

    return(
        <div className="container">
            <h2>{student.name}</h2>
            <p>Student ID: {student.studentId}</p>
            <p>Programme: {student.programme}</p>
            <p>Email: {student.email}</p>
            <Link to="/students">Back to Students</Link>
        </div>
    );
}
export default Details;