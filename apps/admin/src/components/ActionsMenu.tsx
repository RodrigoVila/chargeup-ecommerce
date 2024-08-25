import { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FloatingMenu, FloatingMenuContent, FloatingMenuTrigger } from '@packages/floating-menu'
import { ActionType, ActionWithOnClick, ActionWithType } from '@packages/types'

type Action = ActionWithType | ActionWithOnClick

type ActionMenuProps = {
  actions: Action[]
  rowId?: string
  handleActions?: (actionType: ActionType, orderId: string) => void
}

export const ActionsMenu = ({ actions, rowId, handleActions }: ActionMenuProps) => {
  const [isOpen, setOpen] = useState(false)

  const handleClick = (action: Action) => {
    if ('type' in action && rowId && handleActions) {
      handleActions(action.type, rowId)
    } else if ('onClick' in action) {
      action.onClick()
    }
  }
  return (
    <FloatingMenu open={isOpen} onOpenChange={setOpen}>
      <FloatingMenuTrigger
        className='rounded-full p-[6px] hover:bg-slate-600'
        onClick={() => setOpen(true)}
      >
        <BsThreeDotsVertical size={20} />
      </FloatingMenuTrigger>
      <FloatingMenuContent
        className='flex flex-col gap-2 overflow-hidden rounded-lg bg-slate-800 text-lg text-gray-300 shadow-xl'
        onClick={() => setOpen(false)}
      >
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={() => handleClick(action)}
            className='flex items-center gap-4 py-2 px-4 duration-150 hover:bg-blue-100 hover:text-black'
          >
            <span className='mb-1'>{action.icon}</span>
            <span>{action.label}</span>
          </button>
        ))}
      </FloatingMenuContent>
    </FloatingMenu>
  )
}
