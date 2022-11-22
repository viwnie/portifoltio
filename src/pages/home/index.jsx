import React from 'react'
import './styles.css';
import {NavBar} from '../../components/NavBar'
import { Circle } from '../../components/Circle';
import { Footer } from '../../components/Footer';

export const Home = () => {
  return (
    <>
    <div className="home">
        <header>
          <NavBar/>
        </header>
        <main className='main'>
         <div className='circles'>
            <Circle circleColor='#FB2576' circleHeight='100px' circleWidth='100px' circleMargin='300px'/>
            <Circle circleColor='#150050' circleHeight='75px' circleWidth='75px' circleMargin='100px'/>
            <Circle circleColor='#3F0071' circleHeight='60px' circleWidth='60px' circleMargin='200px'/>
            <Circle circleColor='black' circleHeight='40px' circleWidth='40px' circleMargin='90px'/>
            <Circle circleColor='#FB2576' circleHeight='30px' circleWidth='30px' circleMargin='110px'/>
            <Circle circleColor='#FB2576' circleHeight='30px' circleWidth='30px' circleMargin='180px'/>
            <Circle circleColor='black' circleHeight='40px' circleWidth='40px' circleMargin='110px'/>
            <Circle circleColor='#3F0071' circleHeight='60px' circleWidth='60px' circleMargin='250px'/>
            <Circle circleColor='#150050' circleHeight='75px' circleWidth='75px' circleMargin='100px'/>
            <Circle circleColor='#FB2576' circleHeight='100px' circleWidth='100px' circleMargin='300px'/>
          </div>
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
    </>
  );
}

export default Home;
