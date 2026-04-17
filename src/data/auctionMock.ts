export const mockAuctionDetails = {
  meta: {
    message: "Ok",
    responseId: "",
    type: "success",
    code: 200,
    rows: 1,
  },
  data: [
    {
      MakeModel: "SKODA RAPID AMBITION 81KW TDI CR BS4",
      year_of_mfg: 2018,
      speedometer: "1,16,111",
      image_url: `{
        "frontview":["https://storage.googleapis.com/tvscrt-prod-auctionimage/1702387.jpeg"],
        "rearview":["https://storage.googleapis.com/tvscrt-prod-auctionimage/1702389.jpeg"],
        "leftsideview":["https://storage.googleapis.com/tvscrt-prod-auctionimage/1702390.jpeg"],
        "rightsideview":["https://storage.googleapis.com/tvscrt-prod-auctionimage/1702388.jpeg"],
        "rightrear":[["https://storage.googleapis.com/tvscrt-prod-auctionimage/272040.jpg"]],
        "leftfront":[["https://storage.googleapis.com/tvscrt-prod-auctionimage/272039.jpg"]],
        "odometer":["https://storage.googleapis.com/tvscrt-prod-auctionimage/1702392.jpeg"],
        "dashboard":["https://storage.googleapis.com/tvscrt-prod-auctionimage/1702437.jpeg"],
        "enginecompartment":["https://storage.googleapis.com/tvscrt-prod-auctionimage/1702394.jpeg"],
        "underbodyfront":["https://storage.googleapis.com/tvscrt-prod-auctionimage/1702419.jpeg"]
      }`,
      color_id: "C WHITE",
      fuel_type: "DIESEL",
      transmission: "Manual",
      offered_price: 500000,
    },
  ],
};

export const mockNextAuction = {
  meta: {
    message: "Ok",
    responseId: "",
    type: "success",
    code: 200,
    rows: 1,
  },
  data: [
    {
      auction_time: "2026-04-04T14:00:00.000Z",
    },
  ],
};
