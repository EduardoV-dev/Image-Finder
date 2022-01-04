export const formatListImagesData = images =>
  images.map(image => ({
    id: image.id,
    alt: image.alt_description || '',
    url: image.urls.small,
    likes: image.likes,
    user: {
      name: image.user.name || '',
      photo: image.user.profile_image.small,
    },
  }));