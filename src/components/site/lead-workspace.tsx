import Image from "next/image"

const rail = [
  { src: "/figma/dashboard/nav-home.svg", width: 15.7983, height: 15.5278, tile: "bg-[#1b62ee]" },
  { src: "/figma/dashboard/nav-radar.svg", width: 15.7959, height: 15.8033, tile: "bg-[#1b62ee]" },
  { src: "/figma/dashboard/nav-crm.svg", width: 15.7959, height: 14.3265, tile: "bg-[#1b62ee]" },
  { src: "/figma/dashboard/nav-inputs.svg", width: 29.3878, height: 29.3878 },
  { src: "/figma/dashboard/nav-integrations.svg", width: 29.3878, height: 29.3878 },
  { src: "/figma/leads/nav-leads-active.svg", width: 29.3878, height: 29.3878 },
  { src: "/figma/dashboard/nav-campaigns.svg", width: 29.3878, height: 29.3878 },
  { src: "/figma/dashboard/nav-inbox.svg", width: 29.3878, height: 29.3878 },
] as const

const railLower = [
  "/figma/dashboard/nav-templates.svg",
  "/figma/dashboard/nav-ledger.svg",
  "/figma/dashboard/nav-approvals.svg",
  "/figma/dashboard/nav-health.svg",
  "/figma/dashboard/nav-activity.svg",
] as const

const filters = [
  { icon: "industry.svg", w: 14.6319, h: 14.6319, label: "Industry" },
  { icon: "title.svg", w: 14.2946, h: 14.6333, label: "Title", count: "20" },
  { icon: "size.svg", w: 14.6319, h: 14.6319, label: "Size" },
  { icon: "tech.svg", w: 12.25, h: 12.25, label: "Tech" },
  { icon: "signals.svg", w: 14.6296, h: 10.7626, label: "Signals", count: "18" },
  { icon: "engagement.svg", w: 14.6319, h: 14.6319, label: "Engagement", count: "17" },
  { icon: "verification.svg", w: 14.6353, h: 14.6319, label: "Verification", count: "18" },
] as const

const agentFilters = [
  { icon: "fresh.svg", w: 12.25, h: 14.635, label: "Has fresh signal", count: "10" },
  { icon: "awaiting.svg", w: 14.6319, h: 14.6319, label: "Awaiting approval", count: "5" },
  { icon: "agent.svg", w: 14.508, h: 14.6396, label: "Agent-touched", count: "17" },
] as const

const leads = [
  ["KA", "Khalid Al-Rumaihi", "Director, Project Finance", "Doha Meridian Capital", "BROAD", "Clay 17 cr · $0.17", "Kimi 12 cr · 1,218 tok"],
  ["HA", "Hessa Al-Mansoori", "Head of Infrastructure Finance", "Gulf Crescent Bank", "BROAD", "Clay 23 cr · $0.23", "Kimi 15 cr · 1,596 tok"],
  ["JW", "James Whitfield", "Head of Property & Technical Underwriting", "Thameside Re", "BROAD", "Clay 26 cr · $0.26", "Kimi 18 cr · 1,848 tok"],
  ["PR", "Priya Raman", "Senior Broker, Construction & Energy", "Harbourline Specialty", "BROAD", "Clay 20 cr · $0.20", "Kimi 13 cr · 1,386 tok"],
  ["TH", "Tariq Haddad", "VP Risk, Digital Infrastructure", "Sahara Edge Data Centres", "BROAD", "Clay 13 cr · $0.13", "Kimi 8 cr · 882 tok"],
  ["NA", "Noura Al-Suwaidi", "Chief Risk Officer", "Emirates Infra Partners", "HYPER", "Clay 43 cr · $0.43", "Kimi 28 cr · 2,982 tok"],
  ["OG", "Oliver Grant", "Managing Director, Infrastructure Debt", "Aldgate Infrastructure Capital", "HYPER", "Clay 40 cr · $0.40", "Kimi 26 cr · 2,772 tok"],
] as const

export function LeadWorkspace() {
  return (
    <div className="flex h-[645px] w-[980px] overflow-hidden rounded-[8px] bg-[#f4f5f6] font-sans text-[#0c1017]">
      <aside className="flex w-[52px] shrink-0 flex-col items-center overflow-hidden bg-[#0754ea] py-[8px]">
        <span className="grid size-[27.2px] place-items-center rounded-[3.4px] bg-[#003fc4]">
          <Glyph src="/figma/dashboard/mark.svg" width={16.1633} height={12.926} />
        </span>
        <span className="my-[5px] h-px w-[35px] bg-white/25" />
        <div className="flex min-h-0 w-full flex-1 flex-col items-center gap-[3px] overflow-hidden">
          {rail.map((item) =>
            "tile" in item ? (
              <span
                key={item.src}
                className={`grid size-[27.2px] place-items-center rounded-[3.4px] ${item.tile}`}
              >
                <Glyph src={item.src} width={item.width} height={item.height} />
              </span>
            ) : (
              <Glyph key={item.src} src={item.src} width={item.width} height={item.height} />
            ),
          )}
          <span className="my-[3px] h-px w-[22px] bg-white/25" />
          {railLower.map((src) => (
            <Glyph key={src} src={src} width={29.3878} height={29.3878} />
          ))}
        </div>
        <Glyph src="/figma/dashboard/nav-settings.svg" width={29.3878} height={29.3878} />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[44px] shrink-0 items-center gap-[8px] border-b border-[#dce2eb] bg-white px-[11px]">
          <div className="flex h-[27px] w-[240px] items-center gap-[6px] rounded-[4px] border border-[#dce2eb] bg-[#f7f9fc] px-[8px]">
            <Glyph src="/figma/dashboard/search.svg" width={15.7941} height={15.7967} />
            <span className="text-[10px] whitespace-pre text-[#667386]">{`Search  (⌘K)`}</span>
          </div>
          <div className="ml-auto flex items-center gap-[8px]">
            <span className="flex items-center gap-[5px] rounded-[4px] border border-[#dce2eb] px-[7px] py-[3px] text-[9.5px] font-medium">
              <Glyph src="/figma/dashboard/building.svg" width={13.2245} height={13.2245} />
              Nooraya Logistics
              <Glyph src="/figma/dashboard/chevron.svg" width={11.7551} height={11.7551} />
            </span>
            <span className="flex items-center gap-[5px] rounded-[4px] bg-[#fff0e5] py-[2px] pr-[8px] pl-[5px]">
              <span className="grid size-[16px] place-items-center rounded-full bg-[#ffe0c9]">
                <Glyph src="/figma/dashboard/setup.svg" width={9.55102} height={9.55102} />
              </span>
              <span className="text-[9px] font-semibold text-[#b54708]">Setup 7 / 8</span>
              <span className="h-[4px] w-[27px] overflow-hidden rounded-full bg-[#ffd6b9]">
                <span className="block h-full w-[24px] rounded-full bg-[#ff650b]" />
              </span>
            </span>
            <span className="flex items-center gap-[5px]">
              <Glyph src="/figma/dashboard/globe.svg" width={15.7959} height={15.7959} />
              <span className="flex rounded-[4px] border border-[#dce2eb] bg-white p-[1px] text-[8.5px] font-semibold">
                <span className="rounded-full bg-[#0754ea] px-[7px] py-[4px] text-white">EN</span>
                <span className="px-[7px] py-[4px] text-[#667386]">AR</span>
              </span>
              <span className="flex rounded-[4px] border border-[#dce2eb] bg-white p-[1px] text-[8.5px] font-semibold">
                <span className="rounded-full bg-[#0754ea] px-[7px] py-[4px] text-white">123</span>
                <span className="px-[7px] py-[4px] text-[#667386]">١٢٣</span>
              </span>
            </span>
            <Glyph src="/figma/dashboard/bell.svg" width={26.449} height={26.449} />
            <span className="flex items-center gap-[5px] rounded-[4px] border border-[#dce2eb] py-[2px] pr-[7px] pl-[3px] text-[9.5px] font-medium">
              <span className="grid size-[19px] place-items-center rounded-full bg-[#e8f0ff] text-[8px] text-[#0754ea]">
                DF
              </span>
              Demo Fellow
              <Glyph src="/figma/dashboard/chevron-account.svg" width={12.7361} height={6.31653} />
            </span>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-hidden px-[16px] pt-[16px]">
          <p className="text-[16px] leading-[22px] font-bold tracking-[0.49px] text-[#f4f4f2] uppercase">
            Lead List
          </p>
          <div className="mt-[16px] flex gap-[14px]">
            <aside className="w-[150px] shrink-0">
              <p className="px-[3px] pb-[8px] text-[10px] leading-[15px] font-bold tracking-[0.3px] uppercase">
                Filters
              </p>
              {filters.map((item) => (
                <FilterRow key={item.label} {...item} />
              ))}
              <p className="px-[3px] pt-[11px] pb-[5px] text-[7.5px] leading-[11px] font-medium tracking-[0.19px] text-[#4f4d51] uppercase">
                Agent
              </p>
              {agentFilters.map((item) => (
                <FilterRow key={item.label} {...item} />
              ))}
            </aside>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between rounded-[3px] border border-[rgba(244,244,242,0.16)] bg-white px-[11px] py-[8px]">
                <div>
                  <p className="text-[11px] leading-[14px] font-medium">Real lead workspace</p>
                  <p className="text-[8px] leading-[12px] text-[#667386]">
                    Import Excel, CSV, TSV, ODS, or JSON. Name and Company are required; every other
                    field can be enriched later.
                  </p>
                </div>
                <div className="flex shrink-0 gap-[5px]">
                  <span className="flex h-[22px] items-center gap-[5px] rounded-[3px] border border-[rgba(12,16,23,0.28)] px-[8px] text-[8px] font-medium tracking-[0.49px] uppercase">
                    <Glyph src="/figma/leads/generate.svg" width={14.508} height={14.6396} />
                    Generate leads
                  </span>
                  <span className="flex h-[22px] items-center gap-[5px] rounded-[3px] bg-[#0754ea] px-[8px] text-[8px] font-medium tracking-[0.49px] text-white uppercase">
                    <Glyph src="/figma/leads/import.svg" width={14.6319} height={14.6323} />
                    Import leads
                  </span>
                </div>
              </div>
              <div className="mt-[11px] flex justify-end">
                <span className="flex h-[22px] items-center gap-[5px] rounded-[3px] border border-[rgba(12,16,23,0.28)] px-[8px] text-[8px] font-medium tracking-[0.49px] uppercase">
                  <Glyph src="/figma/leads/columns.svg" width={14.6319} height={13.2708} />
                  Columns
                </span>
              </div>
              <div className="mt-[11px] overflow-hidden bg-white">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="text-[8px] text-[#667386]">
                      <th className="w-[25px] border-b border-[rgba(12,16,23,0.16)] px-[3px] py-[8px] font-medium">
                        <span className="block size-[14px] rounded-[1px] border border-[rgba(12,16,23,0.24)] bg-white" />
                      </th>
                      {["Name", "Title", "Company", "Tier", "Data Points"].map((label) => (
                        <th
                          key={label}
                          className="border-b border-[rgba(12,16,23,0.16)] px-[8px] py-[8px] font-medium"
                        >
                          {label}
                        </th>
                      ))}
                      <th className="border-b border-[rgba(12,16,23,0.16)] px-[8px] py-[8px] text-right font-medium">
                        Ledger cost
                      </th>
                      <th className="border-b border-[rgba(12,16,23,0.16)] px-[8px] py-[8px] text-right font-medium">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead) => (
                      <tr key={lead[1]} className="align-middle">
                        <td className="border-b border-[rgba(12,16,23,0.16)] px-[3px] py-[11px]">
                          <span className="block size-[14px] rounded-[1px] border border-[rgba(12,16,23,0.24)] bg-white" />
                        </td>
                        <td className="border-b border-[rgba(12,16,23,0.16)] px-[8px] py-[11px]">
                          <span className="flex items-center gap-[8px]">
                            <span className="grid size-[19px] shrink-0 place-items-center rounded-full bg-[#dfdfdf] text-[7.5px] font-medium">
                              {lead[0]}
                            </span>
                            <span className="text-[9.5px] leading-[14px] font-medium">{lead[1]}</span>
                          </span>
                        </td>
                        <td className="max-w-[143px] border-b border-[rgba(12,16,23,0.16)] px-[8px] py-[11px] text-[9.5px] leading-[14px] text-[#667386]">
                          {lead[2]}
                        </td>
                        <td className="max-w-[121px] border-b border-[rgba(12,16,23,0.16)] px-[8px] py-[11px] text-[9.5px] leading-[14px] text-[#667386]">
                          {lead[3]}
                        </td>
                        <td className="border-b border-[rgba(12,16,23,0.16)] px-[8px] py-[11px]">
                          <span className="border border-[rgba(12,16,23,0.28)] px-[5px] py-[2px] text-[7.5px] leading-[8px] font-medium tracking-[0.6px]">
                            {lead[4]}
                          </span>
                        </td>
                        <td className="border-b border-[rgba(12,16,23,0.16)] px-[8px] py-[11px]">
                          <span className="flex gap-[5px]">
                            <Glyph src="/figma/leads/email.svg" width={21.7778} height={21.7778} />
                            <Glyph src="/figma/leads/phone.svg" width={21.7778} height={21.7778} />
                          </span>
                        </td>
                        <td className="border-b border-[rgba(12,16,23,0.16)] px-[8px] py-[11px] text-right text-[8px] leading-[11px] text-[#667386]">
                          <span className="flex items-center justify-end gap-[3px]">
                            <Glyph src="/figma/leads/cost.svg" width={6.03993} height={8.16667} />
                            {lead[5]}
                          </span>
                          <span className="block">{lead[6]}</span>
                        </td>
                        <td className="border-b border-[rgba(12,16,23,0.16)] px-[8px] py-[11px]">
                          <span className="flex items-center justify-end gap-[3px]">
                            <span className="text-[8px] leading-[12px] text-[#e4856c] underline">View</span>
                            <Glyph src="/figma/leads/more.svg" width={13.2708} height={3.74306} />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterRow({
  icon,
  w,
  h,
  label,
  count,
}: {
  icon: string
  w: number
  h: number
  label: string
  count?: string
}) {
  return (
    <div className="flex items-center gap-[8px] px-[3px] py-[7px] text-[9.5px] leading-[14px] text-[#667386]">
      <Glyph src={`/figma/leads/${icon}`} width={w} height={h} />
      <span className="min-w-0 flex-1 truncate">{label}</span>
      {count ? (
        <span className="rounded-full bg-[rgba(145,179,154,0.12)] px-[5px] py-[1px] text-[8px] font-medium text-[#cc5536]">
          {count}
        </span>
      ) : null}
      <Glyph src="/figma/leads/plus.svg" width={9.1875} height={9.1875} />
    </div>
  )
}

function Glyph({ src, width, height }: { src: string; width: number; height: number }) {
  return <Image src={src} alt="" width={width} height={height} unoptimized />
}
