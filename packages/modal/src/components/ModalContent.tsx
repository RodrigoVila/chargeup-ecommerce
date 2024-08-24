import * as React from 'react'
import {
  FloatingPortal,
  FloatingFocusManager,
  FloatingOverlay,
  useMergeRefs,
} from '@floating-ui/react'
import { useModalContext } from './Modal'

export const ModalContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  function ModalContent(props, propRef) {
    const { context: floatingContext, ...context } = useModalContext()
    const ref = useMergeRefs([context.refs.setFloating, propRef])

    if (!floatingContext.open) return null

    return (
      <FloatingPortal>
        <FloatingOverlay className='bg-black bg-opacity-60' lockScroll>
          <FloatingFocusManager context={floatingContext}>
            <div
              ref={ref}
              aria-labelledby={context.labelId}
              aria-describedby={context.descriptionId}
              {...context.getFloatingProps(props)}
            >
              {props.children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>
    )
  },
)
