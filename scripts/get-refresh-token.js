/**
 * Helper script to get Google OAuth2 Refresh Token
 * 
 * This script helps you obtain a refresh token for accessing Google Drive
 * with your company email account.
 * 
 * Usage:
 * 1. Update CLIENT_ID and CLIENT_SECRET below
 * 2. Run: node scripts/get-refresh-token.js
 * 3. Follow the instructions
 */

const { google } = require('googleapis');
const readline = require('readline');

// TODO: Replace these with your OAuth credentials from Google Cloud Console
const CLIENT_ID = 'YOUR_CLIENT_ID.apps.googleusercontent.com';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = 'http://localhost:3000';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Generate the auth URL
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/drive.readonly'],
  prompt: 'consent', // Force to get refresh token
});

console.log('\n=== Google Drive OAuth2 Setup ===\n');
console.log('1. Visit this URL in your browser:');
console.log('\n' + authUrl + '\n');
console.log('2. Sign in with your COMPANY EMAIL (the one that clients share files with)');
console.log('3. Grant permissions');
console.log('4. Copy the authorization code from the URL (after ?code=...)');
console.log('\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the authorization code: ', async (code) => {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    
    console.log('\n✅ Success! Your credentials:\n');
    console.log('GOOGLE_CLIENT_ID=' + CLIENT_ID);
    console.log('GOOGLE_CLIENT_SECRET=' + CLIENT_SECRET);
    console.log('GOOGLE_REFRESH_TOKEN=' + tokens.refresh_token);
    console.log('\nAdd these to your .env.local file');
    
  } catch (error) {
    console.error('\n❌ Error getting tokens:', error.message);
    console.log('\nTroubleshooting:');
    console.log('- Make sure CLIENT_ID and CLIENT_SECRET are correct');
    console.log('- Check that the redirect URI matches in Google Cloud Console');
    console.log('- Try generating a new authorization code');
  }
  
  rl.close();
});
