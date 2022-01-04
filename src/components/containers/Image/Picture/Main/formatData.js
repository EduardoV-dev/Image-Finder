export const formatImageData = image => ({
  alt_description: image.alt_description || '',
  description: image.description || '',
  downloads: image.downloads,
  likes: image.likes,
  views: image.views,
  tags: getTags(image.tags_preview),
  imagesURL: image.urls,
  user: {
    name: image.user.name,
    profile_image: image.user.profile_image.medium,
  },
});

const getTags = tags =>
  tags.map(tag => tag.title);