import { useSpring } from 'react-spring';

import { useShowOnScroll } from '@hooks';

const useScaleAnimationOnScroll = (scrollYToRender) => {
  const { show } = useShowOnScroll(scrollYToRender);
  const spring = useSpring({
    opacity: show ? 1 : 0,
    transform: `scale(${show ? 1 : 0})`,
    pointerEvents: show ? 'auto' : 'none',
  });

  return {
    show,
    spring,
  }
}

export default useScaleAnimationOnScroll;