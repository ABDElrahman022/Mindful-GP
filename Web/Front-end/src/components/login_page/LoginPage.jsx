import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Token:", data.token);

        // حفظ الـ token في الكوكيز مع تاريخ انتهاء
        const token = data.token;
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000); // 24 ساعة

        document.cookie = `token=${token}; expires=${expirationDate.toUTCString()}; path=/; SameSite=Strict`;

        alert("Login successful!");
        navigate("/"); // توجيه المستخدم إلى الصفحة الرئيسية
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 mx-3">
        {/* Welcome Section */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center text-success text-center py-5">
          <div>
            <h1 className="display-4 fw-bold">Welcome!</h1>
            <p className="lead mt-4">We are excited to have you back!</p>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="py-5 shadow-sm col-lg-8 bg-success rounded-5">
            <h2 className="text-light text-center mb-5">Login</h2>
            <form className="px-4" onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
