import { XCircle } from 'phosphor-react'
import { ModalStyle } from './styles'

interface ModalProps {
  variant?: string
}

export function Modal({ variant }: ModalProps) {
  return (
    <ModalStyle>
      <div>{variant}</div>
      <XCircle size={24} />
    </ModalStyle>
  )
}
