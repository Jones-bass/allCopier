import { useContext } from 'react'
import { FaCartArrowDown, FaUser } from 'react-icons/fa'
import { BiExit } from 'react-icons/bi'

import { Link } from 'react-router-dom'

import logoMarca from '../../assets/tudoo.svg'

import { UserContext } from '../../context/UserContext'
import styles from './styles.module.css'

export function Header() {
  const { data, userLogout, cart } = useContext(UserContext)

  const cartQuantity = cart.length

  return (
    <div className={styles.pageHeader}>
      <Link className={styles.logoHeader} to="/" aria-label="Home">
        <img src={logoMarca} alt="LogoMarca" />
      </Link>

      <nav className={styles.headerMenu}>
        <Link to="/meusprodutos" aria-label="meusprodutos">
          {!cartQuantity ? null : <span> {cartQuantity}</span>}
          <FaCartArrowDown size={24} />
        </Link>

        <Link to="/contato">Contato</Link>
        <div className={styles.loginUser}>
          {data ? (
            <>
              <button onClick={userLogout}>
                <BiExit size={36} /> {data.nome}
              </button>
            </>
          ) : (
            <Link to="/login">
              Login <FaUser />
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}
