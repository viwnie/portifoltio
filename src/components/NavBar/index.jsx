import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

export const NavBar =() => {
  return (
    <div className="navBar">
      <img className='logo' src={Logo} alt="Logo"/>
      <nav className="options">
          <Link to='/' className='link'>Home</Link>
          <Link to='/about' className='link'>About</Link>
          <Link to='/skills' className='link'>My Skills</Link>
          <Link to='/works' className='link'>Works</Link>
          <Link to='/contact' className='link'>Contact</Link>
      </nav>
    </div>
  );
}
