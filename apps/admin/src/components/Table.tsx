import { twMerge } from 'tailwind-merge'
import { ActionsMenu } from './ActionsMenu'
import { Action, ActionType } from '@packages/types'
import { ReactNode } from 'react'

type TableActions<T> = Action[] | ((row: T) => Action[])

export type TableProps<T extends { id: string }> = {
  columns: string[]
  data: T[] // The data will now be of type T (e.g., ProductType, OrderType)
  actions?: TableActions<T>
  handleActions: (actionType: ActionType, rowId: string) => void
}

const headerStyles = 'px-6 py-3 text-left text-s font-medium uppercase tracking-wider'

export const Table = <T extends { id: string }>({
  columns,
  data,
  actions,
  handleActions,
}: TableProps<T>) => {
  return (
    <div className='overflow-x-auto rounded-xl'>
      <table className='min-w-full border-collapse bg-slate-900'>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope='col' className={headerStyles}>
                {column}
              </th>
            ))}
            {actions && (
              <th scope='col' className={headerStyles}>
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className={twMerge('hover:cursor-pointer hover:bg-slate-700', 'bg-slate-800')}
            >
              {columns.map((column) => (
                <td key={column} className='px-6 py-4'>
                  <div className='text-sm'>{row[column as keyof T] as ReactNode}</div>
                </td>
              ))}
              {actions && (
                <td className='px-4 text-center align-middle'>
                  <ActionsMenu
                    actions={typeof actions === 'function' ? actions(row) : actions}
                    rowId={row.id}
                    handleActions={handleActions}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
