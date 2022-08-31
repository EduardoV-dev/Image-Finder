import { handlers as galleryHandlers } from './image-gallery';
import { handlers as singleImageHandlers } from './single-image';

export const handlers = [...galleryHandlers, ...singleImageHandlers];
