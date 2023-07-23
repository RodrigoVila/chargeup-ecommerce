import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useCountdown = () => {
  const [timeRemaining, setTimeRemaining] = useState(0)
  const router = useRouter()

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(timeRemaining - 1000)
      }, 1000)
    }
    if (timeRemaining === 1000) router.push('/')
    return () => clearInterval(interval)
  }, [timeRemaining])

  const startCountdown = (newStartTime: number) => {
    setTimeRemaining(newStartTime)
  }

  return { timeRemaining, startCountdown }
}
