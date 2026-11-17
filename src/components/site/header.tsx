"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCampaign } from "@/components/site/campaign"

const links = [
  { label: "Systems", href: "#system" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
]

const growthLinks = [
  { label: "From first signal", href: "#signal" },
  { label: "Operating view", href: "#system" },
  { label: "Compound pipeline", href: "#pipeline" },
  { label: "Long-term customer", href: "#growth" },
]

export function Header() {
  const { setOpen } = useCampaign()
  const [menuOpen, setMenuOpen] = useState(false)
  const [growthOpen, setGrowthOpen] = useState(false)

  return (
    <header className="relative z-30">
      <div className="flex items-center justify-between gap-4 px-4 py-4 text-white sm:px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3.5">
          <span className="size-6 bg-[#d9d9d9]" aria-hidden />
          <span className="font-heading text-lg leading-6">Scaleon</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm lg:flex" aria-label="Primary">
          <a href="#system" className="leading-5">
            Systems
          </a>
          <div
            className="relative"
            onMouseEnter={() => setGrowthOpen(true)}
            onMouseLeave={() => setGrowthOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 leading-5"
              aria-expanded={growthOpen}
              onClick={() => setGrowthOpen((value) => !value)}
            >
              Growth
              <Image src="/figma/caret.svg" alt="" width={12} height={12} />
            </button>
            {growthOpen ? (
              <div className="absolute top-full left-0 z-40 min-w-52 bg-white py-2 text-[#111] shadow-lg">
                {growthLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm hover:bg-[#f4f6f8]"
                    onClick={() => setGrowthOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          {links.slice(1).map((item) => (
            <a key={item.href} href={item.href} className="leading-5">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            onClick={() => setOpen(true)}
            className="hidden h-auto rounded-none bg-[#e8472a] px-3 py-3 text-sm font-normal text-white hover:bg-[#d13d22] lg:inline-flex"
          >
            Start a Campaign
          </Button>
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
        </div>
      </div>
      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="space-y-1 border-t border-white/15 px-4 py-3 text-sm text-white lg:hidden"
        >
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
            className="mt-2 h-auto rounded-none bg-[#e8472a] px-3 py-3 text-white hover:bg-[#d13d22]"
          >
            Start a Campaign
          </Button>
        </nav>
      ) : null}
    </header>
  )
}
