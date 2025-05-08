import React from 'react';

function Depression() {
  return (
    <div className="row justify-content-center">
    <div className="col-md-10 mb-4">
              <div className="card shadow border-0 rounded-3 text-success-emphasis">
                <div className="card-body">
                  <h3 className="card-title fw-bold mb-4 text-center ">Depression</h3>
                  <div className="container">
                  <p className="fs-5">Definition :</p>
                  <p>A mood disorder that causes a persistent feeling of sadness and loss of interest, affecting daily life.</p>
                  <p className="fs-5 mt-5">Symptoms :</p>
                  <div className="row justify-content-center">
                  <div className="col-md-5">
                    <p>A persistent feeling of sadness or emptiness.</p>
                    <p>Changes in appetite and weight.</p>
                    <p>Fatigue or lack of energy.</p>
                    <p>Difficulty concentrating or making decisions.</p>
                  </div>
                  <div className="col-md-5">
                    <p>Loss of interest in enjoyable activities.</p>
                    <p>Difficulty sleeping or sleeping too much.</p>
                    <p>Feelings of worthlessness or guilt.</p>
                    <p>Difficulty concentrating or making decisions.</p>
                  </div>
                  </div> 
                  <p className="fs-5 mt-5">Possible causes :</p>
                  <div className="row justify-content-center">
                  <div className="col-md-5">
                    <p>Genetic factors.</p>
                    <p>Stressful or traumatic life events..</p>
                  </div>
                  <div className="col-md-5">
                    <p>Chemical imbalances in the brain.</p>
                  </div>
                  </div> 
                  <p className="fs-5 mt-5">Treatment methods:</p>
                  <div className="container px-5">
                  <p>Psychotherapy (such as cognitive behavioral therapy).</p>
                  <p>Antidepressant medications.</p>
                  <p>Lifestyle changes, such as exercise and a healthy diet.</p>
                  </div>
                </div>
                </div>
              </div>
              </div>
</div>
  );
}

export default Depression;
