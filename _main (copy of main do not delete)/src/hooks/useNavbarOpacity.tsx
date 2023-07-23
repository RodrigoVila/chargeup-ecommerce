import { useEffect, useMemo, useState } from 'react';

export const useNavbarOpacity = () => {
  const [currentScrollPos, setCurrentScrollPos] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [windowHeight, setWindowsHeight] = useState(0);

  const backgroundOpacity = useMemo(() => {
    switch (opacity) {
      case 0:
        //Tailwind do not accept string interpolation/concatenation
        return 'bg-black/0';
      case 10:
        return 'bg-black/10';
      case 20:
        return 'bg-black/20';
      case 30:
        return 'bg-black/30';
      case 40:
        return 'bg-black/40';
      case 50:
        return 'bg-black/50';
      case 60:
        return 'bg-black/60';
      case 70:
        return 'bg-black/70';
      case 80:
        return 'bg-black/80';
      case 90:
        return 'bg-black/90';
      case 100:
        return 'bg-black/100';
    }
  }, [opacity]);

  useEffect(() => {
    const handleScroll = () => setCurrentScrollPos(window.pageYOffset);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    global?.window && setWindowsHeight(window.innerHeight);
  }, [global]);

  useEffect(() => {
    const currentOpacity = parseFloat(
      (1 - (windowHeight - currentScrollPos) / windowHeight).toFixed(1)
    );

    // Not less than 0 and more than 1
    const parsedOpacity = currentOpacity === 0 ? 0 : currentOpacity >= 1 ? 1 : currentOpacity;

    currentScrollPos <= windowHeight ? setOpacity(parsedOpacity * 100) : setOpacity(100);
  }, [currentScrollPos]);

  return { backgroundOpacity };
};
