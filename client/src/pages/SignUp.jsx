import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    name: "",
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
    const { name, email, password } = userData;
    const res = await fetch("http://localhost:4040/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const content = await res.json();
    if (res.ok) {
      navigate("/login");
    } else {
      setError(content.message);
    }
  };

  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          value={userData.name}
          name="name"
          id="name"
          placeholder="Name"
          onChange={handleChange}
        />
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
        <input type="submit" className="sub-btn" value="Sign Up" />
        {error && <p className="err-msg">{error}</p>}
        <p>
          Already have an account?{" "}
          <Link className="link" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
