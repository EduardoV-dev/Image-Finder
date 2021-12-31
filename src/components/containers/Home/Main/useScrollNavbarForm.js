import { useSpring } from "react-spring";
import { useShowOnScroll } from '@hooks';
import { SCROLLY_TO_RENDER_NAVBAR } from '@consts/ui';

const useScrollNavbarForm = () => {
  const { show } = useShowOnScroll(SCROLLY_TO_RENDER_NAVBAR);
  const spring = useSpring({
    opacity: show ? 1 : 0,
    transform: `scale(${show ? 1 : 0})`,
  });

  return {
    show,
    spring,
  }
}

export default useScrollNavbarForm;