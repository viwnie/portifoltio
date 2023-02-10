import React from 'react'
import './styles.css';
import Seta from '../../assets/seta.png'
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer';

export const Works = () => {
    return (
      <>
      <NavBar/>

      <div className='works'>
      <img className='seta1' src={Seta} alt="seta"/>
          <div className="works1">
          </div>
          <div className='works1'>
          </div>
          <div className="works1">
          </div>
          <img className='seta2'src={Seta} alt="seta"/>
        </div>
        <Footer/>
      </>
    );
  }
  
  export default Works;