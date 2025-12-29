/**
 * Utility functions for handling Google Drive URLs and file IDs
 */

/**
 * Extract file ID from various Google Drive URL formats or return the ID if already extracted
 */
export function extractDriveFileId(input: string): string {
  if (!input) return '';
  
  // Jika input adalah URL panjang
  if (input.includes('drive.google.com')) {
    // Match: ?id=FILE_ID or &id=FILE_ID
    const idMatch = input.match(/[?&]id=([^&]+)/);
    if (idMatch) return idMatch[1];
    
    // Match: /file/d/FILE_ID/ or /d/FILE_ID/
    const fileMatch = input.match(/\/d\/([^/]+)/);
    if (fileMatch) return fileMatch[1];
  }

  // Jika input bukan URL, asumsikan itu adalah ID file langsung
  // (Menghapus spasi jika ada)
  return input.trim();
}

/**
 * Convert Google Drive URL or ID to API proxy URL
 */
export function getDriveImageUrl(input: string): string {
  const fileId = extractDriveFileId(input);
  if (!fileId) return input; 
  
  return `/api/drive-image?fileId=${fileId}`;
}

/**
 * Convert array of Google Drive URLs to proxied URLs
 */
export function convertDriveUrls(urls: string[]): string[] {
  return urls.map(url => getDriveImageUrl(url));
}

/**
 * Parse CSV image column
 */
export function parseDriveImages(imageString: string): string[] {
  if (!imageString) return [];
  const urls = imageString
    .split(',')
    .map(url => url.trim())
    .filter(url => url.length > 0);
  return convertDriveUrls(urls);
}