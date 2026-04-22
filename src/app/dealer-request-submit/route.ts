import { handleDealerRequestSubmission } from "@/lib/dealerRequestSubmission";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  return handleDealerRequestSubmission(request);
}
