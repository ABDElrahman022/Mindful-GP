import React from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home_page/HomePage.css';
import intro from '../../images/intro.png';
import aboutus from '../../images/about us.png';
import chatbot from '../../images/chatbot.jpg';
import breakimg from '../../images/break.jpg';
import test from '../../images/test.png';
import therapist from '../../images/therapists.png';
import Stories from '../stories/Stories';




function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="container mt-4">
      {/* Intro Section */}
      <section className="container text-center mb-5">
  <div className="row align-items-center">
    <div className="col-md-8">
      <h1 className="display-4 text-success mb-5 fw-bold">Life is too short to spend it at war with yourself</h1>
      <button className="btn btn-success mt-5 rounded-pill px-4 py-3 fw-bold text-white"
      onClick={() => navigate("/login_page")}
      >Apply Now</button>
    </div>
    <div className="col-md-4">
    <img src={intro} alt="Life Image" className="img-fluid" />
    </div>
  </div>
</section>



      {/* Chatbot Section */}
      <section id="chatbot" className="row align-items-center mb-5  justify-content-center">
      <div className="col-md-6">
        <h2 className='text-success mb-5 fw-bold'>Chat Bot</h2>
        <p className='text-dark mb-5 fs-3'>
        Your mental health companion,available anytime to provide support, guidance, and resources tailored just for you.
        </p>
        <button className="btn btn-success rounded-pill px-4 py-3 fw-bold">Try Now</button>
        </div>
        <div className="col-md-6 d-flex justify-content-center mt-5">
          <img src={chatbot} alt="chatbot image" className="img-fluid aboutus-img"/>
        </div>
      </section>

       {/* break Section */}
       <div className="col-md-12 mt-5 bg-dark w-100 mb-5">
          <img src={breakimg} alt="break image" className="w-100 h-100"/>
        </div>

      {/* Tests Section */}
      <section id="tests" className="row align-items-center mb-5 d-flex justify-content-center">
      <h2 className='text-success mb-5 d-flex justify-content-center mt-5 fw-bold'> Psychological Tests</h2>
        <div className="col-md-6 text-center ">
          <p className='text-dark fs-3'>
          Discover your mental well-being!
          </p>
          <p className='text-dark fs-3'>
          Take a quick test to learn more about yourself
          </p>
          <button className="btn btn-success rounded-pill px-4 py-3 fw-bold mt-5"
          onClick={() => navigate('/psychological_tests')}>Test yourself</button>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={test} alt="test image" className="img-fluid aboutus-img"/>
        </div>
       </section>

      {/* Therapists Section */}
      <section id="herapists" className="row align-items-center mb-5  justify-content-center">
      <h2 className='text-success mb-5 text-center mt-5 fw-bold'>Therapists</h2>
      <div className="col-md-6 d-flex justify-content-center mt-5">
          <img src={therapist} alt="therapist image" className="img-fluid aboutus-img"/>
        </div>
      <div className="col-md-6 pt-5">
        <p className='text-dark mb-5 fs-3'>
        You're not alone. We're here to connect you with trusted therapists who can guide and support you every step of the way.        </p>
        <button className="btn btn-success rounded-pill px-4 py-3 fw-bold"
              onClick={() => navigate("/therapists")}>Learn more</button>
        </div>
      </section>

      {/* Advices & Articles Section */}
      <section id="advices" className="row align-items-center m-5">
        <h2 className="text-success mb-5 text-center fw-bold mt-5">Advices & Articles</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4 col-sm-6">
            <div className="card p-3 shadow h-100 rounded-5">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-success fw-bold text-center mb-4">Depression</h5>
                <p className="card-text">
                Ever felt like life has lost its color? Depression is more than just sadness—it’s a deep emotional struggle that affects energy, motivation, and even physical health. How can one find hope again?                </p>
                <button className="btn btn-success rounded-pill px-4 py-3 fw-bold mt-5"
                onClick={() => navigate('/mental_disorders/Depression')}>MORE</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card p-3 shadow h-100 rounded-5">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-success fw-bold text-center mb-4">Anxiety Disorders</h5>
                <p className="card-text">
                Heart racing, sweating, thoughts that never stop… Sound familiar? Anxiety disorders go beyond everyday stress, making even simple tasks feel overwhelming. How can we regain control?                </p>
                <button className="btn btn-success rounded-pill px-4 py-3 fw-bold mt-5"
                 onClick={() => navigate('/mental_disorders/AnxietyDisorders')}>MORE</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card p-3 shadow h-100 rounded-5">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-success fw-bold text-center mb-4">Schizophrenia</h5>
                <p className="card-text">
                Imagine hearing voices no one else can hear. Schizophrenia is often misunderstood—it’s not "madness" but a complex disorder affecting perception and reality. What’s life like for those who have it?                </p>
                <button className="btn btn-success rounded-pill px-4 py-3 fw-bold mt-5"
                onClick={() => navigate('/mental_disorders/Schizophrenia')}>MORE</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card p-3 shadow h-100 rounded-5">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-success fw-bold text-center mb-4">Bipolar Disorder</h5>
                <p className="card-text">
                From extreme euphoria to deep despair, bipolar disorder causes intense mood swings that can disrupt daily life. What triggers these shifts, and how can they be managed?                </p>
                <button className="btn btn-success rounded-pill px-4 py-3 fw-bold mt-5"
                onClick={() => navigate('/mental_disorders/BipolarDisorder')}>MORE</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card p-3 shadow h-100 rounded-5">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-success fw-bold text-center mb-4">OCD</h5>
                <p className="card-text">
                Ever felt the need to check the door ten times before leaving? OCD traps the mind in repetitive thoughts and actions that can be exhausting. Is there a way to break free?
                </p>
                <button className="btn btn-success rounded-pill px-4 py-3 fw-bold mt-5"
                onClick={() => navigate('/mental_disorders/OCD')}>MORE</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card p-3 shadow h-100 rounded-5">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-success fw-bold text-center mb-4">PTSD</h5>
                <p className="card-text">
                Some memories refuse to fade, replaying like a nightmare in real life. PTSD keeps past traumas alive, but can healing and recovery be possible?                </p>
                <button className="btn btn-success rounded-pill px-4 py-3 fw-bold mt-5"
                onClick={() => navigate('/mental_disorders/PTSD')}>MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
      <button
        className="btn btn-success px-5 py-3 rounded-pill fw-bold mt-5"
        onClick={() => navigate('/advices-and-articles')}
      >
        MORE
      </button>
    </div>
      </section>

      {/* Contact Us Section */}
      <section id="contactus" className="row align-items-center mb-5 justify-content-center">
        <h2 className="text-success m-5 text-center fw-bold">Contact Us</h2>
        <div className="col-md-6 offset-md-3 mx-3">
          <form>
            <div className="form-group mb-4">
              <label htmlFor="name" className="form-label text-muted fw-bold">NAME</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className="form-label text-muted fw-bold">Gmail</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="comment" className="form-label text-muted fw-bold">Your Comment</label>
              <textarea
                id="comment"
                rows="4"
                className="form-control bg-light"
                placeholder="Write your comment here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success rounded-pill px-5 py-2 fw-bold">Send</button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
