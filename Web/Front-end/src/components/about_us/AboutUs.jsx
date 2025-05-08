import React from 'react';
import aboutus from '../../images/about us.png';


function AboutUs() {
    return (
      <div className="container mt-5">
        <h2 className="text-success mb-3 text-center fw-bold">About Us</h2>
        <section className="row align-items-center justify-content-center">
          <div className="col-md-6 d-flex justify-content-center">
            <img src={aboutus} alt="About Us" className="img-fluid aboutus-img" />
          </div>
          <div className="col-md-6">
            <p className="text-dark fs-3">
              We make mental health support accessible and empowering through
              digital tools and professional resources.
            </p>
          </div>

          <div className="container mt-5 mb-5">
  <h3 className="text-success mb-5 text-center">Our Objectives</h3>
  <div className="row justify-content-center">
    <div className="col-md-6 mb-4">
      <p className="fs-5">Helping people increase awareness of mental health.</p>
      <p className="fs-5">Public Awareness and Human Experiences.</p>
      <p className="fs-5">Make it easy to find doctors.</p>
    </div>
    <div className="col-md-5 mb-4 ms-5">
      <p className="fs-4">Low cost.</p>
      <p className="fs-5">Easy to access.</p>
      <p className="fs-5">Provide privacy and security for users.</p>
    </div>
  </div>
</div>


        </section>
      </div>
    );
  }
  
  export default AboutUs;