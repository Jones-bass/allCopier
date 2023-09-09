import { InputHTMLAttributes } from 'react'
import input from './styles.module.css'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  errorMessage: string
}

export const Input = ({ errorMessage, name, label, ...rest }: InputProps) => {
  const { register } = useFormContext()

  return (
    <div className={input.wrapper_input}>
      <input {...register(name)} {...rest} />
      <label htmlFor={rest.id}>{label}</label>
      {errorMessage && <p className={input.error}>{errorMessage}</p>}
    </div>
  )
}
