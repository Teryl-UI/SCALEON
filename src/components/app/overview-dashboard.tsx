import Image from "next/image"
import Link from "next/link"
import { Check, ChevronRight, FileText, Link2, Share2 } from "lucide-react"

const files = [
  {
    title: "Growth strategy",
    body: "Nooraya GTM strategy — GCC + UK.pdf",
    action: "View",
    icon: FileText,
  },
  {
    title: "Knowledge map",
    body: "Optional — add a map, notes, or graph dump.",
    action: "Add +",
    icon: Share2,
  },
  {
    title: "One-pager",
    body: "Nooraya one-pager.pdf",
    action: "View",
    icon: FileText,
  },
]

const workflow = [
  {
    title: "Ground your workspace",
    body: "ICP + positioning published",
    state: "done" as const,
    href: "/setup/settings",
  },
  {
    title: "Connect your tools",
    body: "Clay + CRM connections",
    state: "current" as const,
    href: "/setup/integrations",
  },
  {
    title: "Bring in real leads",
    body: "20 leads imported",
    state: "done" as const,
    href: "/prospects/lead-list",
  },
  {
    title: "Enrich your first five",
    body: "5 leads enriched",
    state: "done" as const,
    href: "/prospects/input",
  },
]

const leads = [
  { name: "Khalid Al-Rumaihi", status: "Ready", role: "Doha Meridian Capital · Director, Project Finance", tone: "ready" },
  { name: "Hessa Al-Mansoori", status: "Enriched", role: "Gulf Crescent Bank · Head of Infrastructure Finance", tone: "enriched" },
  { name: "James Whitfield", status: "Ready", role: "Thameside Re · Head of Property & Technical Underwriting", tone: "ready" },
  { name: "Priya Raman", status: "Enriched", role: "Harbourline Specialty · Senior Broker, Construction & Energy", tone: "enriched" },
  { name: "Khalid Al-Rumaihi", status: "Ready", role: "Doha Meridian Capital · Director, Project Finance", tone: "ready" },
] as const

const activity = [
  {
    title: "Sent 4 Infrastructure Risk emails through Resend",
    time: "Recorded credits from real runs",
  },
  {
    title: "Approved hyper-tier email for Oliver Grant (Aldgate)",
    time: "11/20/2026, 8:11:49 AM",
  },
  {
    title: "Drafted 5 hyper-tier messages for Risk Intelligence — Hyper tier",
    time: "11/20/2026, 7:41:49 AM",
  },
]

export function OverviewDashboard() {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-7">
      <header>
        <h1 className="font-heading text-[26px] leading-8 font-semibold tracking-tight">Welcome back, Demo</h1>
        <p className="mt-1 text-xs leading-4 text-[#667386]">Friday, November 20, 2026</p>
      </header>

      <section className="mt-5 rounded-xl border border-[#e6e8ee] bg-white px-5 py-5 sm:px-6">
        <p className="text-[11px] leading-4 font-semibold tracking-wide text-[#e57243] uppercase">
          BD &amp; Partnerships pilot
        </p>
        <h2 className="mt-3 max-w-4xl font-heading text-[26px] leading-[1.15] font-semibold tracking-tight uppercase sm:text-[30px]">
          Build a grounded pipeline, one clear step at a time.
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[#667386]">
          Strategy gives Scaleon context. Your real lead list gives it targets. Clay enriches only the leads you choose.
        </p>
      </section>

      <section className="mt-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-sm leading-5 font-semibold">Your next step</h2>
            <p className="mt-0.5 text-xs leading-4 text-[#667386]">
              Worked out from your setup checks and your latest Launch.
            </p>
          </div>
          <span className="shrink-0 text-xs font-medium text-[#1c7453]">Strategy ready</span>
        </div>

        <div className="mt-3 rounded-xl border border-[#e6e8ee] bg-white p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3">
              <Image src="/overview/icon-bolt.svg" alt="" width={12.1265} height={16.6681} unoptimized className="mt-1 shrink-0" />
              <div>
                <p className="text-sm leading-5 font-semibold">Pick Broad variants for Launch Nooraya Q4</p>
                <p className="mt-0.5 text-xs leading-4 text-[#667386]">
                  2 Broad campaigns have variants ready. Nothing sends until you launch.
                </p>
              </div>
            </div>
            <Link
              href="/campaigns/drafts"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#0754ea] px-3.5 py-2 text-sm leading-5 font-semibold text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)]"
            >
              Pick Broad variants
            </Link>
          </div>
          <div className="mt-4 flex items-center justify-between gap-3 text-xs leading-4">
            <p className="inline-flex items-center gap-2 text-[#667386]">
              <Image src="/overview/icon-info.svg" alt="" width={18} height={18} unoptimized />
              7 of 8 ready. Broad and Hyper can launch.
            </p>
            <Link href="/overview/radar" className="font-medium text-[#2c7eee]">
              Details
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-sm leading-5 font-semibold">Your strategy files</h2>
            <p className="mt-0.5 text-xs leading-4 text-[#667386]">
              Growth strategy and knowledge map uploaded during setup stay here.
            </p>
          </div>
          <span className="shrink-0 text-xs font-medium text-[#1c7453]">2 of 3 saved</span>
        </div>
        <div className="mt-3 rounded-xl border border-[#e6e8ee] bg-white p-3 sm:p-4">
          <ul className="space-y-2">
            {files.map((file) => (
              <li key={file.title} className="flex items-center justify-between gap-4 rounded-lg bg-[#f7f8fa] px-3 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-md bg-white text-[#2c7eee]">
                    <file.icon className="size-4" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm leading-5 font-semibold">{file.title}</p>
                    <p className="truncate text-xs leading-4 text-[#667386]">{file.body}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="shrink-0 rounded-full border border-[#e1e2e7] bg-white px-3 py-1 text-xs font-medium"
                >
                  {file.action}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-sm leading-5 font-semibold">Your BD workflow</h2>
        <p className="mt-0.5 text-xs leading-4 text-[#667386]">Each step opens the exact screen where the work happens.</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {workflow.map((step, index) => (
            <Link key={step.title} href={step.href} className="flex min-h-[148px] flex-col rounded-xl border border-[#e6e8ee] bg-white p-4">
              <div className="flex items-start justify-between">
                <span
                  className={`grid size-6 place-items-center rounded-full text-[11px] font-semibold ${
                    step.state === "done" ? "bg-[#e7f8f0] text-[#1c7453]" : "bg-[#f4f6f8] text-[#98a2b3]"
                  }`}
                >
                  {step.state === "done" ? <Check className="size-3.5" strokeWidth={2.5} /> : index + 1}
                </span>
                <ChevronRight className="size-4 text-[#98a2b3]" />
              </div>
              <div className="mt-auto pt-6">
                <p className="text-sm leading-5 font-semibold">{step.title}</p>
                <p className="mt-0.5 text-xs leading-4 text-[#667386]">{step.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
        <article className="rounded-xl border border-[#e6e8ee] bg-white p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-sm leading-5 font-semibold">Your BD workflow</h2>
              <p className="mt-0.5 text-xs leading-4 text-[#667386]">
                Each step opens the exact screen where the work happens.
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-[#f4f6f8] px-2.5 py-1 text-[11px] font-medium text-[#667386]">
              20 imported
            </span>
          </div>
          <ul className="mt-3">
            {leads.map((lead, index) => (
              <li key={`${lead.name}-${index}`} className="flex items-center gap-3 border-b border-[#eef0f3] py-3 last:border-0">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#eef2f6] text-[11px] font-semibold text-[#667386]">
                  {initials(lead.name)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{lead.name}</p>
                  <p className="truncate text-xs leading-4 text-[#667386]">{lead.role}</p>
                </div>
                {lead.tone === "ready" ? (
                  <span className="shrink-0 rounded-full bg-[#e7f8f0] px-2 py-0.5 text-[11px] font-medium text-[#1c7453]">
                    Ready
                  </span>
                ) : (
                  <span className="shrink-0 text-xs font-medium text-[#2c7eee]">Enriched</span>
                )}
              </li>
            ))}
          </ul>
          <Link href="/prospects/lead-list" className="mt-2 inline-flex text-sm font-medium text-[#2c7eee]">
            Open lead list
          </Link>
        </article>

        <div className="flex flex-col gap-4">
          <article className="rounded-xl border border-[#e6e8ee] bg-white p-4 sm:p-5">
            <h2 className="text-sm leading-5 font-semibold">Workspace activity</h2>
            <ul className="mt-2">
              {activity.map((item) => (
                <li key={item.title} className="border-b border-[#eef0f3] py-3 last:border-0">
                  <p className="text-sm leading-5 font-medium">{item.title}</p>
                  <p className="mt-1 text-xs leading-4 text-[#667386]">{item.time}</p>
                </li>
              ))}
            </ul>
            <Link href="/reporting/activity-log" className="mt-2 inline-flex text-sm font-medium text-[#2c7eee]">
              Open activity log
            </Link>
          </article>

          <article className="flex items-center gap-3 rounded-xl border border-[#e6e8ee] bg-white px-4 py-3">
            <span className="grid size-9 place-items-center rounded-lg bg-[#f4f6f8] text-[#2c7eee]">
              <FileText className="size-4" />
            </span>
            <div>
              <p className="text-lg leading-6 font-semibold">18664</p>
              <p className="text-xs leading-4 text-[#667386]">11/20/2026, 9:29:49 AM</p>
            </div>
          </article>
        </div>
      </section>

      <Link
        href="/setup/integrations"
        className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-[#e6e8ee] bg-white px-4 py-4"
      >
        <span className="flex items-start gap-3">
          <Link2 className="mt-0.5 size-4 shrink-0 text-[#667386]" />
          <span>
            <span className="block text-sm font-semibold">Need to connect a tool?</span>
            <span className="mt-0.5 block text-xs leading-4 text-[#667386]">
              Clay, your CRM, Gmail, Slack, and Gong now live in Integrations.
            </span>
          </span>
        </span>
        <ChevronRight className="size-4 shrink-0 text-[#98a2b3]" />
      </Link>
    </div>
  )
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
}
