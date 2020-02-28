import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Animation ({ aosDataImg, aosDataText, textElement, h3, h4, img, srcImg, index }) {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
      duration: 1200
    });
    console.log('iam running');
  });

  return (
    <div className="row" key={index}>
      <div className={img ? 'item col-6 d-flex text-center justify-content-center' : 'item col-12 d-flex text-center justify-content-center'} data-aos={aosDataText}>
        {h3 && <h3 className="font-weight-bolder my-auto">{textElement}</h3>}
        {h4 && <h4 className="my-auto">{textElement}</h4>}
      </div>
      {img &&
        <div className="item col-6 py-2" data-aos={aosDataImg}>
          <img src={srcImg} className="img-fluid" />
        </div>
      }
    </div>
  );
}

export default Animation;
