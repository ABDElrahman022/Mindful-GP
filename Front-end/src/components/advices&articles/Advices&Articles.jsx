import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../advices&articles/Advices&Articles.css';
import advices_and_articles from '../../images/advices&articles.png';

function AdvicesAndArticles() {
  const navigate = useNavigate();

    return (
      <div>
        <div className="container mt-5">
          {/*Upper text*/}
          <div className="row align-items-center mb-5">

          <div className="col-lg-8 col-md-12 text-center text-lg-start">
            <p className="fw-bold text-success fs-2">
              Mental health...is not a destination, but a process. It’s about how you drive, not where you're going.
            </p>
          </div>

          <div className="col-lg-4 col-md-12 text-center mt-4 mt-lg-0">
            <img
              src={advices_and_articles}
              alt="Advices and articles image"
              className="img-fluid"
              style={{ maxHeight: '400px' }} 
            />
          </div>
        </div>
        <h3 className='text-success text-center mb-5'>Write new article</h3>
        <div className="form-group mb-5">
              <label htmlFor="title" className="form-label text-success ms-5 fw-bold fs-5">Title :</label>
              <input
                type="text"
                id="title"
                className="form-control rounded-3"
                placeholder=""
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="article" className="form-label text-success ms-5 fs-5 fw-bold">Content of article</label>
              <textarea
                id="article"
                rows="4"
                className="form-control bg-light"
                placeholder="Write your article here ..."
              ></textarea>
            </div>
            <div className="text-center mb-5 mt-5">
              <button type="submit" className="btn btn-success rounded-pill px-5 py-2 fw-bold">Send</button>
            </div>
        <div className="row g-4 justify-content-center mb-5 mt-5">
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
                Ever felt the need to check the door ten times before leaving? OCD traps the mind in repetitive thoughts and actions that can be exhausting. Is there a way to break free?                </p>
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
          <div className="col-md-4 col-sm-6">
            <div className="card p-3 shadow h-100 rounded-5">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-success fw-bold text-center mb-4">Eating Disorders</h5>
                <p className="card-text">
                For some, food is not just nutrition—it’s a battle. Disorders like anorexia and bulimia stem from deep emotional struggles. How can one develop a healthy relationship with food?                </p>
                <button className="btn btn-success rounded-pill px-4 py-3 fw-bold mt-5"
                onClick={() => navigate('/mental_disorders/EatingDisorders')}>MORE</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card p-3 shadow h-100 rounded-5">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-success fw-bold text-center mb-4">BPD</h5>
                <p className="card-text">
                One moment, love feels overwhelming; the next, it turns into hate. BPD causes intense emotional instability and difficulty in relationships. What’s behind these extreme feelings?                </p>
                <button className="btn btn-success rounded-pill px-4 py-3 fw-bold mt-5"
                onClick={() => navigate('/mental_disorders/BPD')}>MORE</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card p-3 shadow h-100 rounded-5">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-success fw-bold text-center mb-4">ADHD</h5>
                <p className="card-text">
                Constantly moving, easily distracted—ADHD isn’t just about being "hyper." It affects focus, impulse control, and daily life, but it doesn’t have to hold anyone back.                </p>
                <button className="btn btn-success rounded-pill px-4 py-3 fw-bold mt-5"
                onClick={() => navigate('/mental_disorders/ADHD')}>MORE</button>
              </div>
            </div>
          </div>
          </div>
  
        
        </div>
  
    
      </div>
    );
  }
  
  export default AdvicesAndArticles;