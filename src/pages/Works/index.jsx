import React from 'react'
import './styles.css';
import Seta from '../../assets/seta.png'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import LogoGitHub from '../../assets/LogoGitHub.png'
import LogoLinkedin from '../../assets/linkedin.png'
import LogoDiscord from '../../assets/discord.png'




export const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handleLeftClick = () => {
    setCurrentSlide(currentSlide < 3 ? 0 : currentSlide - 3);
  };
  
  const handleRightClick = () => {
    setCurrentSlide(currentSlide + 3);
  };
  
  const images = [LogoDiscord, LogoLinkedin, LogoGitHub,  LogoGitHub, LogoDiscord, LogoLinkedin,LogoDiscord, LogoLinkedin, LogoGitHub, LogoGitHub, LogoDiscord, LogoLinkedin]

  const displayedImages = images.slice(
    currentSlide % images.length,
    currentSlide % images.length + 3
  );

return (
  <>
    <NavBar />
    <div className='works'>
      <img className='seta1' src={Seta} alt="seta" onClick={handleLeftClick} />
      {displayedImages.map((image, index) => (
        <img className="works1" key={index} src={image} alt={`Slide ${index+1}`} />
      ))}
      <img className='seta2' src={Seta} alt="seta" onClick={handleRightClick} />
    </div>
    <Footer />
  </>
);
  }
  
  export default Works;