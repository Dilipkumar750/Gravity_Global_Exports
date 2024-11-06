import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
          width: "24rem",
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", color: "#4a5568" }}>Username</label>
            <input
              type="text"
              name="username"
              value={loginDetails.username}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #cbd5e0",
                borderRadius: "0.5rem",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", color: "#4a5568" }}>Password</label>
            <input
              type="password"
              name="password"
              value={loginDetails.password}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #cbd5e0",
                borderRadius: "0.5rem",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "orange",
              color: "#ffffff",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "orange")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "orange")}
          >
            Login
          </button>
        </form>
        <div
          style={{
            
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <button
            style={{
              background: "none",
              border: "none",
              color: "#3b82f6",
              cursor: "pointer",
              textDecoration: "underline",
              padding: "0",
              
            }}
            onClick={() => alert("Forgot Password clicked")}
          >
            Forgot Password?
          </button>
          <Link to="/register">
            <button
               style={{
                width: "100%",
                backgroundColor: "orange",
                color: "#ffffff",
                padding: "0.5rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s",
                marginTop: '20px'
              }}
              
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
