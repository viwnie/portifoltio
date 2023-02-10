import React from 'react'
import './styles.css';
import { NavBar } from '../../components/NavBar'
import LogoGitHub from '../../assets/LogoGitHub.png'
import LogoLinkedin from '../../assets/linkedin.png'
import LogoDiscord from '../../assets/discord.png'


export const Contact = () => {
    return (
      <>
      <div className="contact">
        <NavBar/>
        <div className='centro'>
          <div className='contatos'>
              <a href="https://github.com/viwnie" target="_blank" rel="noreferrer">
            <img  className='github' src={LogoGitHub} alt="LogoGitHub"/>
            </a>
            <a href="https://www.linkedin.com/in/viwnie/" target="_blank" rel="noreferrer">
              <img className='linkedin' src={LogoLinkedin} 
              alt="LogoLinkedin" />
              </a>
              <a href="https://discordapp.com/users/351516905116532736" target="_blank" rel="noreferrer">
              <img className='discord' src={LogoDiscord} 
              alt="LogoDiscord" />
              </a>
          </div>
        </div>
        </div>
      </>
    );
  }
  
  export default Contact;