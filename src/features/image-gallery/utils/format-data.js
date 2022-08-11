/**
 * Formats gallery images data (Home page).
 *
 * @param {[]} images - images dataset fetched from API
 * @returns {[]} - A formatted version of the array but removing unnecesary data.
 */
export const formatImagesData = (images) =>
    images.map((image) => ({
        id: image.id,
        alt: image.alt_description || '',
        url: image.urls.small,
        likes: image.likes,
        user: {
            name: image.user.name || '',
            photo: image.user.profile_image.small,
        },
    }));
