import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    if (!email || !email.trim()) {
      setError("Please enter your email");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/forget-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Email not found in database");
      }

      localStorage.setItem("resetEmail", email.trim());
      setSuccess("Reset code has been sent to your email");
      setStep(2);
    } catch (error) {
      setError(error.message || "An error occurred while sending the reset code");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    if (!resetCode) {
      setError("Reset code is required");
      return;
    }
    setIsLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await fetch("http://localhost:4000/api/v1/auth/verify/password-reset-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: resetCode }),  // ✅ هنا التعديل الذي طلبته
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Invalid reset code");
      setSuccess("Code verified successfully");
      setStep(3);
    } catch (error) {
      setError(error.message || "Failed to verify code");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setError("Please fill in all password fields");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const storedEmail = localStorage.getItem("resetEmail");
    if (!storedEmail) {
      setError("Email not found. Please start over.");
      return;
    }

    if (!resetCode) {
      setError("Reset code is required");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const requestData = {
        email: storedEmail,
        code: resetCode, // تأكد من أن الاسم يتطابق مع ما يتوقعه الباك اند
        NewPassword: newPassword, // تغيير الحقل إلى NewPassword
      };

      console.log("Sending:", requestData);

      const response = await fetch("http://localhost:4000/api/v1/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log("Response Data:", data);

      if (!response.ok) {
        throw new Error(data.message || "Failed to reset password");
      }

      setSuccess("Password reset successfully");
      localStorage.removeItem("resetEmail");
      setTimeout(() => {
        navigate("/login_page");
      }, 2000);
    } catch (error) {
      setError(error.message || "Failed to reset password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 mx-3">
        <div className="col-lg-6 d-flex align-items-center justify-content-center text-success text-center py-5">
          <div>
            <h1 className="display-4 fw-bold">Reset Password</h1>
            <p className="lead mt-4">We'll help you get back into your account</p>
          </div>
        </div>

        <div className="col-lg-6 d-flex justify-content-center">
          <div className="py-5 shadow-sm col-lg-8 bg-success rounded-5">
            <h2 className="text-light text-center mb-5">Forgot Password</h2>
            
            {error && <div className="alert alert-danger mx-4">{error}</div>}
            {success && <div className="alert alert-success mx-4">{success}</div>}

            {step === 1 && (
              <form className="px-4" onSubmit={handleForgetPassword}>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid gap-2 mt-5">
                  <button 
                    type="submit" 
                    className="btn bg-light text-success rounded-pill w-50 mx-auto"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Reset Code"}
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/login_page")}
                    className="btn bg-light text-success rounded-pill w-50 mx-auto"
                  >
                    Back to Login
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form className="px-4" onSubmit={handleVerifyCode}>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter reset code"
                    value={resetCode}
                    onChange={(e) => setResetCode(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid gap-2 mt-5">
                  <button 
                    type="submit" 
                    className="btn bg-light text-success rounded-pill w-50 mx-auto"
                    disabled={isLoading}
                  >
                    {isLoading ? "Verifying..." : "Verify Code"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn bg-light text-success rounded-pill w-50 mx-auto"
                  >
                    Back
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <form className="px-4" onSubmit={handleResetPassword}>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    minLength="6"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength="6"
                  />
                </div>
                <div className="d-grid gap-2 mt-5">
                  <button 
                    type="submit" 
                    className="btn bg-light text-success rounded-pill w-50 mx-auto"
                    disabled={isLoading}
                  >
                    {isLoading ? "Resetting..." : "Reset Password"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn bg-light text-success rounded-pill w-50 mx-auto"
                  >
                    Back
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
