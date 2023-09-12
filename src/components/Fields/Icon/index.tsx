import { ButtonHTMLAttributes, ElementType } from 'react'
import { ButtonIcon } from './styles'

interface FieldIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
  size?: number
  onAction?: () => void
}

export function FieldIcon({ icon: Icon, size = 24, onAction }: FieldIconProps) {
  return (
    <ButtonIcon onClick={onAction} type="button">
      <Icon size={size} />
    </ButtonIcon>
  )
}
