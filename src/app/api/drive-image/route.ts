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
      "http://localhost:3000" // Redirect URI (not used in server-side flow)
    );

    // Set refresh token to automatically get access tokens
    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const drive = google.drive({ version: "v3", auth: oauth2Client });

    // Get file metadata first to check if it exists
    const metadata = await drive.files.get({
      fileId: fileId,
      fields: "mimeType, name",
    });

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

    // Return image with proper headers
    return new NextResponse(response.data as ArrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": metadata.data.mimeType || "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Disposition": `inline; filename="${metadata.data.name}"`,
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
