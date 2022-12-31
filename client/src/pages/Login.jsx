import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    const res = await fetch("http://localhost:4040/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const content = await res.json();
    if (res.ok) {
      navigate("/");
    } else {
      setError(content.message);
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="email"
          value={userData.email}
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          value={userData.password}
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input type="submit" className="sub-btn" value="Login" />
        {error && <p className="err-msg">{error}</p>}
        <p>
          Don't have an account?{" "}
          <Link className="link" to="/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
