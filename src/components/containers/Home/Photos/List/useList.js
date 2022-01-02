import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  loading,
  loadImages,
  loadError,
  loadMoreImages,
} from '@redux/images';
import {
  fetchImagesByTerm,
  fetchLatestImages,
} from '@services/images';
import { isTermEmpty } from '@utils/check';
import { formatListImagesData } from '@utils/formatData';

const useList = () => {
  const dispatch = useDispatch();
  const {
    term,
    page,
    images,
    isLoading,
  } = useSelector(state => state.images);

  const paginate = async () =>
    dispatch(loadMoreImages());


  useEffect(() => {
    const fetchImages = async () => {
      dispatch(loading());
      try {
        const imagesInfo = await (
          isTermEmpty(term)
            ? fetchLatestImages(page)
            : fetchImagesByTerm(term, page)
        );
        dispatch(loadImages(imagesInfo));
      } catch (e) {
        dispatch(loadError(e));
      }
    }

    fetchImages();
  }, [term, page, dispatch]);

  return {
    images: formatListImagesData(images),
    isLoading,
    paginate,
  }
}

export default useList;