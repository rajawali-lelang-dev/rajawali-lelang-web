/**
 * Utility functions for handling Google Drive URLs and file IDs
 */

/**
 * Ekstrak file ID dari berbagai format URL Google Drive
 * Mendukung: URL panjang, URL ringkas, atau ID mentah
 */
export function extractDriveFileId(input: string): string {
  if (!input) return '';
  
  const str = input.trim();

  // Jika input adalah URL panjang
  if (str.includes('drive.google.com')) {
    // Pola 1: ?id=FILE_ID atau &id=FILE_ID
    const idMatch = str.match(/[?&]id=([^&]+)/);
    if (idMatch) return idMatch[1];
    
    // Pola 2: /file/d/FILE_ID/ atau /d/FILE_ID/
    const fileMatch = str.match(/\/d\/([^/]+)/);
    if (fileMatch) return fileMatch[1];
  }

  // Jika bukan URL, asumsikan input adalah ID file langsung
  return str;
}

/**
 * Konversi URL Drive ke API proxy internal
 */
export function getDriveImageUrl(input: string): string {
  const fileId = extractDriveFileId(input);
  if (!fileId) return input; 
  
  // Mengarahkan ke endpoint API lokal untuk menghindari CORS/Access Denied
  return `/api/drive-image?fileId=${fileId}`;
}

/**
 * Mengonversi array URL
 */
export function convertDriveUrls(urls: string[]): string[] {
  return urls.map(url => getDriveImageUrl(url));
}

/**
 * Parsing string CSV menjadi array URL proxy
 */
export function parseDriveImages(imageString: string): string[] {
  if (!imageString) return [];
  
  const urls = imageString
    .split(',')
    .map(url => url.trim())
    .filter(url => url.length > 0);
  
  return convertDriveUrls(urls);
}