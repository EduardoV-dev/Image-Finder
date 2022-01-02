import { useCallback, useEffect, useState } from 'react';
import { useSpring } from 'react-spring';

const useScaleAnimationOnScroll = (scrollYToRender) => {
  const [show, setShow] = useState(false);

  const handleScroll = useCallback(() =>
    setShow(window.scrollY >= scrollYToRender)
    , [scrollYToRender]);

  const spring = useSpring({
    opacity: show ? 1 : 0,
    transform: `scale(${show ? 1 : 0})`,
    pointerEvents: show ? 'auto' : 'none',
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollYToRender, handleScroll]);

  return {
    show,
    spring,
  }
}

export default useScaleAnimationOnScroll;