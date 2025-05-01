import React from "react";
import "../psychological_tests/PsychologicalTests.css"

const PsychologicalTests = () => {
  return (
    <div className="container margin-auto">
      <div className="row justify-content-center align-items-start">
        {}
        <div className="col-md-4 d-flex justify-content-center align-items-center text-center">
        <div className="card p-3 text-center shadow border-0 card-fixed-height card-background rounded-4 d-flex flex-column justify-content-center align-items-center">
        <h5 className="fw-bold text-success mb-5">Social Anxiety Level Prediction</h5>
        <p className="text-success">Feel nervous in social situations ?</p>
        <p className="text-success mb-4">Take this quick test to find out your social anxiety level in under a minute !</p>
        <a 
          href="https://social-anxiety.streamlit.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-success text-light rounded-pill w-50 mt-auto"
        >
           Try Now
        </a>
      </div>
      </div>


        {}
        <div className="col-md-4 d-flex justify-content-center  align-items-center text-center mt-4">
          <div className="card p-3 text-center shadow border-0 card-fixed-height card-background rounded-4 d-flex flex-column justify-content-center align-items-center">
            <h5 className="fw-bold text-success mb-5 mt-4"> Panic Disorder Detection</h5>
            <p className="text-success">Do you experience sudden panic attacks ?</p>
            <p className="text-success mb-4">This test helps you detect signs of panic disorder — quickly and privately.</p>
            <a 
          href="https://panic-disorder-detection.streamlit.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-success text-light rounded-pill w-50 mt-auto"
        >
           Try Now
        </a>
          </div>
        </div>

        {}
        <div className="col-md-4 d-flex justify-content-center  align-items-center text-center mt-5">
          <div className="card p-3 text-center shadow border-0 card-fixed-height card-background rounded-4 d-flex flex-column justify-content-center align-items-center">
            <h5 className="fw-bold text-success mb-5 mt-4">Mental Health Checkup Recommendation</h5>
            <p className="text-success">Not sure how your mental health is doing ?</p>
            <p className="text-success mb-4">Get a personalized recommendation with this fast and easy checkup .</p>
            <a 
          href="https://mental-health-social-media-checker.streamlit.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-success text-light rounded-pill w-50 mt-auto"
        >
           Try Now
        </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychologicalTests;
