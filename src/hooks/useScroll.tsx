import { useEffect, useMemo, useState, RefObject } from 'react'

const useScroll = () => {
    const [currentScrollPos, setCurrentScrollPos] = useState(0)
    const [opacity, setOpacity] = useState(0)
    const [reverseOpacity, setReverseOpacity] = useState(1)
    const [windowHeight, setWindowsHeight] = useState(0)

    const getElementHeight = (ref: RefObject<HTMLDivElement>) => ref ? ref.current.offsetHeight : null

    useEffect(() => {
        const handleScroll = () => setCurrentScrollPos(window.pageYOffset);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window && setWindowsHeight(window.innerHeight)

        const currentOpacity = parseFloat((1 - (windowHeight - currentScrollPos) / windowHeight).toFixed(1))
        const currentReverseOpacity = parseFloat((0 + (windowHeight - currentScrollPos) / windowHeight).toFixed(1))

        // Not less than 0 and more than 1
        const parsedOpacity = currentOpacity === 0
            ? 0
            : currentOpacity >= 1
                ? 1
                : currentOpacity

        const parsedReverseOpacity = currentReverseOpacity <= 0
            ? 0
            : currentReverseOpacity >= 1
                ? 1
                : currentReverseOpacity

        if (currentScrollPos <= windowHeight) {
            setOpacity(parsedOpacity * 100)
            setReverseOpacity(parsedReverseOpacity * 100)
        }
    }, [currentScrollPos])



    return { opacity, reverseOpacity, currentScrollPos, windowHeight, getElementHeight }
}

export default useScroll