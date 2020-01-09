import React from 'react';


function TogetherBanner() {
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-11 col-lg-6 d-flex align-items-center">
            <div>
              <h1 className="font-weight-bolder">Let’s do it together</h1>
              <h3 className="font-weight-lighter">Looking for a tech house that understands innovation?</h3>
              <h4 className="font-weight-bold  text-primary">contact@artlimes.io</h4>
            </div>
          </div>
          <div className="col-11 col-lg-6">
            <img src="assets/kidfly.png" className="img-fluid d-none d-md-block" />
            <img src="assets/kidfly-sm.png" className="img-fluid d-block d-md-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TogetherBanner;
