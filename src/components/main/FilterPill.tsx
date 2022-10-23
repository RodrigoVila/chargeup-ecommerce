import { useState, useEffect } from 'react'
import Image from 'next/image'

import { colors } from '../../constants'

interface Props {
  label: string
  selected: boolean
  onClick: (value: string) => void
}

const FilterPill = ({ label, selected, onClick }: Props) => {
  const [isActive, setActive] = useState(false)

  const handleClick = (e) => {
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
      className="m-2 flex cursor-pointer items-center justify-center rounded-3xl px-2"
      onClick={handleClick}
    >
      <div className="relative mr-1 h-12 w-12">
        {label === 'Keto' && <Image src="/icons/keto-white.svg" layout="fill" />}
        {label === 'Vegano' && <Image src="/icons/vegan-white.png" layout="fill" />}
        {label === 'Proteico' && <Image src="/icons/high-protein-white.svg" layout="fill" />}
        {label === 'Gluten Free' && <Image src="/icons/gluten-free-white.png" layout="fill" />}
        {label === 'Sin Azucar' && <Image src="/icons/sugar-free-white.png" layout="fill" />}
      </div>
      <p className={`${isActive ? 'font-bold' : ''} select-none text-white`}>{label}</p>
    </div>
  )
}

export default FilterPill
