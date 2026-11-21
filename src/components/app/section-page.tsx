import Link from "next/link"
import { notFound } from "next/navigation"
import { sections, type AppPage, type AppSection } from "./nav"

function findSection(id: string) {
  return sections.find((section) => section.id === id)
}

export function SectionDetail({ section, page }: { section: AppSection; page: AppPage }) {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <p className="text-xs leading-4 font-semibold tracking-wide text-[#e57243] uppercase">{section.label}</p>
      <h1 className="mt-2 font-heading text-[28px] leading-8 font-semibold tracking-tight sm:text-[32px]">{page.label}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#667386]">{page.detail}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {section.pages.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block rounded-2xl border bg-white p-5 ${
                item.href === page.href ? "border-[#e57243]" : "border-[#e6e8ee]"
              }`}
            >
              <p className="text-sm font-semibold">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-[#667386]">{item.detail}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function resolvePage(sectionId: string, slug?: string) {
  const section = findSection(sectionId)
  if (!section || section.id === "overview") notFound()
  if (!slug) return { section, page: section.pages[0] }
  const page = section.pages.find((item) => item.slug === slug)
  if (!page) notFound()
  return { section, page }
}
