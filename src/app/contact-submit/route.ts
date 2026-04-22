import { handleContactSubmission } from "@/lib/contactSubmission";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  return handleContactSubmission(request);
}
