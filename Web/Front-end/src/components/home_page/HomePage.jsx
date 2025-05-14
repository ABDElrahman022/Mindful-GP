import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home_page/HomePage.css';
import intro from '../../images/intro.png';
import chatbot from '../../images/chatbot.jpg';
import breakimg from '../../images/break.jpg';
import test from '../../images/test.png';
import therapist from '../../images/therapists.png';

function HomePage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [statusMsg, setStatusMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true); // Added state for loading
  const [contacts, setContacts] = useState([]); // Added state for contacts

  // دالة للحصول على التوكن من الكوكيز
  const getCookie = (name) => {
    return document.cookie
      .split(";")
      .map((c) => c.trim())
      .find((c) => c.startsWith(name + "="))
      ?.split("=")[1] || null;
  };

  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) {
        console.warn('No token, cannot fetch contacts');
        setLoading(false);
        return;
      }

      try {
        // تعديل الرابط ليطابق ما في الباك
        const response = await fetch('http://localhost:4000/api/v1/contact', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        const list = Array.isArray(data) ? data : data.contacts || [];
        setContacts(list);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg("");

    const token = localStorage.getItem('token');
    if (!token) {
      setStatusMsg("You must be logged in to send a message.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/api/v1/contact/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ massage: message }), // ← تم تعديل المفتاح هنا
      });
      const data = await res.json();

      if (res.ok) {
        setStatusMsg("sent successfully!");
        setMessage("");
      } else {
        setStatusMsg(data.message || "فشل في الإرسال.");
      }
    } catch (err) {
      console.error("خطأ في الإرسال:", err);
      setStatusMsg("حصل خطأ. حاول مرة أخرى لاحقاً.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-4">
      {/* Intro Section */}
      <section className="container text-center mb-5">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="display-4 text-success mb-5 fw-bold">
              Life is too short to spend it at war with yourself
            </h1>
            <button
              className="btn btn-success mt-5 rounded-pill px-4 py-3 fw-bold text-white"
              onClick={() => navigate('/login_page')}
            >
              Apply Now
            </button>
          </div>
          <div className="col-md-4">
            <img src={intro} alt="Life" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section id="chatbot" className="row align-items-center mb-5 justify-content-center">
        <div className="col-md-6">
          <h2 className="text-success mb-5 fw-bold">Chat Bot</h2>
          <p className="text-dark mb-5 fs-3">
            Your mental health companion, available anytime to provide support, guidance, and resources tailored just for you.
          </p>
          <button className="btn btn-success rounded-pill px-4 py-3 fw-bold">Try Now</button>
        </div>
        <div className="col-md-6 d-flex justify-content-center mt-5">
          <img src={chatbot} alt="Chatbot" className="img-fluid aboutus-img" />
        </div>
      </section>

      {/* Break Section */}
      <div className="col-md-12 mt-5 bg-dark w-100 mb-5">
        <img src={breakimg} alt="Break" className="w-100 h-100" />
      </div>

      {/* Tests Section */}
      <section id="tests" className="row align-items-center mb-5 d-flex justify-content-center">
        <h2 className="text-success mb-5 d-flex justify-content-center mt-5 fw-bold">
          Psychological Tests
        </h2>
        <div className="col-md-6 text-center">
          <p className="text-dark fs-3">Discover your mental well-being!</p>
          <p className="text-dark fs-3">Take a quick test to learn more about yourself</p>
          <button
            className="btn btn-success rounded-pill px-4 py-3 fw-bold mt-5"
            onClick={() => navigate('/psychological_tests')}
          >
            Test yourself
          </button>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={test} alt="Test" className="img-fluid aboutus-img" />
        </div>
      </section>

      {/* Therapists Section */}
      <section id="therapists" className="row align-items-center mb-5 justify-content-center">
        <h2 className="text-success mb-5 text-center mt-5 fw-bold">Therapists</h2>
        <div className="col-md-6 d-flex justify-content-center mt-5">
          <img src={therapist} alt="Therapist" className="img-fluid aboutus-img" />
        </div>
        <div className="col-md-6 pt-5">
          <p className="text-dark mb-5 fs-3">
            You're not alone. We're here to connect you with trusted therapists who can guide and support you every step of the way.
          </p>
          <button
            className="btn btn-success rounded-pill px-4 py-3 fw-bold"
            onClick={() => navigate('/therapists')}
          >
            Learn more
          </button>
        </div>
      </section>

      {/* Advices & Articles Section */}
      <section id="advices" className="row align-items-center m-5">
        <h2 className="text-success mb-5 text-center fw-bold mt-5">Advices & Articles</h2>
        <div className="row g-4 justify-content-center">
          {[
            { title: 'Depression', path: 'Depression', text: 'Ever felt like life has lost its color? Depression is more than just sadness— it affects energy, motivation, and health.' },
            { title: 'Anxiety Disorders', path: 'AnxietyDisorders', text: 'Heart racing, sweating, endless thoughts? Anxiety goes beyond stress, making tasks overwhelming.' },
            { title: 'Schizophrenia', path: 'Schizophrenia', text: 'Imagine hearing voices no one else can. Schizophrenia affects perception and reality, not "madness".' },
            { title: 'Bipolar Disorder', path: 'BipolarDisorder', text: 'From euphoria to despair, bipolar disorder causes intense mood swings disrupting life.' },
            { title: 'OCD', path: 'OCD', text: 'Checking the door ten times? OCD traps the mind in repetitive, exhausting loops.' },
            { title: 'PTSD', path: 'PTSD', text: 'Some memories never fade. PTSD keeps past traumas alive, but healing is possible.' },
          ].map((item, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="card p-3 shadow h-100 rounded-5">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title text-success fw-bold text-center mb-4">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                  <button
                    className="btn btn-success rounded-pill px-4 py-3 fw-bold mt-5"
                    onClick={() => navigate(`/mental_disorders/${item.path}`)}
                  >
                    MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button
            className="btn btn-success px-5 py-3 rounded-pill fw-bold mt-5"
            onClick={() => navigate('/advices-and-articles')}
          >
            MORE...
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mt-5">
        <h2 className="text-success text-center fw-bold mb-4">Contact Us</h2>
        <form
          className="d-flex flex-column align-items-center"
          onSubmit={handleSubmit}
        >
          <textarea
            className="form-control mb-3 w-50"
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn-success rounded-pill px-4 py-2 fw-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {statusMsg && (
            <div
              className={`mt-3 text-center ${
                statusMsg.includes('نجاح') ? 'text-success' : 'text-danger'
              }`}
            >
              {statusMsg}
            </div>
          )}
        </form>
      </section>

      {/* Display fetched contacts */}
      <section className="mt-5">
        {loading ? (
          <p>Loading...</p>
        ) : contacts.length > 0 && (
          <ul className="list-group w-50 mx-auto">
            {contacts.map((c) => (
              <li key={c._id} className="list-group-item">
                {c.message}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default HomePage;
