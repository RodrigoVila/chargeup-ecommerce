import { useState } from 'react'
import Image from 'next/image'

import { colors } from '../../utils/constants'

interface Props {
  label: string
  setSelected: (value: string) => void
}

const FilterPill = ({ label, setSelected }: Props) => {
  const [isActive, setActive] = useState(false)

  const handleClick = () => setActive(!isActive)

  return (
    <div
      style={{ background: isActive ? colors.overlayPurple2 : colors.overlayPurple }}
      className="mx-2 flex cursor-pointer items-center justify-center rounded-3xl pl-2 pr-4"
      onClick={handleClick}
    >
      <div className="relative mr-1 h-12 w-12 ">
        {label === 'Keto' && <Image src="/icons/keto-white.svg" layout="fill" />}
        {label === 'Vegano' && <Image src="/icons/vegan-white.png" layout="fill" />}
        {label === 'Alto en proteina' && (
          <Image src="/icons/high-protein-white.svg" layout="fill" />
        )}
        {label === 'Gluten Free' && <Image src="/icons/gluten-free-white.png" layout="fill" />}
        {label === 'Sin Azucar' && <Image src="/icons/sugar-free-white.png" layout="fill" />}
      </div>
      <p className={`${isActive ? 'font-extrabold' : 'font-thin'} select-none text-white`}>
        {label}
      </p>
    </div>
  )
}

export default FilterPill
