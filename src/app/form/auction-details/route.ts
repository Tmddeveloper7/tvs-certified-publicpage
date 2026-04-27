import { NextResponse } from "next/server";

const DEFAULT_TOKEN =
  "41da6c055ad936209311a4ce868aa5f7848a8bf24131bee92315c96636b7078671649e82eabf5832a26ed9954922c725c341e3bbd15151a06785ecf0a3b72641a979088fd8f3e45174ab2a6842df34ddbaae29ba25ba44a4600173c94a54233f232c2bae6ad25082a089576ae680aa1825302c27baa91eb31359c3d27ed563f3ed93066040c53e03018f726d2b5f5ee2371b367381d01cea58afae85d5eef15fc288f7f91f6e5b12496e3c79e4ac3ef8";

export async function GET() {
  const token = process.env.AUCTION_API_TOKEN ?? DEFAULT_TOKEN;

  try {
    const response = await fetch("https://tvscertified.in:8036/GetAuctionDetails", {
      headers: {
        Authorization: token,
      },
      // live list should never be cached
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { data: [], error: `Auction API returned ${response.status}` },
        { status: response.status },
      );
    }

    const payload = await response.json();
    return NextResponse.json(payload, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { data: [], error: "Unable to reach auction service", detail: String(error) },
      { status: 500 },
    );
  }
}
