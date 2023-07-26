import Image from 'next/image'
import { MouseEvent, useEffect, useState } from 'react'

import { colors } from '~constants/colors'

type FilterPillProps = {
  label: string
  selected: boolean
  onClick: (value: string) => void
}

export const FilterPill = ({ label, selected, onClick }: FilterPillProps) => {
  const [isActive, setActive] = useState(false)

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setActive(!isActive)
    onClick(label)
  }

  useEffect(() => {
    selected && setActive(true)
  }, [selected])

  return (
    <div
      style={{ background: isActive ? colors.purple : colors.overlayPurple2 }}
      className='m-2 flex cursor-pointer items-center justify-center rounded-3xl px-2'
      onClick={handleClick}
    >
      <div className='relative mr-1 h-12 w-12'>
        {label === 'Keto' && <Image src='/icons/keto-white.svg' layout='fill' alt='Keto' />}
        {label === 'Vegano' && <Image src='/icons/vegan-white.png' layout='fill' alt='Vegan' />}
        {label === 'Proteico' && (
          <Image src='/icons/high-protein-white.svg' layout='fill' alt='High Protein' />
        )}
        {label === 'Gluten Free' && (
          <Image src='/icons/gluten-free-white.png' layout='fill' alt='Gluten Free' />
        )}
        {label === 'Sin Azucar' && (
          <Image src='/icons/sugar-free-white.png' layout='fill' alt='Sugar Free' />
        )}
      </div>
      <p className={`${isActive ? 'font-bold' : ''} select-none text-white`}>{label}</p>
    </div>
  )
}
