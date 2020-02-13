import React from 'react';

function Home () {
  return (
    <div className="home-page vertical-center d-flex align-items-center">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-10 col-md-6 col-lg-4  text-center border border-primary">
            <div className="header-card">
              <img src="assets/cat.jpg" className="personal-img img-fluid rounded-circle" alt="cat"/>
            </div>
            <div className="body" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
