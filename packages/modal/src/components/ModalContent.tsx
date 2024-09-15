import * as React from 'react'
import {
  FloatingPortal,
  FloatingFocusManager,
  FloatingOverlay,
  useMergeRefs,
} from '@floating-ui/react'
import { twMerge } from 'tailwind-merge'
import { useModalContext } from './Modal'
import { AbsoluteModalClose } from './AbsoluteModalClose'

type ModalContentProps = React.HTMLProps<HTMLDivElement> & {
  isFullScreen?: boolean
  hasCloseButton?: boolean
}

export const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  function ModalContent(
    { className, isFullScreen = false, hasCloseButton = true, ...rest },
    propRef,
  ) {
    const { context: floatingContext, ...context } = useModalContext()
    const ref = useMergeRefs([context.refs.setFloating, propRef])

    if (!floatingContext.open) return null

    return (
      <FloatingPortal>
        <FloatingOverlay lockScroll className='flex items-center justify-center bg-black/50'>
          <FloatingFocusManager context={floatingContext}>
            <div
              ref={ref}
              aria-labelledby={context.labelId}
              aria-describedby={context.descriptionId}
              className={twMerge(
                'm-auto mx-2 flex w-max max-w-sm items-center justify-center rounded-lg bg-white p-4',
                isFullScreen && 'mx-0 h-screen w-full max-w-none',
                className,
              )}
              {...context.getFloatingProps(rest)}
            >
              {hasCloseButton && <AbsoluteModalClose />}
              {rest.children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>
    )
  },
)
