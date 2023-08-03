import logoCop from '../../assets/tudo.png'
import {
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa'

import { GrMail } from 'react-icons/gr'

import styles from './styles.module.css'

export const Footer = () => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.footerBox}>
          <div>
            <img className={styles.imgFooter} src={logoCop} alt="LogoHeader" />
            <p>Seja prático e inteligente.</p>
          </div>
        </div>
        <div className={styles.footerBox}>
          <ul className={styles.footerList}>
            <li>
              <a
                href="https://wa.me/qr/RTYW74WDLJHBC1"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className={styles.fab} color="white" />
                <span>Whatsapp</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jonesbass_/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className={styles.fab} color="white" />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jones-souza-58a31a177/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className={styles.fab} color="white" />
                <span>Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerBox}>
          <ul className={styles.footerList}>
            <li>
              <a
                href="https://github.com/Jones-bass"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare className={styles.fab} color="white" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Jones-bass"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className={styles.fab} color="white" />
                <span>Github</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:jonesbass.tb@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <GrMail className={styles.fab} color="white" />
                <span>Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}></div>
    </footer>
  )
}
