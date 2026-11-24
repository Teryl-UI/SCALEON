"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { sectionFromPath, sections } from "./nav"

const overviewRail = [
  {
    href: "/overview",
    label: "Dashboard",
    icon: "/overview/icon-home.svg",
    idle: "/overview/icon-home-idle.svg",
    width: 18,
    height: 18,
  },
  {
    href: "/overview/radar",
    label: "Live radar",
    icon: "/overview/icon-radar-active.svg",
    idle: "/overview/icon-radar.svg",
    width: 16,
    height: 16,
  },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const section = sectionFromPath(pathname)
  const onOverview = section.id === "overview"

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-[#0c1017]">
      <header className="sticky top-0 z-30 border-y border-[#dde1e4] bg-white">
        <div className="flex items-center gap-4 px-4 py-4 lg:gap-8 lg:px-6">
          <Link href="/overview" className="flex shrink-0 items-center gap-2">
            <Image
              src="/overview/logo.svg"
              alt=""
              width={31.7598}
              height={42.5149}
              unoptimized
              priority
            />
            <span className="font-logo text-[19.971px] leading-[22.675px] font-normal text-[#0c1017]">
              Scaleon
            </span>
          </Link>

          <nav className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
            {sections.map((item) => {
              const active = item.id === section.id
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm leading-[18px] ${
                    active
                      ? "border-b-2 border-[#e57243] pb-1.5 font-semibold text-[#0c1017]"
                      : "font-medium text-[#667386]"
                  }`}
                >
                  <Image
                    src={item.id === "overview" && !active ? "/overview/nav-overview-idle.svg" : item.icon}
                    alt=""
                    width={item.iconWidth}
                    height={item.iconHeight}
                    unoptimized
                  />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <IconButton label="Search" icon="/overview/icon-search.svg" width={17} height={17} />
            <span className="relative">
              <IconButton label="Notifications" icon="/overview/icon-bell.svg" width={18} height={18} />
              <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-[#ff650b]" />
            </span>
            <span className="ml-1 flex items-center gap-1">
              <span className="size-[18px] overflow-hidden rounded-full">
                <Image src="/overview/avatar.png" alt="" width={18} height={18} className="size-[18px] object-cover" />
              </span>
              <Image src="/overview/icon-chevron.svg" alt="" width={14} height={14} unoptimized />
            </span>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-73px)]">
        <aside className="hidden w-[62px] shrink-0 border-r border-[#dde1e4] bg-white px-4 py-2 md:block">
          <div className="flex flex-col gap-2.5">
            {onOverview
              ? overviewRail.map((item) => {
                  const active = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-label={item.label}
                      aria-current={active ? "page" : undefined}
                      className={`grid size-[30px] place-items-center rounded-md border bg-white ${
                        active ? "border-[#e57243]" : "border-[#e1e2e7]"
                      }`}
                    >
                      <Image src={active ? item.icon : item.idle} alt="" width={item.width} height={item.height} unoptimized />
                    </Link>
                  )
                })
              : section.pages.map((page) => {
                  const active = pathname === page.href || (pathname === section.href && page === section.pages[0])
                  return (
                    <Link
                      key={page.href}
                      href={page.href}
                      aria-label={page.label}
                      title={page.label}
                      className={`grid size-[30px] place-items-center rounded-md border text-[11px] font-semibold ${
                        active
                          ? "border-[#e57243] text-[#e57243]"
                          : "border-[#e1e2e7] text-[#667386]"
                      }`}
                    >
                      {page.label.slice(0, 1)}
                    </Link>
                  )
                })}
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          {onOverview ? (
            <div className="flex gap-2 border-b border-[#dde1e4] bg-white px-4 py-2 md:hidden">
              {overviewRail.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm ${
                      active ? "border-[#e57243] font-semibold" : "border-[#e1e2e7] text-[#667386]"
                    }`}
                  >
                    <Image src={active ? item.icon : item.idle} alt="" width={item.width} height={item.height} unoptimized />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </div>
  )
}

function IconButton({
  label,
  icon,
  width,
  height,
}: {
  label: string
  icon: string
  width: number
  height: number
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="grid size-7 place-items-center rounded-[5px] border border-[#e1e2e7] bg-white"
    >
      <Image src={icon} alt="" width={width} height={height} unoptimized />
    </button>
  )
}
