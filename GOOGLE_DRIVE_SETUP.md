# Google Drive Image Integration Setup Guide

## Overview
This project fetches images from Google Drive using **OAuth 2.0** authentication with your company email. This allows access to files that clients share directly with your company email address. Images are proxied through `/api/drive-image` to maintain security.

## Setup Instructions

### Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or select existing one for your company)
3. Note the project name for reference

### Step 2: Enable Google Drive API
1. In your project, go to **APIs & Services** > **Library**
2. Search for "Google Drive API"
3. Click **Enable**

### Step 3: Configure OAuth Consent Screen
1. Go to **APIs & Services** > **OAuth consent screen**
2. Choose **External** (if available) or **Internal** (for workspace accounts)
3. Fill in the required fields:
   - App name: `Rajawali Lelang Web`
   - User support email: Your company email
   - Developer contact: Your company email
4. Click **Save and Continue**
5. On Scopes page, click **Add or Remove Scopes**
6. Add: `https://www.googleapis.com/auth/drive.readonly`
7. Click **Update** then **Save and Continue**
8. Add your company email as a test user
9. Click **Save and Continue**

### Step 4: Create OAuth 2.0 Credentials
1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **OAuth client ID**
3. Choose **Web application**
4. Set name: `Rajawali Lelang OAuth Client`
5. Add Authorized redirect URIs:
   - `http://localhost:3000`
   - `https://developers.google.com/oauthplayground`
6. Click **Create**
7. Copy the **Client ID** and **Client Secret** (you'll need these)

### Step 5: Get Refresh Token
**Option A: Using OAuth Playground (Easiest)**
1. Go to [OAuth 2.0 Playground](https://developers.google.com/oauthplayground)
2. Click the ⚙️ icon (top right) to open settings
3. Check **"Use your own OAuth credentials"**
4. Paste your **Client ID** and **Client Secret**
5. Close settings
6. In left panel, scroll to **Drive API v3**
7. Select: `https://www.googleapis.com/auth/drive.readonly`
8. Click **Authorize APIs**
9. Sign in with your company email (the one that has access to shared files)
10. Click **Allow**
11. Click **Exchange authorization code for tokens**
12. Copy the **Refresh token** that appears

**Option B: Using Node.js Script**
Create `scripts/get-refresh-token.js`:
```javascript
const { google } = require('googleapis');
const readline = require('readline');

const oauth2Client = new google.auth.OAuth2(
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'http://localhost:3000'
);

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/drive.readonly'],
});

console.log('Visit this URL:', authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the code from that page: ', async (code) => {
  const { tokens } = await oauth2Client.getToken(code);
  console.log('Refresh Token:', tokens.refresh_token);
  rl.close();
});
```

Run: `node scripts/get-refresh-token.js`

### Step 6: Configure Environment Variables
Add these values to `.env.local`:

```env
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REFRESH_TOKEN=your-refresh-token
```

**Important Notes:**
- Never commit `.env.local` to git (already in .gitignore)
- Keep these credentials secure
- The refresh token allows the app to access files on behalf of your company email

### Step 7: Verify Access
1. Make sure clients share Google Drive files/folders with your company email
2. Files must be shared with at least "Viewer" permission
3. Restart development server:
```bash
npm run dev
```

## How It Works

1. **OAuth 2.0 Flow**: Your company email is authenticated once, refresh token is stored
2. **Image URLs**: All property images use `getDriveImageUrl()` which converts Google Drive URLs to API proxy URLs
3. **API Route**: `/api/drive-image?fileId=xxx` fetches images using OAuth credentials
4. **Caching**: Images are cached with `max-age=31536000` (1 year) for performance
5. **Security**: OAuth credentials are server-side only, never exposed to client
6. **Access**: Can access any file shared with your company email (no folder ownership needed)

## Testing

After setup, visit any property page. Images should load from Google Drive.

To test a specific file:
```
http://localhost:3000/api/drive-image?fileId=YOUR_FILE_ID
```

If images don't load:
1. Check browser console for errors
2. Verify files are shared with your company email
3. Check `.env.local` has correct credentials (Client ID, Client Secret, Refresh Token)
4. Test the refresh token hasn't expired
5. Check API route logs in terminal

## Troubleshooting

### Error: "Access denied"
- **Most Common**: File is not shared with your company email
- Verify clients shared the file/folder with your company email
- Check permission is set to "Viewer" or higher
- Make sure you used your company email when generating the refresh token

### Error: "File not found"
- Verify the file ID is correct in the Drive URL
- Ensure file hasn't been deleted
- Check file is shared (not just "anyone with link")

### Error: "Invalid credentials"
- Check that all three environment variables are set correctly:
  - `GOOGLE_CLIENT_ID`
  - `GOOGLE_CLIENT_SECRET`
  - `GOOGLE_REFRESH_TOKEN`
- Verify no extra spaces or quotes in `.env.local`
- Try regenerating the refresh token

### Error: "Invalid grant" or "Token expired"
- The refresh token may have expired (rare, but possible if not used for 6 months)
- Regenerate a new refresh token using Step 5
- Make sure the OAuth consent screen is published (not in testing mode for external users)

### Images not loading
- Clear browser cache
- Check Network tab for API errors
- Verify Google Drive API is enabled in Cloud Console
- Restart the development server after changing `.env.local`
- Try accessing a file directly to test credentials work

## Production Deployment

When deploying to production (Vercel, etc.):
1. Add environment variables in deployment platform settings
2. Never commit `.env.local` or service account JSON
3. Consider using platform's secret management (Vercel Secrets, etc.)

## File Structure
```
src/
├── app/
│   └── api/
│       └── drive-image/
│           └── route.ts          # API proxy for Drive images
├── lib/
│   ├── drive-utils.ts            # Utility functions for Drive URLs
│   └── properti.ts               # Property data with Drive images
└── .env.local                    # Environment variables (DO NOT COMMIT)
```
