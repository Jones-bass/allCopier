import React from 'react'
import logoCop from '../../assets/tudo.png';
import { FaGithub, FaInstagram, FaYoutube, FaFacebookSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.footerBox}>
          <div >
            <img className={styles.imgFooter} src={logoCop} alt="LogoHeader" />
            <p>Seja prático e inteligente.</p>
          </div>
        </div>
        <div className={styles.footerBox}>
          <ul className={styles.footerList}>
            <li>
              <a href="/">
              <FaWhatsapp className={styles.fab} color="white" />
                <span>Whatsapp</span>
              </a>
            </li>
            <li>
              <a href="/">
              <FaInstagram className={styles.fab} color="white" />
                <span>Instaran</span>
              </a>
            </li>
            <li>
              <a href="/">
              <FaLinkedin className={styles.fab} color="white" />
                <span>Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerBox}>
          <ul className={styles.footerList}>
            <li>
              <a href="/">
              <FaFacebookSquare className={styles.fab} color="white" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Jones-bass">
              <FaGithub className={styles.fab} color="white" />
                <span>Github</span>
              </a>
            </li>
            <li>
              <a href="/">
              <FaYoutube className={styles.fab} color="white" />
                <span>Youtube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
      </div>
    </footer>
  )
}

export default Footer;