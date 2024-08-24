import * as React from 'react'
import { useFloating, useClick, useDismiss, useRole, useInteractions } from '@floating-ui/react'

interface ModalOptions {
  initialOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function useModal({
  initialOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: ModalOptions = {}): any {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen)
  const [labelId, setLabelId] = React.useState<string | undefined>()
  const [descriptionId, setDescriptionId] = React.useState<string | undefined>()

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const data = useFloating({
    open,
    onOpenChange: setOpen,
  })

  const context = data.context

  const click = useClick(context, {
    enabled: controlledOpen == null,
  })
  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' })
  const role = useRole(context)

  const interactions = useInteractions([click, dismiss, role])

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
    }),
    [open, setOpen, interactions, data, labelId, descriptionId],
  )
}
