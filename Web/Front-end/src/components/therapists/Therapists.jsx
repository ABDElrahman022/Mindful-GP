import React from "react";
import DrMustafaAlNahhas from '../../images/Dr Mustafa Al-Nahhas.jpeg';
import KareemIsmail from '../../images/Kareem Ismail.jpg';
import AbdElrahman from '../../images/AbdElrahman2.jpg';
import Rasha from '../../images/Rasha.jpeg'

function Therapists() {
  return (
    <div className="container-fluid py-5">
      <h2 className="text-center text-success mb-5 fw-bold">Our Therapists</h2>
      <div className="row justify-content-center">
        
        {}
        <div className="col-12 d-flex justify-content-center mt-5">
          <div className="card mb-4 shadow-lg border-0 p-4 w-75">
            <div className="card-body d-flex align-items-center">
              <img
                src={DrMustafaAlNahhas}
                alt="Dr Mustafa Al-Nahhas"
                className="me-4 rounded-circle ms-3"
                width="200"
                height="200"
              />
              <div className="col-8 text-center">
                <h4 className="fw-bold text-success">Dr Mustafa Al-Nahhas</h4>
                <p className="text-muted mb-2">
                  Consultant Psychiatrist and Addiction Treatment at Al Maamoura Hospital.
                </p>
                <p className="text-success fw-bold fs-5">Connect: 010000000000</p>
              </div>
            </div>
          </div>
        </div>

           {}
           <div className="col-12 d-flex justify-content-center mt-5">
          <div className="card mb-4 shadow-lg border-0 p-4 w-75">
            <div className="card-body d-flex align-items-center">
              <img
                src={KareemIsmail}
                alt="Dr Mustafa Al-Nahhas"
                className="me-4 rounded-circle ms-3"
                width="200"
                height="200"
              />
              <div className="col-8 text-center">
                <h4 className="fw-bold text-success">Kareem Ismail</h4>
                <p className="text-muted mb-2">
                Founder and CEO of MentalHealth Hub 
                </p>
                <p className="text-success fw-bold fs-5">Connect: 010000000000</p>
              </div>
            </div>
          </div>
      </div>

      {}
      <div className="col-12 d-flex justify-content-center mt-5">
          <div className="card mb-4 shadow-lg border-0 p-4 w-75">
            <div className="card-body d-flex align-items-center">
              <img
                src={AbdElrahman}
                alt="Dr Mustafa Al-Nahhas"
                className="me-4 rounded-circle ms-3"
                width="200"
                height="200"
              />
              <div className="col-8 text-center">
                <h4 className="fw-bold text-success">Dr AbdElrahman Mohamed </h4>
                <p className="text-muted mb-2">
                Master of Psychiatry from Alexandria University
                </p>
                <p className="text-success fw-bold fs-5">Connect: 010000000000</p>
              </div>
            </div>
          </div>
      </div>

      {}
      <div className="col-12 d-flex justify-content-center mt-5">
          <div className="card mb-4 shadow-lg border-0 p-4 w-75">
            <div className="card-body d-flex align-items-center">
              <img
                src={Rasha}
                alt="Dr Mustafa Al-Nahhas"
                className="me-4 rounded-circle ms-3"
                width="200"
                height="200"
              />
              <div className="col-8 text-center">
                <h4 className="fw-bold text-success">Dr Rasha Adel</h4>
                <p className="text-muted mb-2">
                Specialized in psychiatry, addiction and personality disorders
                </p>
                <p className="text-success fw-bold fs-5">Connect: 010000000000</p>
              </div>
            </div>
          </div>
      </div>
      
      
      
    </div>
    </div>
  );
}

export default Therapists;
