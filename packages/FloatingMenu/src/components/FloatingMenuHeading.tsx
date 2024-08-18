import * as React from 'react'
import { useId } from '@floating-ui/react'
import { useFloatingMenuContext } from '../hooks/useFloatingMenu'

export const FloatingMenuHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLProps<HTMLHeadingElement>
>(function FloatingMenuHeading(props, ref) {
  const { setLabelId } = useFloatingMenuContext()
  const id = useId()

  React.useLayoutEffect(() => {
    setLabelId(id)
    return () => setLabelId(undefined)
  }, [id, setLabelId])

  return (
    <h2 {...props} ref={ref} id={id}>
      {props.children}
    </h2>
  )
})
