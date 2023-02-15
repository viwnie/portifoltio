import React from 'react'
import './styles.css';
import { NavBar } from '../../components/NavBar'
import { Circle } from '../../components/Circle';
import { Footer } from '../../components/Footer';
import circlesData from './circles.json'

export const Home = () => {

  return (
    <>
    <div className="home">
      <NavBar/>
      <main className='main'>
        <div className='circles'>
          {circlesData.map(({ circleColor,circleAnimation,circleHeight,circleWidth,circleMargin }) => (
            <Circle
            circleMargin={circleMargin}
            circleColor={circleColor}
            circleAnimation={circleAnimation}
            circleHeight={circleHeight}
            circleWidth={circleWidth}/>))}
        </div>
      </main>
      <Footer/>
    </div>
    </>
  );
}

export default Home;
