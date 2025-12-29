/**
 * Utility functions for handling Google Drive URLs and file IDs
 */

export function extractDriveFileId(input: string): string {
  if (!input) return '';
  
  const str = input.trim();

  // Mendukung berbagai format URL Drive
  if (str.includes('drive.google.com')) {
    // Pola: ?id=FILE_ID atau &id=FILE_ID
    const idMatch = str.match(/[?&]id=([^&/]+)/);
    if (idMatch) return idMatch[1];
    
    // Pola: /file/d/FILE_ID/ atau /d/FILE_ID/
    const fileMatch = str.match(/\/d\/([^&/]+)/);
    if (fileMatch) return fileMatch[1];
  }

  // Jika input sudah berupa ID mentah
  return str;
}

/**
 * Mengarahkan URL gambar ke API proxy internal agar menggunakan OAuth 2.0
 */
export function getDriveImageUrl(input: string): string {
  const fileId = extractDriveFileId(input);
  if (!fileId) return ''; 
  
  return `/api/drive-image?fileId=${fileId}`;
}

export function parseDriveImages(imageString: string): string[] {
  if (!imageString) return [];
  
  return imageString
    .split(',')
    .map(url => url.trim())
    .filter(url => url.length > 0)
    .map(url => getDriveImageUrl(url));
}