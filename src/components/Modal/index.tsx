import { XCircle } from 'phosphor-react'
import { ModalStyle } from './styles'

interface ModalProps {
  text?: string
}

export function Modal({ text }: ModalProps) {
  return (
    <ModalStyle>
      <div>{text}</div>
      <XCircle size={24} />
    </ModalStyle>
  )
}
