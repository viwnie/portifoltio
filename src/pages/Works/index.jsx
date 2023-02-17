import React from 'react'
import './styles.css';
import Seta from '../../assets/seta.png'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import LogoGitHub from '../../assets/LogoGitHub.png'
import LogoLinkedin from '../../assets/linkedin.png'
import LogoDiscord from '../../assets/discord.png'

const CARROSEL_DATA = [
  { id: 0, image: `${LogoGitHub}`, alt: 'image0', title: 'hello',text: 'LogoGitHub' },
  { id: 1, image: `${LogoLinkedin}`, alt: 'image1', title: 'hello',text: 'LogoLinkedin' },
  { id: 2, image: `${LogoDiscord}`, alt: 'image2', title: 'hello',text: 'LogoDiscord' },
  { id: 3, image: `${LogoDiscord}`, alt: 'image3', title: 'hello',text: 'LogoDiscord' },
  { id: 4, image: `${LogoLinkedin}`, alt: 'image4', title: 'hello',text: 'LogoLinkedin' },
  { id: 5, image: `${LogoGitHub}`, alt: 'image5', title: 'hello',text: 'LogoGitHub' },
];



export const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLeftClick = () => {
    setCurrentSlide((currentSlide - 3 + CARROSEL_DATA.length) % CARROSEL_DATA.length);
  };

  const handleRightClick = () => {
    setCurrentSlide((currentSlide + 3) % CARROSEL_DATA.length);
  };
  
  const displayedSlides = CARROSEL_DATA.slice(
    currentSlide,
    currentSlide + 3
  );
  return (
    <>
      <NavBar />
      <div className="works">
        <img className="left" src={Seta} alt="arrow" onClick={handleLeftClick} />
        {displayedSlides.map(slide => (
          <div className='work' key={slide.id}>
            <h1>{slide.title}</h1>
            <img src={slide.image} alt={slide.alt} />
            <p>{slide.text}</p>
          </div>
        ))}
        <img className="right" src={Seta} alt="arrow" onClick={handleRightClick} />
      </div>
      <Footer />
    </>
  );
  }
  
  export default Works;