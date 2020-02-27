import React from 'react';


function AboutHeader () {
  return (
    <div className="d-flex align-items-center justify-content-center bg-light about-header">
      <img src="/assets/personal-photo.jpg" alt=" " className="img-fluid"/>
      <div className="container-fluid position-absolute">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-12 col-md-10 text-white">
            <div className="dark-transparent-radius p-3">
              <h1 className="font-weight-bolder">“hard does not exist in reality. Remember this always”</h1>
              <h3 className="font-weight-light">the above sentence is the rule that helped me to survive until now </h3>
              <h3 className="font-weight-light">and also it was the last thing I said in my presentation 21/01/20120</h3>
              <h3 className="font-weight-light">below is my success story if you want to have positive read it and feel it!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
