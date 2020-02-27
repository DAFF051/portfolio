import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function MyStory () {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
      duration: 1200
    });
  });

  return (
    <div className="container-fluid text-black-50">
      <div className="row">
        <div className="item col-12" data-aos="fade-up"><h4>I am Mohammed from Iraq, I am 24, and I am working  for ArtLimes. I studied software engineering for 3 years. I am currently doing volunteer work for SHA to help the students to become programmers. I am working for ArtLimes as a web developer, which I am enjoying. I would like to share with you the opportunity that I have been given by Artlimes, specifically Lorenzo, the cofounder. </h4></div>
        <div className="item col-6" data-aos="fade-right"><h4>I was finishing the web development course and when we started to do the graduation project is <a>social hackers academy(coding school in Athens)</a>, Lorenzo was invited to observe the school,the students and the courses we offer. He spoke with me about what I was studying,  and about my technical skills. I was contacted for a job interview, 3 days later was offered an internship with Artlimes.</h4></div>
        <div className="item col-6 py-2" data-aos="fade-left"><img src="/assets/sha.jpeg" className="img-fluid"/></div>
        <div className="item col-6 pt-3" data-aos="fade-left"><img src="/assets/artlimes.jpg" className="img-fluid" style={{ height: '97%' }}/></div>
        <div className="item col-6" data-aos="fade-right" ><h4>I was finishing the web development course and when we started to do the graduation project is <a>social hackers academy(coding school in Athens)</a>, Lorenzo was invited to observe the school,the students and the courses we offer. He spoke with me about what I was studying,  and about my technical skills. I was contacted for a job interview, 3 days later was offered an internship with Artlimes.</h4></div>

        <div className="item col-12" data-aos="zoom-in"><h4> I have worked for 3 different and exciting projects with Artlimes, some of my roles have included handling the layout and the style as a front end web developer.</h4></div>
        <div className="item col-12" data-aos="fade-down" data-aos-easing="linear">
          <h3 className="text-black-50 font-weight-bold"> So now I would like to share how I got to where I am ?</h3>
          <h3 className="text-black-50 font-weight-bolder">Let’s go to the beginning of my story.</h3>
        </div>

        <div className="item col-6" data-aos="flip-up"><h4>I left Iraq in 2014. The situation of the country was getting worse, and you know the rest (if you don't know check the news)..</h4></div>
        <div className="item col-6 py-2" data-aos="flip-down"><img className="img-fluid" src="assets/iraq.jpeg" /></div>
        <div className="item col-6 py-2" data-aos="zoom-in"><img className="img-fluid" src="assets/map.jpg" /></div>
        <div className="item col-6" data-aos="zoom-out"><h4> I relocated with my family to Jordan and it was there I started software engineering at university. I found my passion. I learnt different skills that I have found valuable.for increased opportunities, I then travelled to Turkey</h4></div>
        <div className="item col-6" data-aos="flip-down"><h4>I crossed the sea by boat with my brother, in the same way as the people that you read and hear about every day here in greece.</h4></div>
        <div className="item col-6 py-2" data-aos="zoom-down"><img className="img-fluid" src="assets/boat.jpg" /></div>
        <div className="item col-8" data-aos="fade-down" data-aos-easing="linear"><h3 className="text-black-50 font-weight-bolder">At that time I started my journey as a refugee</h3></div>
        <div className="item col-6" data-aos="flip-left-down"><h4> I stayed in a hotspot for 9 months, and once I had permission to leave, I arrived in Athens and wondered how I could start my life as a human again, and not as a refugee.</h4></div>
        <div className="item col-6 pb-3" data-aos="flip-right-down"><img className="img-fluid" src="assets/hotspot.jpg" /></div>
        <div className="item col-12" data-aos="flip-left"><h4>I wanted to find a job linked to my passion, I wanted to continue learning .I found social hackers academy on the internet and planned to start classes there. In September 2018 I started a full web developer course with delta class. I finished the course in April 2019, and this is when I met Lorenzo.</h4></div>
        <div className="item col-12" data-aos="flip-left"><h3 className="font-weight-bolder">my best advice that I can give to you - hard does not exist in reality. Remember this always - this is my story, I did it and I know that you can too.</h3></div>

      </div>
    </div>
  );
}

export default MyStory;
