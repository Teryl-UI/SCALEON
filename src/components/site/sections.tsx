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
    <section id="system" className="overflow-x-clip bg-[#f9f9f7] px-4 py-16 sm:px-8 lg:px-6">
      <div className="mx-auto w-full max-w-[840px] text-center">
        <p className="text-base leading-5 font-semibold text-[#e57243]">FROM POSITION TO PIPELINE</p>
        <h2 className="mt-4 font-heading text-[clamp(36px,3.6vw,52px)] leading-[1.23] font-medium tracking-[-0.02em] text-[#111] lg:leading-[64px] lg:tracking-[-1.04px]">
          One operating view.
          <br />
          Four compounding moves.
        </h2>
        <p className="mx-auto mt-4 max-w-[824px] text-base leading-6 text-[#666]">
          Choose a stage to see how Scaleon turns a point of view into qualified
          commercial conversations.
        </p>
      </div>
      <div className="mx-auto mt-10 w-full max-w-[1242px] bg-white">
        <div className="grid sm:grid-cols-4" role="tablist">
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
        <div className="grid items-center gap-8 px-4 py-10 lg:min-h-[616px] lg:grid-cols-[485px_minmax(0,1fr)] lg:px-6 lg:py-16">
          <div className="flex flex-col gap-8 lg:gap-16">
            <p className="text-base leading-5 font-semibold text-[#e57243]">{stage.label}</p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-[clamp(32px,3.6vw,52px)] leading-[1.23] font-medium tracking-[-0.02em] text-[#111] lg:leading-[64px] lg:tracking-[-1.04px]">
                  {stage.title}
                </h3>
                <p className="text-base leading-6 text-[#666]">{stage.body}</p>
              </div>
              <div>
                <CampaignButton tone="blue" />
              </div>
            </div>
          </div>
          <StageVisual id={stage.id} />
        </div>
      </div>
    </section>
  )
}

function StageVisual({ id }: { id: (typeof stages)[number]["id"] }) {
  if (id === "build") return <BuildCard />
  if (id === "launch") {
    return (
      <Image
        src="/figma/stage/launch.png"
        alt=""
        width={607}
        height={592}
        className="mx-auto h-auto w-full max-w-[520px]"
      />
    )
  }
  if (id === "compound") {
    return (
      <Image
        src="/figma/stage/compound.png"
        alt=""
        width={570}
        height={642}
        className="ml-auto h-auto w-full max-w-[471px]"
      />
    )
  }
  return (
    <Image
      src="/figma/stage/position.png"
      alt=""
      width={580}
      height={490}
      className="ml-auto h-auto w-full max-w-[640px]"
    />
  )
}

function BuildCard() {
  return (
    <article
      className="relative ml-auto w-full max-w-[445px] overflow-hidden rounded-[32px] border border-[#e5e5e5] p-8 shadow-[0_3px_12px_rgba(7,84,234,0.08)]"
      style={{
        backgroundImage:
          "linear-gradient(211deg, rgb(137, 189, 255) 8%, rgba(255,255,255,0.2) 48%, #fff 78%)",
      }}
    >
      <p className="font-heading text-[28px] tracking-[0.28px] text-[#211d25]">BUILD</p>
      <div className="mt-6 flex items-center justify-between">
        <p className="font-heading text-2xl text-[#787b80]">Variant Card</p>
        <Image src="/figma/stage/toggle-on.svg" alt="" width={62} height={35} />
      </div>
      <p className="mt-5 font-heading text-lg tracking-[0.18px] text-[#211d25]">
        Heads of sales in the Gulf
      </p>
      <p className="font-heading text-[15px] text-[#aab0b8]">
        This week they are hiring. The proof is 14 meetingd
      </p>
      <div className="relative mt-5">
        <span className="absolute -top-3 right-2 z-[1] bg-[#0f5be5] px-[7px] py-[3px] text-[11px] leading-none text-white">
          +2 READY
        </span>
        <div className="flex h-14 items-center justify-between rounded-[11px] border-[1.4px] border-[#0754ea] bg-[#fafafa] px-4 shadow-[0_3px_6px_rgba(27,98,238,0.15)]">
          <p className="font-heading text-sm text-[#0c1017]">
            English <span className="text-[11px] text-[#abb2bc]">(Ready)</span>
          </p>
          <Image src="/figma/stage/switch-on.svg" alt="" width={35} height={20} />
        </div>
      </div>
      <div className="mt-3 flex h-14 items-center justify-between rounded-[11px] bg-[#fafafa] px-4 shadow-[0_3px_6px_rgba(133,145,167,0.15)]">
        <p className="font-heading text-sm text-[#0c1017]">
          Arabic <span className="text-[11px] text-[#abb2bc]">(جاهز)</span>
        </p>
        <Image src="/figma/stage/switch-off.svg" alt="" width={35} height={20} />
      </div>
      <div className="mt-8 w-full rounded-[9px] bg-gradient-to-r from-[#4796f8] to-[#4d85f1] py-3 text-center font-heading text-lg text-white shadow-[inset_0_4px_4px_rgba(255,255,255,0.16)]">
        Pick Broad variants
      </div>
    </article>
  )
}

export function PipelineSection() {
  return (
    <section id="pipeline" className="bg-white px-6 py-16 sm:px-10">
      <div className="mx-auto w-full max-w-[1376px] 2xl:max-w-[1760px]">
        <p className="text-base font-semibold text-[#e57243]">COMPOUNDING GROWTH</p>
        <h2 className="mt-4 font-heading text-[clamp(36px,3.61vw,76px)] leading-[1.23] font-medium tracking-[-0.02em]">
          <span className="text-[#111]">From first angle to</span>
          <br />
          <span className="text-[#c5c9d1]">compound pipeline</span>
        </h2>
        <Image
          src="/figma/stage/pipeline.png"
          alt="Real lead workspace for Nooraya Logistics, with filters, imported leads, and ledger cost."
          width={610}
          height={404}
          className="mt-10 h-auto w-full"
        />
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
