import React from 'react'
import './styles.css';
import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer';

export const Contact = () => {
    return (
      <>
      <div className="contact">
        <NavBar/>
        <div>
          <h1>Olá!!</h1>
          
        </div>
        <Footer/>
      </div>
      </>
    );
  }
  
  export default Contact;