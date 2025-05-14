import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        if (result.token) {
          localStorage.setItem('token', result.token);
        }
        if (result.user && result.user.handle) {
          console.log('HANDLE FROM LOGIN:', result.user.handle);
          localStorage.setItem('handle', result.user.handle);
        }
        console.log('HANDLE FROM LOCALSTORAGE:', localStorage.getItem('handle'));
        alert("Login successful!");
        navigate("/");
      } else {
        alert(result.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 mx-3">
        <div className="col-lg-6 d-flex align-items-center justify-content-center text-success text-center py-5">
          <div>
            <h1 className="display-4 fw-bold">Welcome!</h1>
            <p className="lead mt-4">We are excited to have you back!</p>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="py-5 shadow-sm col-lg-8 bg-success rounded-5">
            <h2 className="text-light text-center mb-5">Login</h2>
            <form className="px-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-grid gap-2 mt-5">
                <button type="submit" className="btn bg-light text-success rounded-pill w-50 mx-auto">
                  Login
                </button>
                <Link to="/registeration_page" className="btn bg-light text-success rounded-pill w-50 mx-auto text-decoration-none">
                  Sign up
                </Link>
                <Link to="/forgot_password" className="btn bg-light text-success rounded-pill w-50 mx-auto text-decoration-none">
                  Lost password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
