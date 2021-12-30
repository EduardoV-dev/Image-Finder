export const formatListImagesData = images =>
  images.map(image => ({
    id: image.id,
    alt: image.alt_description || '',
    url: image.urls.small,
  }));