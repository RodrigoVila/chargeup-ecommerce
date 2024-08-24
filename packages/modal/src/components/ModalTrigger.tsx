import * as React from 'react'
import { useMergeRefs } from '@floating-ui/react'
import { useModalContext } from './Modal'

interface ModalTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

export const ModalTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & ModalTriggerProps
>(function ModalTrigger({ children, asChild = false, ...props }, propRef) {
  const context = useModalContext()
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
      data-state={context.open ? 'open' : 'closed'}
      {...context.getReferenceProps(props)}
    >
      {children}
    </button>
  )
})
