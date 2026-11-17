"use client"

import Image from "next/image"
import { Header } from "@/components/site/header"
import { CampaignButton } from "@/components/site/campaign"

const leads = [
  ["KA", "Khalid Al-Rumaihi", "Doha Meridian Capital", "Ready"],
  ["HA", "Hessa Al-Mansoori", "Gulf Crescent Bank", "Enriched"],
  ["JW", "James Whitfield", "Thameside Re", "Ready"],
  ["PR", "Priya Raman", "Harbourline Specialty", "Enriched"],
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0758e8] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 h-[640px] w-[58%] opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.55) 1.15px, transparent 1.25px)",
          backgroundSize: "13.25px 11.25px",
          maskImage:
            "linear-gradient(90deg, #000 0%, #000 72%, transparent 100%), linear-gradient(#000 0%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, #000 0%, #000 72%, transparent 100%)",
        }}
      />
      <Header />
      <div className="relative z-10 grid items-start gap-8 px-6 pt-8 pb-72 sm:px-10 lg:min-h-[860px] lg:grid-cols-[minmax(0,640px)_minmax(420px,1fr)] lg:px-10 lg:pt-16 lg:pb-0">
        <div className="max-w-[691px]">
          <p className="text-sm font-semibold tracking-wide">
            THE GULF’S OUTBOUND GROWTH SYSTEM
          </p>
          <h1 className="mt-6 max-w-[680px] text-[clamp(42px,6vw,72px)] leading-[1.11] font-normal tracking-[-0.02em]">
            Build a position.Scale
            <br />
            every relationship.
          </h1>
          <p className="mt-6 max-w-[640px] text-base leading-6 text-white/95">
            Scaleon connects positioning, research, outreach and follow-up into
            one system that learns from the market.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <CampaignButton withArrow={false} />
            <a href="#system" className="px-3 py-3.5 text-sm font-medium">
              See how it compounds
            </a>
          </div>
        </div>
        <ProductPreview />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-[280px] w-full overflow-hidden sm:h-[340px] lg:h-[381px]">
        <Image
          src="/figma/hill.png"
          alt=""
          width={1280}
          height={720}
          className="absolute top-[-66.6%] left-[-3.13%] h-[252.57%] w-[118.82%] max-w-none"
        />
      </div>
      <p className="absolute bottom-8 left-6 z-10 text-sm font-medium tracking-wide text-white sm:left-10">
        Trusted By
      </p>
    </section>
  )
}

function ProductPreview() {
  return (
    <div className="relative z-20 mt-2 overflow-hidden rounded-sm border border-white/20 bg-[#f4f6f8] text-[#111] shadow-[0_24px_60px_rgba(4,24,80,0.28)] lg:absolute lg:top-[210px] lg:right-0 lg:mt-0 lg:w-[min(760px,54vw)]">
      <div className="flex min-h-[420px]">
        <aside className="flex w-12 shrink-0 flex-col items-center gap-3 bg-[#0b50e9] py-3 text-white">
          <span className="grid size-7 place-items-center bg-white/15 text-[10px] font-semibold">
            SO
          </span>
          {["Home", "Radar", "CRM", "Leads", "Inbox"].map((item, index) => (
            <span
              key={item}
              title={item}
              className={`grid size-7 place-items-center text-[10px] ${
                index === 0 ? "bg-white text-[#0b50e9]" : "text-white/80"
              }`}
            >
              {item.slice(0, 1)}
            </span>
          ))}
        </aside>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 border-b border-[#e6e8ec] bg-white px-3 py-2 text-[11px] text-[#617080]">
            <span className="min-w-32 flex-1 rounded border border-[#e6e8ec] px-2 py-1">
              Search (⌘K)
            </span>
            <span className="rounded border border-[#e6e8ec] px-2 py-1">
              Nooraya Logistics
            </span>
            <span className="rounded bg-[#fff1e8] px-2 py-1 text-[#e57243]">
              Setup 7 / 8
            </span>
            <span className="rounded border border-[#e6e8ec] px-2 py-1">EN</span>
            <span className="rounded border border-[#e6e8ec] px-2 py-1">AR</span>
          </div>
          <div className="space-y-3 p-4">
            <div>
              <p className="text-base font-medium">Welcome back, Demo</p>
              <p className="text-xs text-[#8b93a0]">Tuesday, November 3, 2026</p>
            </div>
            <div className="border border-[#e6e8ec] bg-white p-4">
              <p className="text-[11px] font-semibold tracking-wide text-[#e57243]">
                BD & PARTNERSHIPS PILOT
              </p>
              <p className="mt-1 font-heading text-xl leading-7 tracking-[-0.02em]">
                BUILD A GROUNDED PIPELINE, ONE CLEAR STEP AT A TIME.
              </p>
              <p className="mt-2 text-xs leading-5 text-[#666]">
                Strategy gives Scaleon context. Your real lead list gives it
                targets. Clay enriches only the leads you choose.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Your next step</p>
              <p className="text-xs text-[#8b93a0]">
                Worked out from your setup checks and your latest launch.
              </p>
              <div className="mt-2 flex items-start gap-2 border border-[#ffe1c2] bg-[#fff8f1] p-3">
                <span className="mt-0.5 size-2 shrink-0 bg-[#e57243]" />
                <div>
                  <p className="text-sm">Pick Broad variants for Launch Nooraya Q4</p>
                  <p className="text-xs text-[#8b93a0]">
                    2 Broad campaigns have variants ready. Nothing sends until you
                    launch.
                  </p>
                </div>
              </div>
            </div>
            <ul className="hidden divide-y divide-[#eef0f3] border border-[#e6e8ec] bg-white sm:block">
              {leads.map(([initials, name, company, status]) => (
                <li key={name} className="flex items-center gap-3 px-3 py-2 text-xs">
                  <span className="grid size-7 place-items-center rounded-full bg-[#e8eefc] text-[10px] font-medium text-[#0b50e9]">
                    {initials}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-medium">{name}</span>
                    <span className="block truncate text-[#8b93a0]">{company}</span>
                  </span>
                  <span className="text-[#0b50e9]">{status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
