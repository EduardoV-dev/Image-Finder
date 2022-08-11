import { Axios } from './config';

const PHOTOS_ENDPOINT = 'photos';
const SEARCH_PHOTOS_ENDPOINT = 'search/photos';
const IMAGES_PER_PAGE = 30;

/**
 * Get latest photos from Unsplash API
 *
 * @param {number} page - Number of page to fetch
 * @returns {{data: object[], totalPages: number}} - Images formatted data
 */
export const fetchLatestImages = (page) =>
    new Promise(async (resolve, reject) => {
        try {
            const { data: images } = await Axios.get(`/${PHOTOS_ENDPOINT}`, {
                params: {
                    page,
                    per_page: IMAGES_PER_PAGE,
                },
            });

            resolve({
                data: formatImagesData(images),
                totalPages: Infinity,
            });
        } catch (err) {
            reject(err);
        }
    });

/**
 *
 * @param {string} term - Term to search for
 * @param {number} page - Number of page to fetch
 * @returns {{data: object[], totalPages: number}} - Images formatted data
 */
export const fetchImagesByTerm = (term, page) =>
    new Promise(async (resolve, reject) => {
        try {
            const { data: images } = await Axios.get(
                `/${SEARCH_PHOTOS_ENDPOINT}`,
                {
                    params: {
                        query: term,
                        per_page: IMAGES_PER_PAGE,
                        page,
                    },
                },
            );

            resolve({
                data: formatImagesData(images.results),
                totalPages: images.total_pages,
            });
        } catch (err) {
            reject(err);
        }
    });

/**
 * Fetches an image details by passing the image id
 *
 * @param {string} id - Image id to fetch its details
 * @returns {object} - Formatted image details without unnecesary data
 */
export const fetchImageById = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const { data: image } = await Axios.get(
                `/${PHOTOS_ENDPOINT}/${id}`,
            );

            resolve({
                alt_description: image.alt_description || '',
                description: image.description || '',
                downloads: image.downloads,
                likes: image.likes,
                views: image.views,
                tags: image.tags_preview.map(
                    (tag) =>
                        tag.title.charAt(0).toUpperCase() + tag.title.slice(1),
                ),
                imagesURL: image.urls,
                username: image.user.username,
            });
        } catch (err) {
            reject(err);
        }
    });

/* ------ UTILS ------ */

/**
 * Formats gallery images data (Home page).
 *
 * @param {[]} images - images dataset fetched from API
 * @returns {[]} - A formatted version of the array but removing unnecesary data.
 */
function formatImagesData(images) {
    return images.map((image) => ({
        id: image.id,
        alt: image.alt_description || '',
        url: image.urls.small,
        likes: image.likes,
        user: {
            name: image.user.name || '',
            photo: image.user.profile_image.small,
        },
    }));
}
