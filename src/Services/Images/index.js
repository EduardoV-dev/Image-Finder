import { URLBase, APIKey } from '../../Services/settings';
import { handleFetch } from '../../utils/Searches';

const APIBase = handleFetch(URLBase);

export const fetchImages = async params => (await APIBase({
  key: APIKey,
  q: params.term,
  page: params.page,
  per_page: params.imagesPerPage
}));