import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    //Check empty fields
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("Please fill in all fields.");
      return;
    }

    //Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    //Check password length
    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    //Check password matching
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    //All validations passed
    setSuccess("Registration successful!");

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="form-container">
      <h2>Register for Your Trip</h2>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
        />

        <label>Email Address</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Minimum 8 characters"
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Re-enter your password"
        />

        {error && <p className="error">{error}</p>}

        {success && <p className="success">{success}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Register;
