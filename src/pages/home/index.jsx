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
            <Circle circleColor='#FB2576' circleHeight='100px' circleWidth='100px' circleMargin='300px' circleDelay='0.57s' />
            <Circle circleColor='#150050' circleHeight='75px' circleWidth='75px' circleMargin='100px' circleDelay='0.67s'/>
            <Circle circleColor='#3F0071' circleHeight='60px' circleWidth='60px' circleMargin='200px' circleDelay='0.77s'/>
            <Circle circleColor='black' circleHeight='40px' circleWidth='40px' circleMargin='90px' circleDelay='0.87s'/>
            <Circle circleColor='#FB2576' circleHeight='30px' circleWidth='30px' circleMargin='110px' circleDelay='0.97s'/>
            <Circle circleColor='#FB2576' circleHeight='30px' circleWidth='30px' circleMargin='180px' circleDelay='1s'/>
            <Circle circleColor='black' circleHeight='40px' circleWidth='40px' circleMargin='110px' circleDelay='0.9s'/>
            <Circle circleColor='#3F0071' circleHeight='60px' circleWidth='60px' circleMargin='250px' circleDelay='0.89s'/>
            <Circle circleColor='#150050' circleHeight='75px' circleWidth='75px' circleMargin='100px' circleDelay='0.79s'/>
            <Circle circleColor='#FB2576' circleHeight='100px' circleWidth='100px' circleMargin='300px' circleDelay='0.69s'/>
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
