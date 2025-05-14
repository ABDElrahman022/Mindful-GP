import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Dropdown, Badge, Spinner } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Navbar.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [loadingNotifs, setLoadingNotifs] = useState(false);
  const [errorNotifs, setErrorNotifs] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);
  const [errorUser, setErrorUser] = useState(null);
  const location = useLocation();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoadingNotifs(true);
      try {
        if (!token) throw new Error('Token not found');
        const res = await fetch(`${API_URL}/api/v1/notification?page=1&limit=50`, {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Failed to fetch notifications');
        const body = await res.json();
        setNotifications(body.data?.messages || []);
      } catch (err) {
        setErrorNotifs(err.message);
      } finally {
        setLoadingNotifs(false);
      }
    };

    const fetchUser = async () => {
      setLoadingUser(true);
      try {
        if (!token) throw new Error('Token not found');
        const handle = localStorage.getItem('handle');
        const cleanHandle = handle.startsWith('@') ? handle : '@' + handle;
        const handleRes = await fetch(`${API_URL}/api/v1/user/${cleanHandle}`, {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!handleRes.ok) {
          const errData = await handleRes.json();
          throw new Error(errData.message || 'Failed to fetch user by handle');
        }
        const handleData = await handleRes.json();
        setUser(handleData.data?.user || handleData.user || null);
      } catch (err) {
        setErrorUser(err.message);
      } finally {
        setLoadingUser(false);
      }
    };

    if (token) {
      fetchUser();
      fetchNotifications();
    }
  }, [token]);

  if (location.pathname === '/login_page') {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex align-items-center">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo img-fluid w-20 me-5" />
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
          <ul className="navbar-nav w-100 d-flex justify-content-between align-items-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about-us">About us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/advices-and-articles">Advices & Articles</Link></li>
            <li className="nav-item"><a className="nav-link" href="https://huggingface.co/spaces/ABDElrahman022/mindful-chatbot" target="_blank" rel="noopener noreferrer">Chatbot</a></li>
            <li className="nav-item"><Link className="nav-link" to="/psychological_tests">Psychological Tests</Link></li>
            <li className="nav-item"><a className="nav-link" href="/stories">Forum</a></li>
            <li className="nav-item"><Link className="nav-link" to="/therapists">Therapists</Link></li>

            <li className="nav-item d-flex align-items-center">
              {loadingUser ? (
                <Spinner animation="border" size="sm" />
              ) : errorUser ? (
                <span className="text-danger small">{errorUser}</span>
              ) : user ? (
                <Link className="nav-link d-flex align-items-center" to={`/profile/${user.username || user.handle}`}>
                  <i className="bi bi-person-circle fs-5"></i>
                  <span className="ms-1">{user.name || user.handle}</span>
                </Link>
              ) : (
                <Link className="nav-link" to="/login_page">Login</Link>
              )}
            </li>

            <li className="nav-item ms-lg-3 position-relative">
              <Dropdown align="end">
                <Dropdown.Toggle variant="link" className="position-relative p-0">
                  <i className="bi bi-bell-fill fs-5"></i>
                  {notifications.length > 0 && (
                    <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle p-1 rounded-circle">
                      {notifications.length}
                    </Badge>
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ minWidth: '300px' }}>
                  <Dropdown.Header>Notifications</Dropdown.Header>
                  {loadingNotifs && <Spinner animation="border" size="sm" className="mx-auto d-block my-2" />}
                  {errorNotifs && <div className="text-danger px-3">{errorNotifs}</div>}
                  {!loadingNotifs && notifications.length === 0 && <div className="px-3 py-2">No notifications</div>}
                  {!loadingNotifs && notifications.map((note, idx) => (
                    <Dropdown.Item key={idx} className="small d-flex justify-content-between align-items-center">
                      <div>
                        <div className="text-muted">{new Date(note.sentAt).toLocaleString()}</div>
                        <div>{note.message}</div>
                      </div>
                      <button
                        className="btn btn-sm btn-danger ms-2"
                        onClick={() => {
                          const updated = notifications.filter((_, i) => i !== idx);
                          setNotifications(updated);
                        }}
                      >
                        X
                      </button>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </li>

            {token && (
              <li className="nav-item">
                <button
                  className="btn ms-3"
                  style={{ backgroundColor: '#325343', color: '#fff', border: 'none' }}
                  onClick={() => {
                    localStorage.clear();
                    Cookies.remove('token');
                    window.location.href = '/login_page';
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
