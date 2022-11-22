import React from 'react'
import './styles.css'
import Logo from '../../assets/Logo.png'

export const NavBar =() => {
  return (
    <div className="navBar">
      <img className='logo' src={Logo} alt="Logo"/>
      <nav className="options">
          <h1>About</h1>
          <h1>My Skills</h1>
          <h1>Works</h1>
          <h1>Contact</h1>
      </nav>
    </div>
  );
}
