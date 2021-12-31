import { useState, useEffect, useCallback } from "react";

const useShowOnScroll = (scrollYToRender) => {
  const [show, setShow] = useState(false);

  const handleScroll = useCallback(() =>
    setShow(window.scrollY >= scrollYToRender)
    , [scrollYToRender]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollYToRender, handleScroll]);

  return {
    show,
  }
}

export default useShowOnScroll;