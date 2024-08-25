import * as React from 'react'
import { ModalOptions, useModal } from '../hooks/useModal'

type ContextType =
  | (ReturnType<typeof useModal> & {
      setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>
      setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>
    })
  | null

const ModalContext = React.createContext<ContextType>(null)

export const useModalContext = (): any => {
  const context = React.useContext(ModalContext)

  if (context == null) {
    throw new Error('Modal components must be wrapped in <Modal />')
  }

  return context
}

type ModalProps = ModalOptions & {
  children: React.ReactNode
}

export const Modal = ({ children, ...options }: ModalProps) => {
  const dialog = useModal(options)
  return <ModalContext.Provider value={dialog}>{children}</ModalContext.Provider>
}
