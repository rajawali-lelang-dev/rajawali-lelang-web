export function extractDriveFileId(input: string): string {
  if (!input) return '';
  const str = input.trim();

  if (str.includes('drive.google.com')) {
    // Mencari ID setelah 'id=' atau di dalam path '/d/'
    const idMatch = str.match(/[?&]id=([^&/]+)/) || str.match(/\/d\/([^&/]+)/);
    if (idMatch) return idMatch[1].replace(/['"\s]/g, '');
  }
  return str.replace(/['"\s]/g, '');
}

export function getDriveImageUrl(input: string): string {
  const fileId = extractDriveFileId(input);
  if (!fileId) return ''; 
  // Mengarahkan ke API route yang Anda buat
  return `/api/drive-image?fileId=${fileId}`;
}