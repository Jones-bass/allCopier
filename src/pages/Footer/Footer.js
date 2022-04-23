import React from 'react'
import logoCop from '../../assets/tudo.png';
import "../Footer/Footer.scss";


const Footer = () => {
  return (
    <footer>
    <div className="wrapper">
      <div className="footer-box">
        <div >
          <img className="imgFooter" src={logoCop} alt="LogoHeader" />
          <p>Seja prático e inteligente.</p>
        </div>
      </div>
      <div className="footer-box">
        <ul className="footer-list">
          <li>
            <a href="/">
              <i className="fab fa-whatsapp"></i>
              <span>Whatsapp</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-instagram"></i>
              <span>Instaran</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-linkedin"></i>
              <span>Linkedin</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-box">
        <ul className="footer-list">
          <li>
            <a href="/">
              <i className="fab fa-facebook-square"></i>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/Jones-bass">
              <i className="fab fa-github"></i>
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-youtube"></i>
              <span>Youtube</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
    </div>
  </footer>
)
}

export default Footer;