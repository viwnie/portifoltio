import React from 'react'
import './styles.css';
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer';
import { Circle } from '../../components/Circle';

export const Skills = () => {
    return (
      <>
      <div className="skills">
        <NavBar/>
        <div className='container-circles'>
        <Circle circleColor='#FB2576' circleHeight='120px' circleWidth='120px' circleMargin='300px' text='HTML' fontSize='20px'/>
        <Circle circleColor='#150050' circleHeight='120px' circleWidth='120px' circleMargin='300px' text='CSS' fontSize='20px'/>
        <Circle circleColor='#FB2576' circleHeight='300px' circleWidth='300px' circleMargin='300px' text='Skills' fontSize='40px'/>
        <Circle circleColor='#3F0071' circleHeight='120px' circleWidth='120px' circleMargin='300px' text='JS' fontSize='30px'/>
        <Circle circleColor='#0c0a0a' circleHeight='120px' circleWidth='120px' circleMargin='300px' text='REACT' fontSize='20px'/>
        </div>
        <Footer/>
      </div>
      </>
    );
  }
  
  export default Skills;