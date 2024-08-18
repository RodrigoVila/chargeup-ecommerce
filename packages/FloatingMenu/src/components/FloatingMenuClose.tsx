import * as React from 'react'
import { useFloatingMenuContext } from '../hooks/useFloatingMenu'

export const FloatingMenuClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function FloatingMenuClose(props, ref) {
  const { setOpen } = useFloatingMenuContext()
  return (
    <button
      type='button'
      ref={ref}
      {...props}
      onClick={(event) => {
        props.onClick?.(event)
        setOpen(false)
      }}
    />
  )
})
