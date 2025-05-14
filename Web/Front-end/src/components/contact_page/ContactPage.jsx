import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactPage() {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const token = localStorage.getItem('token');
    if (!token) {
      setError("You must be logged in to send a message.");
      setIsSubmitting(false);
      navigate('/login_page');
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/v1/contact/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ massage: message }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setMessage(""); // Clear the form
      } else {
        setError(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-md-6 mx-auto">
          <div className="card shadow">
            <div className="card-body p-5">
              <h2 className="text-center text-success mb-4">Contact Us</h2>
              {error && (
                <div className="alert alert-danger text-center mb-4">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn btn-success rounded-pill"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage; 