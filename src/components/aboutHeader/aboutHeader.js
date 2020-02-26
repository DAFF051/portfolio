import React from 'react';


function AboutHeader () {
  return (
    <div className="d-flex align-items-center justify-content-center bg-light py-2 about-header">
      <img src="/assets/personal-photo.jpg" alt=" " className="img-fluid"/>
      <div className="container-fluid position-absolute">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-12 col-md-10 text-white">
            <div className="dark-transparent-radius mx-md-4">
              <h1 className="font-weight-bolder">Powering creativity</h1>
              <h3 className="font-weight-light">Artlimes is all about innovation and creativity, unlimited inspirations in order to make the world a better place to live in.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AboutHeader;
