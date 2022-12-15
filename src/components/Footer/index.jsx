import React from 'react'
import './styles.css'
import LogoGitHub from '../../assets/LogoGitHub.png'
import LogoLinkedin from '../../assets/linkedin.png'

export const Footer = () =>{
    return (
        <div className='footer'>
            <a href="https://github.com/viwnie" target="_blank" rel="noreferrer">
           <img  src={LogoGitHub} alt="LogoGitHub"/>
           </a>
           <a href="https://www.linkedin.com/in/viwnie/" target="_blank" rel="noreferrer">
            <img className='linkedin' src={LogoLinkedin} 
            alt="LogoLinkedin" />
            </a>
        </div>
    )
}

