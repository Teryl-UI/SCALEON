"use client"

import { createContext, useContext, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

type CampaignContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
}

const CampaignContext = createContext<CampaignContextValue | null>(null)

export function CampaignProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <CampaignContext.Provider value={{ open, setOpen }}>
      {children}
      <CampaignDialog />
    </CampaignContext.Provider>
  )
}

export function useCampaign() {
  const value = useContext(CampaignContext)
  if (!value) {
    throw new Error("useCampaign must be used inside CampaignProvider")
  }
  return value
}

export function ArrowMark() {
  return (
    <span className="inline-flex size-[22px] items-center justify-center">
      <span className="-rotate-[120deg]">
        <Image src="/figma/arrow.svg" alt="" width={16} height={16} />
      </span>
    </span>
  )
}

export function CampaignButton({
  tone = "orange",
  withArrow = true,
  className = "",
}: {
  tone?: "orange" | "blue"
  withArrow?: boolean
  className?: string
}) {
  const { setOpen } = useCampaign()
  return (
    <Button
      type="button"
      onClick={() => setOpen(true)}
      className={`h-auto gap-2 rounded-none px-3 py-3.5 text-sm font-medium text-white ${
        tone === "blue"
          ? "bg-[#0b50e9] hover:bg-[#0846cc]"
          : "bg-[#e8472a] hover:bg-[#d13d22]"
      } ${className}`}
    >
      Start a Campaign
      {withArrow ? <ArrowMark /> : null}
    </Button>
  )
}

function CampaignDialog() {
  const { open, setOpen } = useCampaign()
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [error, setError] = useState("")
  const [sent, setSent] = useState<string | null>(null)

  function reset() {
    setEmail("")
    setCompany("")
    setError("")
    setSent(null)
  }

  function submit(event: React.FormEvent) {
    event.preventDefault()
    const value = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Enter a work email so we know where to open the workspace.")
      setSent(null)
      return
    }
    setError("")
    setSent(value)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) reset()
      }}
    >
      <DialogContent className="rounded-none border-[#e5e5e5] sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl tracking-[-0.02em]">
            Start a campaign
          </DialogTitle>
          <DialogDescription className="text-[#666]">
            Tell us where to send the first workspace. Positioning, research,
            outreach and follow-up stay in one system.
          </DialogDescription>
        </DialogHeader>
        {sent ? (
          <div className="space-y-4">
            <p className="text-sm leading-6 text-[#111]">
              Request received for <span className="font-medium">{sent}</span>
              {company.trim() ? ` at ${company.trim()}` : ""}. A Scaleon
              workspace is queued for the Gulf market you named.
            </p>
            <Button
              type="button"
              className="h-auto rounded-none bg-[#0b50e9] px-3 py-3 text-white hover:bg-[#0846cc]"
              onClick={() => setOpen(false)}
            >
              Back to the site
            </Button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-3">
            <label className="block space-y-1.5 text-sm text-[#111]">
              Work email
              <Input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="What’s your email?"
                className="h-12 rounded-none border-[#dfe3e8] px-3 text-sm"
                aria-invalid={error ? true : undefined}
              />
            </label>
            <label className="block space-y-1.5 text-sm text-[#111]">
              Company
              <Input
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder="Company name"
                className="h-12 rounded-none border-[#dfe3e8] px-3 text-sm"
              />
            </label>
            {error ? (
              <p className="text-sm text-[#e8472a]" role="alert">
                {error}
              </p>
            ) : null}
            <Button
              type="submit"
              className="h-auto w-full gap-2 rounded-none bg-[#e8472a] px-3 py-3.5 text-white hover:bg-[#d13d22]"
            >
              Start a Campaign
              <ArrowMark />
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
