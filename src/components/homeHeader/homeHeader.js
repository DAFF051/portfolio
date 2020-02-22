import React from 'react';


function HomeHeader () {
  return (
    <div className="wrapper bg-info">
      <div className="container-fluid pt-7">
        <h1 className="font-weight-bolder"> Hi, I’m Mohammed. I’m a Front-end Developer, Designer, & musician.</h1>
        <h5>I love all things web development & design. I was born and raised in Upstate Baghdad. when I had 18 I moved
            to Amman/Jordan to study software engineering, after I finished I moved to Athens, Greece.</h5>
        <h5>Feel free to send me a message on <a>Linkin!</a></h5>
        <div className="text-center">
          <img className="img-fluid text-center" src="assets/land.svg"/>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
