import {
  Activity,
  Bell,
  BookOpen,
  Building2,
  Check,
  ChevronDown,
  ChevronsLeft,
  ClipboardCheck,
  Columns3,
  Globe,
  Home,
  Inbox,
  LayoutGrid,
  Link2,
  List,
  Mail,
  Megaphone,
  MoreHorizontal,
  Phone,
  Plus,
  Radar,
  ScrollText,
  Search,
  Settings,
  Sparkles,
  Upload,
  Users,
  Zap,
} from "lucide-react"

const filters = [
  { label: "Industry", icon: Building2 },
  { label: "Title", icon: List, count: "20" },
  { label: "Size", icon: LayoutGrid },
  { label: "Tech", icon: Settings },
  { label: "Signals", icon: Activity, count: "18" },
  { label: "Engagement", icon: Megaphone, count: "17" },
  { label: "Verification", icon: Check, count: "18" },
]

const agentFilters = [
  { label: "Has fresh signal", icon: Zap, count: "10" },
  { label: "Awaiting approval", icon: ClipboardCheck, count: "5" },
  { label: "Agent-touched", icon: Sparkles, count: "17" },
]

const leads = [
  {
    initials: "KA",
    name: "Khalid Al-Rumaihi",
    title: "Director, Project Finance",
    company: "Doha Meridian Capital",
    tier: "BROAD",
    email: true,
    phone: true,
    clay: ["Clay 17 cr ·", "$0.17"],
    kimi: ["Kimi 12 cr ·", "1,218 tok"],
  },
  {
    initials: "HA",
    name: "Hessa Al-Mansoori",
    title: "Head of Infrastructure Finance",
    company: "Gulf Crescent Bank",
    tier: "BROAD",
    email: true,
    phone: true,
    clay: ["Clay 23 cr ·", "$0.23"],
    kimi: ["Kimi 15 cr ·", "1,596 tok"],
  },
  {
    initials: "JW",
    name: "James Whitfield",
    title: "Head of Property & Technical Underwriting",
    company: "Thameside Re",
    tier: "BROAD",
    email: true,
    phone: true,
    clay: ["Clay 26 cr ·", "$0.26"],
    kimi: ["Kimi 18 cr ·", "1,848 tok"],
  },
  {
    initials: "PR",
    name: "Priya Raman",
    title: "Senior Broker, Construction & Energy",
    company: "Harbourline Specialty",
    tier: "BROAD",
    email: true,
    phone: true,
    clay: ["Clay 20 cr ·", "$0.20"],
    kimi: ["Kimi 13 cr ·", "1,386 tok"],
  },
  {
    initials: "TH",
    name: "Tariq Haddad",
    title: "VP Risk, Digital Infrastructure",
    company: "Sahara Edge Data Centres",
    tier: "BROAD",
    email: false,
    phone: true,
    clay: ["Clay 13 cr ·", "$0.13"],
    kimi: ["Kimi 8 cr ·", "882 tok"],
  },
  {
    initials: "NA",
    name: "Noura Al-Suwaidi",
    title: "Chief Risk Officer",
    company: "Emirates Infra Partners",
    tier: "HYPER",
    email: true,
    phone: true,
    clay: ["Clay 43 cr ·", "$0.43"],
    kimi: ["Kimi 28 cr ·", "2,982 tok"],
  },
  {
    initials: "OG",
    name: "Oliver Grant",
    title: "Managing Director, Infrastructure Debt",
    company: "Aldgate Infrastructure Capital",
    tier: "HYPER",
    email: true,
    phone: true,
    clay: ["Clay 40 cr ·", "$0.40"],
    kimi: ["Kimi 26 cr ·", "2,772 tok"],
  },
]

const nav = [
  Home,
  Radar,
  Activity,
  LayoutGrid,
  Link2,
  Users,
  Megaphone,
  Inbox,
]

const lowerNav = [LayoutGrid, BookOpen, ClipboardCheck, Activity, ScrollText]

export function LeadWorkspace() {
  return (
    <div className="flex h-[645px] w-[980px] overflow-hidden bg-[#f3f5f8] text-[#1c2430]">
      <aside className="flex w-[52px] shrink-0 flex-col items-center bg-[#1a56f0] py-2 text-white">
        <span className="grid size-7 place-items-center">
          <span className="flex gap-[3px]">
            <span className="h-3.5 w-[3px] rounded-sm bg-white" />
            <span className="mt-1 h-2.5 w-[3px] rounded-sm bg-white" />
            <span className="h-3.5 w-[3px] rounded-sm bg-white" />
          </span>
        </span>
        <span className="my-2 h-px w-7 bg-white/30" />
        <div className="flex flex-1 flex-col items-center gap-1">
          {nav.map((Icon, index) => (
            <span
              key={index}
              className={`grid size-7 place-items-center rounded-md ${
                index === 5 ? "bg-white text-[#1a56f0]" : "text-white"
              }`}
            >
              <Icon className="size-3.5" strokeWidth={1.75} />
            </span>
          ))}
          <span className="my-1 h-px w-5 bg-white/30" />
          {lowerNav.map((Icon, index) => (
            <span key={`lower-${index}`} className="grid size-7 place-items-center text-white">
              <Icon className="size-3.5" strokeWidth={1.75} />
            </span>
          ))}
        </div>
        <span className="grid size-7 place-items-center text-white">
          <Settings className="size-3.5" strokeWidth={1.75} />
        </span>
        <span className="grid size-7 place-items-center text-white">
          <ChevronsLeft className="size-3.5" strokeWidth={1.75} />
        </span>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-11 items-center gap-3 px-3">
          <label className="flex h-7 w-[250px] items-center gap-2 rounded-md border border-[#e6e8ee] bg-white px-2 text-[11px] text-[#98a0ab]">
            <Search className="size-3.5" />
            Search (⌘K)
          </label>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              className="flex h-[22px] items-center gap-1 rounded-md px-1.5 text-[11px] text-[#3c4654]"
            >
              <Building2 className="size-3" />
              Nooraya Logistics
              <ChevronDown className="size-3 text-[#98a0ab]" />
            </button>
            <button
              type="button"
              className="flex h-6 items-center gap-1.5 rounded-md bg-[#fff1e6] px-1.5 text-[11px] font-medium text-[#e57243]"
            >
              <span className="grid size-3.5 place-items-center rounded-full bg-[#ffd7bf] text-[9px]">
                ○
              </span>
              Setup 7 / 8
              <span className="h-1 w-7 overflow-hidden rounded-full bg-[#ffd7bf]">
                <span className="block h-full w-5/6 bg-[#e57243]" />
              </span>
            </button>
            <span className="flex h-6 items-center gap-1 rounded-md border border-[#e6e8ee] bg-white px-1 text-[10px]">
              <Globe className="size-3 text-[#667085]" />
              <span className="rounded bg-[#1a56f0] px-1.5 py-0.5 font-medium text-white">EN</span>
              <span className="px-1 text-[#667085]">AR</span>
              <span className="rounded bg-[#1a56f0] px-1.5 py-0.5 font-medium text-white">123</span>
              <span className="px-1 text-[#667085]">١٢٣</span>
            </span>
            <span className="relative grid size-6 place-items-center rounded-full text-[#667085]">
              <Bell className="size-3.5" />
              <span className="absolute top-1 right-1 size-1.5 rounded-full bg-[#f97316]" />
            </span>
            <button type="button" className="flex items-center gap-1.5 text-[11px] text-[#3c4654]">
              <span className="grid size-5 place-items-center rounded-full bg-[#dbe7ff] text-[9px] font-semibold text-[#1a56f0]">
                DF
              </span>
              Demo Fellow
              <ChevronDown className="size-3 text-[#98a0ab]" />
            </button>
          </div>
        </header>

        <div className="flex min-h-0 flex-1 gap-3 px-4 pb-3">
          <aside className="w-[168px] shrink-0 pt-8">
            <p className="px-1 text-[11px] font-semibold tracking-[0.08em] text-[#98a2b3]">FILTERS</p>
            <ul className="mt-2 space-y-0.5">
              {filters.map((item) => (
                <li key={item.label}>
                  <FilterRow {...item} />
                </li>
              ))}
            </ul>
            <p className="mt-3 px-1 text-[10px] font-semibold tracking-[0.08em] text-[#98a2b3]">AGENT</p>
            <ul className="mt-1 space-y-0.5">
              {agentFilters.map((item) => (
                <li key={item.label}>
                  <FilterRow {...item} />
                </li>
              ))}
            </ul>
          </aside>

          <div className="min-w-0 flex-1 rounded-xl border border-[#e7e9ee] bg-white">
            <div className="flex items-start justify-between gap-3 border-b border-[#f0f2f5] px-3 py-2.5">
              <div>
                <p className="text-[13px] font-semibold text-[#1c2430]">Real lead workspace</p>
                <p className="max-w-[420px] text-[10px] leading-4 text-[#98a2b3]">
                  Import Excel, CSV, TSV, ODS, or JSON. Name and Company are required; every other
                  field can be enriched later.
                </p>
              </div>
              <div className="flex shrink-0 gap-1.5">
                <button
                  type="button"
                  className="flex h-[22px] items-center gap-1 rounded-md border border-[#e6e8ee] bg-white px-2 text-[10px] font-semibold tracking-wide text-[#3c4654]"
                >
                  <Sparkles className="size-3" />
                  GENERATE LEADS
                </button>
                <button
                  type="button"
                  className="flex h-[22px] items-center gap-1 rounded-md bg-[#1a56f0] px-2 text-[10px] font-semibold tracking-wide text-white"
                >
                  <Upload className="size-3" />
                  IMPORT LEADS
                </button>
              </div>
            </div>
            <div className="flex justify-end px-3 py-1.5">
              <button
                type="button"
                className="flex h-[22px] items-center gap-1 rounded-md border border-[#e6e8ee] px-2 text-[10px] font-semibold tracking-wide text-[#3c4654]"
              >
                <Columns3 className="size-3" />
                COLUMNS
              </button>
            </div>
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="text-[10px] text-[#98a2b3]">
                  <th className="w-8 px-2 font-medium" />
                  <th className="px-2 py-1.5 font-medium">Name</th>
                  <th className="px-2 font-medium">Title</th>
                  <th className="px-2 font-medium">Company</th>
                  <th className="px-2 font-medium">Tier</th>
                  <th className="px-2 font-medium">Data Points</th>
                  <th className="px-2 text-right font-medium">Ledger cost</th>
                  <th className="px-2 text-right font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.name} className="border-t border-[#f2f4f7] align-middle">
                    <td className="px-2 py-3">
                      <span className="block size-3 rounded-[3px] border border-[#d0d5dd]" />
                    </td>
                    <td className="px-2 py-3">
                      <span className="flex items-center gap-2">
                        <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#eef1f4] text-[8px] font-semibold text-[#667085]">
                          {lead.initials}
                        </span>
                        <span className="text-[11px] font-medium whitespace-nowrap text-[#1c2430]">
                          {lead.name}
                        </span>
                      </span>
                    </td>
                    <td className="max-w-[150px] px-2 py-3 text-[11px] leading-4 text-[#475467]">
                      {lead.title}
                    </td>
                    <td className="max-w-[120px] px-2 py-3 text-[11px] leading-4 text-[#475467]">
                      {lead.company}
                    </td>
                    <td className="px-2 py-3">
                      <span className="rounded border border-[#e4e7ec] px-1.5 py-0.5 text-[8px] font-semibold tracking-wide text-[#475467]">
                        {lead.tier}
                      </span>
                    </td>
                    <td className="px-2 py-3">
                      <span className="flex gap-1 text-[#98a2b3]">
                        {lead.email ? (
                          <span className="grid size-5 place-items-center rounded border border-[#e4e7ec]">
                            <Mail className="size-3" />
                          </span>
                        ) : null}
                        {lead.phone ? (
                          <span className="grid size-5 place-items-center rounded border border-[#e4e7ec]">
                            <Phone className="size-3" />
                          </span>
                        ) : null}
                      </span>
                    </td>
                    <td className="px-2 py-3 text-right text-[10px] leading-3 text-[#98a2b3]">
                      <span className="block">{lead.clay[0]}</span>
                      <span className="block">{lead.clay[1]}</span>
                      <span className="mt-1 block">{lead.kimi[0]}</span>
                      <span className="block">{lead.kimi[1]}</span>
                    </td>
                    <td className="px-2 py-3 text-right">
                      <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#e23b3b]">
                        View
                        <MoreHorizontal className="size-3.5 text-[#98a2b3]" />
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
  )
}

function FilterRow({
  label,
  icon: Icon,
  count,
}: {
  label: string
  icon: typeof Building2
  count?: string
}) {
  return (
    <div className="flex h-7 items-center gap-1.5 px-1 text-[11px] text-[#475467]">
      <Icon className="size-3.5 shrink-0 text-[#98a2b3]" strokeWidth={1.75} />
      <span className="whitespace-nowrap">{label}</span>
      {count ? (
        <span className="ml-auto rounded-full bg-[#eef1f4] px-1.5 text-[10px] text-[#667085]">
          {count}
        </span>
      ) : (
        <span className="ml-auto" />
      )}
      <Plus className="size-3 text-[#c5ccd6]" />
    </div>
  )
}
