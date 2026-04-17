"use client";

import { useEffect } from "react";

import { getAuctionDetails, getNextAuctionDetails } from "@/utils/api";
import { mockAuctionDetails, mockNextAuction } from "@/data/auctionMock";

const AUTH_TOKEN = process.env.NEXT_PUBLIC_TVS_AUTH_TOKEN;

export function AuctionDataFetcher() {
  useEffect(() => {
    if (!AUTH_TOKEN) {
      console.warn(
        "TVS auth token missing. Set NEXT_PUBLIC_TVS_AUTH_TOKEN to enable auction API calls. Falling back to mock data."
      );
      console.log("Mock auction details:", mockAuctionDetails);
      console.log("Mock next auction:", mockNextAuction);
      return;
    }

    (async () => {
      try {
        const [auctionDetails, nextAuction] = await Promise.all([
          getAuctionDetails(AUTH_TOKEN),
          getNextAuctionDetails(AUTH_TOKEN),
        ]);

        console.log("Auction details response:", auctionDetails);
        console.log("Next auction response:", nextAuction);
      } catch (error) {
        console.error("Error fetching auction data, showing mock data:", error);
        console.log("Mock auction details:", mockAuctionDetails);
        console.log("Mock next auction:", mockNextAuction);
      }
    })();
  }, []);

  return null;
}
