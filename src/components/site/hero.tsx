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
    <section id="top" className="bg-[#014fce] text-white">
      <div className="relative mx-auto hidden w-full max-w-[1440px] overflow-hidden [container-type:inline-size] lg:block">
        <div className="relative aspect-[1440/951] w-full">
          <div className="absolute top-0 left-0 h-[951px] w-[1440px] origin-top-left [transform:scale(calc(100cqw/1440))]">
            <DotField />
            <ProductPreview className="absolute top-[277px] left-[624px] z-[1] h-[720px] w-[1058px]" />
            <Mountain className="absolute top-[570px] left-0 z-[2] h-[381px] w-[1440px]" />
            <HeroCopy className="absolute top-[130px] left-[24px] z-[3] w-[691px]" />
            <p className="absolute top-[841px] left-[26px] z-[3] text-sm leading-[30px] font-medium">
              Trusted By
            </p>
            <Header className="absolute top-[16px] left-[24px] z-[4] h-[44px] w-[1392px]" />
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <Header className="relative z-[4]" showMenu />
        <HeroCopy className="relative z-[3] px-4 pt-6" />
        <div className="relative mt-8 h-[520px] overflow-hidden">
          <ProductPreview className="absolute inset-x-0 top-0 z-[1] h-[640px]" />
          <Mountain className="absolute bottom-0 left-0 z-[2] h-[240px] w-full" />
          <p className="absolute bottom-4 left-6 z-[3] text-sm font-medium">Trusted By</p>
        </div>
      </div>
    </section>
  )
}

function DotField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-0 left-0 h-[600px] w-[838px]"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.72) 1.15px, transparent 1.3px)",
        backgroundSize: "13.25px 11.25px",
      }}
    />
  )
}

function Mountain({ className }: { className: string }) {
  return (
    <div className={`pointer-events-none overflow-hidden ${className}`}>
      <Image
        src="/figma/hill.png"
        alt=""
        width={1280}
        height={720}
        unoptimized
        priority
        className="max-w-none"
        style={{
          position: "absolute",
          height: "252.57%",
          width: "118.82%",
          left: "-3.13%",
          top: "-66.6%",
          maxWidth: "none",
        }}
      />
    </div>
  )
}

function HeroCopy({ className }: { className: string }) {
  return (
    <div className={`flex flex-col items-start justify-center gap-6 px-4 py-2.5 ${className}`}>
      <p className="text-sm leading-5 font-semibold">THE GULF’S OUTBOUND GROWTH SYSTEM</p>
      <h1 className="w-full max-w-[659px] text-[clamp(40px,5vw,72px)] leading-[1.11] font-normal tracking-[-0.02em] lg:text-[72px] lg:leading-[80px] lg:tracking-[-1.44px]">
        Build a position.Scale every relationship.
      </h1>
      <p className="max-w-[659px] text-base leading-6">
        Scaleon connects positioning, research, outreach and follow-up into one
        system that learns from the market.
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <CampaignButton withArrow={false} className="px-3 py-3.5 text-sm leading-5 font-medium" />
        <a href="#system" className="px-3 py-3.5 text-sm leading-5 font-medium">
          See how it compounds
        </a>
      </div>
    </div>
  )
}

function ProductPreview({ className }: { className: string }) {
  return (
    <div className={`overflow-hidden bg-[#f4f6f8] text-[#111] ${className}`}>
      <div className="flex h-full">
        <aside className="flex w-12 shrink-0 flex-col items-center gap-3 bg-[#0b50e9] py-3 text-white">
          <span className="grid size-7 place-items-center bg-white/15 text-[10px] font-semibold">SO</span>
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
            <span className="min-w-32 flex-1 border border-[#e6e8ec] px-2 py-1">Search (⌘K)</span>
            <span className="border border-[#e6e8ec] px-2 py-1">Nooraya Logistics</span>
            <span className="bg-[#fff1e8] px-2 py-1 text-[#e57243]">Setup 7 / 8</span>
            <span className="border border-[#e6e8ec] px-2 py-1">EN</span>
            <span className="border border-[#e6e8ec] px-2 py-1">AR</span>
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
                Strategy gives Scaleon context. Your real lead list gives it targets.
                Clay enriches only the leads you choose.
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
                    2 Broad campaigns have variants ready. Nothing sends until you launch.
                  </p>
                </div>
              </div>
            </div>
            <ul className="divide-y divide-[#eef0f3] border border-[#e6e8ec] bg-white">
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
