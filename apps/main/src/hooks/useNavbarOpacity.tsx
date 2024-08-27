import { useEffect, useMemo, useState } from 'react'

type OpacityLevel = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100

const OPACITY_MAPPER: Record<OpacityLevel, string> = {
  0: 'bg-black/0',
  10: 'bg-black/10',
  20: 'bg-black/20',
  30: 'bg-black/30',
  40: 'bg-black/40',
  50: 'bg-black/50',
  60: 'bg-black/60',
  70: 'bg-black/70',
  80: 'bg-black/70',
  90: 'bg-black/70',
  100: 'bg-black',
}

export const useNavbarOpacity = () => {
  const [currentScrollPos, setCurrentScrollPos] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const [windowHeight, setWindowsHeight] = useState(0)

  const backgroundOpacity = useMemo(() => {
    return OPACITY_MAPPER[opacity as OpacityLevel] || OPACITY_MAPPER[0]
  }, [opacity])

  useEffect(() => {
    const handleScroll = () => setCurrentScrollPos(window.pageYOffset)

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    global?.window && setWindowsHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    const currentOpacity = parseFloat(
      (1 - (windowHeight - currentScrollPos) / windowHeight).toFixed(1),
    )

    const parsedOpacity = currentOpacity === 0 ? 0 : currentOpacity >= 1 ? 1 : currentOpacity

    currentScrollPos <= windowHeight ? setOpacity(parsedOpacity * 100) : setOpacity(100)
  }, [currentScrollPos])

  return { backgroundOpacity }
}
