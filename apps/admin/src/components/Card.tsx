import { ReactNode } from 'react'

type CardProps = {
  title: string
  content: string | ReactNode
}

export const Card = ({ title, content }: CardProps) => {
  return (
    <div className='h-full w-full overflow-hidden rounded-md border-gray-300 bg-gray-50 text-center align-middle text-zinc-100 shadow-lg'>
      <div className='w-max border-b-2 border-zinc-200 bg-zinc-100 p-2 text-sm font-bold uppercase tracking-wider text-gray-700'>
        {title}
      </div>
      <div className='py-2 font-bold text-black'>{content}</div>
    </div>
  )
}
