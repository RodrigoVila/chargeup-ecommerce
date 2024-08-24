import * as React from 'react'
import { useId } from '@floating-ui/react'
import { useModalContext } from './Modal'

export const ModalDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLProps<HTMLParagraphElement>
>(function ModalDescription({ children, ...props }, ref) {
  const { setDescriptionId } = useModalContext()
  const id = useId()

  React.useLayoutEffect(() => {
    setDescriptionId(id)
    return () => setDescriptionId(undefined)
  }, [id, setDescriptionId])

  return (
    <p {...props} ref={ref} id={id}>
      {children}
    </p>
  )
})
