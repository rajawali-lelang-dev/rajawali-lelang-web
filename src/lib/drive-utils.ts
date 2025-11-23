/**
 * Utility functions for handling Google Drive URLs and file IDs
 */

/**
 * Extract file ID from various Google Drive URL formats
 * Supports:
 * - https://drive.google.com/open?id=FILE_ID
 * - https://drive.google.com/file/d/FILE_ID/view
 * - https://drive.google.com/uc?id=FILE_ID
 */
export function extractDriveFileId(url: string): string {
  if (!url) return '';
  
  // Match: ?id=FILE_ID or &id=FILE_ID
  const idMatch = url.match(/[?&]id=([^&]+)/);
  if (idMatch) return idMatch[1];
  
  // Match: /file/d/FILE_ID/ or /d/FILE_ID/
  const fileMatch = url.match(/\/d\/([^/]+)/);
  if (fileMatch) return fileMatch[1];
  
  return '';
}

/**
 * Convert Google Drive URL to API proxy URL
 * @param driveUrl - Original Google Drive URL
 * @returns Proxied URL through /api/drive-image
 */
export function getDriveImageUrl(driveUrl: string): string {
  const fileId = extractDriveFileId(driveUrl);
  if (!fileId) return driveUrl; // Return original if can't extract ID
  
  return `/api/drive-image?fileId=${fileId}`;
}

/**
 * Convert array of Google Drive URLs to proxied URLs
 */
export function convertDriveUrls(urls: string[]): string[] {
  return urls.map(url => getDriveImageUrl(url));
}

/**
 * Parse CSV image column (comma-separated Drive URLs) to array of proxied URLs
 */
export function parseDriveImages(imageString: string): string[] {
  if (!imageString) return [];
  
  // Split by comma, trim whitespace, filter empty strings
  const urls = imageString
    .split(',')
    .map(url => url.trim())
    .filter(url => url.length > 0);
  
  return convertDriveUrls(urls);
}
