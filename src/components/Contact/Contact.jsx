import React from 'react'
import './Contact.css'
import {FaInstagram, FaLinkedin, FaEnvelope} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact-bg'>
    <header className="site-header">
        <div className="header-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#works">Works</a>
          <a className="nav-contact" href="#contact">Contact</a>
        </nav>
      </header>

      <section id="contact" className="contact-content">
        <h1>Let's Work Together!</h1>

        <div className="contact-social">
          <p>Connect with me:</p>

          <a href="mailto: itsandreadb@gmail.com">
            <FaEnvelope aria-hidden="true" />
            <span>Email: itsandreadb@gmail.com</span>
          </a>

          <a href="https://www.linkedin.com/in/andrea-deanne-binoya/">
            <FaLinkedin aria-hidden="true" />
            <span>LinkedIn: andrea-deanne-binoya</span>
          </a>

          <a href="https://www.instagram.com/dumpsbydinn/">
            <FaInstagram aria-hidden="true" />
            <span>Instagram: dumpsbydinn</span>
          </a>

        </div>
      </section>
    </div>
  )
}

export default Contact
