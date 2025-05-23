import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from 'js-cookie';

function RegistrationPage() {
  const [isDoctor, setIsDoctor] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    certificate: null, // ملف الشهادة
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "certificate") {
      setFormData({ ...formData, certificate: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const endpoint = isDoctor
      ? "http://localhost:4000/api/v1/auth/register/doctor"
      : "http://localhost:4000/api/v1/auth/register/user";

    let body;
    let headers = {};

    if (isDoctor) {
      body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("password", formData.password);
      body.append("confirmPassword", formData.confirmPassword);
      if (formData.certificate) {
        body.append("image", formData.certificate); // لازم يتطابق اسم الحقل مع الباك اند
      }
    } else {
      body = JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      headers["Content-Type"] = "application/json";
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers,
        body,
        credentials: 'include', // This is important for cookies
      });

      const result = await response.json();

      console.log("Response:", response);
      console.log("Result:", result);

      if (response.ok) {
        // Save token to cookies
        if (result.token) {
          Cookies.set('token', result.token, { expires: 7 }); // Token expires in 7 days
        }
        
        alert("Registration successful!");
        navigate("/login_page");
      } else if (result.errors && result.errors.length > 0) {
        result.errors.forEach((error) => {
          alert(`${error.msg}: ${error.value}`);
        });
      } else {
        alert(result.message || "An error occurred during registration.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 mx-3">
        {/* Sidebar Section */}
        <div className="col-lg-5 text-success p-4 rounded-start text-center bg-light">
          <h1 className="display-4 fw-bold mb-5">Welcome!</h1>
          <ul className="nav flex-column">
            <li className="nav-item">
              <button
                className={`btn btn-link text-success ${!isDoctor ? "fw-bold" : ""}`}
                onClick={() => setIsDoctor(false)}
              >
                User
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-link text-success ${isDoctor ? "fw-bold" : ""}`}
                onClick={() => setIsDoctor(true)}
              >
                Doctor
              </button>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="col-lg-7 p-4 bg-success rounded-5 shadow">
          <h2 className="text-light text-center mb-4">
            {isDoctor ? "Register as Doctor" : "Register as User"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {isDoctor && (
              <div className="mb-3">
                <label className="form-label text-light">Certificate (Image/PDF)</label>
                <input
                  type="file"
                  className="form-control"
                  name="certificate"
                  accept="image/*,application/pdf"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <button type="submit" className="btn btn-light text-success w-100 rounded-pill">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
