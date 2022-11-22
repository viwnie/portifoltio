import React from 'react'
import './styles.css'
import LogoGitHub from '../../assets/LogoGitHub.png'
import LogoLinkedin from '../../assets/LogoLinkedin.png'

export const Footer = () =>{
    return (
        <div className='footer'>
            <img src={LogoGitHub} alt="LogoGitHub" />
            <img className='linkedin' src={LogoLinkedin} alt="LogoLinkedin" />
        </div>
    )
}

