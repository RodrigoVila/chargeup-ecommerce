import * as React from 'react'
import { useMergeRefs } from '@floating-ui/react'
import { FloatingPortal, FloatingFocusManager } from '@floating-ui/react'
import { useFloatingMenuContext } from '../hooks/useFloatingMenu'

export const FloatingMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function FloatingMenuContent({ style, ...props }, propRef) {
  const { context: floatingContext, ...context } = useFloatingMenuContext()
  const ref = useMergeRefs([context.refs.setFloating, propRef])

  if (!floatingContext.open) return null

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext} modal={context.modal}>
        <div
          ref={ref}
          style={{ ...context.floatingStyles, ...style }}
          aria-labelledby={context.labelId}
          aria-describedby={context.descriptionId}
          {...context.getFloatingProps(props)}
        >
          {props.children}
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  )
})
