import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { ActionsMenu } from '../ActionsMenu'

export type Action = {
  label: string
  icon: ReactNode
  onClick: () => void
}

export type TableProps = {
  columns: string[]
  data: any[]
  actions?: Action[]
}

const headerStyles = 'px-6 py-3 text-left text-s font-medium uppercase tracking-wider'

export const Table = ({ columns, data, actions }: TableProps) => {
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
          {data.map((row, index) => (
            <tr
              key={index}
              className={twMerge(
                'hover:cursor-pointer hover:bg-slate-700',
                index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-900',
              )}
            >
              {columns.map((column) => (
                <td key={column} className='px-6 py-4'>
                  <div className='text-sm'>{row[column]}</div>
                </td>
              ))}
              {actions && (
                <td className='px-4 text-center align-middle'>
                  <ActionsMenu actions={actions} />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
