import * as React from 'react'
import { useId } from '@floating-ui/react'
import { useFloatingMenuContext } from '../hooks/useFloatingMenu'

export const FloatingMenuDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLProps<HTMLParagraphElement>
>(function FloatingMenuDescription(props, ref) {
  const { setDescriptionId } = useFloatingMenuContext()
  const id = useId()

  React.useLayoutEffect(() => {
    setDescriptionId(id)
    return () => setDescriptionId(undefined)
  }, [id, setDescriptionId])

  return <p {...props} ref={ref} id={id} />
})
