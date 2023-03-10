import { FocusEventHandler, ChangeEventHandler } from 'react'
import input from './styles.module.css'

interface InpuProps {
  label: string
  type: string
  name: string
  value: string
  onChange: ChangeEventHandler
  onBlur: FocusEventHandler
  onError?: string
}

export const Input = ({
  label,
  type,
  name,
  onError,
  value,
  onChange,
  onBlur,
}: InpuProps) => {
  return (
    <div className={input.wrapper}>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={input.input}
        type={type}
        onError={onError}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {onError && <p className={input.onError}>{onError}</p>}
    </div>
  )
}
