import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function RegistrationPage() {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 mx-3">
        {/* Sidebar Section */}
        <div className="col-lg-5 text-success p-4 rounded-start text-center">
        <h1 className="display-4 fw-bold mb-5">Welcome!</h1>
        <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="as_user" className="nav-link text-success">User</Link>
            </li>
            <li className="nav-item">
              <Link to="as_doctor" className="nav-link text-success">Doctor</Link>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="col-lg-7 p-4 bg-success rounded-5 shadow ">
          <Outlet />  
        </div>
      </div>
    </div>
  );
}


export default RegistrationPage;
