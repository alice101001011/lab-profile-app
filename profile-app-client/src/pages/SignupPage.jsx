import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5005';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [campus, setCampus] = useState('');
  const [course, setCourse] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleCampus = (e) => setCampus(e.target.value);
  const handleCourse = (e) => setCourse(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { username, password, campus, course };

    axios
      .post(`${API_URL}/api/auth/signup`, requestBody)
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="username"
          name="username"
          value={username}
          onChange={handleUsername}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label htmlFor="campus">Campus:</label>
        <select
          id="campus"
          name="campus"
          value={campus}
          onChange={handleCampus}
        >
          <option>Madrid</option>
          <option>Barcelona</option>
          <option>Miami</option>
          <option>Paris</option>
          <option>Berlin</option>
          <option>Amsterdam</option>
          <option>México</option>
          <option>Sao Paulo</option>
          <option>Lisbon</option>
          <option>Remote</option>
        </select>

        <label htmlFor="course">Course:</label>
        <select
          id="course"
          name="course"
          value={course}
          onChange={handleCourse}
        >
          <option>Web Dev</option>
          <option>UX/UI</option>
          <option>Data Analytics</option>
          <option>Cyber Security</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={'/login'}> Login</Link>
    </div>
  );
};

export default SignupPage;
