import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const fileId = searchParams.get("fileId");

    if (!fileId) {
      return NextResponse.json(
        { error: "File ID is required" },
        { status: 400 }
      );
    }

    // Check if credentials are configured
    if (
      !process.env.GOOGLE_CLIENT_ID ||
      !process.env.GOOGLE_CLIENT_SECRET ||
      !process.env.GOOGLE_REFRESH_TOKEN
    ) {
      return NextResponse.json(
        { error: "Google Drive credentials not configured" },
        { status: 500 }
      );
    }

    // Initialize OAuth2 client with your company's credentials
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      "https://rajawali-lelang-web.vercel.app" // Redirect URI (not used in server-side flow)
    );

    // Set refresh token to automatically get access tokens
    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const drive = google.drive({ version: "v3", auth: oauth2Client });

    // Get file metadata first to check if it exists and get ETag
    const metadata = await drive.files.get({
      fileId: fileId,
      fields: "mimeType, name, md5Checksum, modifiedTime",
    });

    // Generate ETag from md5Checksum or modifiedTime for cache validation
    const etag = metadata.data.md5Checksum || metadata.data.modifiedTime || fileId;
    
    // Check if client has cached version (304 Not Modified)
    const clientETag = request.headers.get('if-none-match');
    if (clientETag === `"${etag}"`) {
      return new NextResponse(null, { 
        status: 304,
        headers: {
          "ETag": `"${etag}"`,
          "Cache-Control": "public, max-age=31536000, immutable",
        }
      });
    }

    // Get file content
    const response = await drive.files.get(
      {
        fileId: fileId,
        alt: "media",
      },
      {
        responseType: "arraybuffer",
      }
    );

    // Convert to Buffer for proper handling
    const imageBuffer = Buffer.from(response.data as ArrayBuffer);

    // Return image with proper caching headers
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": metadata.data.mimeType || "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Disposition": `inline; filename="${metadata.data.name}"`,
        "Content-Length": imageBuffer.length.toString(),
        "ETag": `"${etag}"`,
      },
    });
  } catch (error: unknown) {
    console.error("Error fetching from Google Drive:", error);

    if (
      error instanceof Error &&
      "code" in error &&
      typeof (error as { code: number }).code === "number"
    ) {
      if (error.code === 404) {
        return NextResponse.json({ error: "File not found" }, { status: 404 });
      }

      if (error.code === 403) {
        return NextResponse.json(
          {
            error:
              "Access denied. Make sure the file is shared with your company email.",
          },
          { status: 403 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to fetch image from Google Drive" },
      { status: 500 }
    );
  }
}
