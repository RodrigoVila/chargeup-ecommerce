import * as React from 'react'
import {
  FloatingPortal,
  FloatingFocusManager,
  FloatingOverlay,
  useMergeRefs,
} from '@floating-ui/react'
import { twMerge } from 'tailwind-merge'
import { useModalContext } from './Modal'

export const ModalContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  function ModalContent({ className, ...rest }, propRef) {
    const { context: floatingContext, ...context } = useModalContext()
    const ref = useMergeRefs([context.refs.setFloating, propRef])

    if (!floatingContext.open) return null

    return (
      <FloatingPortal>
        <FloatingOverlay lockScroll className='z-50 flex items-center justify-center bg-black/50'>
          <FloatingFocusManager context={floatingContext}>
            <div
              ref={ref}
              aria-labelledby={context.labelId}
              aria-describedby={context.descriptionId}
              className={twMerge(
                'm-auto mx-2 flex w-max max-w-sm items-center justify-center rounded-lg bg-white p-4',
                className,
              )}
              {...context.getFloatingProps(rest)}
            >
              {rest.children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>
    )
  },
)
