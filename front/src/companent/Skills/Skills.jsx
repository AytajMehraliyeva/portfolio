import React from 'react';
import './Skills.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,  
  };

  return (
    <div className="slider-container" id='skills'>
        <span>Skills</span>
        <hr />
      <Slider {...settings}>
        <div>
          <img src="https://myportfolio-mu-azure.vercel.app/_next/static/media/html.ed6aaa50.svg" alt="HTML" />
          <p>HTML</p>
        </div>
        <div>
          <img src="https://myportfolio-mu-azure.vercel.app/_next/static/media/css.e5e99f36.svg" alt="CSS" />
          <p>CSS</p>
        </div>
        <div>
          <img src="https://myportfolio-mu-azure.vercel.app/_next/static/media/javascript.b472cbc1.svg" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div>
          <img src="https://seekvectors.com/files/download/Typescript-01.png" alt="TypeScript" />
          <p>TypeScript</p>
        </div>
        <div>
          <img src="https://myportfolio-mu-azure.vercel.app/_next/static/media/bootstrap.9e6ddba8.svg" alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div>
          <img src="https://myportfolio-mu-azure.vercel.app/_next/static/media/git.21d80414.svg" alt="Git" />
          <p>Git</p>
        </div>
        <div>
          <img src="https://myportfolio-mu-azure.vercel.app/_next/static/media/react.512a3a7e.svg" alt="React" />
          <p>React</p>
        </div>
        <div>
          <img src="https://myportfolio-mu-azure.vercel.app/_next/static/media/redux-logo-svgrepo-com.f025e382.svg" alt="Redux" />
          <p>Redux</p>
        </div>
        <div>
          <img src="https://myportfolio-mu-azure.vercel.app/_next/static/media/vitejs.b0428eab.svg" alt="Vitejs" />
          <p>Vitejs</p>
        </div>
        <div>
          <img src="https://myportfolio-mu-azure.vercel.app/_next/static/media/node.f277ccfc.svg" alt="Nodejs" />
          <p>Nodejs</p>
        </div>
        <div>
          <img src="https://myportfolio-mu-azure.vercel.app/_next/static/media/mongoDB.d8d2b67f.svg" alt="MongoDB" />
          <p>MongoDB</p>
        </div>
        <div>
          <img src="https://cdn.prod.website-files.com/609bc2fa29b6d5b7f44a2785/647743f51bc76753239a8bc6_expressjs-logo.webp" alt="Express" />
          <p>Express</p>
        </div>
        <div>
          <img src="https://myportfolio-mu-azure.vercel.app/_next/static/media/figma.00471f51.svg" alt="Figma" />
          <p>Figma</p>
        </div>
      </Slider>
    </div>
  );
}

export default Skills;
