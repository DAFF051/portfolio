import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function About () {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  });

  return (
    <div className="container-fluid text-black-50">
      <div className="row">
        <div className="item col-12" data-aos="fade-up">I am Mohammed from Iraq, I am 24, and I am working  for ArtLimes. I studied software engineering for 3 years. I am currently doing volunteer work for SHA to help the students to become programmers. I am working for ArtLimes as a web developer, which I am enjoying. I would like to share with you the opportunity that I have been given by Artlimes, specifically Lorenzo, the cofounder. </div>
        <div className="item col-8" data-aos="fade-down">I was finishing the web development course and when we started to do the graduation project, Lorenzo was invited to observe the school,the students and the courses we offer. He spoke with me about what I was studying,  and about my technical skills. I was contacted for a job interview, 3 days later was offered an internship with Artlimes.</div>
        <div className="item col-10" data-aos="fade-right">The first month was easy for me,they helped me and gave me more experience and knowledge so that I could meet the standards of the company. Lorenzo took the time to teach me one on one, which I appreciated a lot - he is a really good man.</div>
        <div className="item col-12" data-aos="fade-left">I got a lot of help from the team at ArtLimes. they have been so supportive of me. After the second month, I received feedback from the company who told me that I was able to have a contracted job there, I started as a member of their team.</div>

        <div className="item col-10" data-aos="zoom-in"> I have worked for 3 different and exciting projects with Artlimes, some of my roles have included handling the layout and the style as a front end web developer.</div>
        <div className="item col-8" data-aos="zoom-out"> So now I would like to share how I got to where I am ?</div>

        <div className="item col-6" data-aos="slide-up">Let’s go to the beginning of my story.</div>

        <div className="item col-10" data-aos="flip-up">I left Iraq in 2014. The situation of the country was getting worse, and you know the rest (if you don't know check the news).. I relocated with my family to Jordan and it was there I started software engineering at university. I found my passion. I learnt different skills that I have found valuable.</div>
        <div className="col-6"><img className="img-fluid" src="assets/boat.jpg" /></div>
        <div className="item col-6" data-aos="flip-down">for  increased opportunities, I then travelled to Turkey and I crossed the sea by boat with my brother, in the same way as the people that you read and hear about every day here in greece.</div>
        <div className="item col-8" data-aos="flip-right">At that time I started my journey as a refugee</div>
        <div className="item col-6" data-aos="flip-left"> I stayed in a hotspot for 9 months, and once I had permission to leave, I arrived in Athens and wondered how I could start my life as a human again, and not as a refugee.</div>
        <div className="col-6"><img className="img-fluid" src="assets/boat.jpg" /></div>
        <div className="item col-8" data-aos="flip-left">I wanted to find a job linked to my passion, I wanted to continue learning .I found social hackers academy on the internet and planned to start classes there. In September 2018 I started a full web developer course with delta class. I finished the course in April 2019, and this is when I met Lorenzo.</div>
        <div className="item col-8" data-aos="flip-left">my best advice that I can give to you students - hard does not exist in reality. Remember this always - this is my story, I did it and I know that you can too.</div>

      </div>
    </div>
  );
}

export default About;
