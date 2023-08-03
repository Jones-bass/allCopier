import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
}

export const Button = ({ children, loading, ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} type="button" {...rest}>
      {children}
    </button>
  )
}
