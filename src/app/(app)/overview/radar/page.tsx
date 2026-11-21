import type { Metadata } from "next"
import { LiveRadar } from "@/components/app/live-radar"

export const metadata: Metadata = {
  title: "Live radar — Scaleon",
  description: "Sends, approvals, and the leads that just moved.",
}

export default function RadarPage() {
  return <LiveRadar />
}
