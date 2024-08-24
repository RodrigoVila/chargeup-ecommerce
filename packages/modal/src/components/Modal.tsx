import * as React from 'react'
import { useModal } from '../hooks/useModal'
import { UseFloatingReturn } from '@floating-ui/react'

interface UseModalReturn extends UseFloatingReturn<HTMLElement> {
  labelId: string | undefined
  descriptionId: string | undefined
  setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>
  setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>
  open: boolean
  setOpen: (open: boolean) => void
}

type ModalContextType = UseModalReturn | null

const ModalContext = React.createContext<ModalContextType>(null)

export const useModalContext = (): UseModalReturn => {
  const context = React.useContext(ModalContext)

  if (context == null) {
    throw new Error('Modal components must be wrapped in <Modal />')
  }

  return context
}

interface ModalProps {
  children: React.ReactNode
}

export const Modal = ({ children, ...options }: ModalProps) => {
  const dialog = useModal(options)
  return <ModalContext.Provider value={dialog}>{children}</ModalContext.Provider>
}
