import React, { useState } from "react";

const Signup = () => {
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterDetails({ ...registerDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (registerDetails.password !== registerDetails.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: registerDetails.name,
        username: registerDetails.username,
        password: registerDetails.password,
      }),
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
          Signup
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", color: "#4a5568" }}>Name</label>
            <input
              type="text"
              name="name"
              value={registerDetails.name}
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
            <label style={{ display: "block", color: "#4a5568" }}>Username</label>
            <input
              type="text"
              name="username"
              value={registerDetails.username}
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
              value={registerDetails.password}
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
            <label style={{ display: "block", color: "#4a5568" }}>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={registerDetails.confirmPassword}
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
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
