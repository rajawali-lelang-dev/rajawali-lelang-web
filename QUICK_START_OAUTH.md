# Quick Start: Google Drive OAuth Setup

## What Changed?
✅ Switched from Service Account to **OAuth 2.0**  
✅ Now works with files shared directly to your company email  
✅ No need to own the folder - just need view access

## Setup Summary (5 minutes)

### 1. Google Cloud Console
- Create project
- Enable Google Drive API
- Create OAuth 2.0 credentials
- Note: Client ID + Client Secret

### 2. Get Refresh Token (Choose one method)

**Method A - OAuth Playground (Recommended):**
1. Visit: https://developers.google.com/oauthplayground
2. Settings (⚙️) → Use your own OAuth credentials
3. Enter Client ID + Client Secret
4. Select: `https://www.googleapis.com/auth/drive.readonly`
5. Authorize with your **company email**
6. Exchange code for tokens
7. Copy the **Refresh Token**

**Method B - Node Script:**
```bash
node scripts/get-refresh-token.js
```

### 3. Configure .env.local
```env
GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxx
GOOGLE_REFRESH_TOKEN=xxx
```

### 4. Restart Server
```bash
npm run dev
```

## ✅ Done!
Images will now load from Google Drive files shared with your company email.

---

**See GOOGLE_DRIVE_SETUP.md for detailed step-by-step instructions**
