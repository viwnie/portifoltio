import React from 'react'
import './styles.css'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer';
export const About = () => {
    return (
      <>
      <div className="about">
        <NavBar/>
        
        {/* <div className='container'>
            <h1>Olá!! Me chamo Vinicio Salazar</h1> 
            <br></br>
            <h1>Sou desenvolvedor Full Stack Junior
            em busca de novos conhecimentos</h1>
        </div> */}
            <div className="waves wavesAnimation">
        <div className="bgTop">
          <div className="wave waveTop" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')"}}></div>
        </div>
        <div className="bgMiddle">
          <div className="wave waveMiddle" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"}}></div>
        </div>
        <div className="bgBottom">
          <div className="wave waveBottom" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')" }}></div>
        </div>
    </div>
        <Footer/>
      </div>
      </>
    );
  }
  
  export default About;