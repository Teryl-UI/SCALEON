import type { ReactNode } from "react"
import Image from "next/image"

const railIcons = [
  "nav-inputs.svg",
  "nav-integrations.svg",
  "nav-leads.svg",
  "nav-campaigns.svg",
  "nav-inbox.svg",
] as const

const railLower = [
  "nav-templates.svg",
  "nav-ledger.svg",
  "nav-approvals.svg",
  "nav-health.svg",
  "nav-activity.svg",
] as const

const files = [
  {
    icon: "file.svg",
    title: "Growth strategy",
    detail: "Nooraya GTM strategy — GCC + UK.pdf",
    action: "View",
    filled: false,
  },
  {
    icon: "map.svg",
    title: "Knowledge map",
    detail: "Optional — add a map, notes, or graph dump.",
    action: "Add",
    filled: true,
  },
  {
    icon: "pager.svg",
    title: "One-pager",
    detail: "Nooraya one-pager.pdf",
    action: "View",
    filled: false,
  },
] as const

const leads = [
  ["KA", "Khalid Al-Rumaihi", "Doha Meridian Capital · Director, Project Finance", "Ready", "warm"],
  ["HA", "Hessa Al-Mansoori", "Gulf Crescent Bank · Head of Infrastructure Finance", "Enriched", "green"],
  ["JW", "James Whitfield", "Thameside Re · Head of Property & Technical Underwriting", "Ready", "warm"],
  ["PR", "Priya Raman", "Harbourline Specialty · Senior Broker, Construction & Energy", "Enriched", "green"],
  ["TH", "Tariq Haddad", "Sahara Edge Data Centres · VP Risk, Digital Infrastructure", "Ready", "warm"],
] as const

const activity = [
  ["Sent 4 Infrastructure Risk emails through Resend", "11/3/2026, 8:42:29 PM"],
  ["Approved hyper-tier email for Oliver Grant (Aldgate)", "11/3/2026, 7:24:29 PM"],
  ["Drafted 5 hyper-tier messages for Risk Intelligence — Hyper tier", "11/3/2026, 6:54:29 PM"],
] as const

export function HeroDashboard() {
  return (
    <div className="flex h-[720px] w-[1058px] gap-[5.878px] bg-[#f4f5f6] p-[5.878px] font-sans text-[#0c1017]">
      <aside className="flex h-full w-[55.837px] shrink-0 flex-col items-center overflow-hidden bg-[#0754ea] p-[8.816px]">
        <span className="grid size-[29.388px] place-items-center rounded-[3.673px] bg-[#003fc4]">
          <Glyph name="mark.svg" width={16.1633} height={12.926} />
        </span>
        <span className="my-[5.878px] h-[0.735px] w-[38.204px] bg-white/25" />
        <div className="flex min-h-0 w-full flex-1 flex-col items-center gap-[2.939px] overflow-hidden">
          <Tile className="bg-white">
            <Glyph name="nav-home.svg" width={15.7983} height={15.5278} />
          </Tile>
          <Tile className="bg-[#1b62ee]">
            <Glyph name="nav-radar.svg" width={15.7959} height={15.8033} />
          </Tile>
          <Tile className="bg-[#1b62ee]">
            <Glyph name="nav-crm.svg" width={15.7959} height={14.3265} />
          </Tile>
          {railIcons.map((name) => (
            <Glyph key={name} name={name} width={29.3878} height={29.3878} />
          ))}
          <span className="my-[2.939px] h-[0.735px] w-[23.51px] bg-white/25" />
          {railLower.map((name) => (
            <Glyph key={name} name={name} width={29.3878} height={29.3878} />
          ))}
        </div>
        <div className="flex w-full flex-col items-center gap-[5.878px] pt-[5.878px]">
          <Glyph name="nav-settings.svg" width={29.3878} height={29.3878} />
          <Glyph name="nav-collapse.svg" width={29.3878} height={29.3878} />
        </div>
      </aside>

      <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden rounded-[4.408px] bg-[#f4f5f6]">
        <header className="flex h-[47.02px] shrink-0 items-center gap-[11.755px] border-b-[0.735px] border-[#dce2eb] bg-white px-[11.755px]">
          <div className="flex h-[29.388px] w-[282.122px] items-center gap-[5.878px] rounded-[4.408px] border-[0.735px] border-[#dce2eb] bg-[#f7f9fc] px-[8.816px]">
            <Glyph name="search.svg" width={15.7941} height={15.7967} />
            <p className="text-[10.286px] whitespace-pre text-[#667386]">{`Search  (⌘K)`}</p>
          </div>
          <div className="ml-auto flex items-center gap-[8.816px]">
            <span className="flex items-center gap-[5.878px] rounded-[4.408px] border-[0.735px] border-[#dce2eb] px-[7.347px] py-[2.939px]">
              <Glyph name="building.svg" width={13.2245} height={13.2245} />
              <span className="text-[9.551px] leading-[14.327px] font-medium">Nooraya Logistics</span>
              <Glyph name="chevron.svg" width={11.7551} height={11.7551} />
            </span>
            <span className="flex items-center gap-[5.878px] rounded-[4.408px] bg-[#fff0e5] py-[2.939px] pr-[8.816px] pl-[5.878px]">
              <span className="grid size-[17.633px] place-items-center rounded-full bg-[#ffe0c9]">
                <Glyph name="setup.svg" width={9.55102} height={9.55102} />
              </span>
              <span className="text-[9.184px] leading-[13.776px] font-semibold text-[#b54708]">
                Setup 7 / 8
              </span>
              <span className="h-[4.408px] w-[29.388px] overflow-hidden rounded-full bg-[#ffd6b9]">
                <span className="block h-full w-[25.852px] rounded-full bg-[#ff650b]" />
              </span>
            </span>
            <span className="flex items-center gap-[5.878px]">
              <Glyph name="globe.svg" width={15.7959} height={15.7959} />
              <span className="flex items-center rounded-[4.408px] border-[0.735px] border-[#dce2eb] bg-white p-[1.469px]">
                <span className="rounded-full bg-[#0754ea] px-[7.347px] py-[5.8px] text-[8.816px] leading-[8.816px] font-semibold text-white">
                  EN
                </span>
                <span className="px-[7.347px] text-[8.816px] leading-[8.816px] font-semibold text-[#667386]">
                  AR
                </span>
              </span>
              <span className="flex items-center rounded-[4.408px] border-[0.735px] border-[#dce2eb] bg-white p-[1.469px]">
                <span className="rounded-full bg-[#0754ea] px-[7.347px] py-[5.8px] text-[8.816px] leading-[8.816px] font-semibold text-white">
                  123
                </span>
                <span className="px-[7.347px] text-[8.816px] leading-[8.816px] font-semibold text-[#667386]">
                  ١٢٣
                </span>
              </span>
            </span>
            <Glyph name="bell.svg" width={26.449} height={26.449} />
            <span className="flex items-center gap-[5.878px] rounded-[4.408px] border-[0.735px] border-[#dce2eb] py-[2.939px] pr-[7.347px] pl-[2.939px]">
              <span className="grid size-[20.571px] place-items-center rounded-full bg-[#e8f0ff] text-[8.082px] leading-[12.122px] font-medium text-[#0754ea] uppercase">
                DF
              </span>
              <span className="text-[9.551px] leading-[14.327px] font-medium">Demo Fellow</span>
              <Glyph name="chevron-account.svg" width={12.7361} height={6.31653} />
            </span>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-hidden px-[23.51px] pt-[22.041px] pb-[17.633px]">
          <div className="relative flex flex-col gap-[17.633px]">
            <div>
              <h2 className="text-[20.571px] leading-[26.449px] font-bold tracking-[-0.588px]">
                Welcome back, Demo
              </h2>
              <p className="mt-[2.939px] text-[10.286px] leading-[14.694px] text-[#667386]">
                Tuesday, November 3, 2026
              </p>
            </div>

            <div className="flex w-full max-w-[846.367px] flex-col gap-[17.633px]">
              <section className="border-[0.735px] border-[#dce2eb] bg-white px-[23.51px] py-[20.571px]">
                <p className="text-[8.082px] leading-[8.082px] font-semibold tracking-[0.735px] text-[#ff650b] uppercase">
                  BD & Partnerships pilot
                </p>
                <h3 className="mt-[11.755px] max-w-[661px] text-[32.327px] leading-[33.796px] font-medium tracking-[-1.616px] uppercase">
                  Build a grounded pipeline, one clear step at a time.
                </h3>
                <p className="mt-[11.755px] text-[10.286px] leading-[16.163px] text-[#667386]">
                  Strategy gives Scaleon context. Your real lead list gives it targets. Clay
                  enriches only the leads you choose.
                </p>
              </section>

              <section>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-[14.694px] leading-[20.571px] font-bold tracking-[-0.367px]">
                      Your next step
                    </h3>
                    <p className="pt-[2.939px] text-[10.286px] leading-[14.694px] text-[#667386]">
                      Worked out from your setup checks and your latest Launch.
                    </p>
                  </div>
                  <span className="rounded-[5.878px] bg-[#e9f6ef] px-[5.878px] py-[2.204px] text-[8.082px] leading-[8.082px] font-medium text-[#1c7453] uppercase">
                    Strategy ready
                  </span>
                </div>
                <div className="mt-[8.816px] flex items-center justify-between rounded-[4.408px] border-[0.735px] border-[#b9d0fb] bg-white p-[14.694px]">
                  <div className="flex items-start gap-[8.816px]">
                    <span className="grid size-[29.388px] shrink-0 place-items-center rounded-[2.939px] bg-[#fff0e5]">
                      <Glyph name="bolt.svg" width={14.6939} height={14.6939} />
                    </span>
                    <div className="w-[329px]">
                      <p className="text-[10.286px] leading-[15.429px] font-medium">
                        Pick Broad variants for Launch Nooraya Q4
                      </p>
                      <p className="pt-[2.939px] text-[10.286px] leading-[17.633px] text-[#667386]">
                        2 Broad campaigns have variants ready. Nothing sends until you launch.
                      </p>
                    </div>
                  </div>
                  <span className="flex h-[29.388px] items-center rounded-[4.408px] bg-[#0754ea] px-[14.694px] text-[9.551px] leading-[14.327px] font-semibold text-white">
                    Pick Broad variants
                  </span>
                </div>
                <div className="mt-[8.816px] flex items-center justify-between rounded-[4.408px] border-[0.735px] border-[#dce2eb] bg-white px-[11.755px] py-[8.816px]">
                  <p className="flex items-center gap-[5.878px] text-[10.286px] leading-[14.694px]">
                    <Glyph name="info.svg" width={13.2245} height={13.2245} />
                    7 of 8 ready. Broad and Hyper can launch.
                  </p>
                  <span className="px-[8.816px] text-[8.816px] leading-[13.224px] font-medium text-[#0754ea] uppercase">
                    Details
                  </span>
                </div>
              </section>

              <section>
                <h3 className="text-[14.694px] leading-[20.571px] font-bold tracking-[-0.367px]">
                  Your strategy files
                </h3>
                <p className="pt-[2.939px] text-[10.286px] leading-[14.694px] text-[#667386]">
                  Growth strategy and knowledge map uploaded during setup stay here.
                </p>
                <div className="mt-[8.816px] overflow-hidden rounded-[4.408px] border-[0.735px] border-[#dce2eb] bg-white">
                  <div className="flex items-start justify-between p-[14.694px]">
                    <div>
                      <p className="text-[11.755px] leading-[14.694px] font-medium">Strategy files</p>
                      <p className="pt-[2.939px] text-[10.286px] leading-[17.633px] text-[#667386]">
                        Uploaded during onboarding or from Inputs. The fellow reads these as source
                        context.
                      </p>
                    </div>
                    <span className="rounded-[5.878px] bg-[#e9f6ef] px-[5.878px] py-[2.204px] text-[8.082px] leading-[8.082px] font-medium text-[#1c7453] uppercase">
                      2 of 3 saved
                    </span>
                  </div>
                  <div className="flex flex-col gap-[8.816px] px-[14.694px] pb-[14.694px]">
                    {files.map((file) => (
                      <div
                        key={file.title}
                        className="flex items-center gap-[8.816px] rounded-[2.939px] border-[0.735px] border-[#e7ecf3] bg-[#f7f9fc] p-[8.816px]"
                      >
                        <span className="grid size-[26.449px] shrink-0 place-items-center rounded-[2.939px] bg-[#e8f0ff]">
                          <Glyph name={file.icon} width={13.2245} height={13.2245} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[10.286px] leading-[14.694px] font-medium">
                            {file.title}
                          </span>
                          <span className="block text-[8.816px] leading-[11.755px] text-[#667386]">
                            {file.detail}
                          </span>
                        </span>
                        <span
                          className={`flex h-[23.51px] items-center rounded-[2.939px] px-[8.816px] text-[8.816px] leading-[13.224px] font-medium ${
                            file.filled
                              ? "bg-[#0754ea] text-white"
                              : "border-[0.735px] border-[#dce2eb] bg-white text-[#0c1017]"
                          }`}
                        >
                          {file.action}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-[14.694px] leading-[20.571px] font-bold tracking-[-0.367px]">
                  Your BD workflow
                </h3>
                <p className="pt-[2.939px] text-[10.286px] leading-[14.694px] text-[#667386]">
                  Each step opens the exact screen where the work happens.
                </p>
                <div className="mt-[8.816px] grid grid-cols-4 gap-[8.816px]">
                  <WorkflowCard
                    title="Ground your workspace"
                    detail="ICP + positioning published"
                    icon="check.svg"
                  />
                  <WorkflowCard
                    title="Connect your tools"
                    detail="Clay + CRM connections"
                    icon="arrow-2.svg"
                    step="2"
                    active
                  />
                  <WorkflowCard
                    title="Bring in real leads"
                    detail="20 leads imported"
                    icon="check-2.svg"
                    arrow="arrow-3.svg"
                  />
                  <WorkflowCard
                    title="Enrich your first five"
                    detail="5 leads enriched"
                    icon="check-3.svg"
                    arrow="arrow-4.svg"
                  />
                </div>
              </section>

              <section className="grid grid-cols-[537.85px_296.76px] gap-[11.755px]">
                <div className="overflow-hidden rounded-[4.408px] border-[0.735px] border-[#dce2eb] bg-white">
                  <div className="flex items-start justify-between p-[14.694px]">
                    <div>
                      <p className="text-[11.755px] leading-[14.694px] font-medium">Your leads</p>
                      <p className="pt-[2.939px] text-[10.286px] leading-[17.633px] text-[#667386]">
                        Only leads you import into this workspace appear here.
                      </p>
                    </div>
                    <span className="bg-[#f7f9fc] px-[5.878px] py-[2.204px] text-[8.082px] leading-[8.082px] font-medium text-[#667386] uppercase">
                      20 imported
                    </span>
                  </div>
                  <div className="px-[14.694px] pb-[14.694px]">
                    {leads.map(([initials, name, detail, status, tone]) => (
                      <div
                        key={name}
                        className="flex items-center gap-[8.816px] border-b-[0.735px] border-[#dce2eb] py-[8.816px]"
                      >
                        <span className="grid size-[23.51px] shrink-0 place-items-center rounded-full bg-[#e8f0ff] text-[8.082px] leading-[12.122px] font-semibold text-[#0754ea]">
                          {initials}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[10.286px] leading-[14.694px] font-medium">
                            {name}
                          </span>
                          <span className="block truncate text-[8.816px] leading-[11.755px] text-[#667386]">
                            {detail}
                          </span>
                        </span>
                        <span
                          className={`rounded-[5.878px] px-[5.878px] py-[2.204px] text-[8.082px] leading-[8.082px] font-medium uppercase ${
                            tone === "green"
                              ? "bg-[#e9f6ef] text-[#1c7453]"
                              : "bg-[#fff0e5] text-[#a94705]"
                          }`}
                        >
                          {status}
                        </span>
                      </div>
                    ))}
                    <p className="pt-[8.82px] text-[8.816px] leading-[13.224px] text-[#0754ea] underline">
                      Open lead list
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[11.755px]">
                  <div className="rounded-[4.408px] border-[0.735px] border-[#dce2eb] bg-white">
                    <p className="p-[14.694px] pb-0 text-[11.755px] leading-[14.694px] font-medium">
                      Workspace activity
                    </p>
                    <div className="px-[14.694px] pb-[14.694px]">
                      {activity.map(([line, time]) => (
                        <div key={time} className="border-b-[0.735px] border-[#dce2eb] py-[8.816px]">
                          <p className="text-[10.286px] leading-[14.694px]">{line}</p>
                          <p className="pt-[2.939px] text-[8.816px] leading-[11.755px] text-[#667386]">
                            {time}
                          </p>
                        </div>
                      ))}
                      <p className="pt-[8.82px] text-[8.816px] leading-[13.224px] text-[#0754ea] underline">
                        Open activity log
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[8.816px] rounded-[4.408px] border-[0.735px] border-[#dce2eb] bg-white p-[11.755px]">
                    <span className="grid size-[26.449px] place-items-center rounded-[2.939px] bg-[#e8f0ff]">
                      <Glyph name="credits.svg" width={13.2245} height={13.2245} />
                    </span>
                    <span>
                      <span className="block text-[17.633px] leading-[20.571px] font-semibold tracking-[-0.588px]">
                        18664
                      </span>
                      <span className="block text-[8.816px] leading-[11.755px] text-[#667386]">
                        Recorded credits from real runs
                      </span>
                    </span>
                  </div>
                </div>
              </section>

              <div className="flex items-center justify-between rounded-[4.408px] border-[0.735px] border-[#dce2eb] bg-white px-[14.694px] py-[11.755px]">
                <div className="flex items-center gap-[8.816px]">
                  <span className="grid size-[26.449px] place-items-center rounded-[2.939px] bg-[#e8f0ff]">
                    <Glyph name="plug.svg" width={15.7944} height={9.18367} />
                  </span>
                  <span>
                    <span className="block text-[10.286px] leading-[14.694px] font-semibold">
                      Need to connect a tool?
                    </span>
                    <span className="block text-[10.286px] leading-[14.694px] text-[#667386]">
                      Clay, your CRM, Gmail, Slack, and Gong now live in Integrations.
                    </span>
                  </span>
                </div>
                <Glyph name="arrow-out.svg" width={13.2245} height={13.2245} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Tile({ className, children }: { className: string; children: ReactNode }) {
  return (
    <span className={`grid size-[29.388px] place-items-center rounded-[3.673px] ${className}`}>
      {children}
    </span>
  )
}

function Glyph({ name, width, height }: { name: string; width: number; height: number }) {
  return (
    <Image
      src={`/figma/dashboard/${name}`}
      alt=""
      width={width}
      height={height}
      unoptimized
    />
  )
}

function WorkflowCard({
  title,
  detail,
  icon,
  arrow = "arrow.svg",
  step,
  active = false,
}: {
  title: string
  detail: string
  icon: string
  arrow?: string
  step?: string
  active?: boolean
}) {
  return (
    <div
      className={`rounded-[2.939px] border-[0.735px] bg-white p-[11.755px] ${
        active ? "border-[#a9c6ff]" : "border-[#dce2eb]"
      }`}
    >
      <div className="flex items-start justify-between">
        {step ? (
          <span className="grid size-[23.51px] place-items-center rounded-full border-[0.735px] border-[#dce2eb] bg-[#e8f0ff] text-[8.816px] leading-[13.224px] font-semibold text-[#0754ea]">
            {step}
          </span>
        ) : (
          <span className="grid size-[23.51px] place-items-center rounded-full border-[0.735px] border-[#dce2eb] bg-[#e9f6ef]">
            <Glyph name={icon} width={11.7551} height={11.7551} />
          </span>
        )}
        <Glyph name={arrow} width={11.7551} height={11.7551} />
      </div>
      <p className="pt-[14.694px] text-[10.286px] leading-[14.694px] font-medium">{title}</p>
      <p className="pt-[2.939px] text-[10.286px] leading-[14.694px] text-[#667386]">{detail}</p>
    </div>
  )
}
