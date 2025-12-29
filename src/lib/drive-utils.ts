export function extractDriveFileId(input: string): string {
  if (!input) return '';
  const str = input.trim();

  if (str.includes('drive.google.com')) {
    // Mengambil ID dari pattern /d/ID atau ?id=ID
    const idMatch = str.match(/[?&]id=([^&/]+)/) || str.match(/\/d\/([^&/]+)/);
    if (idMatch) return idMatch[1].replace(/['"\s]/g, '');
  }
  return str.replace(/['"\s]/g, '');
}

export function getDriveImageUrl(input: string): string {
  const fileId = extractDriveFileId(input);
  if (!fileId) return ''; 
  // Pastikan mengarah ke API route yang menggunakan OAuth2 Refresh Token
  return `/api/drive-image?fileId=${fileId}`;
}