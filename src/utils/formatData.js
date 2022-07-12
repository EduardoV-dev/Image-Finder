/**
 * Formats gallery images data (Home page).
 *
 * @param {IImage[]} images - images dataset fetched from API
 * @returns {IImage[]} - A formatted version of the array but removing unnecesary data.
 */
export const formatImagesData = (images) =>
    images.length
        ? images.map((image) => ({
              id: image.id,
              alt: image.alt_description || '',
              url: image.urls.small,
              likes: image.likes,
              user: {
                  name: image.user.name || '',
                  photo: image.user.profile_image.small,
              },
          }))
        : [];

export const formatImageData = (image) => ({
    alt_description: image.alt_description || '',
    description: image.description || '',
    downloads: image.downloads,
    likes: image.likes,
    views: image.views,
    tags: getTags(image.tags_preview),
    imagesURL: image.urls,
    username: image.user.username,
});

const getTags = (tags) => tags.map((tag) => tag.title);

export const formatUserData = (user) => ({
    name: user.name,
    profile_image: user.profile_image.medium,
});
