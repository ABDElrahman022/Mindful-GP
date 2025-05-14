import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../advices&articles/Advices&Articles.css';
import advices_and_articles from '../../images/advices&articles.png';
function AdvicesAndArticles() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem('customArticles')) || [];
    setArticles(storedArticles);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newArticle = { title, content };
    const updatedArticles = [newArticle, ...articles];
    setArticles(updatedArticles);
    localStorage.setItem('customArticles', JSON.stringify(updatedArticles));
    setTitle('');
    setContent('');
  };

  const handleDelete = (index) => {
    const updated = [...articles];
    updated.splice(index, 1);
    setArticles(updated);
    localStorage.setItem('customArticles', JSON.stringify(updated));
  };

  const goToDetails = (article) => {
    localStorage.setItem('currentArticle', JSON.stringify(article));
    navigate('/article-details');
  };

  const staticArticles = [
    { title: 'Depression', path: 'Depression', text: 'Ever felt like life has lost its color? Depression is more than just sadness—it’s a deep emotional struggle that affects energy, motivation, and even physical health.' },
    { title: 'Anxiety Disorders', path: 'AnxietyDisorders', text: 'Heart racing, sweating, endless thoughts? Anxiety goes beyond stress, making tasks overwhelming.' },
    { title: 'Schizophrenia', path: 'Schizophrenia', text: 'Imagine hearing voices no one else can. Schizophrenia affects perception and reality, not "madness".' },
    { title: 'Bipolar Disorder', path: 'BipolarDisorder', text: 'From euphoria to despair, bipolar disorder causes intense mood swings disrupting life.' },
    { title: 'OCD', path: 'OCD', text: 'Checking the door ten times? OCD traps the mind in repetitive, exhausting loops.' },
    { title: 'PTSD', path: 'PTSD', text: 'Some memories never fade. PTSD keeps past traumas alive, but healing is possible.' },
    { title: 'Eating Disorders', path: 'EatingDisorders', text: 'Food is not just nutrition—it’s a battle. Anorexia and bulimia reflect deep emotional struggles.' },
    { title: 'BPD', path: 'BPD', text: 'One moment, love feels overwhelming; the next, it turns into hate. BPD causes intense emotional instability.' },
    { title: 'ADHD', path: 'ADHD', text: 'Constantly moving, easily distracted—ADHD isn’t just being hyperactive. It affects focus and impulse control.' }
  ];

  return (
    <div className="container mt-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-8 text-center text-lg-start">
          <p className="fw-bold text-success fs-2">
          Mental health…is not a destination, but a process. It's about how you drive, not where you're going.          </p>
        </div>
        <div className="col-lg-4 text-center">
          <img src={advices_and_articles} alt="advices" className="img-fluid" style={{ maxHeight: '400px' }} />
        </div>
      </div>

      <h3 className="text-success text-center mb-5">Write new article</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label className="form-label text-success ms-2 fw-bold">Title :</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control rounded-3" />
        </div>
        <div className="form-group mb-4">
          <label className="form-label text-success ms-2 fw-bold">Content of article</label>
          <textarea rows="4" value={content} onChange={(e) => setContent(e.target.value)} className="form-control bg-light" placeholder="Write your article here ..." />
        </div>
        <div className="text-center mb-5 mt-3">
          <button type="submit" className="btn btn-success rounded-pill px-5 py-2 fw-bold">Send</button>
        </div>
      </form>

      <div className="row g-4 justify-content-center mb-5">
        {articles.map((item, index) => (
          <div className="col-md-4 col-sm-6" key={index}>
            <div className="card p-3 shadow h-100 rounded-5">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-success fw-bold text-center mb-3">{item.title}</h5>
                <p
                  className="card-text"
                  style={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  {item.content}
                </p>
                <button
                  className="btn btn-success rounded-pill px-4 py-2 fw-bold mt-2"
                  onClick={() => goToDetails(item)}
                >
                  MORE
                </button>
                <button className="btn btn-danger mt-3 fw-bold rounded-pill" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}

        {staticArticles.map((item, index) => (
          <div className="col-md-4 col-sm-6" key={`static-${index}`}>
            <div className="card p-3 shadow h-100 rounded-5">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-success fw-bold text-center mb-3">{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <button
                  className="btn btn-success rounded-pill px-4 py-2 fw-bold mt-3"
                  onClick={() => navigate(`/mental_disorders/${item.path}`)}
                >
                  MORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdvicesAndArticles;
