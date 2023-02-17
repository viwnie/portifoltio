import React from 'react'
import './styles.css'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import waveTop from '../../assets/wave-top.png'
import waveMid from '../../assets/wave-mid.png'
import waveBottom from '../../assets/wave-bot.png'

export const About = () => {
    return (
      <>
      <div className="about">
        <NavBar/>
            <div className="waves wavesAnimation">
        <div className="bgTop">
          <div className="wave waveTop" style={{backgroundImage: `url(${waveTop})`, opacity: '0.8'}}></div>
        </div>
        <div className="bgMiddle">
          <div className="wave waveMiddle" style={{backgroundImage: `url(${waveMid})`, opacity: '0.6'}}></div>
        </div>
        <div className="bgBottom">
          <div className="wave waveBottom" style={{backgroundImage: `url(${waveBottom})` , opacity: '0.5'}}></div>
        </div>
    </div>
        <Footer/>
      </div>
      </>
    );
  }
  
  export default About;