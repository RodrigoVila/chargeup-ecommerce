import * as React from 'react'
import { useMergeRefs } from '@floating-ui/react'
import { useFloatingMenuContext } from '../hooks/useFloatingMenu'

interface FloatingMenuTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

export const FloatingMenuTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & FloatingMenuTriggerProps
>(function FloatingMenuTrigger({ children, asChild = false, ...props }, propRef) {
  const context = useFloatingMenuContext()
  const childrenRef = (children as any).ref
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': context.open ? 'open' : 'closed',
      }),
    )
  }

  return (
    <button
      ref={ref}
      type='button'
      data-state={context.open ? 'open' : 'closed'}
      {...context.getReferenceProps(props)}
    >
      {children}
    </button>
  )
})
