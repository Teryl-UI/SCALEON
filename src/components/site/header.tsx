"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCampaign } from "@/components/site/campaign"

const growthLinks = [
  { label: "From first signal", href: "#signal" },
  { label: "Operating view", href: "#system" },
  { label: "Compound pipeline", href: "#pipeline" },
  { label: "Long-term customer", href: "#growth" },
]

export function Header({
  className = "",
  showMenu = false,
}: {
  className?: string
  showMenu?: boolean
}) {
  const { setOpen } = useCampaign()
  const [menuOpen, setMenuOpen] = useState(false)
  const [growthOpen, setGrowthOpen] = useState(false)

  return (
    <header className={className}>
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-24">
          <a href="#top" className="flex items-center gap-[6.31px]">
            <Image
              src="/figma/logo-mark.svg"
              alt=""
              width={31.7598}
              height={42.5149}
              unoptimized
              priority
              className="shrink-0"
            />
            <span className="font-logo text-[19.971px] leading-[22.675px] font-normal text-[#fdfdfd]">
              Scaleon
            </span>
          </a>
          <nav className="hidden items-start gap-6 p-2.5 text-sm leading-5 lg:flex" aria-label="Primary">
            <a href="#system">Systems</a>
            <div
              className="relative"
              onMouseEnter={() => setGrowthOpen(true)}
              onMouseLeave={() => setGrowthOpen(false)}
            >
              <button
                type="button"
                className="flex items-center"
                aria-expanded={growthOpen}
                onClick={() => setGrowthOpen((value) => !value)}
              >
                Growth
                <Image src="/figma/caret.svg" alt="" width={12} height={12} />
              </button>
              {growthOpen ? (
                <div className="absolute top-full left-0 z-40 min-w-52 bg-white py-2 text-sm text-[#111] shadow-lg">
                  {growthLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-[#f4f6f8]"
                      onClick={() => setGrowthOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
            <a href="#proof">Proof</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <Button
          type="button"
          onClick={() => setOpen(true)}
          className="hidden h-full rounded-none bg-[#e8472a] px-3 text-sm leading-5 font-normal text-white hover:bg-[#d13d22] lg:inline-flex"
        >
          Start a Campaign
        </Button>
        {showMenu ? (
          <Button
            type="button"
            variant="ghost"
            className="rounded-none text-white hover:bg-white/10 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? "Close" : "Menu"}
          </Button>
        ) : null}
      </div>
      {showMenu && menuOpen ? (
        <nav id="mobile-nav" className="space-y-1 border-t border-white/15 px-4 py-3 text-sm lg:hidden">
          <a className="block py-2" href="#system" onClick={() => setMenuOpen(false)}>
            Systems
          </a>
          {growthLinks.map((item) => (
            <a
              key={item.href}
              className="block py-2 pl-3 text-white/80"
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="block py-2" href="#proof" onClick={() => setMenuOpen(false)}>
            Proof
          </a>
          <a className="block py-2" href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <Button
            type="button"
            onClick={() => {
              setMenuOpen(false)
              setOpen(true)
            }}
            className="mt-2 h-auto rounded-none bg-[#e8472a] px-3 py-3 text-sm font-normal text-white hover:bg-[#d13d22]"
          >
            Start a Campaign
          </Button>
        </nav>
      ) : null}
    </header>
  )
}
