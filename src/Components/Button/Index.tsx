import { ReactNode, MouseEventHandler } from 'react'
import styles from './styles.module.css'

interface Buttonprops {
  children: ReactNode
  onClick?: MouseEventHandler
  disabled?: boolean
}

export const Button = ({
  onClick,
  disabled,
  children,
  ...props
}: Buttonprops) => {
  return (
    <button
      {...props}
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
    >
      {children}
    </button>
  )
}
