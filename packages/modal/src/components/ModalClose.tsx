import * as React from 'react'
import { useModalContext } from './Modal'

export const ModalClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function ModalClose(props, ref) {
  const { setOpen } = useModalContext()
  return <button type='button' {...props} ref={ref} onClick={() => setOpen(false)} />
})
