import Link from "next/link"

const signals = [
  {
    title: "Sent 4 Infrastructure Risk emails through Resend",
    time: "Recorded credits from real runs",
    tag: "Send",
  },
  {
    title: "Approved hyper-tier email for Oliver Grant (Aldgate)",
    time: "11/20/2026, 8:11:49 AM",
    tag: "Approval",
  },
  {
    title: "Drafted 5 hyper-tier messages for Risk Intelligence — Hyper tier",
    time: "11/20/2026, 7:41:49 AM",
    tag: "Draft",
  },
  {
    title: "Hessa Al-Mansoori moved to Enriched",
    time: "Gulf Crescent Bank · Head of Infrastructure Finance",
    tag: "Lead",
  },
  {
    title: "Priya Raman moved to Enriched",
    time: "Harbourline Specialty · Senior Broker, Construction & Energy",
    tag: "Lead",
  },
]

export function LiveRadar() {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs leading-4 font-semibold tracking-wide text-[#e57243] uppercase">Overview</p>
          <h1 className="mt-2 font-heading text-[28px] leading-8 font-semibold tracking-tight sm:text-[32px] sm:leading-10">
            Live radar
          </h1>
        </div>
        <p className="text-sm leading-5 text-[#667386]">Friday, November 20, 2026</p>
      </header>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#667386]">
        What the workspace just did: sends, approvals, and the leads that moved. Nothing leaves until you launch.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.6fr)]">
        <section className="rounded-2xl border border-[#e6e8ee] bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-heading text-lg leading-6 font-semibold">Happening now</h2>
            <span className="inline-flex h-6 items-center rounded-full bg-[#f3fdf9] px-2.5 text-xs font-medium text-[#1c7453]">
              Watching
            </span>
          </div>
          <ul className="mt-2">
            {signals.map((item) => (
              <li key={item.title} className="flex items-start justify-between gap-4 border-b border-[#eef0f3] py-4 last:border-0">
                <div>
                  <p className="text-sm leading-5 font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs leading-4 text-[#667386]">{item.time}</p>
                </div>
                <span className="shrink-0 text-xs font-medium text-[#2c7eee]">{item.tag}</span>
              </li>
            ))}
          </ul>
          <Link href="/reporting/activity-log" className="mt-2 inline-flex text-sm font-semibold text-[#2c7eee]">
            Open activity log
          </Link>
        </section>

        <div className="flex flex-col gap-4">
          <section className="rounded-2xl border border-[#e6e8ee] bg-white p-5">
            <p className="text-xs leading-4 font-medium text-[#667386]">Credits recorded</p>
            <p className="mt-2 font-heading text-3xl leading-8 font-semibold">18,664</p>
            <p className="mt-2 text-xs leading-4 text-[#667386]">11/20/2026, 9:29:49 AM</p>
          </section>
          <section className="rounded-2xl border border-[#e6e8ee] bg-white p-5">
            <h2 className="font-heading text-lg leading-6 font-semibold">Still waiting</h2>
            <p className="mt-2 text-sm leading-6 text-[#667386]">
              2 Broad campaigns have variants ready. 7 of 8 checks are green. Broad and Hyper can launch.
            </p>
            <Link
              href="/campaigns/drafts"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[#0754ea] px-3 py-2 text-sm leading-5 font-semibold text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)]"
            >
              Pick Broad variants
            </Link>
          </section>
          <Link href="/overview" className="text-sm font-semibold text-[#2c7eee]">
            Back to dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
