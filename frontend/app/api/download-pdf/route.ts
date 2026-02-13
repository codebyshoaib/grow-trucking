import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: "dj9r2zjpm",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Map PDF types to their Cloudinary filenames
const PDF_MAP: Record<string, string> = {
  business_audit_report: "Audit_Report_waqn3l",
  growth_checklist: "Growth_Checklist_dummky",
  rate_maximization_checklist: "Rate_Maximization_Checklist_b697cu",
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "business_audit_report";

  // Get the PDF filename from the map, default to business_audit_report if type is invalid
  const pdfFilename = PDF_MAP[type] || PDF_MAP.business_audit_report;

  const signedUrl = cloudinary.url(pdfFilename, {
    resource_type: "image",
    sign_url: true,
    flags: "attachment",
    type: "upload",
  });

  return NextResponse.redirect(signedUrl);
}
