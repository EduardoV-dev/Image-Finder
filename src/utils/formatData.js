export const formatImageData = image => ({
  alt_description: image.alt_description || '',
  description: image.description || '',
  downloads: image.downloads,
  likes: image.likes,
  views: image.views,
  tags: getTags(image.tags_preview),
  imagesURL: image.urls,
  username: image.user.username,
});

const getTags = tags =>
  tags.map(tag => tag.title);

export const formatUserData = user => ({
  name: user.name,
  profile_image: user.profile_image.medium,
});