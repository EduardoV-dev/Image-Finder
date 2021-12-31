import { animated } from 'react-spring';

import arrowPath from '@images/Up_arrow.png';
import { SCROLLY_TO_RENDER_SCROLL_TO_TOP } from '@consts/ui';
import { useScaleAnimationOnScroll } from '@hooks';
import styles from './scrollTop.module.scss';

const style = {
  img: {
    width: '64px',
    height: '64px',
    objectFit: 'cover',
  }
}

const ScrollToTop = () => {
  const { spring } = useScaleAnimationOnScroll(SCROLLY_TO_RENDER_SCROLL_TO_TOP);

  const scrollTop = () => window.scrollTo({ top: 0 });

  return (
    <>
      <animated.button
        type="button"
        className={`position-fixed btn ${styles.btn}`}
        style={spring}
        onClick={scrollTop}
      >
        <img
          src={arrowPath}
          alt=""
          className="d-block img-fluid"
          style={style.img}
        />
      </animated.button>
    </>
  );
}

export default ScrollToTop;