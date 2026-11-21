import type { Metadata } from "next"
import { OverviewDashboard } from "@/components/app/overview-dashboard"

export const metadata: Metadata = {
  title: "Overview — Scaleon",
  description: "Welcome back. The next step, strategy files, and the leads already in the workspace.",
}

export default function OverviewPage() {
  return <OverviewDashboard />
}
