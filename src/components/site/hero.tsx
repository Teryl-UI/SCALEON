"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { Header } from "@/components/site/header"
import { CampaignButton } from "@/components/site/campaign"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#014fce] text-white">
      <Image
        src="/figma/dots.svg"
        alt=""
        width={838}
        height={600}
        unoptimized
        priority
        className="pointer-events-none absolute top-0 left-0 h-[600px] w-[838px] max-w-none lg:hidden"
      />
      <div className="relative hidden w-full overflow-hidden [container-type:inline-size] lg:block">
        <div className="h-[951px] w-[1440px] [zoom:calc(100cqw/1440px)]">
            <DotField />
            <ProductPreview className="absolute top-[277px] left-[624px] z-[2] h-[720px] w-[1058px]" />
            <Mountain className="absolute top-[570px] left-0 z-[2] h-[381px] w-[1440px]" />
            <HeroCopy className="absolute top-[130px] left-[24px] z-[3] w-[691px]" />
            <p className="absolute top-[841px] left-[26px] z-[3] text-sm leading-[30px] font-medium">
              Trusted By
            </p>
            <Header className="absolute top-[16px] left-[24px] z-[4] h-[44px] w-[1392px]" />
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
    <Image
      src="/figma/dots.svg"
      alt=""
      width={838}
      height={600}
      unoptimized
      priority
      className="pointer-events-none absolute top-0 left-0 h-[600px] w-[838px] max-w-none"
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
    <div className={`overflow-hidden bg-[#f3f4f6] text-[#111] ${className}`}>
      <div className="flex h-full w-[1058px]">
        <aside className="flex w-14 shrink-0 flex-col items-center gap-2 bg-[#0b50e9] py-3 text-white">
          <span className="mb-1 grid size-7 place-items-center bg-white/20 text-[10px] font-semibold">SO</span>
          <RailIcon label="Home" active>
            <path d="M4 10.5 10 5l6 5.5V17a1 1 0 0 1-1 1h-3.5v-4h-3V18H5a1 1 0 0 1-1-1z" />
          </RailIcon>
          <RailIcon label="Radar">
            <circle cx="10" cy="10" r="6" />
            <path d="M10 6v4l3 2" />
          </RailIcon>
          <RailIcon label="Pipeline">
            <path d="M4 6h12M4 10h12M4 14h8" />
          </RailIcon>
          <RailIcon label="Leads">
            <circle cx="8" cy="8" r="2" />
            <circle cx="13" cy="9" r="1.5" />
            <path d="M4 15c.6-2 2.2-3 4-3s3.4 1 4 3" />
          </RailIcon>
          <RailIcon label="Inbox">
            <path d="M4 7h12v8H4zM4 7l6 4 6-4" />
          </RailIcon>
        </aside>
        <div className="w-[1002px] shrink-0">
          <div className="flex h-11 items-center gap-2 border-b border-[#e6e8ec] bg-white px-3 text-[11px] text-[#617080]">
            <span className="w-[220px] shrink-0 border border-[#e6e8ec] px-2 py-1">Search (⌘K)</span>
            <span className="shrink-0 border border-[#e6e8ec] px-2 py-1 whitespace-nowrap">
              Nooraya Logistics
            </span>
            <span className="shrink-0 bg-[#fff1e8] px-2 py-1 whitespace-nowrap text-[#e57243]">
              Setup 7 / 8
            </span>
            <span className="shrink-0 border border-[#e6e8ec] px-2 py-1">EN</span>
            <span className="shrink-0 border border-[#e6e8ec] px-2 py-1">AR</span>
          </div>
          <div className="w-[720px] space-y-4 p-5">
            <div>
              <p className="text-base font-medium">Welcome back, Demo</p>
              <p className="text-xs text-[#8b93a0]">Tuesday, November 3, 2026</p>
            </div>
            <div className="border border-[#e6e8ec] bg-white p-4">
              <p className="text-[11px] font-semibold tracking-wide text-[#e57243]">
                BD & PARTNERSHIPS PILOT
              </p>
              <p className="mt-1 font-heading text-[22px] leading-7 tracking-[-0.02em]">
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
                <span className="mt-1 size-2 shrink-0 bg-[#e57243]" />
                <div>
                  <p className="text-sm">Pick Broad variants for Launch Nooraya Q4</p>
                  <p className="text-xs text-[#8b93a0]">
                    2 Broad campaigns have variants ready. Nothing sends until you launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RailIcon({
  label,
  active = false,
  children,
}: {
  label: string
  active?: boolean
  children: ReactNode
}) {
  return (
    <span
      title={label}
      className={`grid size-7 place-items-center ${active ? "bg-white text-[#0b50e9]" : "text-white/85"}`}
    >
      <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        {children}
      </svg>
    </span>
  )
}
