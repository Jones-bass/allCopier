import { InputHTMLAttributes } from 'react'
import input from './styles.module.css'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  errorMessage: string
}

export const Input = ({ errorMessage, name, ...rest }: InputProps) => {
  const { register } = useFormContext()

  return (
    <div className={input.wrapper}>
      <input className={input.input} {...register(name)} {...rest} />
      {errorMessage && <p className={input.error}>{errorMessage}</p>}
    </div>
  )
}
