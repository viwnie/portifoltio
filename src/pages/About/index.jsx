import React from 'react'
import './styles.css';
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer';

export const About = () => {
    return (
      <>
      <div className="about">
        <NavBar/>
        <Footer/>
      </div>
      </>
    );
  }
  
  export default About;