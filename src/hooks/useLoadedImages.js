import { useState } from "react"

const useLoadedImages = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => setIsLoaded(true);

  return {
    isLoaded,
    handleLoad,
  }
}

export default useLoadedImages;