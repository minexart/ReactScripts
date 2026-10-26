import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [course, setCourse] = useState("");
  const [studyMode, setStudyMode] = useState("");

  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      username === "" ||
      password === "" ||
      confirmPassword === "" ||
      course === "" ||
      studyMode === ""
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    setIsRegistered(true);
  }

  if (isRegistered) {
    return (
      <div>
        <h2>Registration Successful!</h2>
        <p>Username: {username}</p>
        <p>Course: {course}</p>
        <p>Study Mode: {studyMode}</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>User Registration Form</h1>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>Confirm Password: </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <label>Course: </label>
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value=""> --- Select a Course ---  </option>
          <option value="Diploma in IT">Diploma in IT</option>
          <option value="Diploma in Business">Diploma in Business</option>
          <option value="Diploma in Accounting">Diploma in Accounting</option>
        </select>
        <br />
        <label>Study Mode: </label>
        <input
          type="radio"
          name="studyMode"
          value="Full-Time"
          checked={studyMode === "Full-Time"}
          onChange={(e) => setStudyMode(e.target.value)}
        />{" "}
        Full-Time
        <input
          type="radio"
          name="studyMode"
          value="Part-Time"
          checked={studyMode === "Part-Time"}
          onChange={(e) => setStudyMode(e.target.value)}
        />{" "}
        Part-Time
        <br />
        <button type="submit">Register</button>
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}
export default RegistrationForm;

