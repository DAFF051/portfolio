import React from 'react';


function TogetherBanner () {
  return (
    <div className="wrapper border-top border-tertiary-light">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-11 col-lg-6 d-flex align-items-center">
            <div>
              <h1 className="font-weight-bolder">Let’s do it together</h1>
              <h3 className="font-weight-lighter">I’m currently available for freelance work.</h3>
            </div>
          </div>
          <div className="col-11 col-lg-6">
            <img src="assets/partner.svg" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TogetherBanner;
