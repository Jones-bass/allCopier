import { useContext } from 'react'
import { FaCartArrowDown, FaUserCircle } from 'react-icons/fa'
import { BiExit } from 'react-icons/bi'

import { Link } from 'react-router-dom'

import logoMarca from '../../assets/tudoo.svg'

import { UserContext } from '../../context/UserContext'
import styles from './styles.module.css'

export function Header() {
  const { cart, signOut, user } = useContext(UserContext)

  const cartQuantity = cart.length

  return (
    <div className={styles.pageHeader}>
      <Link className={styles.logoHeader} to="/" aria-label="Home">
        <img src={logoMarca} alt="LogoMarca" />
      </Link>

      <nav className={styles.headerMenu}>
        <Link to="/meusprodutos" aria-label="meusprodutos">
          {!cartQuantity ? null : <span>{cartQuantity}</span>}
          <FaCartArrowDown size={24} />
        </Link>

        <Link to="/contato">Contato</Link>
        <div className={styles.loginUser}>
          {user ? (
            <>
              <button onClick={signOut}>
                <BiExit size={36} /> {user.name}
              </button>
            </>
          ) : (
            <Link to="/login">
              <FaUserCircle size={25} />
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}
