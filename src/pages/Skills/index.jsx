import React, { useState } from 'react'
import './styles.css';
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer';
import { Circle } from '../../components/Circle';
import Jav from '../../assets/java.png'
import XImage from '../../assets/x.png';

const CIRCLES_DATA = [
  { id: 'html', color: 'radial-gradient(circle at 10% 90%, #FB2576, white)', animation: 'circle 10s 0s linear infinite', text: 'HTML', fontSize: '20px' },
  { id: 'css', color: 'radial-gradient(circle at 10% 90%, #D11D75, white)', animation: 'circle 10s 1s linear infinite', text: 'CSS', fontSize: '20px' },
  { id: 'js', color: 'radial-gradient(circle at 10% 90%, #BC1974, white)', animation: 'circle 10s 2s linear infinite', text: 'JS', fontSize: '30px' },
  { id: 'react', color: 'radial-gradient(circle at 10% 90%,  #A71574, white)', animation: 'circle 10s 3s linear infinite', text: 'REACT', fontSize: '20px' },
  { id: 'python', color: 'radial-gradient(circle at 10% 90%, #931073, white)', animation: 'circle 10s 4s linear infinite', text: 'Python', fontSize: '20px' },
  { id: 'node', color: 'radial-gradient(circle at 10% 90%, #7E0C73, white)', animation: 'circle 10s 5s linear infinite', text: 'Node', fontSize: '20px' },
  { id: 'typeScript', color: 'radial-gradient(circle at 10% 90%, #690872, white)', animation: 'circle 10s 6s linear infinite', text: 'TypeScript', fontSize: '20px' },
  { id: 'animation', color: 'radial-gradient(circle at 10% 90%, #540472, white)', animation: 'circle 10s 7s linear infinite', text: 'Animation', fontSize: '20px' },
  { id: 'softskills', color: 'radial-gradient(circle at 10% 90%, #3F0071, white)', animation: 'circle 10s 8s linear infinite', text: 'SoftSkills', fontSize: '20px' },
  { id: 'hardskills', color: 'radial-gradient(circle at 10% 90%, #fd7cad, white)', animation: 'circle 10s 9s linear infinite', text: 'HardSkills', fontSize: '20px' },
];

export const Skills = () => {
  
  const [circleVisibility, setCircleVisibility] = useState(
    CIRCLES_DATA.reduce((acc, { id }) => ({ ...acc, [id]: 1 }), { x: 0 })
  );

  const handleCircleClick = (circleId) => {
    setCircleVisibility({ ...circleVisibility, [circleId]: 0, x: 1 });
  };

  const handleXClick = () => {
    setCircleVisibility(CIRCLES_DATA.reduce((acc, { id }) => ({ ...acc, [id]: 1 }), { x: 0 }));
  };

  return (
    <div className="skills">
      <NavBar />
    <div className="container-circles">
      {CIRCLES_DATA.map(({ id, color, animation, text, fontSize }) => (
        <Circle
          key={id}
          circlePosition="absolute"
          circleColor={color}
          circleAnimation={animation}
          circleHeight="120px"
          circleWidth="120px"
          text={text}
          fontSize={fontSize}
          opacity={circleVisibility[id]}
          onClick={() => handleCircleClick(id)}
        />
      ))}

      <div className="center">
        <Circle
          circleColor="radial-gradient(circle at 10% 90%, #0c0a0a, white)"
          circleHeight="400px"
          circleWidth="400px"
          text="Skills"
          fontSize="40px"
        />

        <img
          src={XImage}
          alt="x"
          className="x"
          style={{ opacity: circleVisibility.x }}
          onClick={handleXClick}
        />

        <div className='Progress'>

        </div>
      </div>
    </div>

    <Footer />
  </div>
  );
  }
  
  export default Skills;