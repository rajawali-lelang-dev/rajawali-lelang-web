/**
 * Sort images so that banner images appear first
 * Banner images typically have 'banner' in the filename or are the first high-quality images
 */
export function sortImagesWithBannerFirst(images: string[]): string[] {
  if (!images || images.length === 0) return [];
  
  // Separate images into banner and non-banner
  const bannerImages = images.filter(img => 
    img.toLowerCase().includes('banner') || 
    img.toLowerCase().includes('cover') ||
    img.toLowerCase().includes('thumbnail')
  );
  
  const regularImages = images.filter(img => 
    !img.toLowerCase().includes('banner') && 
    !img.toLowerCase().includes('cover') &&
    !img.toLowerCase().includes('thumbnail')
  );
  
  // Return banner images first, followed by regular images
  return [...bannerImages, ...regularImages];
}

/**
 * For Google Drive images, prioritize based on file ID patterns
 * Typically the first shared image is the banner/main image
 */
export function sortDriveImages(images: string[]): string[] {
  // Keep the first image as is (usually the banner from CSV)
  // This assumes the CSV data has images in the correct order
  return images;
}
