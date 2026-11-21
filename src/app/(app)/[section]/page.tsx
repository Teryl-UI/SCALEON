import type { Metadata } from "next"
import { SectionDetail, resolvePage } from "@/components/app/section-page"
import { sections } from "@/components/app/nav"

export function generateStaticParams() {
  return sections.filter((section) => section.id !== "overview").map((section) => ({ section: section.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>
}): Promise<Metadata> {
  const { section: id } = await params
  const { page } = resolvePage(id)
  return { title: `${page.label} — Scaleon` }
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section: id } = await params
  const { section, page } = resolvePage(id)
  return <SectionDetail section={section} page={page} />
}
