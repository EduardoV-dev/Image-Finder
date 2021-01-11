import {
  TOGGLE_DROPDOWN,
  SAVE_IMAGEID,
  SAVE_DETAILS
} from '../../hooks/reducer/types/ImageDetails';
import { resolvePromise } from '../../services/api/Images'; 
import { pipe } from '../Searches';

export const toggleDropdown = dispatch => () =>
  dispatch({ type: TOGGLE_DROPDOWN });

export const catchImageId = dispatch => imageId =>
  dispatch({ type: SAVE_IMAGEID, payload: imageId });

export const saveImageDetails = dispatch => async imageDetails => {
  const details = await resolvePromise(imageDetails);
  dispatch({ type: SAVE_DETAILS, payload: details });
}

export const formatNumber = number =>
  number.toLocaleString('en');

export const extractImages = imageDetails => ({
  small: {
    URL: imageDetails.previewURL,
    width: imageDetails.previewWidth,
    height: imageDetails.previewHeight
  },
  medium: {
    URL: imageDetails.webformatURL,
    width: imageDetails.webformatWidth,
    height: imageDetails.webformatHeight
  },
  original: {
    URL: imageDetails.largeImageURL,
    width: imageDetails.imageWidth,
    height: imageDetails.imageHeight
  }
});

export const formatResolution = (width, height) =>
  `${width}x${height}`;

const getImageURL = ({ selectedImageSize, imagesSizes }) => {
  switch (selectedImageSize) {
    case 'small':
      return imagesSizes.small.URL;
    case 'medium':
      return imagesSizes.medium.URL;
    case 'original':
      return imagesSizes.original.URL;
    default:
      return imagesSizes.original.URL;
  }
}

const openBlankURL = URL =>
  window.open(URL, '_blank');

export const displayImageInNewTab = pipe(
  getImageURL,
  openBlankURL
);