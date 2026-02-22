"use client";

import dynamic from "next/dynamic";

const VenueMap = dynamic(() => import("./VenueMap"), { ssr: false });

export default function VenueMapClient() {
  return <VenueMap />;
}
