import React from 'react';


function Footer () {
  return (
    <div className="wrapper footer">
      <div className="container-fluid">
        <div className="row py-3 text-center text-lg-center justify-content-center">
          <div className="col-12 col-md-4 d-flex justify-content-center text-md-left align-items-center">
            <div className="px-2">
              <h5 className="font-weight-bold">Contact</h5>
              <a href = "mailto: ddaf051@gmail.com" target="_blank" >Send Email</a>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center text-md-left align-items-center">
            <div className="px-2">
              <h5 className="font-weight-bold">Location</h5>
              <p>Athens, Greece</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="border border-secondary rounded-pill">
              <h5 className="font-weight-bold text-primary">Mohammed Alabdali</h5>
              <p>Full stack web Developer</p>
            </div>
          </div>
        </div>
      </div>
      {/* the footer links */}
      <div className="wrapper bg-secondary">
        <div className="container-fluid">
          <div className="row py-3 text-center justify-content-center">
            <div className="col-12 col-md-10">
              <span className="text-primary">Discover </span>
              <span><a href="https://github.com/mohammedAlabdali96" target="_blank" className="text-white">GitHub</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
