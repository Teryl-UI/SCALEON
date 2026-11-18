"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CampaignButton } from "@/components/site/campaign"

const stages = [
  {
    id: "position",
    when: "W0",
    label: "POSITION",
    title: "Find the angle the market answers.",
    body: "Position is the work before anything is sent. You choose the industries, the roles and the approach those buyers will recognise. You gather the proof they will believe, and you watch the signals that say this week is the moment to speak.",
  },
  {
    id: "build",
    when: "W1–3",
    label: "BUILD",
    title: "Turn the position into a campaign.",
    body: "Build is where that position becomes a campaign that can send. The lines come from the role, the week and the proof. English and Arabic variants sit ready, and the inboxes are warmed. Nothing leaves until you launch.",
  },
  {
    id: "launch",
    when: "W4",
    label: "LAUNCH",
    title: "Connect the channels and go live.",
    body: "Launch is the week the market is actually reached. Email, WhatsApp, LinkedIn and calls run from one plan. The lead magnet, the booking link and the CRM are connected, so a reply has a next step.",
  },
  {
    id: "compound",
    when: "M2+",
    label: "COMPOUND",
    title: "Let the replies rewrite the offer.",
    body: "Compound is what the market teaches you after the first replies. You keep the angles that earn meetings, practice the close, and update the proof and the competitive edge before the next send.",
  },
] as const

const leads = [
  ["KA", "Khalid Al-Rumaihi", "Director, Project Finance", "Doha Meridian Capital", "BROAD", "Clay 17 cr · $0.17"],
  ["HA", "Hessa Al-Mansoori", "Head of Infrastructure Finance", "Gulf Crescent Bank", "BROAD", "Clay 23 cr · $0.23"],
  ["JW", "James Whitfield", "Head of Property & Technical Underwriting", "Thameside Re", "BROAD", "Clay 26 cr · $0.26"],
  ["PR", "Priya Raman", "Senior Broker, Construction & Energy", "Harbourline Specialty", "BROAD", "Clay 20 cr · $0.20"],
  ["TH", "Tariq Haddad", "VP Risk, Digital Infrastructure", "Sahara Edge Data Centres", "BROAD", "Clay 13 cr · $0.13"],
  ["NA", "Noura Al-Suwaidi", "Chief Risk Officer", "Emirates Infra Partners", "HYPER", "Clay 43 cr · $0.43"],
]

const filters = [
  ["Industry", ""],
  ["Title", "20"],
  ["Size", ""],
  ["Tech", ""],
  ["Signals", "18"],
  ["Engagement", "17"],
  ["Verification", "18"],
]

const reviews = [
  [
    "The positioning gave us a clearer way into the market—and a campaign the team could actually run.",
    "Founder, B2B technology",
  ],
  [
    "Scaleon connected the message, the account list and the follow-up. We stopped treating outreach as separate tasks.",
    "Commercial lead, GCC",
  ],
  [
    "The system showed us what buyers responded to before we committed more budget to the wrong direction.",
    "Growth director, services",
  ],
]

export function SignalSection() {
  const stats = ["3", "2", "1"]
  return (
    <section id="signal" className="bg-white px-6 py-16 sm:px-10 lg:px-8 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1376px] items-center gap-12 2xl:max-w-[1760px] lg:grid-cols-[minmax(0,485px)_1fr]">
        <div className="max-w-[485px]">
          <p className="text-base font-semibold text-[#e57243]">
            THE GULF’S OUTBOUND GROWTH SYSTEM
          </p>
          <h2 className="mt-4 font-heading text-[clamp(36px,3.61vw,76px)] leading-[1.23] font-medium tracking-[-0.02em] text-[#111]">
            From first signal
            <br />
            to closed deal.
          </h2>
          <p className="mt-4 text-base leading-6 text-[#666]">
            One campaign view connects the market insight, the right people and
            the follow-up—so momentum does not disappear between tools.
          </p>
          <div className="mt-4">
            <CampaignButton />
          </div>
        </div>
        <div className="grid border-t border-[#dfe3e8] sm:grid-cols-3">
          {stats.map((value) => (
            <div
              key={value}
              className="border-t border-[#dfe3e8] px-4 py-12 sm:border-t-0 sm:border-r"
            >
              <p className="font-heading text-[72px] leading-none font-semibold tracking-[-0.02em] text-[#0758e8]">
                {value}
              </p>
              <p className="mt-2 max-w-[120px] text-base leading-6 text-[#666] uppercase">
                weeks to first launch
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function OperatingSection() {
  const [active, setActive] = useState(0)
  const stage = stages[active]

  return (
    <section id="system" className="bg-[#f9f9f7] px-4 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1242px] text-center 2xl:max-w-[1600px]">
        <p className="text-base font-semibold text-[#e57243]">FROM POSITION TO PIPELINE</p>
        <h2 className="mt-4 font-heading text-[clamp(36px,3.61vw,76px)] leading-[1.23] font-medium tracking-[-0.02em] text-[#111]">
          One operating view.
          <br />
          Four compounding moves.
        </h2>
        <p className="mx-auto mt-4 max-w-[720px] text-base leading-6 text-[#666]">
          Choose a stage to see how Scaleon turns a point of view into qualified
          commercial conversations.
        </p>
      </div>
      <div className="mx-auto mt-10 grid w-full max-w-[1242px] sm:grid-cols-4 2xl:max-w-[1600px]" role="tablist">
        {stages.map((item, index) => {
          const selected = index === active
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(index)}
              className={`flex h-[94px] items-center gap-3 px-6 text-left sm:px-8 ${
                selected
                  ? "bg-[#0b50e9] text-white"
                  : "border-l border-[#e5e5e5] bg-white text-[#0d0d0d]"
              }`}
            >
              <span className={`text-xs ${selected ? "text-white" : "text-[#9b9b9b]"}`}>
                {item.when}
              </span>
              <span className="font-heading text-base uppercase">{item.label}</span>
              <span className={`ml-auto text-sm ${selected ? "text-white" : "text-[#9b9b9b]"}`}>
                →
              </span>
            </button>
          )
        })}
      </div>
      <div className="mx-auto grid w-full max-w-[1242px] items-center gap-8 bg-white px-4 py-10 2xl:max-w-[1600px] lg:grid-cols-[minmax(0,485px)_1fr] lg:px-6 lg:py-16">
        <div>
          <p className="text-base font-semibold text-[#e57243]">{stage.label}</p>
          <h3 className="mt-6 font-heading text-[clamp(32px,3.61vw,68px)] leading-[1.23] font-medium tracking-[-0.02em] text-[#111]">
            {stage.title}
          </h3>
          <p className="mt-2 text-base leading-6 text-[#666]">{stage.body}</p>
          <div className="mt-6">
            <CampaignButton tone="blue" />
          </div>
        </div>
        <StageVisual id={stage.id} />
      </div>
    </section>
  )
}

function StageVisual({ id }: { id: (typeof stages)[number]["id"] }) {
  if (id === "build") return <BuildCard />
  if (id === "launch") return <LaunchOrbit />
  if (id === "compound") return <CompoundCard />
  return <PositionCards />
}

function Bars({ heights }: { heights: number[] }) {
  return (
    <div className="mt-4 flex h-28 items-end gap-1.5">
      {heights.map((height, index) => (
        <span
          key={index}
          className="w-3 bg-gradient-to-t from-[#8dc9fb] to-[#0b50e9]"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  )
}

function PositionCards() {
  const cards = [
    {
      title: "PROOF",
      label: "Case Proof",
      note: "Numerous meeting carried on the deck they trust",
      className: "top-0 right-0",
    },
    {
      title: "SIGNALS",
      label: "Lead Magnet",
      note: "Hiring and Funding say when it is time to reach out",
      className: "top-16 right-10",
    },
    {
      title: "TARGETS",
      label: "Lead Magnet",
      note: "Name the industries and Gulf roles the first line meets.",
      className: "top-32 left-0",
    },
  ]
  return (
    <div className="relative grid gap-4 lg:block lg:min-h-[460px]">
      {cards.map((card) => (
        <article
          key={card.title}
          className={`w-full rounded-[21px] border border-[#e5e5e5] bg-gradient-to-br from-[#8dc9fb] via-white to-white p-5 shadow-sm lg:absolute lg:w-[280px] ${card.className}`}
        >
          <p className="font-heading text-lg text-[#211d25]">{card.title}</p>
          <div className="mt-3 flex items-center justify-between text-sm text-[#787b80]">
            <span>{card.label}</span>
            <span className="bg-[#e7faf3] px-1.5 py-0.5 text-[11px] text-[#23d592]">20%</span>
          </div>
          <p className="mt-2 text-sm text-[#abb2bc]">{card.note}</p>
          <Bars heights={[40, 62, 48, 80, 55, 90, 70, 44, 76, 58]} />
          <p className="mt-2 text-xs text-[#a4a4a4]">
            {card.title === "SIGNALS" ? "Hiring" : "Funding"}
          </p>
        </article>
      ))}
    </div>
  )
}

function BuildCard() {
  return (
    <article className="ml-auto w-full max-w-[445px] rounded-[32px] border border-[#e5e5e5] bg-gradient-to-br from-[#89bdff] via-white to-white p-7 shadow-[0_3px_12px_rgba(7,84,234,0.08)]">
      <p className="font-heading text-[28px] text-[#211d25]">BUILD</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-heading text-2xl text-[#787b80]">Variant Card</p>
        <span className="bg-[#0f5be5] px-2 py-1 text-[11px] text-white">+2 READY</span>
      </div>
      <p className="mt-4 text-lg text-[#211d25]">Heads of sales in the Gulf</p>
      <p className="text-[15px] text-[#aab0b8]">
        This week they are hiring. The proof is 14 meetingd
      </p>
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between rounded-[11px] border border-[#0754ea] bg-[#fafafa] px-4 py-3 shadow-[0_3px_6px_rgba(27,98,238,0.15)]">
          <p>
            English <span className="text-xs text-[#abb2bc]">(Ready)</span>
          </p>
          <span className="size-4 rounded-full border-4 border-[#0754ea]" />
        </div>
        <div className="flex items-center justify-between rounded-[11px] bg-[#fafafa] px-4 py-3 shadow-[0_3px_6px_rgba(133,145,167,0.15)]">
          <p>
            Arabic <span className="text-xs text-[#abb2bc]">(جاهز)</span>
          </p>
          <span className="size-4 rounded-full border border-[#d5d8de]" />
        </div>
      </div>
      <button
        type="button"
        className="mt-8 w-full rounded-[9px] bg-gradient-to-r from-[#4796f8] to-[#4d85f1] py-3 text-lg text-white"
      >
        Pick Broad variants
      </button>
    </article>
  )
}

function LaunchOrbit() {
  const logos = [
    { src: "/figma/linkedin.svg", label: "LinkedIn", className: "top-[8%] left-[28%]" },
    { src: "/figma/whatsapp.svg", label: "WhatsApp", className: "top-[38%] left-[8%]" },
    { src: "/figma/gmail.svg", label: "Gmail", className: "bottom-[12%] left-[22%]" },
    { src: "/figma/facebook.svg", label: "Facebook", className: "bottom-[28%] left-[42%]" },
    { src: "/figma/outlook.svg", label: "Outlook", className: "bottom-[8%] right-[8%]" },
  ]
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[520px]">
      <div className="absolute inset-[8%] rounded-full border border-[#d7e4ff]" />
      <div className="absolute inset-[18%] rounded-full border border-[#c5d8ff]" />
      <div className="absolute inset-[30%] rounded-full border border-[#9ebfff] bg-[#f4f8ff]" />
      {logos.map((logo) => (
        <span
          key={logo.label}
          className={`absolute grid size-11 place-items-center rounded-[13px] border border-[#d9d9d9] bg-[#fcfcfc] p-2 ${logo.className}`}
        >
          <Image src={logo.src} alt={logo.label} width={22} height={22} />
        </span>
      ))}
    </div>
  )
}

function CompoundCard() {
  return (
    <article className="relative ml-auto min-h-[420px] w-full max-w-[471px] overflow-hidden rounded-[34px] border border-[#e5e5e5] bg-gradient-to-br from-[#89bdff] via-white to-[#e7f0ff] p-8">
      <div className="flex items-start justify-between">
        <p className="font-heading text-[26px] text-[#787b80]">Winning Angle</p>
        <span className="bg-[#c6f0e0] px-2 py-1 text-[11px] text-[#23d592]">Success</span>
      </div>
      <p className="font-heading text-6xl text-[#5b86c4]">68%</p>
      <div className="mt-16 rounded-[24px] bg-gradient-to-b from-[#0754ea] to-[#2359c0] p-5 text-white">
        <div className="flex items-center justify-between text-[22px]">
          <p>The next offer</p>
          <span className="rounded-full bg-[#4f89fb] px-4 py-2 text-base">READY</span>
        </div>
        <p className="mt-4 text-[22px] text-[#eaeaea]">Rifler Constructions</p>
        <div className="mt-5 h-[11px] rounded-full bg-[#ccc]">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#0b49c2] to-[#042f84]" />
        </div>
      </div>
    </article>
  )
}

export function PipelineSection() {
  const [query, setQuery] = useState("")
  const visible = leads.filter((row) =>
    row.join(" ").toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <section id="pipeline" className="bg-white px-6 py-16 sm:px-10">
      <div className="mx-auto w-full max-w-[1376px] 2xl:max-w-[1760px]">
        <p className="text-base font-semibold text-[#e57243]">COMPOUNDING GROWTH</p>
        <h2 className="mt-4 max-w-[16ch] font-heading text-[clamp(36px,3.61vw,76px)] leading-[1.23] font-medium tracking-[-0.02em]">
          <span className="text-[#111]">From first angle to</span>
          <br />
          <span className="text-[#c5c9d1]">compound pipeline</span>
        </h2>
        <div className="mt-10 overflow-hidden border border-[#e6eaf0] bg-white shadow-sm">
          <div className="flex flex-wrap items-center gap-2 border-b border-[#e6eaf0] px-3 py-2 text-xs text-[#617080]">
            <label className="min-w-40 flex-1">
              <span className="sr-only">Search leads</span>
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search (⌘K)"
                className="h-8 rounded-none border-[#e6eaf0] text-xs"
              />
            </label>
            <span className="rounded border border-[#e6eaf0] px-2 py-1">Nooraya Logistics</span>
            <span className="rounded bg-[#fff1e8] px-2 py-1 text-[#e57243]">Setup 7 / 8</span>
            <span className="ml-auto text-[#0b50e9]">Demo Fellow</span>
          </div>
          <div className="grid lg:grid-cols-[220px_1fr]">
            <aside className="hidden border-r border-[#e6eaf0] p-4 text-sm lg:block">
              <p className="text-xs tracking-wide text-[#8b93a0]">FILTERS</p>
              <ul className="mt-3 space-y-2">
                {filters.map(([label, count]) => (
                  <li key={label} className="flex items-center justify-between text-[#334]">
                    <span>{label}</span>
                    <span className="text-[#e57243]">{count}</span>
                  </li>
                ))}
              </ul>
            </aside>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
                <div>
                  <p className="text-sm font-medium">Real lead workspace</p>
                  <p className="text-xs text-[#8b93a0]">
                    Import Excel, CSV, TSV, ODS, or JSON. Name and Company are required.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="border border-[#dfe3e8] px-3 py-2 text-xs">Generate leads</span>
                  <span className="bg-[#0b50e9] px-3 py-2 text-xs text-white">Import leads</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left text-xs">
                  <thead className="text-[#8b93a0]">
                    <tr className="border-y border-[#eef0f3]">
                      {["Name", "Title", "Company", "Tier", "Ledger cost", "Action"].map((heading) => (
                        <th key={heading} className="px-3 py-2 font-medium">
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {visible.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-3 py-8 text-sm text-[#666]">
                          No leads match “{query}”. Clear the search to see the imported list.
                        </td>
                      </tr>
                    ) : (
                      visible.map((row) => (
                        <tr key={row[1]} className="border-b border-[#f2f4f7]">
                          <td className="px-3 py-3">
                            <span className="mr-2 inline-grid size-6 place-items-center rounded-full bg-[#eef2f8] text-[10px]">
                              {row[0]}
                            </span>
                            {row[1]}
                          </td>
                          <td className="px-3 py-3 text-[#445]">{row[2]}</td>
                          <td className="px-3 py-3">{row[3]}</td>
                          <td className="px-3 py-3">
                            <span className="border border-[#dfe3e8] px-1.5 py-0.5">{row[4]}</span>
                          </td>
                          <td className="px-3 py-3 text-[#617080]">{row[5]}</td>
                          <td className="px-3 py-3 text-[#0b50e9]">View</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <p className="px-4 py-3 text-xs text-[#8b93a0]">
                Showing 1 to {visible.length} of 20 Leads Found
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function GrowthSection() {
  return (
    <section id="growth" className="overflow-hidden bg-white px-6 py-16 sm:px-10">
      <div className="mx-auto grid w-full max-w-[1376px] items-end gap-8 2xl:max-w-[1760px] lg:grid-cols-2">
        <div>
          <p className="text-base font-semibold text-[#e57243]">COMPOUNDING GROWTH</p>
          <h2 className="mt-4 font-heading text-[clamp(36px,3.61vw,76px)] leading-[1.23] font-medium tracking-[-0.02em] text-[#111]">
            From first touch to
            <br />
            long-term customer.
          </h2>
        </div>
        <div>
          <p className="max-w-[560px] text-base leading-6 text-[#666]">
            Every response narrows the distance between the market you can reach
            and the relationships your team can close.
          </p>
          <div className="mt-4">
            <CampaignButton />
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-10 h-[420px] w-full max-w-[1300px] sm:h-[520px] 2xl:h-[640px] 2xl:max-w-[1760px]">
        <span className="absolute top-8 bottom-8 left-0 w-2 bg-[#0754ea]" />
        <Image
          src="/figma/funnel-b.svg"
          alt=""
          width={1301}
          height={502}
          className="absolute top-0 left-0 h-full w-full"
        />
        <Image
          src="/figma/funnel-a.svg"
          alt=""
          width={1301}
          height={376}
          className="absolute top-[12%] left-0 h-[75%] w-full"
        />
        <Image
          src="/figma/funnel-c.svg"
          alt=""
          width={1300}
          height={275}
          className="absolute top-[22%] left-0 h-[55%] w-full"
        />
        {[18, 40, 64, 86].map((left) => (
          <span
            key={left}
            className="absolute top-[8%] bottom-[18%] w-px bg-white/80"
            style={{ left: `${left}%` }}
          />
        ))}
        <div className="absolute right-[6%] bottom-[18%] left-[12%] flex items-center justify-between">
          {["1910", "1510", "1000", "1000"].map((value, index) => (
            <div key={`${value}-${index}`} className="flex items-center">
              <span className="rounded-full bg-white px-3 py-1.5 text-[13px] text-black shadow-sm">
                {value}
              </span>
              {index < 3 ? (
                <Image src="/figma/dash.svg" alt="" width={133} height={13} className="mx-1 hidden sm:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ReviewsSection() {
  const [page, setPage] = useState(0)
  const pages = [reviews, [...reviews].reverse()]
  const current = pages[page]

  return (
    <section id="proof" className="bg-[#f8f8f7] px-6 py-10 sm:px-10">
      <div className="mx-auto w-full max-w-[1376px] 2xl:max-w-[1760px]">
      <h2 className="font-heading text-[clamp(36px,3.61vw,76px)] leading-[1.23] font-medium tracking-[-0.02em] text-[#111]">
        What our customers say
      </h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {current.map(([quote, attribution]) => (
          <article key={attribution + quote.slice(0, 12)} className="flex min-h-[395px] flex-col bg-white p-5">
            <p className="font-heading text-[82px] leading-none font-bold text-[#e8472a]">“</p>
            <p className="mt-2 text-xl leading-[30px] text-[#0e0e0e]">{quote}</p>
            <p className="mt-auto pt-10 text-sm leading-5 text-[#0e0e0e]">{attribution}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 flex w-32 gap-1.5" role="tablist" aria-label="Review pages">
        {[0, 1].map((index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-label={`Review page ${index + 1}`}
            aria-selected={page === index}
            onClick={() => setPage(index)}
            className={`h-1 flex-1 ${page === index ? "bg-[#e8472a]" : "bg-[#d9dee5]"}`}
          />
        ))}
      </div>
      </div>
    </section>
  )
}

export function SignupSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle")

  function submit(event: React.FormEvent) {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("error")
      return
    }
    setStatus("sent")
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#042e70] text-white">
      <Image
        src="/figma/alps.jpg"
        alt=""
        width={1264}
        height={848}
        className="absolute top-[-3.74%] left-0 h-[156.83%] w-full max-w-none object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,84,234,0.6)] via-[rgba(7,84,234,0.38)] via-48% to-[rgba(0,5,15,0.27)]" />
      <div className="relative mx-auto w-full max-w-[1360px] px-6 py-20 sm:px-10 2xl:max-w-[1760px]">
        <p className="text-sm font-medium text-[#dbeb47]">THE MOST ADAPTABLE WEB</p>
        <h2 className="mt-3 max-w-[850px] font-heading text-[clamp(36px,3.61vw,76px)] leading-[1.23] font-medium tracking-[-0.02em]">
          From planning to
          <br />
          completion, we’ve got you.
        </h2>
        <p className="mt-4 max-w-[620px] text-sm leading-[22px]">
          Take control of your projects from start to finish.
          <br />
          You’ll never miss a step along the way.
        </p>
        <form onSubmit={submit} className="mt-8 flex max-w-[520px] flex-col gap-3 sm:flex-row sm:items-center">
          <label className="sr-only" htmlFor="signup-email">
            Email
          </label>
          <Input
            id="signup-email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              setStatus("idle")
            }}
            placeholder="What’s your email?"
            className="h-[51px] w-full rounded-none border-0 bg-white px-3 text-sm text-[#617080] sm:w-[324px]"
            aria-invalid={status === "error" ? true : undefined}
          />
          <Button
            type="submit"
            className="h-auto gap-2 rounded-none bg-[#e8472a] px-3 py-3.5 text-sm font-medium text-white hover:bg-[#d13d22]"
          >
            Start a Campaign
            <span className="inline-flex size-[22px] items-center justify-center">
              <span className="-rotate-[120deg]">
                <Image src="/figma/arrow.svg" alt="" width={16} height={16} />
              </span>
            </span>
          </Button>
        </form>
        {status === "error" ? (
          <p className="mt-3 text-sm text-[#ffd0c6]" role="alert">
            Enter an email address to start the campaign.
          </p>
        ) : null}
        {status === "sent" ? (
          <p className="mt-3 text-sm text-white" role="status">
            {email.trim()} is on the list. We’ll open the first campaign from here.
          </p>
        ) : null}
        <div className="mt-24 border-t border-white/30 pt-8 text-right text-base">
          Scaleon 2026. all Rights Reserved
        </div>
      </div>
    </section>
  )
}
