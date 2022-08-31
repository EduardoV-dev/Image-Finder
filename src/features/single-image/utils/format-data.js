/**
 * Formats the image data by removing unnecessary attributes
 *
 * @param {object} image - Data to format
 * @returns {object} Formatted data
 */
export const formatSingleImage = (image) => ({
    alt_description: image.alt_description || '',
    description: image.description || '',
    downloads: image.downloads,
    likes: image.likes,
    views: image.views,
    tags: image.tags_preview.map(
        (tag) => tag.title.charAt(0).toUpperCase() + tag.title.slice(1),
    ),
    imageURL: image.urls.full,
    username: image.user.username,
});

/**
 * Formats the user data by removing unnecessary attributes
 *
 * @param {object} user - User to format
 * @returns {object} Formatted user
 */
export const formatImageUser = (user) => ({
    name: user.name,
    profile_image: user.profile_image.medium,
});
