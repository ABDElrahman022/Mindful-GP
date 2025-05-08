import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Navbar.css';

function Navbar() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/notification');
        if (!response.ok) {
          throw new Error('Failed to fetch notifications');
        }
        const data = await response.json();
        setNotifications(Array.isArray(data.notifications) ? data.notifications : []);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex align-items-center">

        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo img-fluid w-20 me-5"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex justify-content-between">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/advices-and-articles">Advices & Articles</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://huggingface.co/spaces/ABDElrahman022/mindful-chatbot">Chatbot</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/psychological_tests">Psychological Tests</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../stories">Forum</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/therapists">Therapists</Link>
            </li>
            <li className="nav-item ms-lg-3 dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="notificationDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-bell-fill fs-5"></i>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="notificationDropdown">
                {notifications.length > 0 ? (
                  notifications.map((notification, index) => (
                    <li key={index} className="dropdown-item">
                      {notification.message}
                    </li>
                  ))
                ) : (
                  <li className="dropdown-item">No notifications</li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
