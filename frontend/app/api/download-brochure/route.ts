import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: "dj9r2zjpm",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  const signedUrl = cloudinary.url("About_Grow_Trucking_ucb5zj.pdf", {
    resource_type: "image",
    sign_url: true,
    flags: "attachment",
    type: "upload",
  });

  return NextResponse.redirect(signedUrl);
}
