import { useState } from 'react';

/**
 * This hook provides a state and function to load images. handleLoad is provided to an image element to set the state to true when the image is loaded.
 *
 * @returns {{isLoaded: boolean, handleLoad: () => void}} - isLoaded for image is loaded or not, handleLoad for handling image load event
 */
const useLoadedImages = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleLoad = () => setIsLoaded(true);

    return {
        isLoaded,
        handleLoad,
    };
};

export default useLoadedImages;
