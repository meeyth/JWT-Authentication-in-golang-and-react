import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch("http://localhost:4040/auth/user", {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        })
      ).json();
      setUserData(data);
    })();
  }, []);

  const logout = async () => {
    await fetch("http://localhost:4040/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    setUserData({});
  };
  return (
    <div className="user-details-card">
      {userData.id && (
        <div>
          <h1>Here is your details</h1>
          <p>
            User id: <strong>{userData.id}</strong>
          </p>
          <p>
            Name: <strong>{userData.name}</strong>
          </p>
          <p>
            Email: <strong>{userData.email}</strong>
          </p>
        </div>
      )}
      {userData.id ? (
        <input
          type="button"
          value="Logout"
          className="sub-btn"
          onClick={logout}
        />
      ) : (
        <p>
          First{" "}
          <Link className="link" to="/login">
            Login
          </Link>{" "}
          to see your details.
        </p>
      )}
    </div>
  );
};

export default User;
