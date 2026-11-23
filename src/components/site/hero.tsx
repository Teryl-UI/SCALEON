"use client"

import Image from "next/image"
import { Header } from "@/components/site/header"
import { CampaignButton } from "@/components/site/campaign"
import { HeroDashboard } from "@/components/site/hero-dashboard"

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
    <div className={`overflow-hidden ${className}`}>
      <div className="h-full w-full [container-type:inline-size] lg:[container-type:normal]">
        <div className="[zoom:min(1,calc(100cqw/1058px))] lg:[zoom:1]">
          <HeroDashboard />
        </div>
      </div>
    </div>
  )
}
