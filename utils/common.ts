export const getVimeoEmbedUrl = (url: string) => {
  // Extract the video ID from the Vimeo URL
  const videoId = url.split('/').pop();
  return `https://player.vimeo.com/video/${videoId}`;
}; 