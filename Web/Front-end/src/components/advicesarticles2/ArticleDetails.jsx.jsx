// ✅ ArticleDetails.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ArticleDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const article = location.state?.article || JSON.parse(localStorage.getItem('currentArticle'));

  if (!article) {
    return (
      <div className="text-center mt-5">
        <h4 className="text-danger">No article found.</h4>
        <button className="btn btn-success mt-3" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-success text-center fw-bold mb-4">{article.title}</h2>
      <p className="fs-5">{article.content}</p>
      <div className="text-center mt-4">
        <button className="btn btn-success px-4 py-2 rounded-pill" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
}

export default ArticleDetails;
