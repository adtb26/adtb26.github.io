
import './Contact.css'
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="contact-bg">
      <div className="contact-content">
        <h1>Let's Work Together!</h1>

        <div className="contact-social">
          <p>Connect with me:</p>

          <a href="mailto:itsandreadb@gmail.com">
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
      </div>
    </section>
  )
}

export default Contact
