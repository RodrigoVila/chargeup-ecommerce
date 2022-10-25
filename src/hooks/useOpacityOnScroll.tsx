import { useEffect, useMemo, useState } from 'react'
import throttle from 'lodash.throttle'

const useOpacityOnScroll = () => {
    const [currentScrollPos, setCurrentScrollPos] = useState(0)
    const [opacity, setOpacity] = useState("0")
    const [reverseOpacity, setReverseOpacity] = useState("1")

    useEffect(() => {
        const handleScroll = () => setCurrentScrollPos(window.pageYOffset);
        const throttledScroll = throttle(handleScroll, 150)

        window.addEventListener('scroll', throttledScroll);

        return () => window.removeEventListener('scroll', throttledScroll);
    }, []);

    useEffect(() => {
        const windowHeight = window.innerHeight

        const currentOpacity = (1 - (windowHeight - currentScrollPos) / windowHeight).toFixed(1)
        const currentReverseOpacity = (0 + (windowHeight - currentScrollPos) / windowHeight).toFixed(1)

        // Not less than 0 and more than 1
        const parsedOpacity = currentOpacity === "0.0"
            ? "0"
            : currentOpacity >= "1.0"
                ? "1"
                : currentOpacity

        // TODO: This doesn't work
        const parsedReverseOpacity = currentReverseOpacity <= "0"
            ? "0"
            : currentReverseOpacity >= "1.0"
                ? "1"
                : currentReverseOpacity

        if (currentScrollPos <= windowHeight) {
            setOpacity(parsedOpacity)
            setReverseOpacity(parsedReverseOpacity)
        }
    }, [currentScrollPos])



    return { opacity, reverseOpacity, currentScrollPos }
}

export default useOpacityOnScroll