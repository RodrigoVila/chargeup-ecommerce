import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FloatingMenu, FloatingMenuContent, FloatingMenuTrigger } from '@packages/floating-menu'

export type Action = {
  label: string
  icon: ReactNode
  onClick: () => void
}

type TableProps = {
  columns: string[]
  data: any[]
  actions?: Action[]
}

const headerStyles = 'px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'

export const Table = ({ columns, data, actions }: TableProps) => {
  return (
    <div className='overflow-x-auto rounded-xl text-white'>
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
                  <div className='text-sm text-gray-200'>{row[column]}</div>
                </td>
              ))}
              {actions && (
                <td className='px-4 text-center align-middle'>
                  <FloatingMenu>
                    <FloatingMenuTrigger className='rounded-full p-[6px] hover:bg-slate-600'>
                      <BsThreeDotsVertical size={20} className='text-gray-200' />
                    </FloatingMenuTrigger>
                    <FloatingMenuContent className='flex flex-col gap-2 overflow-hidden rounded-lg bg-slate-800 text-lg text-white shadow-xl'>
                      {actions.map((action) => (
                        <button
                          onClick={action.onClick}
                          className='flex items-center gap-2 p-2 duration-150 hover:bg-blue-100 hover:text-black'
                        >
                          {action.icon}
                          {action.label}
                        </button>
                      ))}
                    </FloatingMenuContent>
                  </FloatingMenu>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
