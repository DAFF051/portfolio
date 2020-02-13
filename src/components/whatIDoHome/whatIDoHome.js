import React from 'react';


function WhatIDoHome () {
  return (

    <div className="container-fluid">
      <div className="row text-center my-5 justify-content-center align-items-center">
        <div className="col-md-12">
          <header>
            <h2>What I can do?</h2>
          </header>
        </div>
        <div className="col-md-6">
          <div className="home-design-info">
            <img src="assets/me.svg" alt=" " className="img-fluid" />
            <div className="bubble right">
              <div className="bubbling-design-icons-vert" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="deets">
            <h3>Design what you want.</h3>
            <p>I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.</p>
          </div>
        </div>

        <div className="col-md-6 col-md-pull-3">
          <div className="deets">
            <h3>Develop what you need.</h3>
            <p>I'm a developer, so I know how to create your website to run across devices using the latest technologies available.</p>
          </div>
        </div>
        <div className="col-md-4 col-md-push-7">
          <div className="home-dev-info">
            <img src="assets/me-dev.svg" alt=" " className="img-fluid" />
            <div className="bubble left">
              <div className="bubbling-dev-icons-vert" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIDoHome;
