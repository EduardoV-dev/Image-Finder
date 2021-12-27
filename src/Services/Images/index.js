import { URLBase, APIKey } from '../settings';
import { handleFetch } from '../../utils/Searches';

const APIBase = handleFetch(URLBase);

export const fetchImages = async params => (await APIBase({
  key: APIKey,
  q: params.term,
  page: params.page,
  per_page: params.imagesPerPage
}));

export const fetchImageDetailsById = async imageId => {
  const details = await APIBase({
    key: APIKey,
    id: imageId
  });
  return details.data;
}

export const resolvePromise = async promise => 
  await promise;