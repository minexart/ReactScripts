import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/students.json")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className="container">
      <h2>Student List</h2>
      {students.map((student) => (
        <p key={student.id}>
          <Link to={`/details/${student.id}`}>{student.name}</Link>
        </p>
      ))}
    </div>
  );
}

export default Students;
