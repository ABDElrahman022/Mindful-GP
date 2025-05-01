import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "./LoginPage.css";

function LoginPage() {
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
          <form className="px-4">
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2 mt-5">
              <button type="submit" className="btn bg-light text-success rounded-pill  w-50 mx-auto">
                Login
              </button>
              <button
               type="button"
               className="btn bg-light text-success rounded-pill w-50 mx-auto"
              >         
               <Link to="/registeration_page" className="text-success text-decoration-none">
                 Sign up
               </Link>
             </button>
             <button
               type="button"
               className="btn bg-light text-success rounded-pill w-50 mx-auto"
              >         
               <Link to="*" className="text-success text-decoration-none">
                 Lost password ?
               </Link>
             </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
