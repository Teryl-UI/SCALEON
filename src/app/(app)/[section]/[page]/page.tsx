import type { Metadata } from "next"
import { SectionDetail, resolvePage } from "@/components/app/section-page"
import { sections } from "@/components/app/nav"

export function generateStaticParams() {
  return sections
    .filter((section) => section.id !== "overview")
    .flatMap((section) => section.pages.map((page) => ({ section: section.id, page: page.slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string; page: string }>
}): Promise<Metadata> {
  const { section: id, page: slug } = await params
  const { page } = resolvePage(id, slug)
  return { title: `${page.label} — Scaleon` }
}

export default async function NestedSectionPage({
  params,
}: {
  params: Promise<{ section: string; page: string }>
}) {
  const { section: id, page: slug } = await params
  const { section, page } = resolvePage(id, slug)
  return <SectionDetail section={section} page={page} />
}
