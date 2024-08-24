import * as React from 'react'
import { useId } from '@floating-ui/react'
import { useModalContext } from './Modal'

export const ModalHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLProps<HTMLHeadingElement>
>(function ModalHeading({ children, ...props }, ref) {
  const { setLabelId } = useModalContext()
  const id = useId()

  React.useLayoutEffect(() => {
    setLabelId(id)
    return () => setLabelId(undefined)
  }, [id, setLabelId])

  return (
    <h2 {...props} ref={ref} id={id}>
      {children}
    </h2>
  )
})
