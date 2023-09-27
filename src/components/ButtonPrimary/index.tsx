import { ButtonHTMLAttributes } from 'react'
import { Button } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  size?: string
}

export function ButtonPrimary({ text, size = '50%' }: ButtonProps) {
  return <Button size={size}>{text}</Button>
}
