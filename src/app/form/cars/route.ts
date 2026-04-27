import { NextResponse } from "next/server";

const cars = [
  {
    id: "tvs-001",
    model: "TVS Jupiter ZX",
    year: 2023,
    mileage: "8,500 km",
    certified: true,
  },
  {
    id: "tvs-002",
    model: "TVS Ntorq Race Edition",
    year: 2022,
    mileage: "12,200 km",
    certified: true,
  },
  {
    id: "tvs-003",
    model: "TVS Apache RTR 160 4V",
    year: 2021,
    mileage: "19,100 km",
    certified: true,
  },
];

export function GET() {
  return NextResponse.json({
    data: cars,
    updatedAt: new Date().toISOString(),
  });
}
